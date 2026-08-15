import http from "node:http";
import site from "./worker/static-site.js";

const server = http.createServer(async (req, res) => {
  const response = await site.fetch(new Request(`http://127.0.0.1:4173${req.url}`));
  res.writeHead(response.status, Object.fromEntries(response.headers));
  res.end(Buffer.from(await response.arrayBuffer()));
});

server.listen(4173, "127.0.0.1", () => console.log("Local URL: http://127.0.0.1:4173"));

