import { ReactNode } from "react";
import { BlogHeader, Navigation } from "@/components/page/blog";
import { blogData } from "../data.json";

const headerData = blogData[3];

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <>
      <BlogHeader data={headerData} />
      <div className="flex lg:gap-7">
        <article className="blog-item">
          {children}
        </article>
        <div className="w-full">
          <Navigation />
        </div>
      </div>
    </>
  );
};

export default BlogLayout;
