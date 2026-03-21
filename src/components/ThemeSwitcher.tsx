"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className="docs-theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="h-3.5 w-3.5 transition-all" />
      ) : (
        <Moon className="h-3.5 w-3.5 transition-all" />
      )}
    </button>
  );
}
