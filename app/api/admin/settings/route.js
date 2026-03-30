const { ensureBackendReady } = require("../../../../lib/server/ensure-backend.cjs");
const {
  getSettingsInventory,
} = require("../../../../lib/server/controllers/settings.controller.cjs");
const { runJsonHandler } = require("../../../../lib/server/next-route.cjs");

export async function GET(request) {
  await ensureBackendReady();
  return runJsonHandler(request, {}, getSettingsInventory);
}

