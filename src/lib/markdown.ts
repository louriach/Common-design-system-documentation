import 'server-only';

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const componentsDirectory = path.join(process.cwd(), "content", "components");

export interface ComponentMetadata {
  slug: string;
  title: string;
  description: string;
  category?: string;
}

export interface ComponentData extends ComponentMetadata {
  content: string;
}

/**
 * Get all component files from the content directory
 */
export function getAllComponentSlugs(): string[] {
  const fileNames = fs.readdirSync(componentsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

/**
 * Get metadata for all components
 */
export function getAllComponents(): ComponentMetadata[] {
  const slugs = getAllComponentSlugs();
  return slugs
    .map((slug) => {
      const filePath = path.join(componentsDirectory, `${slug}.md`);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        category: data.category || "Components",
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

/**
 * Get component data by slug
 */
export function getComponentData(slug: string): ComponentData {
  const filePath = path.join(componentsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Component not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    category: data.category || "Components",
    content,
  };
}

