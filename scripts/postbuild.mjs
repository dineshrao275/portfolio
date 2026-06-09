import { readdirSync, writeFileSync, existsSync, cpSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distClient = join(__dirname, "..", "dist", "client");

// Find the generated asset files
const assetsDir = join(distClient, "assets");
const files = readdirSync(assetsDir);

const jsFiles = files.filter((f) => f.endsWith(".js"));
const cssFiles = files.filter((f) => f.endsWith(".css"));

const scriptTags = jsFiles
  .map((f) => `<script type="module" crossorigin src="assets/${f}"></script>`)
  .join("\n    ");

const linkTags = cssFiles
  .map((f) => `<link rel="stylesheet" crossorigin href="assets/${f}" />`)
  .join("\n    ");

const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dinesh Rao — PHP Laravel Developer</title>
    <meta name="description" content="Portfolio of Dinesh Rao, PHP Laravel Developer crafting scalable web apps and APIs." />
    <meta name="author" content="Dinesh Rao" />
    <meta property="og:title" content="Dinesh Rao — PHP Laravel Developer" />
    <meta property="og:description" content="Portfolio of Dinesh Rao, PHP Laravel Developer crafting scalable web apps and APIs." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    ${linkTags}
  </head>
  <body>
    ${scriptTags}
  </body>
</html>
`;

writeFileSync(join(distClient, "index.html"), indexHtml);
console.log("✓ Created index.html");

// Copy resume PDF to dist/client if it exists in public
const resumeSrc = join(__dirname, "..", "public", "dinesh_rao_resume.pdf");
if (existsSync(resumeSrc)) {
  cpSync(resumeSrc, join(distClient, "dinesh_rao_resume.pdf"));
  console.log("✓ Copied resume PDF");
}

// 404.html for SPA fallback on GitHub Pages
writeFileSync(
  join(distClient, "404.html"),
  indexHtml,
);
console.log("✓ Created 404.html");

// .nojekyll to prevent Jekyll processing
writeFileSync(join(distClient, ".nojekyll"), "");
console.log("✓ Created .nojekyll");

console.log("\nDone. Deploy dist/client/ to GitHub Pages.");
