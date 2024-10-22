"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger} from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";


export const CTA = () => {


  return (
    <>
      <section id="cta" className="relative select-none">
        <div className="container flex flex-col items-center sm:py-12 md:py-16 lg:py-24">
          <div className="lg:h-[300px] lg:w-[1024px] md:w-[500px] sm:w-full flex lg:flex-row sm:flex-col transition-all items-center lg:gap-10 md:gap-8 sm:gap-6 rounded-xl border dark:border-accent-300 border-accent-white px-10">
            <div id="plane-station" className="w-[400px] h-full shrink-0 relative">

            </div>
            <div className="glow flex flex-col gap-6 dark:text-accent-white text-accent-300">
              <p className="md:text-4xl font-bold font-playwrite-gbs">{"I’m always up for a chat."}</p>
              <Link href="mailto:zxh635148320@gmail.com" >
                <button className="px-4 py-2 bg-gradient-to-b rounded-lg from-orange-base/20 to-transparent dark:from-orange-base/40 dark:to-purple-base/40 w-fit font-bold relative">
                  zxh635148320@gmail.com
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};