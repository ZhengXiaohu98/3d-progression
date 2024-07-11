import { useFrame } from "@react-three/fiber";
import { useGLTF, Float, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

export const PaperPlane = ({ curve, selectedFrame }) => {



  const { nodes, materials } = useGLTF('/models/home/paper_plane_asset.glb');

  const planeRef = useRef();
  const scroll = useScroll();


  useFrame(({ camera }) => {

    if (curve) {
      const scrollOffset = scroll.offset;
      const point = curve.getPoint(scrollOffset);
      const tangent = curve.getTangent(scrollOffset);

      if (planeRef.current) {
        point.y += 0.4;
        planeRef.current.position.copy(point);

        const up = new THREE.Vector3(0, -1, 0);
        const axis = new THREE.Vector3().crossVectors(up, tangent).normalize();
        const angle = Math.acos(up.dot(tangent));
        planeRef.current.quaternion.setFromAxisAngle(axis, angle);

        if (!selectedFrame) {
          camera.position.copy(point.clone().add(new THREE.Vector3(0.5, 1.5, 2.5)));
          camera.lookAt(point.clone().add(tangent));
        }
      }
    }
  });

  return (
    <>
      <Float rotationIntensity={0} floatingRange={[-0.08, 0.08]} speed={6}>
        <group ref={planeRef} position={[0, 0.4, 5]} scale={0.1} rotation={[-Math.PI / 2, 0, Math.PI]}>
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

useGLTF.preload("/models/home/paper_plane_asset.glb");
