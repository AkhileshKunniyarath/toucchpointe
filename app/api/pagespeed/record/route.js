const { ensureBackendReady } = require("../../../../lib/server/ensure-backend.cjs");
const {
  recordPageSpeedReport,
} = require("../../../../lib/server/controllers/pagespeed.controller.cjs");
const { runJsonHandler } = require("../../../../lib/server/next-route.cjs");

export async function POST(request) {
  await ensureBackendReady();
  return runJsonHandler(request, {}, recordPageSpeedReport);
}

