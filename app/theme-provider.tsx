"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

interface ThemeProvidersProps {
  children: React.ReactNode;
}

export function ThemeProviders({ children }: ThemeProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
