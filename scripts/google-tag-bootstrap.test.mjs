import assert from "node:assert/strict";
import test from "node:test";
import { createServer } from "vite";

test("Google tag commands use the Arguments format consumed by gtag.js", async () => {
  const originalWindow = globalThis.window;
  const originalDocument = globalThis.document;
  const server = await createServer({ server: { middlewareMode: true } });

  try {
    globalThis.window = { dataLayer: [] };
    globalThis.document = {
      querySelector: () => ({ alreadyLoaded: true }),
    };

    const { bootstrapGoogleTags } = await server.ssrLoadModule("/src/lib/googleTag.ts");
    bootstrapGoogleTags();

    assert.ok(globalThis.window.dataLayer.length >= 3);
    for (const command of globalThis.window.dataLayer) {
      assert.equal(Array.isArray(command), false);
      assert.equal(Object.prototype.toString.call(command), "[object Arguments]");
    }
    assert.equal(globalThis.window.dataLayer[0][0], "js");
    assert.equal(globalThis.window.dataLayer[1][0], "config");
    assert.equal(globalThis.window.dataLayer[2][0], "config");
  } finally {
    await server.close();
    globalThis.window = originalWindow;
    globalThis.document = originalDocument;
  }
});
