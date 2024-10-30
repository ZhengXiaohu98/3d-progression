"use client";
import { useState, useEffect } from "react";
import { cn } from "@/utils";
import { blogData } from "./data.json";
import Link from "next/link";
import Image from "next/image";
import { GridIcon, ListIcon } from "@/components/icon";

interface BlogData {
  title?: string;
  url?: string;
  img?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  categories?: string[];
  desdescription?: string;
  date?: string;
}

const categoryMap: Record<string, string> = {
  "svg": "Svg",
  "gsap": "Gsap",
  "tailwind": "Tailwindcss",
  "three": "three.js"
};

blogData.reverse();
blogData.pop();

const bannerBlog: BlogData = blogData[0];
const blogArr: BlogData[] = blogData.slice(1);

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogData[]>(blogArr);
  const [filterCategoryArr, setFilterCategoryArr] = useState<string[]>([]);
  const [curView, setCurView] = useState<"grid" | "list">("grid");

  useEffect(() => {
    if (filterCategoryArr.length === 0) {
      setBlogs(blogArr);
      return;
    }

    const filteredBlogs = blogArr.filter(blog =>
      filterCategoryArr.every(category => blog?.categories?.includes(category))
    );
    setBlogs(filteredBlogs);

  }, [filterCategoryArr]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setCurView("grid");
      } else {
        setCurView("list");
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCheckboxChange = (category: string) => {
    setFilterCategoryArr((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  return (
    <>
      <Link href={bannerBlog.url as string}>
        <section className="w-full flex lg:flex-row sm:flex-col items-center sm:gap-4 md:gap-6 lg:gap-10 group select-none">
          <div className="lg:w-[500px] lg:h-[250px] md:w-[600px] md:h-[300px] sm:w-[350px] sm:h-[175px] overflow-hidden shrink-0 rounded-lg block float-right">
            <Image priority src={bannerBlog?.img?.src as string} width={bannerBlog?.img?.width as number} height={bannerBlog?.img?.height as number} alt={bannerBlog?.img?.alt as string} className="group-hover:scale-105 transition duration-500" />
          </div>
          <div>
            <div className="flex items-center gap-1 sm:mb-1.5 md:mb-2">
              {bannerBlog?.categories?.map((category) => (
                <div key={category} className="px-1.5 sm:py-0.5 md:py-1 dark:bg-gray-dark bg-gray-light text-white dark:text-accent-white rounded text-xs tracking-wide italic">
                  {categoryMap[category]}
                </div>
              ))}
            </div>
            <h1 className="sm:text-sm md:text-2xl lg:text-3xl font-bold dark:text-accent-white text-accent-dark">
              <span className="duration-500 bg-gradient-to-r from-orange-base to-purple-base bg-no-repeat bg-[length:0px_1px] group-hover:bg-[length:100%_1px] bg-right-bottom group-hover:bg-left-bottom" style={{ transitionProperty: "background-size" }}>
                {bannerBlog.title}
              </span>
            </h1>
            <p className="lg:mt-3 dark:text-accent-900 text-accent-300 lg:text-base md:text-sm sm:text-xs">{bannerBlog.desdescription}</p>
            <div className="mt-2 flex items-center w-full justify-between dark:text-accent-white/80 text-accent-dark/80 font-bold">
              <p className="sm:text-xs md:text-sm italic w-full text-right">{bannerBlog.date}</p>
            </div>
          </div>
        </section>
      </Link>
      <hr className="dark:text-gray-dark text-gray-light sm:my-5 md:my-6 lg:my-10 select-none" />
      <section className="w-full flex lg:flex-row-reverse sm:flex-col-reverse gap-8 select-none">
        <div className={cn("transition-all md:w-full lg:w-[816px] shrink-0 grid gap-x-4 gap-y-8", curView === "grid" ? "grid-cols-2" : "grid-cols-1")}>
          {blogs.map(blog => (
            <Link key={blog.title} href={blog.url as string}>
              <div className={cn("blog-div group flex shrink-0", curView === "grid" ? "rounded-xl flex-col w-[400px] h-[430px] shadow-md dark:shadow-accent-white/15 shadow-accent-dark/10" : "sm:flex-col md:flex-row gap-1 items-center w-full border-b dark:border-gray-dark border-gray-light")}>
                <div className="lg:w-[400px] lg:h-[200px] md:w-[260px] md:h-[130px] sm:w-[340px] sm:h-[170px] overflow-hidden shrink-0 rounded-lg">
                  <Image src={blog?.img?.src as string} width={blog?.img?.width as number} height={blog?.img?.height as number} alt={blog?.img?.alt as string} className="group-hover:scale-105 transition duration-500" />
                </div>
                <div className="px-2 py-4">
                  <div className="flex items-center gap-1 mb-2">
                    {blog?.categories?.map((category) => (
                      <div key={category} className="px-1.5 sm:py-0.5 md:py-1 dark:bg-gray-dark bg-gray-light text-white dark:text-accent-white rounded text-xs tracking-wide italic">
                        {categoryMap[category]}
                      </div>
                    ))}
                  </div>
                  <h2 className="md:text-base lg:text-xl leading-none sm:text-sm italic font-bold text-accent-dark dark:text-accent-white">
                    <span className="duration-500 bg-gradient-to-r from-orange-base to-purple-base bg-no-repeat bg-[length:0px_1px] group-hover:bg-[length:100%_1px] bg-right-bottom group-hover:bg-left-bottom" style={{ transitionProperty: "background-size" }}>
                      {blog.title}
                    </span>
                  </h2>
                  <p className="sm:text-xs lg:text-sm dark:text-accent-900 text-accent-300 mt-1">{blog.desdescription}</p>
                  <div className="mt-2 flex items-center w-full justify-between dark:text-accent-white/80 text-accent-dark/80 font-bold">
                    <p className="md:text-sm sm:text-xs italic w-full text-right pr-2">{blog.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full">
          <div className="sticky top-32">
            <div className="sm:hidden lg:flex gap-2 peer">
              <GridIcon className={cn("w-7 h-7 cursor-pointer transition rounded-lg p-1", curView === "grid" ? "dark:bg-gray-dark bg-accent-white" : "")} onClick={() => setCurView("grid")} />
              <ListIcon className={cn("w-7 h-7 cursor-pointer transition rounded-lg p-1", curView === "grid" ? "" : "dark:bg-gray-dark bg-accent-white")} onClick={() => setCurView("list")} />
            </div>
            <div className="lg:mt-4 flex sm:flex-row lg:flex-col sm:gap-2.5 lg:gap-2 pl-0.5">
              {Object.entries(categoryMap).map(([category, displayCategory]) => (
                <div key={category} className="flex items-center sm:gap-1 lg:gap-1.5">
                  <input type="checkbox" className="outline-none cursor-pointer" value={category} onChange={() => handleCheckboxChange(category)} />
                  <label className="text-sm mt-[3px]">{displayCategory}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
