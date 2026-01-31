import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.resolve(root, "dist");

const routes = ["/", "/vision"];

async function prerender() {
  const { render } = await import(path.resolve(dist, "server/entry-server.js"));
  const template = fs.readFileSync(path.resolve(dist, "index.html"), "utf-8");

  for (const url of routes) {
    const appHtml = render(url);
    const html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    if (url === "/") {
      fs.writeFileSync(path.resolve(dist, "index.html"), html);
    } else {
      const dir = path.resolve(dist, url.slice(1));
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.resolve(dir, "index.html"), html);
    }

    console.log(`  prerendered: ${url}`);
  }

  // Clean up server bundle
  fs.rmSync(path.resolve(dist, "server"), { recursive: true, force: true });

  console.log("prerender complete");
}

prerender();
