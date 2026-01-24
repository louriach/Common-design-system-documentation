import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getAllComponents } from "@/lib/markdown";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design System Knowledge Base",
  description: "A shared knowledge base for design system component documentation",
  openGraph: {
    title: "Design System Knowledge Base",
    description: "A shared knowledge base for design system component documentation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const components = getAllComponents();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-1 bg-white dark:bg-gray-950">
            <Sidebar components={components} />
            <div className="flex flex-col flex-1 min-w-0 bg-white dark:bg-gray-950">
              <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 py-8 max-w-4xl">
                  {children}
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
