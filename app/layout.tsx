import "./globals.css";
import "@/public/css/prism-theme-github-dark.css";
import "@/public/css/prism-theme-github-light.css";
import { ThemeProviders } from "./theme-provider";
import { Header } from "@/components/layout";
import React from "react";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Xiaohu | Explore the World of 3D Graphics",
  description: "My website showcases a variety of projects that highlight the beauty and potential of 3D graphics in the web space. I hope you all enjoy this!",
  openGraph: {
    title: "Xiaohu | Explore the World of 3D Graphics",
    description: "My website showcases a variety of projects that highlight the beauty and potential of 3D graphics in the web space. I hope you all enjoy this!",
    images: [
      {
        url: "/logo_original.png",
        width: 64,
        height: 64,
      },
    ],
    type: "website",
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-petrona dark:selection:bg-purple-base/75 dark:selection:text-accent-white selection:bg-orange-base/75 selection:text-white">
        <ThemeProviders>
          <Header />
          {children}
        </ThemeProviders>
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
};

export default RootLayout;
