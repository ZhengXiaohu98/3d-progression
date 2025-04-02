import { projectData } from "./data.json";
import Image from "next/image";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/layout").then((mod) => mod.Footer));
import Link from "next/link.js";
import { ArrowIcon } from "@/components/icon";

const Project = () => {

  return (
    <>
      <section className="relative container pt-28 md:pt-32 lg:pt-40 dark:text-accent-white text-accent-dark">
        <h1 className="lg:text-4xl md:text-2xl text-xl font-bold font-playwrite-gbs">
          Creation
        </h1>
        <p className="mt-2 md:mt-3 lg:mt-4 tracking-wide dark:text-accent-900 text-accent-300 md:text-base text-xs font-playwrite-gbs">
          {"Just a few small creations made in my spare time."}
        </p>
        <div className="py-6 md:py-8 lg:py-12 flex flex-col min-h-[70vh]">
          {
            projectData.map(project => (
              <div key={project.name} className="py-4 md:py-8 border-b dark:border-accent-300 border-accent-ccc">
                <div className="group peer relative w-full flex flex-row justify-between items-center">
                  <div className="flex md:flex-row flex-col md:items-center gap-2 md:gap-8">
                    <h2 className="text-base md:text-xl lg:text-2xl font-bold text-accent-dark dark:text-accent-white">{project.name}</h2>
                    <div className="flex items-center gap-2">
                      {project.highlights.map((hightlight) => (
                        <span key={hightlight} className="md:text-sm text-xs px-2 py-1 border dark:border-accent-300 border-accent-ccc rounded-md md:font-bold text-accent-300 dark:text-accent-ccc">
                          {hightlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 dark:text-accent-ccc text-accent-300 group-has-checked:rotate-45 origin-center transition" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <input type="checkbox" className="absolute inset-0 opacity-0 cursor-pointer" />
                </div>
                <div className="grid grid-rows-[0fr] peer-has-checked:grid-rows-[1fr] md:peer-has-checked:pt-8 peer-has-checked:pt-4 transition-all">
                  <div className="relative overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 lg:gap-24 pr-0 lg:pr-20">
                    <div className="flex flex-col gap-2 md:gap-8 lg:gap-10 shirnk-0 w-[350px] md:w-[300px] lg:w-[420px]">
                      <p className="text-sm md:text-base lg:text-lg tracking-wide">{project.description}</p>
                      <Link href={project.url} >
                        <div className="text-sm md:text-base relative flex items-center gap-2 py-1.5 px-4 md:py-2 rounded-md w-fit dark:bg-accent-white bg-none dark:text-accent-dark text-accent-300 font-bold group/btn">
                          Visit Site
                          <ArrowIcon className="w-6 h-6 group-hover/btn:translate-x-0.5 transition" />
                        </div>
                      </Link>
                    </div>
                    <Image src={project.img} width={300} height={290} alt={project.name} className="h-[160px] md:h-full w-auto float-left transition origin-center rounded-xl border border-accent-ccc" />
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </section>
      <Footer />
    </>

  )
}

export default Project;