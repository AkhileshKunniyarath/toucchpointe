const { ensureBackendReady } = require("../../../lib/server/ensure-backend.cjs");
const { register } = require("../../../lib/server/controllers/auth.controller.cjs");
const { runJsonHandler } = require("../../../lib/server/next-route.cjs");

export async function POST(request) {
  await ensureBackendReady();
  return runJsonHandler(request, {}, register);
}

