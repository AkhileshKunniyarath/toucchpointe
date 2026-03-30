const { connectToDatabase } = require("../lib/server/config/database.cjs");
const { ensureDefaultSiteSettings } = require("../lib/server/seed-site-settings.cjs");

async function main() {
  await connectToDatabase();
  await ensureDefaultSiteSettings();
  console.log("Default site settings ensured");
  process.exit(0);
}

main().catch((error) => {
  console.error("Failed to seed site settings:", error.message);
  process.exit(1);
});
