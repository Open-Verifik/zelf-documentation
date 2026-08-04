/**
 * Injects hreflang <link rel="alternate"> tags into built HTML from
 * static/hreflang-manifest.json so the client bundle does not import the
 * full 262KB manifest.
 */

const HREFLANG_BY_KEY = {
	en: "en",
	es: "es",
	fr: "fr",
	pt: "pt",
	ko: "ko",
	ja: "ja",
	zh: "zh-Hans",
};

/**
 * @param {Record<string, string>} cluster
 */
const buildHreflangTags = (cluster) => {
	const tags = [];
	for (const [langKey, url] of Object.entries(cluster)) {
		const code = HREFLANG_BY_KEY[langKey];
		if (!code || !url) continue;
		tags.push(`<link rel="alternate" hrefLang="${code}" href="${url}" />`);
	}
	if (cluster.en) {
		tags.push(`<link rel="alternate" hrefLang="x-default" href="${cluster.en}" />`);
	}
	return tags.join("\n    ");
};

/**
 * @param {string} siteUrl
 * @param {string} filePath relative to outDir using /
 * @param {boolean} trailingSlash
 */
const filePathToPermalink = (siteUrl, filePath, trailingSlash) => {
	const base = siteUrl.replace(/\/$/, "");
	let pathname = `/${filePath.replace(/\\/g, "/")}`;
	if (pathname.endsWith("/index.html")) {
		pathname = pathname.slice(0, -"index.html".length);
	} else if (pathname.endsWith(".html")) {
		pathname = pathname.slice(0, -".html".length);
		if (trailingSlash && !pathname.endsWith("/")) pathname = `${pathname}/`;
	}
	if (trailingSlash && pathname !== "/" && !pathname.endsWith("/")) {
		pathname = `${pathname}/`;
	}
	return `${base}${pathname}`;
};

function pluginHreflangInject() {
	return {
		name: "docusaurus-plugin-hreflang-inject",
		async postBuild({ siteConfig, outDir }) {
			const fs = require("fs");
			const path = require("path");

			const manifestPath = path.join(outDir, "hreflang-manifest.json");
			if (!fs.existsSync(manifestPath)) {
				console.warn("hreflang-inject: hreflang-manifest.json not found in outDir, skipping");
				return;
			}

			const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
			const siteUrl = siteConfig.url || manifest.siteUrl || "https://docs.verifik.co";
			const trailingSlash = siteConfig.trailingSlash !== false;
			const { permalinkToKey, clusters } = manifest;

			if (!permalinkToKey || !clusters) {
				console.warn("hreflang-inject: manifest missing permalinkToKey/clusters, skipping");
				return;
			}

			const walkHtml = (dir) => {
				const files = [];
				for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
					const full = path.join(dir, entry.name);
					if (entry.isDirectory()) {
						files.push(...walkHtml(full));
						continue;
					}
					if (entry.name.endsWith(".html")) files.push(full);
				}
				return files;
			};

			let injected = 0;
			for (const abs of walkHtml(outDir)) {
				const rel = path.relative(outDir, abs);
				const permalink = filePathToPermalink(siteUrl, rel, trailingSlash);
				const logicalKey = permalinkToKey[permalink];
				if (!logicalKey) continue;

				const cluster = clusters[logicalKey];
				if (!cluster || Object.keys(cluster).length < 2) continue;

				const tags = buildHreflangTags(cluster);
				if (!tags) continue;

				let html = fs.readFileSync(abs, "utf8");
				if (html.includes('rel="alternate"') && html.includes("hreflang")) {
					continue;
				}

				const marker = "</head>";
				const idx = html.indexOf(marker);
				if (idx === -1) continue;

				html = `${html.slice(0, idx)}    ${tags}\n  ${html.slice(idx)}`;
				fs.writeFileSync(abs, html, "utf8");
				injected += 1;
			}

			console.log(`✓ Injected hreflang into ${injected} HTML pages`);
		},
	};
}

module.exports = pluginHreflangInject;
