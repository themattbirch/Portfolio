// server.mjs

import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { handler as ssr } from "./dist/server/entry.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// static assets built to dist/client
app.use(express.static(join(__dirname, "dist/client")));

app.all("*", (req, res, next) => ssr(req, res, next));

const port = process.env.PORT || 3000; // Render injects PORT
app.listen(port, "0.0.0.0", () =>
  console.log(`✓ Astro listening on 0.0.0.0:${port}`)
);
