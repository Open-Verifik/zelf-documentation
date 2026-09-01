/**
 * Public API origins for docs examples (expanded at build time).
 * Edit config/zelf-public-api.config.json:
 * - publicApiOrigin → Tags, licenses, and other v3.6 surfaces
 * - publicApiV4Origin → Zelf ID (`/api/zelf-ids`) on the v4 host
 */
const fs = require("fs");
const path = require("path");

const CONFIG_PATH = path.join(__dirname, "zelf-public-api.config.json");
const FALLBACK_ORIGIN = "https://v3.zelf.world";
const FALLBACK_V4_ORIGIN = "https://v4.zelf.world";

const readOrigin = (data, key, fallback) => {
	const o = data?.[key];
	if (typeof o === "string" && o.trim() !== "") {
		return o.trim();
	}
	return fallback;
};

const hostnameOf = (origin, fallbackOrigin) => {
	try {
		return new URL(origin).hostname;
	} catch {
		return new URL(fallbackOrigin).hostname;
	}
};

function getZelfPublicApi() {
	let data = {};
	try {
		data = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
	} catch {
		data = {};
	}

	const origin = readOrigin(data, "publicApiOrigin", FALLBACK_ORIGIN);
	const v4Origin = readOrigin(data, "publicApiV4Origin", FALLBACK_V4_ORIGIN);

	return {
		origin,
		hostname: hostnameOf(origin, FALLBACK_ORIGIN),
		v4Origin,
		v4Hostname: hostnameOf(v4Origin, FALLBACK_V4_ORIGIN),
	};
}

module.exports = {
	CONFIG_PATH,
	FALLBACK_ORIGIN,
	FALLBACK_V4_ORIGIN,
	getZelfPublicApi,
};
