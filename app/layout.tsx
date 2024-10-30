import "./globals.css";
import "prism-themes/themes/prism-vsc-dark-plus.css";
import { ThemeProviders } from "./theme-provider";
import { Header } from "@/components/layout";
import React from "react";

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
      </body>
    </html>
  );
};

export default RootLayout;
