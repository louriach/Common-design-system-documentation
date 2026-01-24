import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ComponentNotFound() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Component Not Found</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          The component you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button>← Back to Components</Button>
        </Link>
      </div>
    </div>
  );
}
