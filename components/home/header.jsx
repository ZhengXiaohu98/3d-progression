import Image from "next/image";
import Link from "next/link";

export const Header = () => {

  const navigations = [
    {
      "nav": "Home",
      "url": "#about"
    },
    {
      "nav": "Projects",
      "url": "project"
    },
    {
      "nav": "Experience",
      "url": "#career"
    },
    {
      "nav": "Contact",
      "url": "#contact"
    }
  ]
  return (
    <header className="fixed top-0 left-0 w-full border-b border-[#333333] bg-black/75 z-[50] backdrop-blur-md">
      <div className="container h-[64px] flex items-center justify-between">
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
          <div className="flex items-center text-[#888] gap-6">
            {
              navigations.map((navigation) => (
                <Link key={navigation.nav} href={navigation.url} className="relative inline-block px-6 py-3 text-base transition hover:text-white group overflow-hidden">
                  <p className="relative tracking-wide">{navigation.nav}</p>
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 transition-all group-hover:scale-x-100 scale-x-0 w-[80%] h-[1px] rounded-full bg-white origin-center"></span>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </header>
  )
}