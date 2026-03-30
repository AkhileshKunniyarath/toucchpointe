const { ensureBackendReady } = require("../../../../lib/server/ensure-backend.cjs");
const {
  getSetting,
  upsertSetting,
  deleteSetting,
} = require("../../../../lib/server/controllers/settings.controller.cjs");
const { runJsonHandler } = require("../../../../lib/server/next-route.cjs");

export async function GET(request, { params }) {
  await ensureBackendReady();
  return runJsonHandler(request, params, getSetting);
}

export async function POST(request, { params }) {
  await ensureBackendReady();
  return runJsonHandler(request, params, upsertSetting);
}

export async function DELETE(request, { params }) {
  await ensureBackendReady();
  return runJsonHandler(request, params, deleteSetting);
}
