import Link from "next/link";
import { ThemeSwitch } from "@/components/general";

export const metadata = {
  title: "英语课程 | 英语学习平台",
  description:
    "探索我们的英语学习课程，从基础到高级，提供全方位的英语学习体验，包括听说读写等核心技能的培养。",
  openGraph: {
    title: "英语课程 |英语学习平台",
    description:
      "探索我们的英语学习课程，从基础到高级，提供全方位的英语学习体验，包括听说读写等核心技能的培养。",
    images: [
      {
        url: "/logo_original.png",
        width: 64,
        height: 64,
      },
    ],
    type: "website",
  },
};

interface ProjectLayoutProps {
  children: React.ReactNode;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children }) => {
  return (
    <div>
      <header className="fixed w-full left-1/2 -translate-x-1/2 z-50 bg-white/20 dark:bg-black/20 backdrop-blur-md h-12 md:h-16 shadow-md shadow-black/10 dark:shadow-white/10">
        <div className="container relative h-full flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/creation/course-english" className="text-xl font-bold text-amber-600 dark:text-amber-400">
              English Go
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              站长微信: zxh635148320
            </div>
            <ThemeSwitch />
          </div>
        </div>
      </header>
      {children}
    </div>
  );
};

export default ProjectLayout;
