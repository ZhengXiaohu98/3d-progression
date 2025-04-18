"use client";
import { useCursor, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useMemo, useRef, useState, Dispatch, SetStateAction } from "react";
import { pages } from "./data.json";
import * as THREE from "three";
import { degToRad } from "three/src/math/MathUtils.js";

const EASING_FAC = 0.5;
const EASING_FAC_FOLD = 0.3;
const INSIDE_CURVE_STRENGTH = 0.3;
const OUTSIDE_CURVE_STRENGTH = 0.01;
const TURNING_CURVE_STRENGTH = 0.09;
const EMISSIVE_COLOR = "white";

const PAGE_WIDTH = 1.28;
const PAGE_HEIGHT = 1.71;
const PAGE_DEPTH = 0.005;
const PAGE_SEGMENTS = 30;
const SEGMENT_WIDTH = PAGE_WIDTH / PAGE_SEGMENTS;

const pageGeometry = new THREE.BoxGeometry(
  PAGE_WIDTH,
  PAGE_HEIGHT,
  PAGE_DEPTH,
  PAGE_SEGMENTS,
  2
);
pageGeometry.translate(PAGE_WIDTH / 2, 0, 0);

const position = pageGeometry.attributes.position as THREE.BufferAttribute;
const vertex = new THREE.Vector3();
const skinIndexes: number[] = [];
const skinWeights: number[] = [];

for (let i = 0; i < position.count; ++i) {
  vertex.fromBufferAttribute(position, i);
  const x = vertex.x;

  const skinIndex = Math.max(0, Math.floor(x / SEGMENT_WIDTH));
  let skinWeight = (x % SEGMENT_WIDTH) / SEGMENT_WIDTH;

  skinIndexes.push(skinIndex, skinIndex + 1, 0, 0);
  skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
}

pageGeometry.setAttribute(
  "skinIndex",
  new THREE.Uint16BufferAttribute(skinIndexes, 4)
);
pageGeometry.setAttribute(
  "skinWeight",
  new THREE.Float32BufferAttribute(skinWeights, 4)
);

const pageMaterials = [
  new THREE.MeshStandardMaterial({ color: "#fff" }),
  new THREE.MeshStandardMaterial({ color: "#111" }),
  new THREE.MeshStandardMaterial({ color: "#fff" }),
  new THREE.MeshStandardMaterial({ color: "#fff" })
];

pages.forEach((page) => {
  useTexture.preload(page.front);
  useTexture.preload(page.back);
});

interface PageProps {
  number: number;
  curPage: number;
  setCurPage: Dispatch<SetStateAction<number>>;
  opened: boolean;
  front: string;
  back: string;
}

const Page: React.FC<PageProps> = ({
  number,
  curPage,
  setCurPage,
  opened,
  front,
  back,
  ...props
}) => {
  const [highlighted, setHighlighted] = useState(false);
  useCursor(highlighted);

  const [frontPicture, backPicture] = useTexture([front, back]) as [
    THREE.Texture,
    THREE.Texture
  ];
  frontPicture.colorSpace = backPicture.colorSpace = THREE.SRGBColorSpace;

  const pageRef = useRef<THREE.Group>(null);
  const skinnedMeshRef = useRef<any>(null);
  const turnedAt = useRef(0);
  const lastOpened = useRef(opened);

  const pageSkinnedMesh = useMemo(() => {
    const bones: THREE.Bone[] = [];
    for (let i = 0; i <= PAGE_SEGMENTS; ++i) {
      const bone = new THREE.Bone();
      bone.position.x = i === 0 ? 0 : SEGMENT_WIDTH;
      if (i > 0) {
        bones[i - 1].add(bone);
      }
      bones.push(bone);
    }

    const skeleton = new THREE.Skeleton(bones);
    const materials = [
      ...pageMaterials,
      new THREE.MeshStandardMaterial({
        color: "#f1f3f3",
        map: frontPicture,
        roughness: 0.3,
        emissive: EMISSIVE_COLOR,
        emissiveIntensity: 0
      }),
      new THREE.MeshStandardMaterial({
        color: "#f1f3f3",
        map: backPicture,
        roughness: 0.3,
        emissive: EMISSIVE_COLOR,
        emissiveIntensity: 0
      })
    ];
    const mesh = new THREE.SkinnedMesh(pageGeometry, materials);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    mesh.add(skeleton.bones[0]);
    mesh.bind(skeleton);
    return mesh;
  }, [frontPicture, backPicture]);

  useFrame((_, delta) => {
    if (!skinnedMeshRef.current) return;

    const emissiveIntensity = highlighted ? 0.3 : 0;
    skinnedMeshRef.current.material[4].emissiveIntensity =
      skinnedMeshRef.current.material[5].emissiveIntensity = THREE.MathUtils.lerp(
        skinnedMeshRef.current.material[4].emissiveIntensity,
        emissiveIntensity,
        0.1
      );

    let targetRotation = curPage > number ? -Math.PI / 2 : Math.PI / 2;
    if (0 < curPage && curPage < pages.length) {
      targetRotation += degToRad(number * 0.8);
    }

    if (lastOpened.current !== opened) {
      turnedAt.current = 0;
      lastOpened.current = opened;
    }

    turnedAt.current += delta * 1000;
    let turningTime = Math.min(400, turnedAt.current) / 400;
    turningTime = Math.sin(turningTime * Math.PI);

    const bones = skinnedMeshRef.current.skeleton.bones;
    for (let i = 0; i < bones.length; ++i) {
      const target = i === 0 ? pageRef.current : bones[i];
      const insideCurveIntensity = i < 3 ? Math.sin(i * 0.2 + 1.2) : 0;
      const outsideCurveIntensity = i >= 8 ? Math.cos(i * 0.25 + 0.09) : 0;
      const turningIntensity = Math.sin(i * Math.PI * (1 / bones.length)) * turningTime;

      let rotationAngle =
        insideCurveIntensity * INSIDE_CURVE_STRENGTH * targetRotation -
        OUTSIDE_CURVE_STRENGTH * outsideCurveIntensity * targetRotation +
        TURNING_CURVE_STRENGTH * turningIntensity * targetRotation;

      let foldRotationAngle = degToRad(Math.sign(targetRotation) * 2);

      if (!opened) {
        foldRotationAngle = 0;
        rotationAngle = i === 0 ? targetRotation : 0;
      }

      easing.dampAngle(target.rotation, "y", rotationAngle, EASING_FAC, delta);
      const foldIntensity =
        i >= 8 ? Math.sin(i * Math.PI * (1 / bones.length) - 0.5) * turningTime : 0;
      easing.dampAngle(target.rotation, "x", foldRotationAngle * foldIntensity, EASING_FAC_FOLD, delta);
    }
  });

  return (
    <group
      ref={pageRef}
      {...props}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHighlighted(true);
      }}
      onPointerLeave={(e) => {
        e.stopPropagation();
        setHighlighted(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        const scrollPosition =
          document.documentElement.scrollHeight * ((opened ? number : number + 1) / (pages.length + 1));
        window.scrollTo({ top: scrollPosition });
        setHighlighted(false);
      }}
    >
      <primitive
        ref={skinnedMeshRef}
        object={pageSkinnedMesh}
        position-z={-number * PAGE_DEPTH + curPage * PAGE_DEPTH}
      />
    </group>
  );
};

interface BookProps {
  rotation: [number, number, number];
  curPage: number;
  setCurPage: Dispatch<SetStateAction<number>>;
}

export const Book: React.FC<BookProps> = ({ curPage, setCurPage, ...props }) => {
  useFrame(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

    setCurPage(Math.floor((scrollTop / (scrollHeight - clientHeight)) / (1 / pages.length)));
  });

  return (
    <group {...props}>
      {pages.map((page, idx) => (
        <Page
          key={idx}
          number={idx}
          curPage={curPage}
          setCurPage={setCurPage}
          opened={curPage > idx}
          front={page.front}
          back={page.back}
        />
      ))}
    </group>
  );
};
