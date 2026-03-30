const Minio = require("minio");

let minioClient = null;
let minioReady = false;

function getMinioClient() {
  if (minioClient) {
    return minioClient;
  }

  const {
    MINIO_ENDPOINT,
    MINIO_PORT,
    MINIO_USE_SSL,
    MINIO_ACCESS_KEY,
    MINIO_SECRET_KEY,
  } = process.env;

  if (!MINIO_ENDPOINT || !MINIO_ACCESS_KEY || !MINIO_SECRET_KEY) {
    return null;
  }

  minioClient = new Minio.Client({
    endPoint: MINIO_ENDPOINT,
    port: MINIO_PORT ? Number(MINIO_PORT) : 9000,
    useSSL: MINIO_USE_SSL === "true",
    accessKey: MINIO_ACCESS_KEY,
    secretKey: MINIO_SECRET_KEY,
  });

  return minioClient;
}

async function ensureMinioBucket() {
  if (minioReady) {
    return;
  }

  const client = getMinioClient();
  const bucket = process.env.MINIO_BUCKET || "touchpoint-media";

  if (!client) {
    throw new Error("MinIO is not configured");
  }

  const exists = await client.bucketExists(bucket);
  if (!exists) {
    await client.makeBucket(bucket, process.env.MINIO_REGION || "us-east-1");
  }

  minioReady = true;
}

function buildObjectUrl(objectName) {
  const {
    MINIO_PUBLIC_URL,
    MINIO_ENDPOINT,
    MINIO_PORT,
    MINIO_USE_SSL,
  } = process.env;
  const bucket = process.env.MINIO_BUCKET || "touchpoint-media";

  if (MINIO_PUBLIC_URL) {
    return `${MINIO_PUBLIC_URL.replace(/\/$/, "")}/${bucket}/${objectName}`;
  }

  const protocol = MINIO_USE_SSL === "true" ? "https" : "http";
  const portPart = MINIO_PORT ? `:${MINIO_PORT}` : "";
  return `${protocol}://${MINIO_ENDPOINT}${portPart}/${bucket}/${objectName}`;
}

module.exports = {
  getMinioClient,
  ensureMinioBucket,
  buildObjectUrl,
};
