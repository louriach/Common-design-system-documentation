import type { Metadata } from "next";
import { AppShell } from "@/components/AppShell";
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
          <AppShell components={components}>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
