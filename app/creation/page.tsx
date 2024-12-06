import { projectData } from "./data.json";
import Image from "next/image";
const Footer = dynamic(() => import("@/components/layout").then((mod) => mod.Footer));
import Link from "next/link.js";
import { PageTip } from "@/components/general";
import { ArrowIcon } from "@/components/icon";
import dynamic from "next/dynamic";
const CupAnimation = dynamic(() => import("./animations"));

const Project = () => {

  return (
    <>
      <section className="relative container sm:pt-28 md:pt-32 lg:pt-40 dark:text-accent-white text-accent-dark">
        <h1 className="lg:text-4xl md:text-2xl sm:text-xl font-bold font-playwrite-gbs">
          Creation
        </h1>
        <p className="sm:mt-2 md:mt-3 lg:mt-4 tracking-wide dark:text-accent-900 text-accent-300 md:text-base sm:text-xs font-playwrite-gbs">
          {"Just a few small creations made in my spare time."}
        </p>
        <div className="sm:py-6 md:py-8 lg:py-12 flex flex-col">
          {
            projectData.map(project => (
              <div key={project.name} className="sm:py-4 md:py-8 border-b dark:border-accent-white border-accent-dark">
                <div className="group peer relative w-full flex flex-row justify-between items-center">
                  <div className="flex md:flex-row sm:flex-col md:items-center sm:gap-2 md:gap-8">
                    <h2 className="sm:text-xl md:text-xl lg:text-2xl font-bold">{project.name}</h2>
                    <div className="flex items-center gap-2">
                      {project.highlights.map((hightlight) => (
                        <span key={hightlight} className="md:text-sm sm:text-xs px-2 py-1 border dark:border-gray-dark border-gray-light rounded-md font-bold">
                          {hightlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 dark:text-accent-white text-accent-dark" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-has-[:checked]:scale-y-0 origin-center transition" />
                    <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <input type="checkbox" className="absolute inset-0 opacity-0 cursor-pointer" />
                </div>
                <div className="grid grid-rows-[0fr] peer-has-[:checked]:grid-rows-[1fr] md:peer-has-[:checked]:pt-8 sm:peer-has-[:checked]:pt-4 transition-all">
                  <div className="relative overflow-hidden flex sm:flex-col-reverse md:flex-row items-center justify-between sm:gap-6 md:gap-12 lg:gap-24 sm:pr-0 lg:pr-20">
                    <div className="flex flex-col sm:gap-2 md:gap-8 lg:gap-10 shirnk-0 sm:w-[350px] md:w-[300px] lg:w-[420px]">
                      <p className="sm:text-sm md:text-base lg:text-lg tracking-wide">{project.description}</p>
                      <Link href={project.url} >
                        <div className="sm:text-sm md:text-base relative flex items-center gap-2 sm:py-1.5 px-4 md:py-2 rounded-md w-fit dark:bg-accent-white bg-none dark:text-accent-dark text-accent-300 font-bold group/btn">
                          Visit Site
                          <ArrowIcon className="w-6 h-6 group-hover/btn:translate-x-0.5 transition" />
                        </div>
                      </Link>
                    </div>
                    <Image src={project.img} width={300} height={290} alt={project.name} className="h-full w-auto float-left transition origin-center rounded-xl" />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="w-full flex justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-40 sm:h-40 peer" viewBox="60 60 200 200">
            <ellipse rx="33.851713" ry="11.058828" transform="matrix(1.159314 0 0 0.62498 150 229.922716)" className="dark:fill-accent-300 fill-accent-900" strokeWidth="0" />
            <g id="feet" className="dark:text-white text-accent-white">
              <path d="M140.286595,186.54097v43.381745h-11.979768" transform="translate(-1.360917 0.000001)" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M140.286595,186.54097v43.381745h-11.979768" transform="matrix(-1 0 0 1 300.561219 0.000001)" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </g>
            <g id="left-arm">
              <g transform="matrix(-1 0 0 1 299.89025-.000001)" className="dark:text-white text-accent-white">
                <path d="M189.135021,170.558222c9.559267,13.576423,11.56203,23.249465,10.71436,29.019128" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M199.849381,194.948222q-2.272517.088501-3.443071,2.124043" transform="translate(0 0.000001)" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </g>
            </g>
            <g id="body" transform="translate(.000001 0)" className="origin-top">
              <path d="M99.86498,150c0-1.79844.09684-3.57451.28564-5.32339-.18685-.80354-.28564-1.64088-.28564-2.5013v-30.75266c0-6.07513,4.92487-11,11-11h78.27003c6.07513,0,11,4.92487,11,11v30.75266c0,.86041-.09879,1.69775-.28564,2.5013.1888,1.74888.28564,3.52495.28564,5.32339c0,27.38081-22.44621,49.57735-50.13502,49.57735s-50.13502-22.19653-50.13502-49.57735h.00001Z" transform="translate(.00001 0)" className="dark:fill-white fill-accent-white" strokeWidth="0" />
              <ellipse rx="1.360917" ry="2.363699" transform="translate(126.94591 128.1202)" strokeWidth="0" />
              <ellipse rx="1.360917" ry="2.363699" transform="translate(135.684432 128.1202)" strokeWidth="0" />
              <path d="M125.584993,135.21129c2.30485,2.30485,8.239319,3.1002,10.099439,0" transform="matrix(-.695175 0 0 1.37985 221.627062-52.662728)" fill="none" stroke="#000" strokeLinecap="round" />
              <ellipse rx="1.287865" ry="1.176623" transform="translate(123.476558 131.660522)" fill="#ffa6f8" strokeWidth="0" />
              <ellipse rx="1.287865" ry="1.176623" transform="translate(138.99873 131.660522)" fill="#ffa6f8" strokeWidth="0" />
              <ellipse rx="24.887302" ry="24.243499" transform="matrix(.896104 0 0 0.900706 217.537366 135.314022)" fill="none" stroke="currentColor" strokeWidth="12" className="dark:text-white text-accent-white" />
            </g>
            <g id="right-arm" transform="translate(0 0.000001)" className="dark:text-white text-accent-white">
              <path d="M189.135021,170.558222c9.559267,13.576423,11.56203,23.249465,10.71436,29.019128" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M199.849381,194.948222q-2.272517.088501-3.443071,2.124043" transform="translate(0 0.000001)" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            </g>
          </svg>
          <PageTip text="First time made an svg :3" />
        </div>
        <CupAnimation />
      </section>
      <Footer />
    </>

  )
}

export default Project;