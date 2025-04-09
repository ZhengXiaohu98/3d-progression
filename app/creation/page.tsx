import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icon";
import data from "./data.json";
import * as motion from "motion/react-client";

interface Project {
  name: string;
  description: string;
  img: string;
  url: string;
  highlights: string[];
}

export default function Creation() {
  const projectData = data.projectData;

  return (
    <div className="grow flex flex-col items-center not-prose font-instrument-sans pt-20">
      <div className="container flex flex-col">
        <div className="py-6 md:py-8 lg:py-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-dark dark:text-accent-white mb-2 md:mb-4">
            Creation
          </h1>
          <p className="text-sm md:text-base lg:text-lg tracking-wide text-accent-300 dark:text-accent-ccc">
            A collection of my projects and creations.
          </p>
        </div>
        
        <div className="py-6 md:py-8 lg:py-12 flex flex-col min-h-[70vh] gap-8 md:gap-12">
          {projectData.map((project: Project, index: number) => (
            <motion.div 
              key={project.name} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border dark:border-accent-300 border-accent-ccc/30 bg-white dark:bg-accent-dark/10 hover:shadow-lg dark:hover:shadow-accent-300"
            >
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-accent-dark dark:text-accent-white group-hover:text-purple-base dark:group-hover:text-pink-base transition-colors">
                      {project.name}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.highlights.map((highlight: string) => (
                        <span 
                          key={highlight} 
                          className="text-xs md:text-sm px-2 py-1 border dark:border-accent-300/50 border-accent-ccc/50 rounded-md text-accent-300 dark:text-accent-ccc bg-accent-white/50 dark:bg-accent-dark/30"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm md:text-base lg:text-lg tracking-wide text-accent-300 dark:text-accent-ccc">
                    {project.description}
                  </p>
                  
                  <Link href={project.url} className="mt-2">
                    <div className="inline-flex items-center gap-2 py-2 px-4 rounded-md bg-accent-white dark:bg-accent-dark/30 text-accent-300 dark:text-accent-ccc hover:bg-accent-ccc/10 dark:hover:bg-accent-300/10 transition-colors group/btn">
                      <span className="text-sm md:text-base font-medium">Visit Site</span>
                      <ArrowIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
                
                <div className="relative w-full md:w-1/3 h-[200px] md:h-[250px] rounded-lg overflow-hidden">
                  <Image 
                    src={project.img} 
                    alt={project.name} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}