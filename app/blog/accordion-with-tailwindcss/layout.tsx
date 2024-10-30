import { ReactNode } from "react";
import { BlogHeader, Navigation } from "@/components/page/blog";
import { blogData } from "../data.json";

interface BlogLayoutProps {
  children: ReactNode;
}

const headerData = blogData[2];

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <>
      <BlogHeader data={headerData} />
      <div className="flex flex-col lg:flex-row lg:gap-7">
        <article className="blog-content flex-1">
          {children}
        </article>
        <div className="w-full lg:w-auto">
          <Navigation />
        </div>
      </div>
    </>
  );
}
