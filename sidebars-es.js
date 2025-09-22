// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Spanish sidebar configuration for Zelf Documentation
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
	// Spanish sidebar structure
	tutorialSidebar: [
		{
			type: "doc",
			id: "intro",
			label: "Bienvenido a Zelf World",
		},
		{
			type: "category",
			label: "Comenzando",
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
			label: "Versión Offline",
			collapsible: false,
			items: ["zns/offline/decryption"],
		},
		{
			type: "category",
			label: "Versión Online",
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
			label: "Funciones",
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
			label: "Integraciones",
			collapsible: false,
			items: ["integrations/avalanche"],
		},
		{
			type: "category",
			label: "Legal de Zelf",
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
			label: "Hoja de Ruta",
			collapsible: false,
			items: ["roadmap/q1-2025", "roadmap/q2-2025", "roadmap/q3-2025", "roadmap/q4-2025"],
		},
	],
};

export default sidebars;
