'use client';
const navToAnchor = (nav) => {
  return nav.replace(/\s+/g, '-').toLowerCase();
};


const handleSmoothScroll = (id) => {
  const element = document.getElementById(id);

  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
};

const Navigation = ({ data }) => {
  return (
    <>
      {/* large viewport */}
      <div className="sm:hidden lg:block w-[272px] sticky !top-36 shrink-0 pl-4 py-2 ">
        <p className="font-semibold text-lg dark:text-accent-white text-accent-dark">Table of Contents</p>
        <ul className="flex flex-col mt-4 gap-2 dark:text-accent-900 text-accent-300">
          {
            data.map((cur) => (
              <li key={cur.nav} onClick={() => handleSmoothScroll(navToAnchor(cur.nav))} className="cursor-pointer">
                {cur.nav}
              </li>
            ))
          }
        </ul>
      </div>
      {/* small viewport */}
      <div className="sm:block lg:hidden fixed bottom-6 right-5 peer group overflow-hidden scale-125">
        <svg className="sm:block lg:hidden w-6 h-6 text-dark-base" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="1.4" d="M5 6h24" className="group-has-[:checked]:translate-x-[50%] transition" />
          <path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M5 12h24" className="group-has-[:checked]:translate-x-[25%] transition" />
          <path stroke="currentColor" stroke-linecap="round" stroke-width="1.4" d="M5 18h24" />
        </svg>
        <input type="checkbox" className="w-full h-full absolute left-0 top-0 opacity-0" />
      </div>
      <div className="duration-200 sm:block lg:hidden fixed bottom-16 right-4 opacity-0 pointer-events-none translate-y-1 peer-has-[:checked]:pointer-events-auto peer-has-[:checked]:translate-y-0 peer-has-[:checked]:opacity-100 transition bg-white dark:bg-accent-dark py-4 px-5 rounded-lg border dark:border-accent-300 border-accent-white dark:shadow-inner dark:shadow-white/[0.05] shadow-md shadow-black/[0.05]">
        <ul className="flex flex-col gap-3 dark:text-accent-white text-accent-300">
          {
            data.map((cur) => (
              <li key={cur.nav} onClick={() => handleSmoothScroll(navToAnchor(cur.nav))} className="cursor-pointer">
                {cur.nav}
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default Navigation;