import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Gltf, OrbitControls, PerspectiveCamera, ScrollControls, Clouds, Cloud, Bounds, CameraControls } from "@react-three/drei";
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

export const Env = (props) => {

  const [selectedFrame, setSelectedFrame] = useState(null);
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
      <PerspectiveCamera makeDefault near={0.01} />
      <Rig selectedFrame={selectedFrame} />

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
          <Cloud seed={6} scale={1.5} volume={4} color="white" opacity={0.4} position={[6, 2, -96]} growth={1} speed={0.2} />
          <Cloud seed={6} scale={2.5} volume={4} color="white" opacity={0.4} position={[-12, -3, -109]} growth={1} speed={0.2} />
        </Clouds>
      </Bounds>
      {frameData.map((frame, index) => (
        <Frame
          key={index}
          id={index}
          bg={frame.bg}
          position={frame.cardPosition}
          rotation={frame.cardRotation}
          setScene={setSelectedFrame}
        >
          <PerspectiveCamera makeDefault position={frame.camPosition} />
          <ambientLight intensity={0.5} />
          <Gltf src={frame.src} scale={frame.modelScale} position={frame.modelPosition} />
        </Frame>
      ))}
      <ScrollControls pages={5} damping={0.3}>
        <PaperPlane curve={curve} />

      </ScrollControls>
    </Canvas>
  );
};

function Rig({ selectedFrame, position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0) }) {
  const { controls, scene } = useThree();

  useEffect(() => {
    if (selectedFrame) {
      const active = scene.getObjectByName(selectedFrame);
      if (active) {
        console.log(scene)
        active.parent.localToWorld(position.set(0, 0.5, 2));
        active.parent.localToWorld(focus.set(0, 0, -2))
      }
      controls?.setLookAt(...position.toArray(), ...focus.toArray(), true);
    }
  });

  return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />;
}