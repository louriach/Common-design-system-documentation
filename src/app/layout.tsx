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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.classList.add("dark");else document.documentElement.classList.remove("dark");})();`,
          }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <div className="flex flex-1 bg-background">
            <Sidebar components={components} />
            <div className="flex flex-col flex-1 min-w-0 bg-background">
              <main className="flex-1 overflow-y-auto bg-background">
                <div className="container mx-auto px-4 py-8 max-w-4xl">
                  <div className="docs-content-panel">
                    {children}
                  </div>
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
