const { connectToDatabase } = require("./config/database.cjs");
const {
  ensureMinioBucket,
  getMinioClient,
} = require("./config/minio.cjs");
const { ensureDefaultSiteSettings } = require("./seed-site-settings.cjs");

let bootPromise = null;

function ensureBackendReady() {
  if (!bootPromise) {
    bootPromise = (async () => {
      await connectToDatabase();
      await ensureDefaultSiteSettings();

      if (getMinioClient()) {
        await ensureMinioBucket();
      }
    })();
  }

  return bootPromise;
}

module.exports = { ensureBackendReady };
