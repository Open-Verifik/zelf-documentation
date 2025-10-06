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
			label: "AUTENTICACIÓN",
			collapsible: false,
			items: [
				"autenticacion/api-key-acceso-por-email",
				"autenticacion/api-key-acceso-por-telefono",
				"autenticacion/renovar-tu-token-jwt",
				"autenticacion/crear-nuevo-token-y-revocar-tokens-previos",
			],
		},
		{
			type: "category",
			label: "VALIDACIÓN EMPRESARIAL",
			collapsible: false,
			items: [
				{ type: "doc", id: "validacion-empresarial/argentina", label: "🇦🇷 Argentina" },
				{ type: "doc", id: "validacion-empresarial/bolivia", label: "🇧🇴 Bolivia" },
				{ type: "doc", id: "validacion-empresarial/brazil", label: "🇧🇷 Brasil" },
			],
		},
		// Secciones restantes se añadirán conforme se migren desde EN a ES
	],
};

export default sidebars;
