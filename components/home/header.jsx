import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="mx-auto max-w-[1536px] w-full h-[64px] flex items-center justify-between ">
        <div className="flex items-center gap-20">
          <Link href="/">
            <div className="flex items-center">
              <Image src="/logo.png" width={32} height={32} alt="xiaohu" className="rounded-md border border-white" />
              <svg height="32" viewBox="0 0 32 32" width="32">
                <path d="M22 5L9 28" stroke="#333" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <p className="text-white text-2xl font-bold italic">XiaoHu</p>
            </div>
          </Link>
          <div className="flex items-center text-[#888] gap-10">
            <Link href="#" className="px-6 py-3 text-sm hover:text-white group transition duration-300">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-gray-800 dark:text-[#888] group-hover:text-white transition duration-300 scale-50 translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                </svg>
                <p>Home</p>
              </div>
            </Link>
            <Link href="#" className="px-6 py-3 text-sm hover:text-white transition duration-300">Projects</Link>
            <Link href="#" className="px-6 py-3 text-sm hover:text-white transition duration-300">Experience</Link>
            <Link href="#" className="px-6 py-3 text-sm hover:text-white transition duration-300">Contact</Link>
          </div>
          <Link href="#">
            <div className="">

            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}