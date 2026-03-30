const path = require("path");
const crypto = require("crypto");
const {
  getMinioClient,
  ensureMinioBucket,
  buildObjectUrl,
} = require("../config/minio.cjs");

async function uploadImage(req, res) {
  if (!req.file) {
    return res.status(400).json({ message: "Image file is required" });
  }

  const client = getMinioClient();
  if (!client) {
    return res.status(500).json({ message: "MinIO is not configured" });
  }

  await ensureMinioBucket();

  const extension = path.extname(req.file.originalname || "").toLowerCase();
  const safeExtension = extension || ".bin";
  const objectName = `images/${Date.now()}-${crypto.randomUUID()}${safeExtension}`;
  const bucket = process.env.MINIO_BUCKET || "touchpoint-media";

  await client.putObject(
    bucket,
    objectName,
    req.file.buffer,
    req.file.size,
    {
      "Content-Type": req.file.mimetype,
    }
  );

  res.json({
    objectName,
    url: buildObjectUrl(objectName),
    mimeType: req.file.mimetype,
    size: req.file.size,
  });
}

module.exports = { uploadImage };
