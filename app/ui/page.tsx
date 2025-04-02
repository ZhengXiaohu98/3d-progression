"use client";

import { motion } from "motion/react";
import { Window, Text, PointLight, View, DualCompare } from "@/components/ui/effects";
import { Marquee, ToolTip, WorldMap } from "@/components/ui/general";
import { Particles } from "@/components/ui/effects";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const UI = () => {
  const { theme } = useTheme();

  return (
    <div className="grow flex flex-col items-center not-prose font-instrument-sans">
      {/* Hero Section */}
      <Window type={theme === "dark" ? "mac-dark" : "mac-light"} className="w-[350px] md:w-[600px] lg:w-[900px]">
        <div className="relative overflow-hidden flex flex-col items-center p-4 lg:p-8 w-[350px] md:w-[600px] lg:w-[900px] bg-white dark:bg-accent-dark/20 rounded-b border-x border-b border-accent-white dark:border-accent-500/40">
          <div className="relative overflow-hidden">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4 dark:text-white text-accent-dark">
              Easy UI
            </h1>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent dark:via-accent-dark/40 via-white/40 to-transparent pointer-events-none"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
          </div>
          <Text
            text="A collection of beautiful and interactive UI components"
            effect="blurIn"
            className="text-base md:text-xl text-gray-600 dark:text-gray-300 font-playwrite-gbs text-center px-2"
            staggerTime={0.05}
            duration={1}
          />
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:mt-8 w-full">
              {/* Tailwind Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                className="p-4 md:p-6 rounded-xl bg-white dark:bg-black backdrop-blur-sm border border-gray-200 dark:border-gray-800 dark:hover:border-gray-700 hover:border-gray-300"
              >
                <div className="text-2xl mb-2">✨</div>
                <h3 className="text-base md:text-lg font-semibold dark:text-white text-black mb-2">Pure Tailwind</h3>
                <p className="dark:text-gray-300 text-gray-600 text-xs md:text-sm">Built with native Tailwind classes for better customization!</p>
              </motion.div>

              {/* Motion Animation Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }}
                className="p-4 md:p-6 rounded-xl bg-white dark:bg-black backdrop-blur-sm border border-gray-200 dark:border-gray-800 dark:hover:border-gray-700 hover:border-gray-300"
              >
                <div className="text-2xl mb-2">🎨</div>
                <h3 className="text-base md:text-lg font-semibold dark:text-white text-black mb-2 whitespace-nowrap">Smooth Animations</h3>
                <p className="dark:text-gray-300 text-gray-600 text-xs md:text-sm">Fluid animations powered by motion/react!</p>
              </motion.div>

              {/* Native Code Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
                className="p-4 md:p-6 rounded-xl bg-white dark:bg-black backdrop-blur-sm border border-gray-200 dark:border-gray-800 dark:hover:border-gray-700 hover:border-gray-300"
              >
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="text-base md:text-lg font-semibold dark:text-white text-black mb-2">Copy & Paste</h3>
                <p className="dark:text-gray-300 text-gray-600 text-xs md:text-sm">No installation needed, just copy the code and customize components!</p>
              </motion.div>
            </div>
          </div>
          <Link href="/ui/world-map">
            <ToolTip follow={true} text="Click to see the world map component!">
              <WorldMap
                className="mt-6 md:mt-10 lg:w-[800px] md:w-[500px] w-[300px] dark:fill-white!"
                points={[
                  [40.7128, -74.0060, "#a855f7"],  // New York
                  [51.5074, -0.1278],   // London
                  [39.9042, 116.4074],   // Beijing
                  [48.8566, 2.3522],     // Paris
                  [35.6895, 139.6917],   // Tokyo
                  [55.7558, 37.6173],    // Moscow
                  [41.9028, 12.4964],    // Rome
                ]}
                lines={[
                  [[40.7128, -74.0060], [51.5074, -0.1278], "#16a34a"],
                  [[51.5074, -0.1278], [39.9042, 116.4074], "#7c3aed"],
                  [[48.8566, 2.3522], [35.6895, 139.6917], "#9333ea"],
                  [[55.7558, 37.6173], [40.7306, -73.9352], "#ef4444"],
                  [[40.7306, -73.9352], [41.9028, 12.4964], "#10b981"],
                  [[41.9028, 12.4964], [40.7128, -74.0060], "#6366f1"],
                ]}
                labels={[
                  ["New York", [60, 40]],
                  ["London", [-100, -30], "#a855f7"],
                  ["Beijing", [65, 80], "#ef4444"],
                  ["Paris", [-50, 40], "#ff6347"],
                  ["Tokyo", [80, 50], "#008080"],
                  ["Moscow", [-50, -150], "#800080"],
                ]}
              />
            </ToolTip>
          </Link>
          <PointLight angle={65} color={theme === "dark" ? "#ffffff" : "#f472b688"} intensity={2} className="origin-top-right left-auto right-0" />
        </div>
      </Window>

      <h2 className="text-xl md:text-2xl lg:text-3xl tracking-wider text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-400 mt-8 md:mt-12 mb-4 md:mb-8 px-4">
        Infinite Scroll Gallery
      </h2>

      <Marquee className="w-full h-32 md:h-40">
        <div className="w-32 h-32 md:w-40 md:h-40 mx-2 md:mx-5 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=60"
            alt="Crater Lake"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-32 h-32 md:w-40 md:h-40 mx-2 md:mx-5 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60"
            alt="Yosemite Valley"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-32 h-32 md:w-40 md:h-40 mx-2 md:mx-5 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?w=800&auto=format&fit=crop&q=60"
            alt="Antelope Canyon"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-32 h-32 md:w-40 md:h-40 mx-2 md:mx-5 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=800&auto=format&fit=crop&q=60"
            alt="Grand Teton"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-32 h-32 md:w-40 md:h-40 mx-2 md:mx-5 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=60"
            alt="Zion National Park"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
      </Marquee>

      <Link href="/ui/marquee">
        <div className="md:mt-10 mt-6 text-xs md:text-sm px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 transition duration-150 relative overflow-hidden dark:hover:bg-gray-900 hover:bg-gray-100">
          See Marquee Component
        </div>
      </Link>

      {/* Stars */}
      <div className="relative flex flex-col items-center mt-8 md:mt-16 px-4 md:px-12 py-10 md:py-20 border border-gray-200 dark:border-gray-800 overflow-hidden rounded-xl">
        <h2 className="relative z-1 text-xl md:text-2xl lg:text-3xl tracking-wider text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-400 mb-6 md:mb-10 px-4">
          Add stars to your project!
        </h2>
        <div className="relative z-1 flex flex-col md:flex-row items-center w-full justify-between gap-6 md:gap-10">
          <View>
            <div className="shadow-2xl dark:shadow-gray-900 flex flex-col gap-4 p-4 md:p-6 rounded-xl bg-white dark:bg-black backdrop-blur-sm border border-gray-200 dark:border-gray-800 w-full md:w-auto">
              <motion.p
                className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-base to-pink-base"
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Transition from Anywhere
              </motion.p>
            </div>
          </View>
          <DualCompare className="w-full md:w-[400px] h-20 shadow-2xl border border-gray-200 dark:border-gray-800 dark:shadow-gray-900 rounded-xl">
            <div className="dark:bg-black bg-white w-full h-full flex justify-center items-center text-lg md:text-2xl font-medium">
              Think out of the box!
            </div>
            <div className="w-full h-full flex justify-center items-center text-lg md:text-2xl font-medium font-playwrite-gbs bg-clip-text text-transparent bg-gradient-to-r from-orange-base to-pink-base bg-white dark:bg-black">
              Think out of the box!
            </div>
          </DualCompare>
        </div>
        <Particles count={100} colors={theme === "dark" ? ["#ffffff"] : ["#c2410c99", "#f472b699"]} speed={1} size={[0.1, 1]} className="absolute left-0 top-0 h-full w-full rounded-xl bg-white dark:bg-black" />
      </div>

      {/* Call to Action Section */}
      <div className="relative flex flex-col items-center mt-8 md:mt-16 px-4 md:px-12 py-10 md:py-20 border border-gray-200 dark:border-gray-800 overflow-hidden rounded-xl">
        <h2 className="relative z-1 text-xl md:text-2xl lg:text-3xl tracking-wider text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-400 mb-6 md:mb-10 px-4">
          Create Amazing Websites with EZ UI
        </h2>
        <div className="relative w-full h-[200px] md:h-[300px]">
          <svg className="w-full h-full" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M100,150 C200,50 300,250 400,150 C500,50 600,250 700,150"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-300 dark:text-gray-700"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M50,200 C150,100 250,300 350,200 C450,100 550,300 750,150"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-400 dark:text-gray-600"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />
            <motion.path
              d="M150,250 C250,150 350,350 450,250 C550,150 650,350 700,200"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-500 dark:text-gray-500"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
            />

            {/* 沿路径移动的元素 */}
            <motion.circle
              cx="0"
              cy="0"
              r="6"
              fill="#c2410c"
              initial={{ offsetDistance: "0%" }}
              whileInView={{
                offsetDistance: "100%",
                transition: { duration: 3, repeat: Infinity, repeatType: "loop", ease: "linear" }
              }}
              viewport={{ once: true }}
              style={{ offsetPath: "path('M100,150 C200,50 300,250 400,150 C500,50 600,250 700,150')" }}
            />

            <motion.circle
              cx="0"
              cy="0"
              r="4"
              fill="#7e22c7"
              initial={{ offsetDistance: "0%" }}
              whileInView={{
                offsetDistance: "100%",
                transition: { duration: 4, repeat: Infinity, repeatType: "loop", ease: "linear" }
              }}
              viewport={{ once: true }}
              style={{ offsetPath: "path('M50,200 C150,100 250,300 350,200 C450,100 550,300 750,150')" }}
            />

            <motion.circle
              cx="0"
              cy="0"
              r="8"
              fill="#f472b6"
              initial={{ offsetDistance: "0%" }}
              whileInView={{
                offsetDistance: "100%",
                transition: { duration: 5, repeat: Infinity, repeatType: "loop", ease: "linear" }
              }}
              viewport={{ once: true }}
              style={{ offsetPath: "path('M150,250 C250,150 350,350 450,250 C550,150 650,350 700,200')" }}
            />

            {/* 汇聚点动画 */}
            <motion.circle
              cx="400"
              cy="150"
              r="15"
              className="fill-orange-base/30 dark:fill-purple-base/30"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.5 }}
            />

            <motion.circle
              cx="400"
              cy="150"
              r="8"
              className="fill-orange-base dark:fill-purple-base"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.8 }}
            />
          </svg>

          {/* 沿着线条的链接按钮 */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[30%] left-[15%] transform -translate-x-1/2 -translate-y-1/2">
              <Link href="/ui/accordion">
                <div className="px-2 py-1 text-[10px] md:text-xs rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all">
                  Accordion
                </div>
              </Link>
            </div>

            <div className="absolute top-[60%] left-[30%] transform -translate-x-1/2 -translate-y-1/2">
              <Link href="/ui/dual-compare">
                <div className="px-2 py-1 text-[10px] md:text-xs rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all">
                  Compare
                </div>
              </Link>
            </div>

            <div className="absolute top-[40%] left-[45%] transform -translate-x-1/2 -translate-y-1/2">
              <Link href="/ui/float">
                <div className="px-2 py-1 text-[10px] md:text-xs rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all">
                  Float
                </div>
              </Link>
            </div>

            <div className="absolute top-[70%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
              <Link href="/ui/navigator">
                <div className="px-2 py-1 text-[10px] md:text-xs rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all">
                  Navigation
                </div>
              </Link>
            </div>

            <div className="absolute top-[30%] left-[75%] transform -translate-x-1/2 -translate-y-1/2">
              <Link href="/ui/glow">
                <div className="px-2 py-1 text-[10px] md:text-xs rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all">
                  Glow
                </div>
              </Link>
            </div>

            <div className="absolute top-[60%] left-[90%] transform -translate-x-1/2 -translate-y-1/2">
              <Link href="/ui/text">
                <div className="px-2 py-1 text-[10px] md:text-xs rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all">
                  Text
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default UI;
