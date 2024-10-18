"use client";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, ScrollControls, Clouds, Cloud, Bounds, useProgress } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, Suspense } from "react";
import { PaperPlane } from "./plane";
import { Overlay } from "./overlay"
import { useTheme } from "next-themes";
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const positions = [
  new THREE.Vector3(0, 0, 5),
  new THREE.Vector3(0, 1, 0),
  new THREE.Vector3(0, 0, -6),
  new THREE.Vector3(1, -1, -10),
  new THREE.Vector3(-2, -0.5, -15),
  new THREE.Vector3(2, 0, -19),
  new THREE.Vector3(1, 1, -25),
  new THREE.Vector3(-3, 1.5, -32),
  new THREE.Vector3(1, 2, -35),
  new THREE.Vector3(2, 1, -42),
  new THREE.Vector3(-2, 1.2, -48),
  new THREE.Vector3(0, 1, -53),
  new THREE.Vector3(0, 1, -56),
];

export default function PlaneTrip() {

  const { theme } = useTheme();

  const curve = useMemo(() => new THREE.CatmullRomCurve3([...positions.map(vector => new THREE.Vector3(vector.x, vector.y, vector.z * 1.5))], false, "centripetal"), []);
  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-0.04, -0.05);
    shape.lineTo(0.04, 0.05);
    return shape;
  }, []);

  useGSAP(() => {
    gsap.from(".info-title", {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".info-div",
        start: "top 60%",
      }
    });
  });


  return (
    <main className="h-screen w-screen bg-gradient-to-b from-[#97D9E1]/50 to-[#9A9ADC]/70 dark:from-accent-dark dark:to-[#1B263B]/30">
      <Suspense fallback={<ProgressLoader />}>
        <Canvas>
          <ambientLight intensity={theme === "dark" ? 2 : 3} />
          <PerspectiveCamera makeDefault near={0.0000001} />
          <mesh>
            <extrudeGeometry
              args={[
                shape,
                {
                  steps: 1000,
                  bevelEnabled: false,
                  extrudePath: curve,
                },
              ]}
            />
            <meshStandardMaterial
              color={"white"}
              transparent
              envMapIntensity={2}
              opacity={theme === "dark" ? 0.75 : 0.01}
            />
          </mesh>
          <Bounds clip>
            <Clouds material={THREE.MeshBasicMaterial}>
              <Cloud seed={1} scale={1.5} volume={4} color={theme === "dark" ? "#ccc" : "white"} opacity={theme === "dark" ? 0.2 : 0.05} position={[-10, -2, -26]} growth={1} speed={0.2} />
              <Cloud seed={2} scale={1.5} volume={4} color={theme === "dark" ? "#ccc" : "white"} opacity={theme === "dark" ? 0.2 : 0.05} position={[11, 0, -52]} growth={3} speed={0.2} />
              <Cloud seed={3} scale={1.5} volume={3} color={theme === "dark" ? "#ccc" : "white"} opacity={theme === "dark" ? 0.2 : 0.05} position={[-10, -4, -78]} growth={4} speed={0.2} />
            </Clouds>
          </Bounds>
          <ScrollControls pages={8} damping={0.3}>
            <PaperPlane curve={curve} />
            <Overlay />
          </ScrollControls>
          <EffectComposer>
            <Bloom
              intensity={theme === "dark" ? 0.6 : 0.01}
              luminanceThreshold={theme === "dark" ? 0.1 : 1}
              luminanceSmoothing={0.9}
            />
          </EffectComposer>
        </Canvas>
      </Suspense>
      <div className="md:block sm:hidden fixed left-0 top-0 w-full h-[320px]" style={{
        background:
          "radial-gradient(ellipse 20% 50% at 40% 10%, #c2410c77, transparent), radial-gradient(ellipse 30% 60% at 45% 0%, #7e22c755, transparent)"
      }} />
    </main>
  );
}

const ProgressLoader = () => {
  const { progress } = useProgress();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center dark:bg-black/50 bg-white/50">
      <div className="lg:mt-6 sm:mt-4 font-bold lg:text-3xl md:text-2xl sm:text-xl dark:text-accent-900 text-accent-300">In Progress: {Math.trunc(progress)}%</div>
    </div>
  )
}