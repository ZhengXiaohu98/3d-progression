import { useCursor, Text, Float } from "@react-three/drei";
import * as THREE from "three";
import { useState } from "react";


export const StartBtn = ({ setStarted }) => {

  const [hovered, hover] = useState(false);
  useCursor(hovered);
  return (
    <>
      <Float rotationIntensity={0} floatingRange={[-0.04, 0.04]} speed={12}>
        <mesh
          position={[0, 2.5, 20]}
          onClick={() => { setStarted(1) }}
          onPointerOver={() => { hover(true) }}
          onPointerOut={() => hover(false)}
        >
          <Text color="#f2e9e4" anchorX="center" anchorY="middle" fontSize={0.5}>
            Start
          </Text>
        </mesh>
      </Float>
    </>
  )
}