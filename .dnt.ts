import {
	getMetadataFromConfig,
	invokeDenoNodeJSTransformer
} from "DNT";
const configJSR = await getMetadataFromConfig("jsr.jsonc");
await invokeDenoNodeJSTransformer({
	copyAssets: [
		"LICENSE.md",
		"README.md"
	],
	entrypoints: configJSR.getExports(),
	fixInjectedImports: true,
	generateDeclarationMap: true,
	mappings: {
		"https://esm.sh/ip-regex@^5.0.0": {
			name: "ip-regex",
			version: "^5.0.0"
		},
		"https://esm.sh/tlds@^1.255.0": {
			name: "tlds",
			version: "^1.255.0"
		}
	},
	metadata: {
		name: configJSR.getName(),
		version: configJSR.getVersion(),
		description: "A module for URL regular expression.",
		keywords: [
			"regexp",
			"regular-expression",
			"url"
		],
		homepage: "https://github.com/hugoalh/url-regexp-es#readme",
		bugs: {
			url: "https://github.com/hugoalh/url-regexp-es/issues"
		},
		license: "MIT",
		author: "hugoalh",
		repository: {
			type: "git",
			url: "git+https://github.com/hugoalh/url-regexp-es.git"
		},
		scripts: {
		},
		engines: {
			node: ">=16.13.0"
		},
		private: false,
		publishConfig: {
			access: "public"
		}
	},
	outputDirectory: "dist/npm",
	outputDirectoryPreEmpty: true
});
