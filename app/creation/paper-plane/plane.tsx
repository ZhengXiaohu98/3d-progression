"use client";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Float, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

interface PaperPlaneProps {
  curve: THREE.Curve<THREE.Vector3>;
}

export const PaperPlane: React.FC<PaperPlaneProps> = ({ curve }) => {
  const { nodes, materials } = useGLTF("/models/paper_plane_asset.glb");

  const planeRef = useRef<THREE.Group>(null);
  const scroll = useScroll();

  useFrame(({ camera }) => {
    if (curve) {
      try {
        const scrollOffset = scroll.offset;
        const point = curve.getPoint(scrollOffset);
        const tangent = curve.getTangent(scrollOffset);

        if (planeRef.current) {
          point.y += 0.8; // Adjust the Y position
          planeRef.current.position.copy(point);

          const up = new THREE.Vector3(0, -1, 0);
          const axis = new THREE.Vector3().crossVectors(up, tangent).normalize();
          const angle = Math.acos(up.dot(tangent));
          planeRef.current.quaternion.setFromAxisAngle(axis, angle);

          camera.position.copy(point.clone().add(new THREE.Vector3(0.5, 1.5, 2.5)));
          camera.lookAt(point.clone().add(tangent));
        }
      } catch (err) {
        console.log(err);
      }
    }
  });

  return (
    <>
      <Float rotationIntensity={0} floatingRange={[-0.08, 0.08]} speed={6}>
        <group ref={planeRef} position={[0, 0.4, 5]} scale={0.1} rotation={[-Math.PI / 2, 0, Math.PI]}>
          {Object.entries(nodes).map(([key, node]) => {
            const mesh = node as THREE.Mesh;
            const meshMaterial = mesh.material as any;
            return mesh.isMesh ? (
              <mesh
                key={key}
                geometry={mesh.geometry}
                material={materials[meshMaterial.name]}
              />
            ) : null;
          })}
        </group>
      </Float>
    </>
  );
};

useGLTF.preload("/models/paper_plane_asset.glb");
