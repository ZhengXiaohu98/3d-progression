import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, ScrollControls, Clouds, Cloud, Bounds } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import { PaperPlane } from "./PaperPlane";
import { DonutScene } from "./scene/Donut";

const positions = [
  new THREE.Vector3(0, 0, 5),
  new THREE.Vector3(-2, 1, 0),
  new THREE.Vector3(0, 0, -6),
  new THREE.Vector3(4, -1, -10),
  new THREE.Vector3(-2, -0.5, -15),
  new THREE.Vector3(6, 0, -19),
  new THREE.Vector3(1, 1, -25),
  new THREE.Vector3(-4, 1.5, -32),
  new THREE.Vector3(1, 2, -35),
  new THREE.Vector3(5, 1, -42),
  new THREE.Vector3(-2, 1.2, -48),
  new THREE.Vector3(0, 1, -53),
  new THREE.Vector3(0, 1, -56),
];

export const Env = (props) => {
  const curveRef = useRef();

  const curve = useMemo(() => new THREE.CatmullRomCurve3([...positions.map(vector => new THREE.Vector3(vector.x, vector.y, vector.z * 1.5))], false, 'centripetal'), []);
  const points = useMemo(() => curve.getPoints(1000), [curve]);
  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);


  return (
    <Canvas {...props}>
      <ambientLight intensity={2} />
      <PerspectiveCamera makeDefault near={0.0000001} />
      {/* <OrbitControls enableZoom={true} /> */}
      <line ref={curveRef} geometry={lineGeometry}>
        <lineBasicMaterial color="white" />
      </line>
      <Bounds clip>
        <Clouds material={THREE.MeshBasicMaterial}>
          <Cloud seed={3} scale={2} volume={4} color="white" opacity={0.3} position={[-3, 2, 1]} growth={1} speed={0.2} />
          <Cloud seed={3} scale={2} volume={4} color="white" opacity={0.3} position={[8, -6, -8]} growth={1} speed={0.2} />
          <Cloud seed={6} scale={1.5} volume={4} color="white" opacity={0.4} position={[-10, -2, -26]} growth={1} speed={0.2} />
          <Cloud seed={6} scale={1.5} volume={4} color="white" opacity={0.4} position={[11, -2, -38]} growth={1} speed={0.2} />
          <Cloud seed={6} scale={1.5} volume={4} color="white" opacity={0.3} position={[-11, 0, -52]} growth={1} speed={0.2} />
          <Cloud seed={6} scale={2} volume={4} color="white" opacity={0.4} position={[5, 2, -66]} growth={1} speed={0.2} />
          <Cloud seed={6} scale={1.5} volume={4} color="white" opacity={0.2} position={[-10, -4, -78]} growth={1} speed={0.2} />
          <Cloud seed={6} scale={1.5} volume={4} color="white" opacity={0.4} position={[6, 2, -90]} growth={1} speed={0.2} />
          <Cloud seed={6} scale={2.5} volume={4} color="white" opacity={0.4} position={[-12, -3, -103]} growth={1} speed={0.2} />
        </Clouds>
      </Bounds>
      <ScrollControls pages={5} damping={0.3}>
        <PaperPlane curve={curve} />
        {/* <DonutScene /> */}
      </ScrollControls>
    </Canvas>
  );
};