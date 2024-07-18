import { Edu_TAS_Beginner } from "next/font/google";
import "./globals.css";

const edu_tas = Edu_TAS_Beginner({ subsets: ["latin"] });

export const metadata = {
  title: "The 3D filght",
  description: "A flight of the 3D world created by Xiaohu."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={edu_tas.className}>{children}</body>
    </html>
  );
}
