"use client";
import * as THREE from "three"
import { useRef, useState } from "react"
import { Canvas, extend, useFrame } from "@react-three/fiber"
import { useTexture, shaderMaterial } from "@react-three/drei"

export const ColorShiftMaterial = shaderMaterial(
  {
    u_time: 0.0,
    colorA: new THREE.Color(1, 0, 0), 
    colorB: new THREE.Color(0, 0, 1),
  },
  ` varying vec2 vUv;
    uniform float u_time;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  `
    uniform float u_time;
    uniform vec3 colorA;
    uniform vec3 colorB;
    varying vec2 vUv;

   void main() {
     vec3 color = vec3(0.0);
     float pct = abs(sin(u_time));
     color = mix(colorA, colorB, pct);
     gl_FragColor = vec4(color, 1.0);
   }
  `
)

extend({ ColorShiftMaterial })

function ShaderImage() {
  const ref = useRef()

  useFrame(({ clock }) => {
    ref.current.u_time = clock.getElapsedTime();
  })

  return (
    <mesh>
      <planeGeometry />
      <colorShiftMaterial ref={ref} toneMapped={false} />
    </mesh>
  )
}

const Shaders = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <ShaderImage />
      </Canvas>
    </div>
  )
}

export default Shaders;