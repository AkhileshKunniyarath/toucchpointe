const { connectToDatabase } = require("../lib/server/config/database.cjs");

async function main() {
  await connectToDatabase();
  console.log("MongoDB connection successful");
  process.exit(0);
}

main().catch((error) => {
  console.error("MongoDB connection failed:", error.message);
  process.exit(1);
});
