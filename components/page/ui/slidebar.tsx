import Link from "next/link";

interface SlideBarProps {
}

const slideBarData = {
  "General": [
    {
      "nav": "Notice",
      "url": "/ui/notice"
    },
    {
      "nav": "Toast",
      "url": "/ui/toast"
    }
  ],
  "3d Effects": [
    {
      "nav": "3D card",
      "url": "/ui/3d-card"
    },
    {
      "nav": "3D globe",
      "url": " /ui/3d-globe "
    }
  ]
}

export const SlideBar: React.FC<SlideBarProps> = () => {
  return (
    <div className="sm:hidden h-fit w-[252px] sticky top-36 shrink-0 lg:flex flex-col gap-8">
      {
        Object.entries(slideBarData).map(([navTitle, navs]) => (
          <div key={navTitle} className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-accent-dark dark:text-accent-white">{navTitle}</h2>
            <ul>
              {
                navs.map((nav) => (
                  <Link key={nav.nav} href={nav.url}>
                    <li className="font-normal text-accent-300 dark:text-accent-aaa hover:font-semibold hover:text-accent-dark dark:hover:text-accent-white transition hover:translate-x-0.5 my-0.5">
                      {nav.nav}
                    </li>
                  </Link>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  );
};
