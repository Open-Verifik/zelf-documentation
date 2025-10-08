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
			label: "Bienvenido a Verifik",
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
			label: "CLIENTES",
			collapsible: false,
			items: ["clients/informacion-cuenta"],
		},
		{
			type: "category",
			label: "SERVICIOS",
			collapsible: false,
			items: [
				"smartcheck/verificacion-inteligente",
				"smartaccess/acceso-inteligente",
				"access/acceso",
				"smartenroll/inscripcion-inteligente",
				"enroll/inscripcion",
				"smart-scan/escaneo-inteligente",
			],
		},
		{
			type: "category",
			label: "BIOMETRICS API'S",
			collapsible: false,
			items: [
				"biometrics/deteccion-vitalidad",
				{
					type: "category",
					label: "Comparación Facial",
					collapsible: true,
					items: ["biometrics/comparar", "biometrics/comparar-en-vivo", "biometrics/comparar-con-deteccion-vitalidad"],
				},
				{
					type: "category",
					label: "Búsqueda Facial",
					collapsible: true,
					items: ["biometrics/buscar", "biometrics/buscar-cara-en-vivo", "biometrics/buscar-usuario-activo", "biometrics/buscar-recortes"],
				},
			],
		},
		{
			type: "category",
			label: "SCAN DOCS API'S",
			collapsible: false,
			items: ["scandocs/escaneo-estudio", "scandocs/escaneo-prompt"],
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
