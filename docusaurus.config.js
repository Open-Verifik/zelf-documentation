// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// i18n enabled: en (default), es

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "ZELF Docs",
	tagline: "YOUR FACE IS YOUR KEY",
	favicon: "img/favicon.ico",

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	// Set the production url of your site here
	url: "https://docs.zelf.world",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",
	trailingSlash: false,

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "zelf", // Usually your GitHub org/user name.
	projectName: "zelf-documentation", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Internationalization configuration
	i18n: {
		defaultLocale: "en",
		locales: ["en", "es"],
		localeConfigs: {
			en: {
				label: "English",
				direction: "ltr",
				htmlLang: "en-US",
				calendar: "gregory",
			},
			es: {
				label: "Español",
				direction: "ltr",
				htmlLang: "es-ES",
				calendar: "gregory",
			},
		},
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: "./sidebars.js",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: false, // Disable blog
				theme: {
					customCss: "./src/css/custom.css",
				},
				sitemap: {
					changefreq: "weekly",
					priority: 0.5,
					filename: "sitemap.xml",
					ignorePatterns: ["**/tags/**", "**/page/**"],
				},
			}),
		],
	],

	plugins: [
		[
			"@docusaurus/plugin-content-docs",
			{
				id: "docs-es",
				path: "docs-es",
				routeBasePath: "docs-es",
				sidebarPath: "./sidebars-es.js",
				editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
			},
		],
		function injectJsonLd() {
			return {
				name: "inject-jsonld",
				injectHtmlTags() {
					const org = {
						"@context": "https://schema.org",
						"@type": "Organization",
						name: "ZELF",
						url: "https://docs.zelf.world",
						logo: "https://docs.zelf.world/img/logo.svg",
						sameAs: ["https://github.com/zelf"],
					};
					const website = {
						"@context": "https://schema.org",
						"@type": "WebSite",
						name: "ZELF Docs",
						url: "https://docs.zelf.world",
						potentialAction: {
							"@type": "SearchAction",
							target: "https://docs.zelf.world/search?q={search_term_string}",
							"query-input": "required name=search_term_string",
						},
					};
					const breadcrumbsRuntime = `
					(function(){
					  try{
					    var loc = window.location;
					    var parts = loc.pathname.replace(/^\/+|\/+$/g,'').split('/');
					    var itemList = [];
					    var pathAcc = '';
					    for(var i=0;i<parts.length;i++){
					      pathAcc += '/' + parts[i];
					      itemList.push({
					        '@type':'ListItem',
					        position:i+1,
					        name: decodeURIComponent(parts[i]),
					        item: loc.origin + pathAcc
					      });
					    }
					    var data = {
					      '@context':'https://schema.org',
					      '@type':'BreadcrumbList',
					      itemListElement:itemList
					    };
					    var s=document.createElement('script');
					    s.type='application/ld+json';
					    s.text=JSON.stringify(data);
					    document.head.appendChild(s);
					  }catch(e){}
					})();`;
					return {
						headTags: [
							{ tagName: "script", attributes: { type: "application/ld+json" }, innerHTML: JSON.stringify(org) },
							{ tagName: "script", attributes: { type: "application/ld+json" }, innerHTML: JSON.stringify(website) },
							{ tagName: "script", attributes: {}, innerHTML: breadcrumbsRuntime },
						],
					};
				},
			};
		},
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Social sharing image (use PNG for widest crawler compatibility)
			image: "img/social-card.png",
			metadata: [
				{ name: "description", content: "ZELF documentation: biometrics-secured identity, ZNS, and developer guides." },
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:site", content: "@zelfworld" },
			],
			navbar: {
				title: "ZELF Docs",
				logo: {
					alt: "ZELF Docs",
					src: "/img/zelflogo.png",
				},
				items: [
					{
						type: "dropdown",
						label: "Language",
						position: "left",
						items: [
							{
								type: "doc",
								docId: "intro",
								label: "English",
							},
							{
								type: "doc",
								docId: "intro",
								docsPluginId: "docs-es",
								label: "Español",
							},
						],
					},
					{
						type: "search",
						position: "right",
					},
					{
						to: "https://github.com/zelf/zelf-documentation",
						label: "GitHub",
						position: "right",
					},
				],
				hideOnScroll: false,
				style: "primary",
			},
			footer: {
				style: "light",
				links: [],
				copyright: `Copyright © ${new Date().getFullYear()} ZELF. All rights reserved.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
			sidebar: {
				hideable: true,
			},
			docs: {
				sidebar: {
					hideable: true,
				},
			},
		}),
};

export default config;
