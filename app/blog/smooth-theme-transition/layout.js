
import BlogHeader from "@/components/page/blog/header";
import Navigation from "@/components/page/blog/navigation";

export const metadata = {
  title: "Next.js Create Smooth Theme Transition with Gsap | Xiaohu",
  description: "This post dives into implementing smooth transitions between light and dark themes using gsap. Learn how to create a seamless, visually appealing experience for users switching between themes on your website."
};

const headerData = {
  title: "Next.js Create Smooth Theme Transition with Gsap",
  date: "October 18, 2024",
  img: {
    src: "/images/blog/smooth-theme-transition/banner.jpg",
    width: 832,
    height: 448,
    alt: "Smooth theme transition by xiaohu on October 18, 2024"
  }
}

const navigationData = [
  {
    "nav": "Animation Library Used"
  },
  {
    "nav": "Considerations"
  },
  {
    "nav": "Implementation"
  },
  {
    "nav": "Final Result"
  }
]

export default function BlogLayout({ children }) {
  return (
    <>
      <BlogHeader data={headerData} />
      <div className="flex lg:gap-7">
        <article
          className="sm:prose-sm md:prose lg:prose-lg prose-neutral dark:prose-invert sm:max-w-[360px] md:max-w-full prose-p:tracking-[0.1px] prose-p:text-accent-300 dark:prose-p:text-[#cbcbcb] prose-headings:text-accent-dark dark:prose-headings:text-accent-white prose-a:text-orange-base/90 
          prose-ul::tracking-wide prose-ul:text-accent-300 dark:prose-ul:text-[#cbcbcb] dark:prose-code:bg-gray-dark/50 prose-code:bg-gray-light/25 prose-code:px-1 prose-code:py-px prose-code:rounded-sm">
          {children}
        </article >
        <div className="w-full">
          <Navigation data={navigationData}/>
        </div>
      </div>
    </>
  );
}
