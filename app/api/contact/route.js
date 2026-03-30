const { ensureBackendReady } = require("../../../lib/server/ensure-backend.cjs");
const {
  createContactMessage,
} = require("../../../lib/server/controllers/contact.controller.cjs");
const { runJsonHandler } = require("../../../lib/server/next-route.cjs");

export async function POST(request) {
  await ensureBackendReady();
  return runJsonHandler(request, {}, createContactMessage);
}

