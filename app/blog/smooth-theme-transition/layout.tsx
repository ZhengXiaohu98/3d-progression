import { BlogHeader, Navigation } from "@/components/page/blog";
import { blogData } from "../data.json";

interface BlogLayoutProps {
  children: React.ReactNode;
}

const headerData = blogData[1];

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
}

export default BlogLayout;
