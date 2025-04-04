import dynamic from "next/dynamic";
const BlogAnimations = dynamic(() => import("./animations"));
import { Footer } from "@/components/layout";

export const metadata = {
  title: "Blog | Xiaohu",
  description: "Explores creative animation techniques and showcases the implementation of dynamic web animations. No ordinary content, just in-depth guides and examples of how to bring web designs to life with motion.",
  openGraph: {
    title: "Blog | Xiaohu",
    description: "Explores creative animation techniques and showcases the implementation of dynamic web animations. No ordinary content, just in-depth guides and examples of how to bring web designs to life with motion.",
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

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <section className="font-petrona">
      <div className="container lg:w-[1024px] md:w-[700px] w-full lg:pt-40 lg:pb-28 md:pt-32 md:pb-12 pt-24 pb-7">
        {children}
      </div>
      <Footer />
      <BlogAnimations />
    </section>
  );
}

export default BlogLayout;
