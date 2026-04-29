const { visit } = require("unist-util-visit");
const { getZelfPublicApi } = require("../../config/zelf-public-api.cjs");

const ORIGIN_TOKEN = "{{ZELF_PUBLIC_API_ORIGIN}}";
const HOST_TOKEN = "{{ZELF_PUBLIC_API_HOST}}";

function replaceTokens(value, origin, hostname) {
	if (typeof value !== "string" || value === "") return value;
	return value.split(ORIGIN_TOKEN).join(origin).split(HOST_TOKEN).join(hostname);
}

/**
 * Expands placeholders in Markdown so example URLs come from config/env at build time.
 */
function remarkZelfPublicApi() {
	const { origin, hostname } = getZelfPublicApi();

	return (tree) => {
		visit(tree, "text", (node) => {
			node.value = replaceTokens(node.value, origin, hostname);
		});
		visit(tree, "code", (node) => {
			node.value = replaceTokens(node.value, origin, hostname);
		});
		visit(tree, "inlineCode", (node) => {
			node.value = replaceTokens(node.value, origin, hostname);
		});
		visit(tree, "link", (node) => {
			node.url = replaceTokens(node.url, origin, hostname);
		});
		visit(tree, "definition", (node) => {
			node.url = replaceTokens(node.url, origin, hostname);
		});
		visit(tree, "image", (node) => {
			node.url = replaceTokens(node.url, origin, hostname);
		});
		visit(tree, "html", (node) => {
			node.value = replaceTokens(node.value, origin, hostname);
		});
	};
}

module.exports = remarkZelfPublicApi;
