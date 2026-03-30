const { ensureBackendReady } = require("../../../../lib/server/ensure-backend.cjs");
const {
  uploadImage,
} = require("../../../../lib/server/controllers/upload.controller.cjs");

export async function POST(request) {
  await ensureBackendReady();

  const formData = await request.formData();
  const image = formData.get("image");

  if (!image) {
    return Response.json({ message: "Image file is required" }, { status: 400 });
  }

  const arrayBuffer = await image.arrayBuffer();

  const req = {
    file: {
      originalname: image.name,
      mimetype: image.type,
      size: image.size,
      buffer: Buffer.from(arrayBuffer),
    },
  };

  const res = {
    statusCode: 200,
    payload: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(data) {
      this.payload = data;
      return data;
    },
  };

  await uploadImage(req, res);

  return Response.json(res.payload, { status: res.statusCode });
}

