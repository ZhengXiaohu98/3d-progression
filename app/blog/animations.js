"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger} from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const BlogAnimations = () => {
  useGSAP(() => {
    gsap.utils.toArray("article img").forEach(img => {
      gsap.fromTo(img, {
        opacity: .5,
        filter: "blur(6px)",
        scale: 0.95,
      }, {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        ease:"power2.inOut",
        duration: 0.6,
        scrollTrigger: {
          trigger: img,
          start: "top 90%"
        }
      })
    })
  }, []);

  return <></>;
};

export default BlogAnimations;
