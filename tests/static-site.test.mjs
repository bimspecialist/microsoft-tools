import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const docsRoot = new URL("../docs/", import.meta.url);

async function readDoc(relPath) {
  return readFile(new URL(relPath, docsRoot), "utf8");
}

const supportEmail = "bimspecialist.support@gmail.com";
const supportSubject = "Toolbox%20Suite%20Support";
const aiReportSubject = "Toolbox%20Suite%20AI%20Content%20Report";

test("support page shows the official support email", async () => {
  const html = await readDoc("support/index.html");
  assert.match(html, new RegExp(supportEmail.replace(/\./g, "\\.")));
  assert.match(html, /Contact support/i);
  assert.match(html, /تواصل مع الدعم/);
});

test("support page links to the exact support email via mailto", async () => {
  const html = await readDoc("support/index.html");
  const mailto = `mailto:${supportEmail}?subject=${supportSubject}`;
  assert.ok(html.includes(mailto), `expected mailto '${mailto}'`);
});

test("support page has an AI report mailto with the AI subject", async () => {
  const html = await readDoc("support/index.html");
  const mailto = `mailto:${supportEmail}?subject=${aiReportSubject}`;
  assert.ok(html.includes(mailto), `expected mailto '${mailto}'`);
});

test("support page contains the English and Arabic AI report actions", async () => {
  const html = await readDoc("support/index.html");
  assert.match(html, /Report AI Content/);
  assert.match(html, /الإبلاغ عن محتوى الذكاء الاصطناعي/);
});

test("support page shows English and Arabic contact support actions", async () => {
  const html = await readDoc("support/index.html");
  assert.match(html, /Contact Support/);
  assert.match(html, /التواصل مع الدعم/);
});

test("support page contains the AI report privacy notice", async () => {
  const html = await readDoc("support/index.html");
  assert.match(html, /do not include passwords/i);
  assert.match(html, /كلمات المرور/);
});

test("support page has no stale toolbox-suite-support paths", async () => {
  const html = await readDoc("support/index.html");
  assert.doesNotMatch(html, /toolbox-suite-support/);
});

test("no live doc retains a stale toolbox-suite-support path", async () => {
  const docs = [
    "index.html",
    "support/index.html",
    "privacy/index.html",
    "404.html",
    "documentation/index.html",
    "updates/index.html",
    "lang.js",
    "sitemap.xml",
    "robots.txt",
  ];
  for (const rel of docs) {
    const content = await readDoc(rel);
    assert.doesNotMatch(
      content,
      /toolbox-suite-support/,
      `${rel} still references the old Pages root`,
    );
  }
});

test("live docs use the microsoft-tools Pages root for internal paths", async () => {
  const docs = [
    "index.html",
    "support/index.html",
    "privacy/index.html",
    "404.html",
    "documentation/index.html",
    "updates/index.html",
    "lang.js",
    "sitemap.xml",
    "robots.txt",
  ];
  for (const rel of docs) {
    const content = await readDoc(rel);
    assert.match(content, /\/microsoft-tools\//, `${rel} should reference /microsoft-tools/`);
  }
});
