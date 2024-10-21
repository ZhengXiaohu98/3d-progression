
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
        <article className="blog-item">
          {children}
        </article >
        <div className="w-full">
          <Navigation data={navigationData}/>
        </div>
      </div>
    </>
  );
}
