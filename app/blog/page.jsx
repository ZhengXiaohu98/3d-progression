"use client";
import { useState } from "react";
import { cn } from "@/utils";
import { blogData } from "./data.json";
import Link from "next/link";
import Image from "next/image";
import { GridIcon, ListIcon } from "@/components/icon";
import { PageTip } from "@/components/general";

blogData.reverse();
blogData.pop();

const bannerBlog = blogData[0];
const blogArr = [...blogData.slice(1), ...blogData.slice(1), ...blogData.slice(1), ...blogData.slice(1), ...blogData.slice(1), ...blogData.slice(1), ...blogData.slice(1), ...blogData.slice(1), ...blogData.slice(1), ...blogData.slice(1), ...blogData.slice(1)];

const Blog = () => {

  const [blogs, setBlogs] = useState(blogArr);
  const [curView, setCurView] = useState("grid");

  return (
    <>
      <Link href={bannerBlog.url}>
        <section className="w-full flex items-center gap-10 group select-none">
          <div className="w-[500px] h-[250px] overflow-hidden shrink-0 rounded-lg">
            <Image src={bannerBlog.img} width={bannerBlog.width} height={bannerBlog.height} alt={bannerBlog.alt} className="group-hover:scale-105 transition duration-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold dark:text-accent-white text-accent-dark">
              <span className="duration-500 bg-gradient-to-r from-orange-base to-purple-base bg-no-repeat bg-[length:0px_1px] group-hover:bg-[length:100%_1px] bg-right-bottom group-hover:bg-left-bottom" style={{ transitionProperty: "background-size" }}>
                {bannerBlog.title}
              </span>
            </h1>
            <p className="mt-3 dark:text-accent-white/80 text-accent-dark/80">{bannerBlog.desdescription}</p>
            <div className="mt-6 flex items-center w-full justify-between dark:text-accent-white/80 text-accent-dark/80">
              <p className="text-sm italic">{bannerBlog.date}</p>
            </div>
          </div>
        </section>
      </Link>
      <hr className="dark:text-gray-dark text-gray-light my-10 select-none" />
      <section className="w-full flex flex-row-reverse gap-8 select-none">
        <div className="w-[816px] shrink-0 grid grid-cols-2 gap-x-4 gap-y-8">
          {
            blogs.map(blog => (
              <Link key={blog.title} href={blog.url}>
                <div className={cn("group flex w-[400px] h-[350px] rounded-xl dark:shadow-sm dark:shadow-white/[0.05] shadow-md shadow-black/[0.05] shrink-0", curView === "grid" ? "flex-col" : "flex-row")}>
                  <div className="w-[400px] h-[200px] overflow-hidden shrink-0 rounded-lg relative">
                    <Image src={blog.img} width={blog.width} height={blog.height} alt={blog.alt} className="group-hover:scale-105 transition duration-500" />
                    <div className="absolute z-[2] inset-0 bg-gradient-to-b from-transparent to-accent-white dark:to-accent-dark">
                      <h2 className="absolute left-0 bottom-0 p-3 md:text-lg leading-none sm:text-sm italic font-bold text-accent-dark dark:text-accent-white">
                        <span className="duration-500 bg-gradient-to-r from-orange-base to-purple-base bg-no-repeat bg-[length:0px_1px] group-hover:bg-[length:100%_1px] bg-right-bottom group-hover:bg-left-bottom" style={{ transitionProperty: "background-size" }}>
                          {blog.title}
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="px-2 py-4">
                    <p className="mt-2 text-sm dark:text-accent-900 text-accent-300">{blog.desdescription}</p>
                    <div className="mt-4 flex items-center w-full justify-between dark:text-accent-white/80 text-accent-dark/80">
                      <p className="text-xs italic">{blog.date}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
        <div className="w-full">
          <div className="sticky top-32">
            <div className="flex gap-2 peer">
              <GridIcon className={cn("w-7 h-7 cursor-pointer transition rounded-lg p-1", curView === "grid" ? "dark:bg-gray-dark bg-gray-light" : "")} />
              <ListIcon className={cn("w-7 h-7 cursor-pointer transition rounded-lg p-1", curView === "grid" ? "" : "dark:bg-gray-dark bg-gray-light")} />
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default Blog;