// /api/family — gestión de la "familia" (datos compartidos del bebé).
//
//   POST   crea una familia + tokens de invitación (lo dispara el personal de
//          salud al habilitar una cuenta).  body: { family, roles: ['mama','papa'] }
//          → { familyId, invites: [{ role, token }] }
//   GET    ?id=<familyId>  lee los datos de la familia (usado por el polling de
//          sincronización entre mamá y papá). → { familyId, data, updatedAt }
//   PUT    body: { familyId, data }  reemplaza los datos compartidos (lo dispara
//          cualquiera de los padres al editar). → { ok: true, updatedAt }

import crypto from 'node:crypto';
import { sql, ensureSchema } from '../lib/db.js';

function token(bytes = 16) {
  return crypto.randomBytes(bytes).toString('base64url');
}

export default async function handler(req, res) {
  try {
    await ensureSchema();

    if (req.method === 'POST') {
      const { family = {}, roles = ['mama'] } = req.body || {};
      const cleanRoles = (Array.isArray(roles) ? roles : [roles])
        .filter(r => r === 'mama' || r === 'papa');
      if (!cleanRoles.length) return res.status(400).json({ error: 'roles inválidos' });

      const familyId = `fam_${token(9)}`;
      await sql`INSERT INTO families (id, data) VALUES (${familyId}, ${JSON.stringify(family)}::jsonb)`;

      const invites = [];
      for (const role of cleanRoles) {
        const t = token(16);
        await sql`INSERT INTO invites (token, family_id, role) VALUES (${t}, ${familyId}, ${role})`;
        invites.push({ role, token: t });
      }
      return res.status(200).json({ familyId, invites });
    }

    if (req.method === 'GET') {
      const id = req.query.id;
      if (!id) return res.status(400).json({ error: 'falta id' });
      const rows = await sql`SELECT data, updated_at FROM families WHERE id = ${id}`;
      if (!rows.length) return res.status(404).json({ error: 'familia no encontrada' });
      return res.status(200).json({ familyId: id, data: rows[0].data, updatedAt: rows[0].updated_at });
    }

    if (req.method === 'PUT') {
      const { familyId, data } = req.body || {};
      if (!familyId) return res.status(400).json({ error: 'falta familyId' });
      const rows = await sql`
        UPDATE families SET data = ${JSON.stringify(data || {})}::jsonb, updated_at = now()
        WHERE id = ${familyId}
        RETURNING updated_at`;
      if (!rows.length) return res.status(404).json({ error: 'familia no encontrada' });
      return res.status(200).json({ ok: true, updatedAt: rows[0].updated_at });
    }

    return res.status(405).json({ error: 'método no permitido' });
  } catch (e) {
    return res.status(500).json({ error: String(e?.message || e) });
  }
}
