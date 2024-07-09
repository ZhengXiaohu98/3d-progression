import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Float } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

export const DonutScene = () => {

  const donutRef = useRef();
  const { nodes, materials } = useGLTF('/models/home/donut.glb');

  return (
    <>
      <Float rotationIntensity={0} floatingRange={[-0.08, 0.08]} speed={6}>
        <group ref={donutRef} position={[0, 0.4, 5]} >
          {Object.entries(nodes).map(([key, node]) =>
            node.isMesh ? (
              <mesh key={key} geometry={node.geometry} material={materials[node.material.name]} />
            ) : null
          )}
        </group>
      </Float>
    </>
  );
};