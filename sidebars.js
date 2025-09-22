// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
	// Complete sidebar structure matching GitBook organization
	tutorialSidebar: [
		{
			type: "doc",
			id: "intro",
			label: "Welcome to Zelf World",
		},
		{
			type: "category",
			label: "Getting Started",
			collapsible: false,
			items: [
				"getting-started/how-it-works",
				"getting-started/lite-paper",
				"getting-started/zelf-proofs-vs-others",
				"getting-started/privacy-preserving",
				"getting-started/use-cases",
				"getting-started/downloads",
			],
		},
		{
			type: "category",
			label: "Offline Version",
			collapsible: false,
			items: ["zns/offline/decryption"],
		},
		{
			type: "category",
			label: "Online Version",
			collapsible: false,
			items: [
				"zns/online/retrieve-public-key",
				"zns/online/create-session",
				"zns/online/lease-a-zelf-name",
				"zns/online/preview-zelfname",
				"zns/online/decrypt-zelfname",
			],
		},
		{
			type: "category",
			label: "Arweave - AR.IO",
			collapsible: false,
			items: ["zns/arweave/permanent-storage", "zns/arweave/arns"],
		},
		"zns/figma-design",
		{
			type: "category",
			label: "Functions",
			collapsible: false,
			items: [
				"functions/authentication",
				"functions/create-zelfproof",
				"functions/create-qr-zelfproof",
				"functions/decrypt-zelfproof",
				"functions/preview-zelfproof",
			],
		},
		{
			type: "category",
			label: "Integrations",
			collapsible: false,
			items: ["integrations/avalanche", "integrations/blockdag"],
		},
		{
			type: "category",
			label: "Zelf Legal",
			collapsible: false,
			items: ["legal/team-members", "legal/terms-of-use", "legal/privacy-policy"],
		},
		{
			type: "category",
			label: "Airdrop",
			collapsible: false,
			items: ["airdrop/airdrop-rules", "airdrop/airdrop-rules-es", "airdrop/pricing-per-domain"],
		},
		"verify-partners",
		{
			type: "category",
			label: "Roadmap",
			collapsible: false,
			items: ["roadmap/q1-2025", "roadmap/q2-2025", "roadmap/q3-2025", "roadmap/q4-2025"],
		},
	],
};

export default sidebars;
