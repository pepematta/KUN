// Acceso a la base Postgres (Neon, integración nativa de Vercel). La cadena de
// conexión (DATABASE_URL) la inyecta Vercel automáticamente al crear la base en
// el dashboard — nunca va al repo.
//
// Modelo de datos:
//   families(id, data jsonb, created_at, updated_at)
//     data = blob con la misma forma que el authData del cliente: info general
//     del bebé (birthDate, gestWeeks, gestDays), children, babyStatus, peso, etc.
//     Es lo que se sincroniza entre la cuenta de mamá y la de papá.
//   invites(token, family_id, role, used, used_at, created_at)
//     tokens de un solo uso para crear la cuenta de cada padre.

import { neon } from '@neondatabase/serverless';

// El driver serverless de Neon: sql`...` devuelve directamente el array de filas.
const sql = neon(process.env.DATABASE_URL || process.env.POSTGRES_URL);

let schemaReady = false;

// Crea las tablas si no existen (migración perezosa en el primer request).
export async function ensureSchema() {
  if (schemaReady) return;
  await sql`CREATE TABLE IF NOT EXISTS families (
    id text PRIMARY KEY,
    data jsonb NOT NULL DEFAULT '{}'::jsonb,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
  )`;
  await sql`CREATE TABLE IF NOT EXISTS invites (
    token text PRIMARY KEY,
    family_id text NOT NULL REFERENCES families(id) ON DELETE CASCADE,
    role text NOT NULL,
    used boolean NOT NULL DEFAULT false,
    used_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT now()
  )`;
  schemaReady = true;
}

export { sql };
