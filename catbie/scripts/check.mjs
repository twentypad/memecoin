import { readFileSync, existsSync } from "node:fs";
const html = readFileSync("index.html", "utf8");
const required = [
  "Catbie ($CATBIE) — Pretty on Base",
  "0xb20000000000000000000053314B402614946ca7",
  "https://basedbot.app/token/base/0xb20000000000000000000053314B402614946ca7",
  "https://twentypad.com",
  "Meme and entertainment only. Contracts are unaudited. Not financial advice."
];
const missing = required.filter((value) => !html.includes(value));
const assets = ["assets/catbie-logo.png", "assets/catbie-logo-scarf.png", "assets/catbie-logo-hearts.png", "assets/catbie-x-header.png", "assets/catbie-og.png"].filter((path) => !existsSync(path));
if (missing.length || assets.length) {
  console.error("Repository check failed.");
  if (missing.length) console.error("Missing HTML values:", missing);
  if (assets.length) console.error("Missing assets:", assets);
  process.exit(1);
}
console.log("Catbie repository check passed.");
