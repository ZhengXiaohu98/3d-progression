"use client";
import { useRef, useState } from "react";
import { useCursor, RenderTexture, Float, OrbitControls, MeshPortalMaterial } from "@react-three/drei";
import { useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import { easing, geometry } from 'maath'

extend({ RoundedPlaneGeometry: geometry.RoundedPlaneGeometry })

const Frame = ({ idx, bg, selectedFrame, width = 1.61803398875, height = 1, children, ...props }) => {

  const portal = useRef()

  const [hovered, hover] = useState(false);
  useCursor(hovered)

  useFrame((state, dt) => easing.damp(portal.current, 'blend', selectedFrame == `scene-${idx}` ? 1 : 0, 0.2, dt))


  return (
    <Float rotationIntensity={0} floatingRange={[-0.08, 0.08]} speed={selectedFrame == `scene-${idx}` ? 0 : 3}>
      <group {...props}>
        <mesh
          name={`scene-${idx}`}
          onPointerOver={(e) => hover(true)}
          onPointerOut={() => hover(false)}>
          <roundedPlaneGeometry args={[width, height, 0.05]} />
          <MeshPortalMaterial  ref={portal} events={selectedFrame == `scene-${idx}`} side={THREE.DoubleSide}>
            <color attach="background" args={[bg]} />
            {children}
          </MeshPortalMaterial>
        </mesh>
      </group>
    </Float>
  )
}

export default Frame;