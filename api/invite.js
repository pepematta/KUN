// /api/invite — validación y canje de los tokens de un solo uso.
//
//   GET   ?token=<token>  valida sin consumir (para prellenar el onboarding).
//         → 200 { token, role, familyId, data }   válido y sin usar
//         → 409 { error: 'used' }                  ya fue utilizado
//         → 404 { error: 'invalid' }               no existe
//   POST  body: { token }  canjea (consume) el token de forma atómica.
//         → 200 { familyId, role, data }           éxito
//         → 409 { error: 'used_or_invalid' }       ya usado o inexistente

import { sql, ensureSchema } from '../lib/db.js';

export default async function handler(req, res) {
  try {
    await ensureSchema();

    if (req.method === 'GET') {
      const t = req.query.token;
      if (!t) return res.status(400).json({ error: 'falta token' });
      const rows = await sql`
        SELECT i.token, i.role, i.used, f.id AS family_id, f.data
        FROM invites i JOIN families f ON f.id = i.family_id
        WHERE i.token = ${t}`;
      if (!rows.length) return res.status(404).json({ error: 'invalid' });
      const r = rows[0];
      if (r.used) return res.status(409).json({ error: 'used' });
      return res.status(200).json({ token: r.token, role: r.role, familyId: r.family_id, data: r.data });
    }

    if (req.method === 'POST') {
      const { token } = req.body || {};
      if (!token) return res.status(400).json({ error: 'falta token' });
      // Canje atómico: solo tiene éxito si el token aún no estaba usado.
      // Esto garantiza el "un solo uso" incluso ante dos requests simultáneos.
      const rows = await sql`
        UPDATE invites SET used = true, used_at = now()
        WHERE token = ${token} AND used = false
        RETURNING family_id, role`;
      if (!rows.length) return res.status(409).json({ error: 'used_or_invalid' });
      const { family_id: familyId, role } = rows[0];
      const fam = await sql`SELECT data FROM families WHERE id = ${familyId}`;
      return res.status(200).json({ familyId, role, data: fam[0]?.data || {} });
    }

    return res.status(405).json({ error: 'método no permitido' });
  } catch (e) {
    return res.status(500).json({ error: String(e?.message || e) });
  }
}
