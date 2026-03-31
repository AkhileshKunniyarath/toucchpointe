export const dynamic = "force-dynamic";
const { ensureBackendReady } = require("../../../lib/server/ensure-backend.cjs");
const { me } = require("../../../lib/server/controllers/auth.controller.cjs");
const {
  authenticate,
} = require("../../../lib/server/middleware/authenticate.cjs");
const { runJsonHandler } = require("../../../lib/server/next-route.cjs");

export async function GET(request) {
  await ensureBackendReady();
  const url = new URL(request.url);

  const req = {
    method: "GET",
    headers: Object.fromEntries(request.headers.entries()),
    query: Object.fromEntries(url.searchParams.entries()),
    params: {},
  };
  const res = {
    statusCode: 200,
    payload: null,
    headers: {},
    status(code) {
      this.statusCode = code;
      return this;
    },
    setHeader(name, value) {
      this.headers[name] = value;
    },
    json(data) {
      this.payload = data;
      return data;
    },
  };

  await new Promise((resolve) => {
    authenticate(req, res, () => {
      me(req, res);
      resolve();
    });
    if (res.payload) {
      resolve();
    }
  });

  return Response.json(res.payload, {
    status: res.statusCode,
    headers: res.headers,
  });
}
