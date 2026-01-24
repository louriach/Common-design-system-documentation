import 'server-only';

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const componentsDirectory = path.join(process.cwd(), "content", "components");

// Verify directory exists at module load
if (!fs.existsSync(componentsDirectory)) {
  console.error(`Content directory not found: ${componentsDirectory}`);
  console.error(`Current working directory: ${process.cwd()}`);
}

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
  if (!fs.existsSync(componentsDirectory)) {
    console.error(`Components directory does not exist: ${componentsDirectory}`);
    return [];
  }
  
  try {
    const fileNames = fs.readdirSync(componentsDirectory);
    const slugs = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => fileName.replace(/\.md$/, ""));
    
    if (slugs.length === 0) {
      console.warn(`No markdown files found in: ${componentsDirectory}`);
    }
    
    return slugs;
  } catch (error) {
    console.error(`Error reading components directory: ${error}`);
    return [];
  }
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
  if (!fs.existsSync(componentsDirectory)) {
    throw new Error(`Components directory does not exist: ${componentsDirectory}`);
  }

  const filePath = path.join(componentsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    const availableFiles = fs.readdirSync(componentsDirectory)
      .filter(f => f.endsWith('.md'))
      .map(f => f.replace('.md', ''));
    throw new Error(
      `Component not found: ${slug}. Available components: ${availableFiles.join(', ')}`
    );
  }

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      category: data.category || "Components",
      content,
    };
  } catch (error) {
    throw new Error(`Error reading component file ${filePath}: ${error}`);
  }
}

