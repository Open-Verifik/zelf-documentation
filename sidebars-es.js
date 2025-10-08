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
			items: ["ocr-engines/escaneo-estudio", "ocr-engines/escaneo-prompt"],
		},
		{
			type: "category",
			label: "VALIDACIÓN DE IDENTIDAD",
			collapsible: false,
			items: [
				{ type: "doc", id: "identity/argentina", label: "🇦🇷 Argentina" },
				{ type: "doc", id: "identity/bolivia", label: "🇧🇴 Bolivia" },
				{ type: "doc", id: "identity/brazil", label: "🇧🇷 Brasil" },
				{ type: "doc", id: "identity/canada", label: "🇨🇦 Canadá" },
				{ type: "doc", id: "identity/chile", label: "🇨🇱 Chile" },
				{ type: "doc", id: "identity/colombia", label: "🇨🇴 Ciudadano Colombiano" },
				{ type: "doc", id: "identity/costa-rica", label: "🇨🇷 Costa Rica" },
				{ type: "doc", id: "identity/dominican-republic", label: "🇩🇴 República Dominicana" },
				{ type: "doc", id: "identity/ecuador", label: "🇪🇨 Ecuador" },
				{ type: "doc", id: "identity/el-salvador", label: "🇸🇻 El Salvador" },
				{ type: "doc", id: "identity/guatemala", label: "🇬🇹 Guatemala" },
				{ type: "doc", id: "identity/honduras", label: "🇭🇳 Honduras" },
				{ type: "doc", id: "identity/mexico", label: "🇲🇽 México" },
				{ type: "doc", id: "identity/panama", label: "🇵🇦 Panamá" },
				{ type: "doc", id: "identity/paraguay", label: "🇵🇾 Paraguay" },
				{ type: "doc", id: "identity/peru", label: "🇵🇪 Perú" },
				{ type: "doc", id: "identity/spain-citizen", label: "🇪🇸 Ciudadano Español" },
				{ type: "doc", id: "identity/united-states", label: "🇺🇸 Estados Unidos" },
				{ type: "doc", id: "identity/uruguay", label: "🇺🇾 Uruguay" },
				{ type: "doc", id: "identity/venezuela", label: "🇻🇪 Venezuela" },
			],
		},
		{
			type: "category",
			label: "VALIDACIÓN EMPRESARIAL",
			collapsible: false,
			items: [
				{
					type: "doc",
					id: "validacion-empresarial/argentina",
					label: "🇦🇷 Argentina",
				},
				{
					type: "doc",
					id: "validacion-empresarial/bolivia",
					label: "🇧🇴 Bolivia",
				},
				{
					type: "doc",
					id: "validacion-empresarial/brazil",
					label: "🇧🇷 Brasil",
				},
				{
					type: "doc",
					id: "validacion-empresarial/canada",
					label: "🇨🇦 Canadá",
				},
				{
					type: "doc",
					id: "validacion-empresarial/chilean",
					label: "🇨🇱 Chile",
				},
				{
					type: "doc",
					id: "validacion-empresarial/colombia-informacion-empresarial-rues",
					label: "🇨🇴 Colombia - Información Empresarial RUES",
				},
				{
					type: "doc",
					id: "validacion-empresarial/colombia-registro-empresarial-rues",
					label: "🇨🇴 Colombia - Registro Empresarial RUES",
				},
				{
					type: "doc",
					id: "validacion-empresarial/colombia-verificacion-dian",
					label: "🇨🇴 Colombia - Verificación DIAN",
				},
				{
					type: "doc",
					id: "validacion-empresarial/colombia-verificacion-facturador-legal",
					label: "🇨🇴 Colombia - Verificación Facturador Legal",
				},
				{
					type: "doc",
					id: "validacion-empresarial/colombia-validacion-empresarial-rues-completa-v3",
					label: "🇨🇴 Validación Empresarial RUES",
				},
				{
					type: "doc",
					id: "validacion-empresarial/costa-rica-empresarial",
					label: "🇨🇷 Costa Rica",
				},
				{
					type: "doc",
					id: "validacion-empresarial/mexico",
					label: "🇲🇽 México",
				},
				{
					type: "doc",
					id: "validacion-empresarial/panama",
					label: "🇵🇦 Panamá",
				},
				{
					type: "doc",
					id: "validacion-empresarial/paraguay",
					label: "🇵🇾 Paraguay",
				},
				{
					type: "doc",
					id: "validacion-empresarial/peru",
					label: "🇵🇪 Perú",
				},
				{
					type: "doc",
					id: "validacion-empresarial/spain",
					label: "🇪🇸 España",
				},
				{
					type: "doc",
					id: "validacion-empresarial/united-states",
					label: "🇺🇸 Estados Unidos",
				},
			],
		},
		{
			type: "category",
			label: "VALIDACIÓN DE LICENCIAS DE MANEJO",
			collapsible: false,
			items: [
				{
					type: "doc",
					id: "validaciones-vehiculos/licencia-de-manejo-british-columbia",
					label: "🇨🇦 Licencia de Manejo British Columbia",
				},
				{
					type: "doc",
					id: "validaciones-vehiculos/licencia-de-manejo-florida",
					label: "🇺🇸 Licencia de Manejo Florida",
				},
				{
					type: "doc",
					id: "validaciones-vehiculos/licencia-de-manejo-kansas",
					label: "🇺🇸 Licencia de Manejo Kansas",
				},
				{
					type: "doc",
					id: "validaciones-vehiculos/licencia-de-manejo-ontario",
					label: "🇨🇦 Licencia de Manejo Ontario",
				},
			],
		},
		{
			type: "category",
			label: "VALIDACIÓN DE VEHÍCULOS",
			collapsible: false,
			items: [
				{
					type: "doc",
					id: "validacion-vehiculos/argentina",
					label: "🇦🇷 Argentina",
				},
				{
					type: "doc",
					id: "validacion-vehiculos/bolivia",
					label: "🇧🇴 Bolivia",
				},
				{
					type: "doc",
					id: "validacion-vehiculos/brazil",
					label: "🇧🇷 Brasil",
				},
				{
					type: "doc",
					id: "validacion-vehiculos/chile",
					label: "🇨🇱 Chile",
				},
				{
					type: "category",
					label: "🇨🇴 Colombia",
					collapsible: true,
					items: [
						{
							type: "doc",
							id: "validacion-vehiculos/colombia",
							label: "Resumen",
						},
						{
							type: "doc",
							id: "validacion-vehiculos/colombia/impuestos-bogota",
							label: "Impuestos en Bogotá",
						},
						{
							type: "doc",
							id: "validacion-vehiculos/colombia/multas-vehiculos-bogota",
							label: "Verificación de Multas de Vehículos",
						},
						{
							type: "doc",
							id: "validacion-vehiculos/colombia/accidentalidad-vehiculos-bogota",
							label: "Accidentalidad de Vehículos",
						},
						{
							type: "doc",
							id: "validacion-vehiculos/colombia/pico-y-placa-bogota",
							label: "Pico y Placa",
						},
						{
							type: "doc",
							id: "validacion-vehiculos/colombia/valores-vehiculos-por-placa-fasecolda",
							label: "Valores de Vehículos por Placa",
						},
						{
							type: "doc",
							id: "validacion-vehiculos/colombia/vehiculo-por-codigo-fasecolda",
							label: "Vehículo por Código",
						},
						{
							type: "doc",
							id: "validacion-vehiculos/colombia/verificacion-siniestros-fasecolda",
							label: "Verificación de Siniestros",
						},
						{
							type: "doc",
							id: "validacion-vehiculos/colombia/licencia-conducir-runt",
							label: "Licencia de Conducir",
						},
						{
							type: "doc",
							id: "validacion-vehiculos/colombia/registros-vehiculos-por-placa-runt",
							label: "Registros de Vehículos por Placa",
						},
						{
							type: "doc",
							id: "validacion-vehiculos/colombia/registros-vehiculos-por-placa-simplificado-runt",
							label: "Registros de Vehículos por Placa (Simplificado)",
						},
						{
							type: "doc",
							id: "validacion-vehiculos/colombia/registros-vehiculos-por-vin-runt",
							label: "Registros de Vehículos por VIN",
						},
						{
							type: "doc",
							id: "validacion-vehiculos/colombia/soat-rtm-vehiculo-runt",
							label: "SOAT y RTM del Vehículo",
						},
						{
							type: "doc",
							id: "validacion-vehiculos/colombia/multas-simit",
							label: "SIMIT - Multas",
						},
						{
							type: "doc",
							id: "validacion-vehiculos/colombia/acuerdos-simit",
							label: "SIMIT - Acuerdos",
						},
						{
							type: "doc",
							id: "validacion-vehiculos/colombia/resoluciones-simit",
							label: "SIMIT - Resoluciones",
						},
						{
							type: "doc",
							id: "validacion-vehiculos/colombia/consulta-general-por-documento-simit",
							label: "Consulta General por Documento",
						},
						{
							type: "doc",
							id: "validacion-vehiculos/colombia/consulta-general-por-placa-simit",
							label: "Consulta General por Placa",
						},
						{
							type: "doc",
							id: "validacion-vehiculos/colombia/registros-entrenamiento-sisconmp",
							label: "Registros de Entrenamiento SISCONMP",
						},
					],
				},
				{
					type: "doc",
					id: "validacion-vehiculos/costa-rica",
					label: "🇨🇷 Costa Rica",
				},
				{
					type: "doc",
					id: "validacion-vehiculos/ecuador",
					label: "🇪🇨 Ecuador",
				},
				{
					type: "doc",
					id: "validacion-vehiculos/mexico",
					label: "🇲🇽 México",
				},
				{
					type: "doc",
					id: "validacion-vehiculos/paraguay",
					label: "🇵🇾 Paraguay",
				},
				{
					type: "doc",
					id: "validacion-vehiculos/peru",
					label: "🇵🇪 Perú",
				},
				{
					type: "doc",
					id: "validacion-vehiculos/estados-unidos",
					label: "🇺🇸 Estados Unidos",
				},
			],
		},
		{
			type: "category",
			label: "VERIFIK LLC",
			collapsible: false,
			items: [
				"legal/politica-privacidad",
				"legal/terminos-y-condiciones",
				"legal/acuerdo-de-niveles-de-servicio",
				"legal/verifik-for-enterprises-hub-esp",
				"legal/smartcheck-terminos-y-condiciones-de-uso",
			],
		},
		// Secciones restantes se añadirán conforme se migren desde EN a ES
	],
};

export default sidebars;
