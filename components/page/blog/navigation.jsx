"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

const navToAnchor = (nav) => {
  return nav.replace(/\s+/g, "-").toLowerCase();
};


const handleSmoothScroll = (id) => {
  const element = document.getElementById(id);

  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

export const Navigation = () => {

  const [headings, setHeadings] = useState([]);
  const checkboxRef = useRef(null);

  const handleClickOutside = (event) => {
    if (checkboxRef.current && !checkboxRef.current.contains(event.target)) {
      checkboxRef.current.checked = false;
    }
  };

  useEffect(() => {
    const headingElements = document.querySelectorAll("h2, h3");
    const headingArray = [];

    headingElements.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      const title = heading.innerText.trim();
      const id = title.toLowerCase().replace(/\s+/g, "-");

      heading.id = id;

      const headingData = { title, level, id, children: [] };

      if (level === 2) {
        headingArray.push(headingData);
      } else {
        const parentHeading = headingArray.find(item => item.level === 2 && item.title === heading.closest("h2")?.innerText.trim());
        if (parentHeading) {
          parentHeading.children.push(headingData);
        }
      }
    });

    setHeadings(headingArray);

    // register for input close
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* large viewport */}
      <div className="sm:hidden lg:block w-[252px] sticky !top-36 shrink-0 pl-4 py-2 select-none">
        <p className="font-semibold text-lg dark:text-accent-white text-accent-dark">Table of Contents</p>
        <ul className="flex flex-col mt-4 gap-2 dark:text-accent-900 text-accent-300">
          {
            headings && headings.map((cur) => (
              <li key={cur.title} onClick={() => handleSmoothScroll(navToAnchor(cur.title))} className="cursor-pointer dark:hover:text-accent-white hover:text-accent-dark transition duration-150">
                {cur.title}
              </li>
            ))
          }
        </ul>
        <hr className="my-5 rounded-full dark:text-accent-900 text-accent-300" />
        <div className="overflow-hidden group dark:text-accent-900 text-accent-300 dark:hover:text-accent-white hover:text-accent-dark transition duration-150">
          <div className="flex items-center gap-2 -translate-x-8 group-hover:translate-x-0 transition">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
            </svg>
            <Link href="/blog" className="font-semibold text-lg">Return to Blog</Link>
          </div>
        </div>
      </div>
      {/* small viewport */}
      <div className="sm:block lg:hidden fixed bottom-8 right-6 peer group overflow-hidden scale-125">
        <svg className="sm:block lg:hidden w-6 h-6 text-dark-base" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" d="M5 6h24" className="group-has-[:checked]:translate-x-[50%] transition" />
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.2" d="M5 12h24" className="group-has-[:checked]:translate-x-[25%] transition" />
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" d="M5 18h24" />
        </svg>
        <input ref={checkboxRef} type="checkbox" className="w-full h-full absolute left-0 top-0 opacity-0" />
      </div>
      <div className="duration-200 sm:block lg:hidden fixed bottom-16 right-5 opacity-0 pointer-events-none translate-y-1 peer-has-[:checked]:pointer-events-auto peer-has-[:checked]:translate-y-0 peer-has-[:checked]:opacity-100 transition bg-white dark:bg-accent-dark py-4 px-5 rounded-lg border dark:border-accent-300 border-accent-white dark:shadow-inner dark:shadow-white/[0.05] shadow-md shadow-black/[0.05] z-[50]">
        <ul className="flex flex-col gap-3 dark:text-accent-white text-accent-300">
          {
            headings && headings.map((cur) => (
              <li key={cur.title} onClick={() => handleSmoothScroll(navToAnchor(cur.title))} className="cursor-pointer">
                {cur.title}
              </li>
            ))
          }
        </ul>
        <hr className="my-3 rounded-full dark:text-accent-white text-accent-300" />
        <div className="flex items-center gap-2 dark:text-accent-white text-accent-300">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
          </svg>
          <Link href="/blog" className="font-semibold">Return to Blog</Link>
        </div>
      </div>
    </>
  )
}
