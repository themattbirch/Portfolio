// server.mjs
import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const distDir = join(__dirname, "dist");

// 1. Serve all static files from dist
app.use(express.static(distDir));

// 2. For client-side routing, return index.html on every other route
app.use((_req, res) => {
  res.sendFile(join(distDir, "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () =>
  console.log(`✓ Static server listening on 0.0.0.0:${port}`)
);
