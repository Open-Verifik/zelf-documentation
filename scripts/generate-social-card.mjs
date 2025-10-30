import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
	const inputSvg = path.resolve(__dirname, "../static/img/social-card.svg");
	const outputPng = path.resolve(__dirname, "../static/img/social-card.png");

	await sharp(inputSvg, { density: 300 }).png({ quality: 90 }).resize(1200, 630, { fit: "cover" }).toFile(outputPng);

	console.log(`Generated: ${outputPng}`);
}

main().catch((err) => {
	console.error("Failed to generate social card PNG:", err);
	process.exit(1);
});
