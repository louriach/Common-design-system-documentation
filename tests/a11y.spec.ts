import { readdirSync } from "fs";
import path from "path";
import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

function getComponentSlugs(): string[] {
  const componentsDir = path.join(process.cwd(), "content", "components");
  try {
    const files = readdirSync(componentsDir);
    return files
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, ""))
      .filter((slug) => slug !== "_template" && slug !== "template");
  } catch {
    return [];
  }
}

const slugs = getComponentSlugs();

test.describe("Component pages accessibility", () => {
  for (const slug of slugs) {
    test(`${slug} page should have no serious or critical a11y violations`, async ({
      page,
    }) => {
      await page.goto(`/components/${slug}/`);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa"])
        .analyze();

      const seriousOrCritical = results.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );

      if (seriousOrCritical.length > 0) {
        const summary = seriousOrCritical
          .map(
            (v) =>
              `[${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} nodes)`
          )
          .join("\n");
        expect(
          seriousOrCritical,
          `Accessibility violations on /components/${slug}/:\n${summary}`
        ).toEqual([]);
      }
    });
  }
});

test("Homepage should have no serious or critical a11y violations", async ({
  page,
}) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();

  const seriousOrCritical = results.violations.filter(
    (v) => v.impact === "serious" || v.impact === "critical"
  );

  if (seriousOrCritical.length > 0) {
    const summary = seriousOrCritical
      .map(
        (v) => `[${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} nodes)`
      )
      .join("\n");
    expect(
      seriousOrCritical,
      `Accessibility violations on homepage:\n${summary}`
    ).toEqual([]);
  }
});
