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
				"empezar/como-funciona",
				"empezar/documento-tecnico",
				"empezar/zelf-proofs-vs-otros",
				"empezar/preservacion-privacidad",
				"empezar/casos-uso",
				"empezar/descargas",
			],
		},
		{
			type: "category",
			label: "TUTORIALES",
			collapsible: false,
			items: ["tutorials/como-crear-tu-cuenta"],
		},
		{
			type: "category",
			label: "Cuentas Zelf",
			collapsible: false,
			items: [
				"api/cuentas/verificar-cuenta",
				"api/cuentas/crear-cuenta",
				"api/cuentas/autenticar",
				"api/cuentas/actualizar-cuenta",
				"api/cuentas/cambiar-contrasena",
				"api/cuentas/eliminar-cuenta",
			],
		},
		{
			type: "category",
			label: "Documentación API",
			collapsible: false,
			items: [
				{
					type: "category",
					label: "Etiquetas (Tags)",
					collapsible: true,
					items: [
						"api/etiquetas/buscar-etiqueta",
						"api/etiquetas/buscar-etiqueta-por-dominio",
						"api/etiquetas/vista-previa-etiqueta",
						"api/etiquetas/alquilar-etiqueta",
						"api/etiquetas/recuperar-etiqueta",
						"api/etiquetas/alquiler-etiqueta-offline",
						"api/etiquetas/vista-previa-zelfproof",
						"api/etiquetas/descifrar-etiqueta",
					],
				},
				{
					type: "category",
					label: "API de Licencias",
					collapsible: true,
					items: [
						"api/licencias/obtener-licencias",
						"api/licencias/obtener-mi-licencia",
						"api/licencias/crear-licencia",
						"api/licencias/eliminar-licencia",
					],
				},
			],
		},
		{
			type: "category",
			label: "Versión Offline",
			collapsible: false,
			items: ["zns/offline/descifrado"],
		},
		// {
		// 	type: "category",
		// 	label: "Versión Online",
		// 	collapsible: false,
		// 	items: [
		// 		"zns/online/obtener-clave-publica",
		// 		"zns/online/crear-sesion",
		// 		"zns/online/alquilar-nombre-zelf",
		// 		"zns/online/vista-previa-zelfname",
		// 		"zns/online/descifrar-zelfname",
		// 	],
		// },
		{
			type: "category",
			label: "Arweave - AR.IO",
			collapsible: false,
			items: ["zns/arweave/almacenamiento-permanente", "zns/arweave/arns"],
		},
		"zns/diseno-figma",
		{
			type: "category",
			label: "Funciones",
			collapsible: false,
			items: ["funciones/crear-zelfproof", "funciones/crear-qr-zelfproof", "funciones/descifrar-zelfproof", "funciones/vista-previa-zelfproof"],
		},
		{
			type: "category",
			label: "Integraciones",
			collapsible: false,
			items: [
				"integraciones/avalanche",
				// "integraciones/blockdag", // oculto del sidebar
				// {
				// 	type: "category",
				// 	label: "Hitos BlockDAG",
				// 	collapsible: true,
				// 	items: [
				// 		"integraciones/blockdag-milestone-one",
				// 		"integraciones/blockdag-milestone-two",
				// 		"integraciones/blockdag-milestone-three",
				// 		"integraciones/blockdag-milestone-four",
				// 	],
				// },
			],
		},
		{
			type: "category",
			label: "Legal de Zelf",
			collapsible: false,
			items: ["legal/miembros-equipo", "legal/terminos-uso", "legal/politica-privacidad"],
		},
		{
			type: "category",
			label: "Airdrop",
			collapsible: false,
			items: ["airdrop/reglas-airdrop", "airdrop/precios-por-dominio"],
		},
		"verificar-socios",
		{
			type: "category",
			label: "Hoja de Ruta",
			collapsible: false,
			items: ["hoja-ruta/q1-2025", "hoja-ruta/q2-2025", "hoja-ruta/q3-2025", "hoja-ruta/q4-2025"],
		},
	],
};

export default sidebars;
