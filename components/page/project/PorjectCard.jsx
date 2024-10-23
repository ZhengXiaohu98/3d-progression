import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({ data }) => {
  return (
    <Link href={data.url}>
      <div className="p-4 flex-1 flex flex-col sm:gap-2 md:gap-1.5 rounded-xl dark:shadow-sm dark:shadow-white/[0.05] shadow-md shadow-black/[0.05] relative select-none group shrink-0 md:w-[500px]">
        <div className="w-full relative flex flex-col items-center lg:px-16 md:px-8 sm:px-2 lg:py-4 md:py-2 sm:py-1">
          <div className="rounded-lg relative " >
            <div className="absolute inset-0 bg-gradient-to-bl from-orange-base to-purple-base opacity-50 blur-xl" />
            <Image src={data.img} width={500} height={348} className="w-full lg:h-auto md:h-[260px] scale-105 rounded-xl relative z-[1]" alt={data.name} />
          </div>
        </div>
        <div className="flex items-center gap-2 dark:text-accent-white text-accent-300 lg:mt-0 md:mt-4 sm:mt-2">
          <svg className="w-5 h-5 mt-px" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z" />
          </svg>
          <p className="md:text-xl sm:text-lg font-bold italic tracking-wide">{data.name}</p>
        </div>
        <p className="tracking-wide md:text-base sm:text-sm">{data.description}</p>
        <div className="absolute inset-0 dark:bg-accent-dark/40 bg-accent-white/25 z-[5] flex items-center justify-center rounded-full scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:rounded-xl transition backdrop-blur-[2px]">
          <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
            <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </div>
      </div>
    </Link>

  )
}
