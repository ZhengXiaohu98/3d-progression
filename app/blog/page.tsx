import { cn } from "@/utils";
import { blogData } from "./data.json";
import Link from "next/link";
import Image from "next/image";




blogData.reverse();


const Blog = () => {


  return (
    <>

      <section className="w-full flex lg:flex-row-reverse flex-col-reverse gap-8 select-none">
        <div className={cn("transition-all md:w-full lg:w-[816px] shrink-0 flex flex-col gap-x-4 gap-y-8")}>
          {blogData.map(blog => (
            <Link key={blog.title} href={blog.url}>
              <div className={cn("blog-div group flex shrink-0 relative flex-col md:flex-row gap-1 items-center w-full border-b dark:border-accent-300 border-accent-ccc")}>
                <div className="lg:w-[400px] lg:h-[200px] md:w-[320px] md:h-[160px] w-[340px] h-[170px] overflow-hidden shrink-0 rounded-xs">
                  <Image src={blog.img.src} width={blog.img.width} height={blog.img.height} alt={blog.img.alt} className="group-hover:scale-100 scale-105 transition duration-500" />
                </div>
                <div className="px-2 py-4">
                  <div className="flex items-center gap-1 mb-2">
                    {blog.categories.map((category) => (
                      <div key={category} className="px-1.5 py-0.5 md:py-1 dark:bg-gray-dark bg-gray-light text-white dark:text-accent-white rounded-xs text-xs tracking-wide italic">
                        {category}
                      </div>
                    ))}
                  </div>
                  <h2 className="md:text-base lg:text-xl leading-none text-sm italic font-bold text-accent-dark dark:text-accent-white">
                    <span className="duration-500 bg-linear-to-r from-orange-base to-pink-base bg-no-repeat bg-[length:0px_1px] group-hover:bg-[length:100%_1px] bg-right-bottom group-hover:bg-left-bottom" style={{ transitionProperty: "background-size" }}>
                      {blog.title}
                    </span>
                  </h2>
                  <p className="text-xs lg:text-sm dark:text-accent-900 text-accent-300 mt-1">{blog.desdescription}</p>
                  <div className={cn("flex items-center w-full dark:text-accent-white/80 text-accent-dark/80 font-bold relative mt-2")}>
                    <p className="md:text-sm text-xs italic w-full text-right pr-4">{blog.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </section>
    </>
  );
};

export default Blog;
