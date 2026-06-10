import { existsSync, cpSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Copy resume PDF to dist/client if it exists in public
const resumeSrc = join(__dirname, "..", "public", "dinesh_rao_resume.pdf");
const distClient = join(__dirname, "..", "dist", "client");

if (existsSync(resumeSrc)) {
  cpSync(resumeSrc, join(distClient, "dinesh_rao_resume.pdf"));
  console.log("✓ Copied resume PDF");
}

console.log("✓ Build completed for Vercel deployment");