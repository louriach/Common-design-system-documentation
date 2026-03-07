import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { getComponentData, getAllComponentSlugs } from "@/lib/markdown";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }> | { slug: string };
}

export function generateStaticParams() {
  try {
    const slugs = getAllComponentSlugs();
    if (slugs.length === 0) {
      console.warn("No component slugs found. Check content/components/ directory.");
      return [];
    }
    
    // Filter out any invalid slugs and ensure they're strings
    const validSlugs = slugs.filter(slug => slug && typeof slug === 'string' && slug.length > 0);
    
    if (validSlugs.length === 0) {
      console.error("No valid component slugs found after filtering");
      return [];
    }
    
    console.log(`Generating static params for ${validSlugs.length} components:`, validSlugs);
    
    return validSlugs.map((slug) => {
      if (!slug || typeof slug !== 'string') {
        console.error(`Invalid slug in generateStaticParams:`, slug);
        return null;
      }
      return { slug: slug };
    }).filter(Boolean) as { slug: string }[];
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function ComponentPage({ params }: Props) {
  // Handle both Promise and direct params (Next.js 16 compatibility)
  const resolvedParams = params instanceof Promise ? await params : params;
  const slug = resolvedParams?.slug;
  
  // Early return for invalid slugs - don't even try to load
  if (!slug || typeof slug !== 'string' || slug.trim().length === 0) {
    // Silently return notFound for invalid slugs during static generation
    notFound();
    return null; // TypeScript safety
  }

  let component;
  try {
    component = getComponentData(slug);
  } catch (error) {
    // Only log if it's a valid slug (not undefined)
    if (slug && slug !== 'undefined') {
      console.error(`Error loading component ${slug}:`, error);
    }
    notFound();
    return null; // TypeScript safety
  }

  if (!component) {
    notFound();
    return null; // TypeScript safety
  }

    return (
      <div>
        <header className="docs-page-header">
          <h1 className="docs-page-title">{component.title}</h1>
          {component.category && (
            <p className="docs-page-meta">
              Category: <span className="font-medium">{component.category}</span>
            </p>
          )}
          {component.description && (
            <p className="docs-page-description">{component.description}</p>
          )}
        </header>
        <div className="prose-container">
          <MarkdownRenderer content={component.content} />
        </div>
        <footer className="docs-page-footer">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Edit on GitHub →
          </a>
        </footer>
      </div>
    );
}
