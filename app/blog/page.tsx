import Link from "next/link";
import { blogData } from "./data.json";
import * as motion from "motion/react-client";
import { cn } from "@/utils";

interface Blog {
  title: string;
  desdescription: string;
  date: string;
  url: string;
  img: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  categories: string[];
}

export default function Blog() {
  return (
    <div className="grow flex flex-col items-center not-prose font-instrument-sans">
      <div className="container flex flex-col">
        {/* 标题区域 */}
        <div className="py-6 md:py-8 lg:py-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-dark dark:text-accent-white mb-2 md:mb-4 text-center">
              Blog
            </h1>
            <p className="text-sm md:text-base lg:text-lg tracking-wide text-accent-300 dark:text-accent-ccc text-center">
              Thoughts, ideas, and explorations.
            </p>
          </motion.div>
          
          {/* 背景装饰元素 */}
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full bg-purple-base/10 dark:bg-pink-base/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 rounded-full bg-orange-base/10 dark:bg-orange-base/5 blur-2xl"></div>
          
          {/* 动态线条 */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-1 h-24 bg-gradient-to-b from-purple-base/20 to-transparent dark:from-pink-base/20"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-32 bg-gradient-to-b from-orange-base/20 to-transparent"></div>
            <div className="absolute bottom-1/4 right-1/4 w-1 h-24 bg-gradient-to-t from-purple-base/20 to-transparent dark:from-pink-base/20"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1 h-32 bg-gradient-to-t from-orange-base/20 to-transparent"></div>
          </div>
        </div>
        
        {/* 博客列表 */}
        <div className="py-6 md:py-8 lg:py-12 flex flex-col min-h-[70vh] gap-16 md:gap-24">
          {blogData.map((blog: Blog, index: number) => (
            <motion.div 
              key={blog.title} 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative"
            >
              {/* 博客卡片 */}
              <div className="relative overflow-hidden rounded-3xl border dark:border-accent-300/10 border-accent-ccc/10 bg-white/50 dark:bg-accent-dark/5 backdrop-blur-sm hover:shadow-2xl dark:hover:shadow-accent-300/10 transition-all duration-500">
                <Link href={blog.url} className="block">
                  <div className="p-8 md:p-10 flex flex-col gap-6 md:gap-8">
                    {/* 分类标签 */}
                    <div className="flex flex-wrap items-center gap-2">
                      {blog.categories.map((category: string) => (
                        <span 
                          key={category} 
                          className="text-xs md:text-sm px-4 py-1.5 border dark:border-accent-300/20 border-accent-ccc/20 rounded-full text-accent-300 dark:text-accent-ccc bg-accent-white/30 dark:bg-accent-dark/10 group-hover:bg-purple-base/10 dark:group-hover:bg-pink-base/10 transition-colors"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    
                    {/* 标题和描述 */}
                    <div className="flex flex-col gap-4">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent-dark dark:text-accent-white group-hover:text-purple-base dark:group-hover:text-pink-base transition-colors">
                        {blog.title}
                      </h2>
                      
                      <p className="text-sm md:text-base lg:text-lg tracking-wide text-accent-300 dark:text-accent-ccc">
                        {blog.desdescription}
                      </p>
                    </div>
                    
                    {/* 日期和阅读更多按钮 */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-xs md:text-sm text-accent-300/70 dark:text-accent-ccc/70 italic">
                        {blog.date}
                      </div>
                      <div className="inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-accent-white/30 dark:bg-accent-dark/10 text-accent-300 dark:text-accent-ccc group-hover:bg-purple-base/10 dark:group-hover:bg-pink-base/10 transition-colors">
                        <span className="text-sm md:text-base font-medium">Read More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
                
                {/* 背景效果 */}
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-base/5 to-pink-base/5 dark:from-pink-base/5 dark:to-orange-base/5"></div>
                  
                  {/* 动态网格 */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]"></div>
                  
                  {/* 光晕效果 */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-base/5 dark:bg-pink-base/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-base/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </div>
              
              {/* 装饰元素 */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 md:w-32 md:h-32 rounded-full bg-purple-base/5 dark:bg-pink-base/5 blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute -top-8 -left-8 w-20 h-20 md:w-28 md:h-28 rounded-full bg-orange-base/5 dark:bg-orange-base/5 blur-lg group-hover:scale-150 transition-transform duration-500"></div>
              
              {/* 连接线 */}
              <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-base/20 to-transparent dark:from-pink-base/20 group-hover:w-16 transition-all duration-500"></div>
              <div className="absolute top-1/2 -left-4 w-8 h-0.5 bg-gradient-to-l from-orange-base/20 to-transparent group-hover:w-16 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
