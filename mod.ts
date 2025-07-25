import regexpIP from "npm:ip-regex@^5.0.0";
import tlds from "npm:tlds@^1.259.0" with { type: "json" };
function sortTLDs(input: readonly string[]): string[] {
	return Array.from(input).sort((a: string, b: string): number => {
		return (b.length - a.length);
	});
}
const regexpPartAuth = "(?:\\S+(?::\\S*)?@)?";
const regexpPartDomain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
const regexpPartHost = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
const regexpPartIPv4: string = regexpIP.v4().source;
const regexpPartIPv6: string = regexpIP.v6().source;
const regexpPartPort = "(?::\\d{2,5})?";
const regexpPartTLDStrict = "(?:[a-z\\u00a1-\\uffff]{2,})";
export interface URLRegExpOptions {
	/**
	 * Whether to accept apostrophes (`'`).
	 * @default {false}
	 */
	apostrophes?: boolean;
	/**
	 * Whether to match the URLs with HTTP basic authentication.
	 * @default {false}
	 */
	auth?: boolean;
	/**
	 * Custom TLDs.
	 */
	tldsCustom?: readonly string[];
	/**
	 * Whether to use the default TLDs.
	 * @default {true}
	 */
	tldsDefault?: boolean;
	/**
	 * Whether to match exactly.
	 * @default {false}
	 */
	exact?: boolean;
	/**
	 * Whether to accept IPv4 in the URL hostname portion.
	 * @default {true}
	 */
	ipv4?: boolean;
	/**
	 * Whether to accept IPv6 in the URL hostname portion.
	 * @default {true}
	 */
	ipv6?: boolean;
	/**
	 * Whether to accept localhost in the URL hostname portion.
	 * @default {true}
	 */
	localhost?: boolean;
	/**
	 * Whether to accept closing parenthesis.
	 * @default {false}
	 */
	parens?: boolean;
	/**
	 * Whether to force the URLs start with a valid protocol or `www`.
	 * @default {false}
	 */
	strict?: boolean;
	/**
	 * Whether to accept trailing periods (`.`).
	 * @default {false}
	 */
	trailingPeriod?: boolean;
}
/**
 * Get the regular expression source for the URLs.
 * @param {URLRegExpOptions} [options] Options.
 * @returns {string}
 */
export function urlRegExpSource(options: URLRegExpOptions = {}): string {
	const {
		apostrophes = false,
		auth = false,
		exact = false,
		ipv4 = true,
		ipv6 = true,
		localhost = true,
		parens = false,
		strict = false,
		tldsCustom = [],
		tldsDefault = true,
		trailingPeriod = false
	}: URLRegExpOptions = options;
	const partProtocol = `(?:(?:[a-z]+:)?//)${strict ? "" : "?"}`;
	if (tldsCustom.length === 0 && !tldsDefault) {
		throw new Error(`TLDs are not defined!`);
	}
	const tldsFinal: string[] = [...tldsCustom];
	if (tldsDefault) {
		tldsFinal.push(...tlds);
	}
	const partTLD = `(?:\\.${strict ? regexpPartTLDStrict : `(?:${sortTLDs(tldsFinal).join("|")})`})${trailingPeriod ? "\\.?" : ""}`;
	let partDisallowCharacters: string = "\\s\"";
	if (!parens) {
		partDisallowCharacters += "\\)";
	}
	if (!apostrophes) {
		partDisallowCharacters += "'";
	}
	const partPath: string = trailingPeriod
		? `(?:[/?#][^${partDisallowCharacters}]*)?`
		: `(?:(?:[/?#][^${partDisallowCharacters}]*[^${partDisallowCharacters}.?!])|[/])?`;
	let result: string = `(?:${partProtocol}|www\\.)${auth ? regexpPartAuth : ""}(?:`;
	if (localhost) {
		result += "localhost|";
	}
	if (ipv4) {
		result += `${regexpPartIPv4}|`;
	}
	if (ipv6) {
		result += `${regexpPartIPv6}|`;
	}
	result += `${regexpPartHost}${regexpPartDomain}${partTLD})${regexpPartPort}${partPath}`;
	return (exact ? `^${result}$` : result);
}
/**
 * Get the regular expression for the URLs.
 * @param {URLRegExpOptions} [options={}] Options.
 * @returns {RegExp}
 */
export function urlRegExp(options: URLRegExpOptions = {}): RegExp {
	const { exact = false }: URLRegExpOptions = options;
	return new RegExp(urlRegExpSource(options), exact ? "i" : "ig");
}
export default urlRegExp;
