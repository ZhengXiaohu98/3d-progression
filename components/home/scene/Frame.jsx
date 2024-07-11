"use client";
import { useRef, useState } from "react";
import { useCursor, RenderTexture, Float } from "@react-three/drei";
import { useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import { geometry } from 'maath'

extend({ RoundedPlaneGeometry: geometry.RoundedPlaneGeometry })

const Frame = ({ id, bg, setScene, width = 1.6, height = 1, children, ...props }) => {

  const portal = useRef()

  const [hovered, hover] = useState(false);
  useCursor(hovered)

  useFrame((state, dt) => {

  })

  return (
    <Float rotationIntensity={0} floatingRange={[-0.08, 0.08]} speed={3}>
      <group {...props}>
        <mesh
          name={`scene-${id}`}
          onClick={(e) => {
            e.stopPropagation();
            setScene(`scene-${id}`);
          }}
          onPointerOver={(e) => hover(true)}
          onPointerOut={() => hover(false)}>
          <roundedPlaneGeometry args={[width, height, 0.05]} />
          <meshStandardMaterial>
            <RenderTexture attach="map" ref={portal} side={THREE.DoubleSide}>
              <color attach="background" args={[bg]} />
              {children}
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </group>
    </Float>
  )
}

export default Frame;