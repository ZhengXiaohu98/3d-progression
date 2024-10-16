"use client";
import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, Float, SpotLight, useProgress } from "@react-three/drei";
import { Book } from "./Book";
import { pages } from "./data.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTheme } from 'next-themes';

const BookGallery = () => {

  const [curPage, setCurPage] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      setActivePage(Math.floor((scrollTop / (scrollHeight - clientHeight)) / (1 / pages.length)));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    const duration = 10;
    const elements = document.querySelectorAll(".text-box");
    const distance = elements[0].offsetWidth;

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { x: (index * distance) },
        {
          x: `-${distance - index * distance}px`,
          duration,
          ease: "none",
          repeat: -1,
        }
      );
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="fixed top-0 left-0 h-screen w-screen select-none transition-all" style={{ background: theme === "dark" ? "radial-gradient(#fdfdfd, #232323 80%)" : "radial-gradient(#ffffff, #fdfdfd 80%)" }}>
        <Suspense fallback={<ProgressLoader />}>
          <Canvas shadows camera={{ position: [-0.5, 1, 3], fov: 45 }}>
            <Float
              rotation-x={Math.PI / 30}
              floatIntensity={1}
              speed={2}
              rotationIntensity={1}
            >
              <Book rotation={[-Math.PI / 4, -Math.PI / 2, 0]} curPage={curPage} setCurPage={setCurPage} />
            </Float>
            <OrbitControls
              enableZoom={false}
              minAzimuthAngle={-Math.PI / 4}
              maxAzimuthAngle={Math.PI / 4}
            />
            <Environment preset="studio" environmentIntensity={0.2} />
            <directionalLight
              position={[2, 5, 2]}
              intensity={1}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-bias={-0.0001}
            />
            <SpotLight
              distance={5}
              angle={0.4}
              attenuation={3}
              anglePower={5}
              color="#FFF9C4"
              position={[0, 3.5, 0]}
              castShadow={false}
            />
            <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
              <planeGeometry args={[100, 100]} />
              <shadowMaterial transparent opacity={0.2} />
            </mesh>
          </Canvas>
        </Suspense>

        {/* Background Text START */}
        <div className="text-box absolute top-1/2 -translate-y-1/2 left-0 bg-transparent gap-8 px-8 w-max -z-10">
          <h2 className="shrink-0 text-[#232323] text-8xl rotate-2">
            Book Gallery - <span className="text-9xl italic text-transparent" style={{ WebkitTextStroke: "1px #232323", }}>by Xiaohu</span>{" "}
            <span className="text-6xl">June 27, 2024</span>
          </h2>
        </div>
        <div className="text-box absolute top-1/2 -translate-y-1/2 left-0 bg-transparent gap-8 px-8 w-max -z-10">
          <h2 className="shrink-0 text-[#232323] text-8xl rotate-2">
            Book Gallery - <span className="text-9xl italic text-transparent" style={{ WebkitTextStroke: "1px #232323", }}>by Xiaohu</span>{" "}
            <span className="text-6xl">June 27, 2024</span>
          </h2>
        </div>
        {/* Background Text END */}

        {/* Pagination START */}
        <div className="absolute z-50 sm:bottom-4 md:bottom-10 lg:bottom-12 xl:bottom-20 w-full flex flex-row justify-center items-center flex-wrap sm:gap-x-2 md:gap-x-4 sm:gap-y-1 md:gap-y-3 lg:px-20 md:px-10 sm:px-4">
          <div
            className={`hover:cursor-pointer transition md:px-4 md:py-2 sm:px-2 sm:py-1 md:text-base sm:text-sm rounded-lg ${activePage == 0 ? "bg-accent-300 text-accent-white font-bold" : "bg-transparent text-indigo-100 dark:border-accent-white border-accent-500 hover:border hover:-translate-y-1"} `}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            }}
          >
            Cover
          </div>
          {
            pages.map((cur, i) => (
              <div
                key={i}
                className={`hover:cursor-pointer transition md:px-4 md:py-2 sm:px-2 sm:py-1 md:text-base sm:text-sm rounded-lg ${activePage == i + 1 ? "bg-accent-300 text-accent-white font-bold" : "bg-transparent text-indigo-100 dark:border-accent-900 border-accent-500 hover:border hover:-translate-y-1"} `}
                onClick={() => {
                  const scrollPosition = document.documentElement.scrollHeight * (i + 1) / (pages.length + 1);
                  window.scrollTo({
                    top: scrollPosition,
                    behavior: "smooth"
                  })
                }}
              >
                {cur.pagination}
              </div>
            ))
          }
        </div>
        {/* Pagination END */}
      </div>

      {/* To create scrolling pages, the default Scrollcontrol has problem to set the current scroll position*/}
      {
        pages.map((_, i) => <div key={i} className="h-screen" />)
      }
    </div>
  )
}

export default BookGallery;


const ProgressLoader = () => {
  const { progress } = useProgress();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-black/70">
      <div className="lg:mt-6 sm:mt-4 font-bold lg:text-3xl md:text-2xl sm:text-xl text-white">In Progress: {Math.trunc(progress)}%</div>
    </div>
  )
}