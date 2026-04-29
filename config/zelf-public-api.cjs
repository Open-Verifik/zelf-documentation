/**
 * Public API origin for docs examples (expanded from {{ZELF_PUBLIC_API_ORIGIN}} at build time).
 * Edit config/zelf-public-api.config.json to change the hostname for all generated examples.
 */
const fs = require("fs");
const path = require("path");

const CONFIG_PATH = path.join(__dirname, "zelf-public-api.config.json");
const FALLBACK_ORIGIN = "https://v3.zelf.world";

function loadPublicApiOrigin() {
	try {
		const raw = fs.readFileSync(CONFIG_PATH, "utf8");
		const data = JSON.parse(raw);
		const o = data.publicApiOrigin;
		if (typeof o === "string" && o.trim() !== "") {
			return o.trim();
		}
	} catch {
		// Missing or invalid JSON — use fallback
	}
	return FALLBACK_ORIGIN;
}

function getZelfPublicApi() {
	const origin = loadPublicApiOrigin();
	let hostname;
	try {
		hostname = new URL(origin).hostname;
	} catch {
		hostname = new URL(FALLBACK_ORIGIN).hostname;
	}
	return { origin, hostname };
}

module.exports = {
	CONFIG_PATH,
	FALLBACK_ORIGIN,
	getZelfPublicApi,
};
