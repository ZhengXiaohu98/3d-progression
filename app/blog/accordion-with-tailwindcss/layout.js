
import BlogHeader from "@/components/page/blog/header";
import Navigation from "@/components/page/blog/navigation";

export const metadata = {
  title: "Create Accordion with Tailwind css with NO Javascript! | Xiaohu",
  description: "Learn how to build a fully functional accordion using only Tailwind CSS, with NO JavaScript! This guide will walk you through creating an interactive, responsive accordion component that's lightweight and easy to implement."
};

const headerData = {
  title: "Create Accordion componentwith Tailwind css",
  date: "October 21, 2024",
  img: {
    src: "/images/blog/accordion-with-tailwindcss/banner.jpg",
    width: 832,
    height: 448,
    alt: "Create accordion with tailwind css with no Javascript by xiaohu on October 21, 2024"
  }
}

const navigationData = [
  {
    "nav": "Implementation Idea"
  },
  {
    "nav": "Tricks"
  },
  {
    "nav": "Conclusion"
  }
]

export default function BlogLayout({ children }) {
  return (
    <>
      <BlogHeader data={headerData} />
      <div className="flex lg:gap-7">
        <article className="blog-item">
          {children}
        </article >
        <div className="w-full">
          <Navigation data={navigationData} />
        </div>
      </div>
    </>
  );
}
