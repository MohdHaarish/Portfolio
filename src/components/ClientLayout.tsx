"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { ThemePanel } from "@/components/ui/theme-panel";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <ThemePanel />
    </ThemeProvider>
  );
}
