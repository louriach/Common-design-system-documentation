"use client";

import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ComponentMetadata } from "@/lib/markdown";

interface ComponentGridProps {
  components: ComponentMetadata[];
}

export function ComponentGrid({ components }: ComponentGridProps) {
  // Group components by category
  const grouped = components.reduce(
    (acc, component) => {
      const category = component.category || "Components";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(component);
      return acc;
    },
    {} as Record<string, ComponentMetadata[]>
  );

  return (
    <div className="space-y-8">
      {Object.entries(grouped).map(([category, categoryComponents]) => (
        <div key={category}>
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryComponents.map((component) => (
              <Link
                key={component.slug}
                href={`/components/${component.slug}/`}
                className="group"
              >
                <Card className="h-full cursor-pointer transition-all hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400">
                  <CardHeader>
                    <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {component.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {component.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

