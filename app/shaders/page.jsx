"use client";
import * as THREE from "three"
import { useRef, useState } from "react"
import { Canvas, extend, useFrame } from "@react-three/fiber"
import { useTexture, shaderMaterial } from "@react-three/drei"

export const ShaderMaterial = shaderMaterial(
  {
    u_time: 0.0,
  },
  ` varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  ` uniform float u_time;
    vec3 colorA = vec3(0.149,0.141,0.912);
    vec3 colorB = vec3(1.000,0.833,0.224);
    void main() {
      vec3 color = vec3(0.0);

      float pct = abs(sin(u_time));

      color = mix(colorA, colorB, pct);

      gl_FragColor.rgba = vec4(colorB,1.0);
    }`
)

extend({ ShaderMaterial })

function ShaderImage() {
  const ref = useRef()

  useFrame(({ clock }) => {
    ref.current.u_time = clock.getElapsedTime();
  })

  return (
    <mesh>
      <planeGeometry />
      <shaderMaterial ref={ref} toneMapped={false} />
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