import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Gltf, OrbitControls, PerspectiveCamera, ScrollControls, Clouds, Cloud, Bounds, CameraControls, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, useState, useEffect } from "react";
import { PaperPlane } from "./PaperPlane";
import Frame from "./scene/Frame";

const positions = [
  new THREE.Vector3(0, 0, 5),
  new THREE.Vector3(-2, -2, 0),
  new THREE.Vector3(0, 0, -6),
  new THREE.Vector3(4, -1, -10),
  new THREE.Vector3(-2, -0.5, -15),
  new THREE.Vector3(6, 2, -19),
  new THREE.Vector3(1, 1, -25),
  new THREE.Vector3(-4, 0, -32),
  new THREE.Vector3(1, -1, -35),
  new THREE.Vector3(5, 1, -42),
  new THREE.Vector3(-2, 1, -48),
  new THREE.Vector3(0, 1, -53),
  new THREE.Vector3(0, 1, -57),
];

const frameData = [
  {
    modelName: "pickles",
    src: "/models/home/pickles_3d_version_of_hyuna_lees_illustration-transformed.glb",
    bg: "#e4cdac",
    cardPosition: [-3.6, -1, -2],
    cardRotation: [0, 0.25, 0],
    camPosition: [0, 0, 3],
    modelPosition: [0, -0.7, -2],
    modelScale: 8
  },
  {
    modelName: "pickles",
    src: "/models/home/pickles_3d_version_of_hyuna_lees_illustration-transformed.glb",
    bg: "#e4cdac",
    cardPosition: [4, -0.2, -18],
    cardRotation: [0, 0.2, 0],
    camPosition: [0, 0, 3],
    modelPosition: [0, -0.7, -2],
    modelScale: 8
  },
  {
    modelName: "pickles",
    src: "/models/home/pickles_3d_version_of_hyuna_lees_illustration-transformed.glb",
    bg: "#e4cdac",
    cardPosition: [1.5, 1.3, -28.5],
    cardRotation: [0, 0.2, 0],
    camPosition: [0, 0, 3],
    modelPosition: [0, -0.7, -2],
    modelScale: 8
  }
]

export const Env = ({ selectedFrame, setSelectedFrame, ...props }) => {

  const mainCameraRef = useRef(null);

  const cameraRefs = useRef([]);

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
      {/* <axesHelper args={[100]} /> */}
      <PerspectiveCamera makeDefault near={0.01} ref={mainCameraRef} />
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
          <Cloud seed={6} scale={1.5} volume={4} color="white" opacity={0.4} position={[6, 2, -96]} growth={1} speed={0.2} />
          <Cloud seed={6} scale={2.5} volume={4} color="white" opacity={0.4} position={[-12, -3, -109]} growth={1} speed={0.2} />
        </Clouds>
      </Bounds>
      {frameData.map((frame, index) => (
        <Frame
          key={index}
          idx={index}
          bg={frame.bg}
          position={frame.cardPosition}
          rotation={frame.cardRotation}
          selectedFrame={selectedFrame}
          onClick={() => {
            setSelectedFrame(`scene-${index}`)
          }}
        >
          <PerspectiveCamera ref={(el) => (cameraRefs.current[index] = el)} makeDefault near={0.01} position={frame.camPosition} />
          <OrbitControls enabled={selectedFrame == `scene-${index}`} />
          <ambientLight intensity={3} color="red" />
          <Gltf src={frame.src} scale={frame.modelScale} position={frame.modelPosition} />
        </Frame>
      ))}
      <ScrollControls pages={5} damping={0.3}>
        <Rig selectedFrame={selectedFrame} curve={curve} />
        <PaperPlane curve={curve} selectedFrame={selectedFrame} />
      </ScrollControls>
    </Canvas>
  );
};

const Rig = ({ selectedFrame, position = new THREE.Vector3(0, 0, 0.5), focus = new THREE.Vector3(0, 0, -3), curve }) => {
  const cameraControls = useRef(null);
  const scroll = useScroll();
  const { camera, scene } = useThree()


  useFrame(() => {
    if (selectedFrame) {
      return;
    }

    const scrollOffset = scroll.offset;
    const point = curve.getPoint(scrollOffset);
    const tangent = curve.getTangent(scrollOffset);
    point.y += 0.4;

    cameraControls?.current.setLookAt(...point.clone().add(new THREE.Vector3(0.5, 1.5, 2.5)).toArray(), ...point.clone().add(tangent).toArray())
  });

  useEffect(() => {
    const active = scene.getObjectByName(selectedFrame);

    if (active) {
      active.parent.localToWorld(position);
      active.parent.localToWorld(focus);
      cameraControls?.current.setLookAt(...position.toArray(), ...focus.toArray(), true)
    }

  })
  return <CameraControls ref={cameraControls}
    touches={{
      one: 0,
      two: 0,
      three: 0,
    }}
    mouseButtons={{
      left: 0,
      middle: 0,
      right: 0,
      wheel: 0,
    }}
  />
}
