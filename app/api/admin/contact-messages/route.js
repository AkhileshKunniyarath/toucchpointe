const { ensureBackendReady } = require("../../../../lib/server/ensure-backend.cjs");
const {
  getContactMessages,
} = require("../../../../lib/server/controllers/contact.controller.cjs");
const { runJsonHandler } = require("../../../../lib/server/next-route.cjs");

export async function GET(request) {
  await ensureBackendReady();
  return runJsonHandler(request, {}, getContactMessages);
}

