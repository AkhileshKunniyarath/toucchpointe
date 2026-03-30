function createJsonResponseRecorder() {
  let statusCode = 200;
  let payload;
  let headers = {};

  return {
    status(code) {
      statusCode = code;
      return this;
    },
    setHeader(name, value) {
      headers[name] = value;
    },
    json(data) {
      payload = data;
      return data;
    },
    finalize() {
      return Response.json(payload, {
        status: statusCode,
        headers,
      });
    },
  };
}

async function buildRequest(request, params = {}, extra = {}) {
  let body = undefined;
  const url = new URL(request.url);

  if (request.method !== "GET" && request.method !== "HEAD" && !extra.skipJsonBody) {
    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      body = await request.json();
    }
  }

  const headers = Object.fromEntries(request.headers.entries());
  const query = Object.fromEntries(url.searchParams.entries());

  return {
    method: request.method,
    headers,
    query,
    params,
    body,
    ...extra,
  };
}

async function runJsonHandler(request, params, handler, extra = {}) {
  const req = await buildRequest(request, params, extra);
  const res = createJsonResponseRecorder();

  await handler(req, res);
  return res.finalize();
}

module.exports = {
  runJsonHandler,
};
