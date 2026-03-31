export const dynamic = "force-dynamic";
const { ensureBackendReady } = require("../../../lib/server/ensure-backend.cjs");

export async function GET() {
  await ensureBackendReady();
  return Response.json({ ok: true });
}

