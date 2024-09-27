import { Edu_TAS_Beginner } from "next/font/google";
import "./globals.css";

const edu_tas = Edu_TAS_Beginner({ subsets: ["latin"] });

export const metadata = {
  title: "Xiaohu | Explore the World of 3D Graphics",
  description: "My website showcases a variety of projects that highlight the beauty and potential of 3D graphics in the web space. I hope you all enjoy this!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={edu_tas.className}>{children}</body>
    </html>
  );
}
