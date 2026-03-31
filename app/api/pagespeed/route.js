export const dynamic = "force-dynamic";
const { ensureBackendReady } = require("../../../lib/server/ensure-backend.cjs");
const {
  getPageSpeedAnalysis,
} = require("../../../lib/server/controllers/pagespeed.controller.cjs");
const { runJsonHandler } = require("../../../lib/server/next-route.cjs");

export async function GET(request) {
  await ensureBackendReady();
  return runJsonHandler(request, {}, getPageSpeedAnalysis);
}

