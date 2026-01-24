import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { Button } from "@/components/ui/button";
import { getComponentData, getAllComponentSlugs } from "@/lib/markdown";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const slugs = getAllComponentSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default function ComponentPage({ params }: Props) {
  try {
    const component = getComponentData(params.slug);

    return (
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-100">
            Home
          </Link>
          <span>/</span>
          <span>{component.title}</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{component.title}</h1>
          {component.category && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Category: <span className="font-medium">{component.category}</span>
            </p>
          )}
          {component.description && (
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
              {component.description}
            </p>
          )}
        </div>

        {/* Content */}
        <div className="prose-container">
          <MarkdownRenderer content={component.content} />
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t flex justify-between">
          <Link href="/">
            <Button variant="outline">← Back to Components</Button>
          </Link>
          <a
            href="https://github.com"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Edit on GitHub →
          </a>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
