import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/layout").then((mod) => mod.Footer));
const SlideBar = dynamic(() => import("@/components/page/ui").then((mod) => mod.SlideBar));

export const metadata = {
  title: "Easy UI",
  description: "Easy UI — a space dedicated to showcasing creative UI designs and interactive effects. This page highlights the seamless integration of modern visuals and dynamic interactions, delivering sleek, efficient, and captivating user interfaces.",
  openGraph: {
    title: "Easy UI",
    description: "Easy UI — a space dedicated to showcasing creative UI designs and interactive effects. This page highlights the seamless integration of modern visuals and dynamic interactions, delivering sleek, efficient, and captivating user interfaces.",
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

interface UILayoutProps {
  children: React.ReactNode;
}

const BlogLayout: React.FC<UILayoutProps> = ({ children }) => {
  return (
    <section className="font-instrument-sans">
      <div className="container flex gap-8 sm:w-full lg:pt-40 lg:pb-28 md:pt-32 md:pb-12 sm:pt-24 sm:pb-7">
        <SlideBar />
        <article className="ui-item grow max-w-full">
          {children}
        </article>
      </div>
      <Footer />
    </section>
  );
}

export default BlogLayout;
