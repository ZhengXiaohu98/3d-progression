import { Canvas, useFrame } from "@react-three/fiber";
import { Gltf } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useEffect } from "react";

export const DonutScene = () => {

  const donutRef = useRef();


  return (
    <>
      <Gltf ref={donutRef} src="/models/home/donut.glb" scale={2} position={[0, -0.8, -4]} />
    </>
  );
};