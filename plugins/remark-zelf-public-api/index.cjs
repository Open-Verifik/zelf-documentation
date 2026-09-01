const { visit } = require("unist-util-visit");
const { getZelfPublicApi } = require("../../config/zelf-public-api.cjs");

const ORIGIN_TOKEN = "{{ZELF_PUBLIC_API_ORIGIN}}";
const HOST_TOKEN = "{{ZELF_PUBLIC_API_HOST}}";
const V4_ORIGIN_TOKEN = "{{ZELF_V4_API_ORIGIN}}";
const V4_HOST_TOKEN = "{{ZELF_V4_API_HOST}}";

function replaceTokens(value, tokens) {
	if (typeof value !== "string" || value === "") return value;
	return Object.entries(tokens).reduce((next, [token, replacement]) => next.split(token).join(replacement), value);
}

/**
 * Expands placeholders in Markdown so example URLs come from config at build time.
 */
function remarkZelfPublicApi() {
	const { origin, hostname, v4Origin, v4Hostname } = getZelfPublicApi();
	const tokens = {
		[V4_ORIGIN_TOKEN]: v4Origin,
		[V4_HOST_TOKEN]: v4Hostname,
		[ORIGIN_TOKEN]: origin,
		[HOST_TOKEN]: hostname,
	};

	return (tree) => {
		visit(tree, "text", (node) => {
			node.value = replaceTokens(node.value, tokens);
		});
		visit(tree, "code", (node) => {
			node.value = replaceTokens(node.value, tokens);
		});
		visit(tree, "inlineCode", (node) => {
			node.value = replaceTokens(node.value, tokens);
		});
		visit(tree, "link", (node) => {
			node.url = replaceTokens(node.url, tokens);
		});
		visit(tree, "definition", (node) => {
			node.url = replaceTokens(node.url, tokens);
		});
		visit(tree, "image", (node) => {
			node.url = replaceTokens(node.url, tokens);
		});
		visit(tree, "html", (node) => {
			node.value = replaceTokens(node.value, tokens);
		});
	};
}

module.exports = remarkZelfPublicApi;
