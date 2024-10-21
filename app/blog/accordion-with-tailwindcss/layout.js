
import { BlogHeader, Navigation } from "@/components/page/blog/index";
import { blogData } from "../data";

const headerData = blogData[2];

export default function BlogLayout({ children }) {
  return (
    <>
      <BlogHeader data={headerData} />
      <div className="flex lg:gap-7">
        <article className="blog-item">
          {children}
        </article >
        <div className="w-full">
          <Navigation />
        </div>
      </div>
    </>
  );
}
