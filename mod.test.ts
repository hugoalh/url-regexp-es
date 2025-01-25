import { assert } from "STD/assert/assert";
import { urlRegExp } from "./mod.ts";
const matchExactly = urlRegExp({
	auth: true,
	exact: true
});
Deno.test("Exactly 1", { permissions: "none" }, () => {
	assert(matchExactly.test("http://-.~_!$&'()*+';=:%40:80%2f::::::@example.com"));
});
Deno.test("Exactly 2", { permissions: "none" }, () => {
	assert(matchExactly.test("//223.255.255.254"));
});
Deno.test("Exactly 3", { permissions: "none" }, () => {
	assert(matchExactly.test("//a.b-c.de"));
});
Deno.test("Exactly 4", { permissions: "none" }, () => {
	assert(matchExactly.test("//foo.ws"));
});
Deno.test("Exactly 5", { permissions: "none" }, () => {
	assert(matchExactly.test("//localhost:8080"));
});
Deno.test("Exactly 6", { permissions: "none" }, () => {
	assert(matchExactly.test("//userid:password@example.com"));
});
Deno.test("Exactly 7", { permissions: "none" }, () => {
	assert(matchExactly.test("//➡.ws/䨹"));
});
Deno.test("Exactly 8", { permissions: "none" }, () => {
	assert(matchExactly.test("ftp://foo.bar/baz"));
});
Deno.test("Exactly 9", { permissions: "none" }, () => {
	assert(matchExactly.test("http://1337.net"));
});
Deno.test("Exactly 10", { permissions: "none" }, () => {
	assert(matchExactly.test("http://142.42.1.1/"));
});
Deno.test("Exactly 11", { permissions: "none" }, () => {
	assert(matchExactly.test("http://142.42.1.1:8080/"));
});
Deno.test("Exactly 12", { permissions: "none" }, () => {
	assert(matchExactly.test("http://223.255.255.254"));
});
Deno.test("Exactly 13", { permissions: "none" }, () => {
	assert(matchExactly.test("http://a.b-c.de"));
});
Deno.test("Exactly 14", { permissions: "none" }, () => {
	assert(matchExactly.test("http://a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.com"));
});
Deno.test("Exactly 15", { permissions: "none" }, () => {
	assert(matchExactly.test("http://a_b.z.com"));
});
Deno.test("Exactly 16", { permissions: "none" }, () => {
	assert(matchExactly.test("http://code.google.com/events/#&product=browser"));
});
Deno.test("Exactly 17", { permissions: "none" }, () => {
	assert(matchExactly.test("http://example.com#foo"));
});
Deno.test("Exactly 18", { permissions: "none" }, () => {
	assert(!matchExactly.test("http://example.com."));
});
Deno.test("Exactly 19", { permissions: "none" }, () => {
	assert(matchExactly.test("http://example.com?foo=bar"));
});
Deno.test("Exactly 20", { permissions: "none" }, () => {
	assert(matchExactly.test("http://foo.bar/?q=Test%20URL-encoded%20stuff"));
});
Deno.test("Exactly 24", { permissions: "none" }, () => {
	assert(matchExactly.test("http://foo.com/blah_blah"));
});
Deno.test("Exactly 25", { permissions: "none" }, () => {
	assert(matchExactly.test("http://foo.com/blah_blah/"));
});
Deno.test("Exactly 29", { permissions: "none" }, () => {
	assert(matchExactly.test("http://j.mp"));
});
Deno.test("Exactly 30", { permissions: "none" }, () => {
	assert(matchExactly.test("http://localhost/"));
});
Deno.test("Exactly 31", { permissions: "none" }, () => {
	assert(matchExactly.test("http://mw1.google.com/mw-earth-vectordb/kml-samples/gp/seattle/gigapxl/$[level]/r$[y]_c$[x].jpg"));
});
Deno.test("Exactly 32", { permissions: "none" }, () => {
	assert(matchExactly.test("http://user:pass@example.com:123/one/two.three?q1=a1&q2=a2#body"));
});
Deno.test("Exactly 33", { permissions: "none" }, () => {
	assert(matchExactly.test("http://userid:password@example.com"));
});
Deno.test("Exactly 34", { permissions: "none" }, () => {
	assert(matchExactly.test("http://userid:password@example.com/"));
});
Deno.test("Exactly 35", { permissions: "none" }, () => {
	assert(matchExactly.test("http://userid:password@example.com:8080"));
});
Deno.test("Exactly 36", { permissions: "none" }, () => {
	assert(matchExactly.test("http://userid:password@example.com:8080/"));
});
Deno.test("Exactly 37", { permissions: "none" }, () => {
	assert(matchExactly.test("http://userid@example.com"));
});
Deno.test("Exactly 38", { permissions: "none" }, () => {
	assert(matchExactly.test("http://userid@example.com/"));
});
Deno.test("Exactly 39", { permissions: "none" }, () => {
	assert(matchExactly.test("http://userid@example.com:8080"));
});
Deno.test("Exactly 40", { permissions: "none" }, () => {
	assert(matchExactly.test("http://userid@example.com:8080/"));
});
Deno.test("Exactly 41", { permissions: "none" }, () => {
	assert(matchExactly.test("http://www.example.com/wpstyle/?p=364"));
});
Deno.test("Exactly 42", { permissions: "none" }, () => {
	assert(matchExactly.test("http://www.microsoft.xn--comindex-g03d.html.irongeek.com"));
});
Deno.test("Exactly 43", { permissions: "none" }, () => {
	assert(matchExactly.test("http://⌘.ws"));
});
Deno.test("Exactly 44", { permissions: "none" }, () => {
	assert(matchExactly.test("http://⌘.ws/"));
});
Deno.test("Exactly 45", { permissions: "none" }, () => {
	assert(matchExactly.test("http://☺.damowmow.com/"));
});
Deno.test("Exactly 46", { permissions: "none" }, () => {
	assert(matchExactly.test("http://✪df.ws/123"));
});
Deno.test("Exactly 47", { permissions: "none" }, () => {
	assert(matchExactly.test("http://➡.ws/䨹"));
});
Deno.test("Exactly 48", { permissions: "none" }, () => {
	assert(matchExactly.test("https://www.example.com/foo/?bar=baz&inga=42&quux"));
});
Deno.test("Exactly 49", { permissions: "none" }, () => {
	assert(matchExactly.test("ws://223.255.255.254"));
});
Deno.test("Exactly 50", { permissions: "none" }, () => {
	assert(matchExactly.test("ws://a.b-c.de"));
});
Deno.test("Exactly 51", { permissions: "none" }, () => {
	assert(matchExactly.test("ws://foo.ws"));
});
Deno.test("Exactly 52", { permissions: "none" }, () => {
	assert(matchExactly.test("ws://localhost:8080"));
});
Deno.test("Exactly 53", { permissions: "none" }, () => {
	assert(matchExactly.test("ws://userid:password@example.com"));
});
Deno.test("Exactly 54", { permissions: "none" }, () => {
	assert(matchExactly.test("ws://➡.ws/䨹"));
});
Deno.test("Exactly 55", { permissions: "none" }, () => {
	assert(matchExactly.test("www.google.com/unicorn"));
});
