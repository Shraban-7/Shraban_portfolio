"use client"

import React from "react";
import { useGLTF, GLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

import modelUrl from "@/assets/models/Computer/computer.glb";

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial: THREE.Mesh;
  };
  materials: {
    Material__37: THREE.Material;
  };
};

export default function Computer(props: GroupProps) {
  const { nodes, materials } = useGLTF(modelUrl) as GLTFResult;

  useGLTF.preload(modelUrl);

  return (
    <group {...props} dispose={null}>
      <group
        rotation={[-Math.PI / 2.5, 0, 0]}
        position={[0, 1.5, 0]}
      >
        <mesh
          geometry={nodes.defaultMaterial.geometry}
          material={materials.Material__37}
          rotation={[Math.PI / 2.5, 0, 0]}
        />
      </group>
    </group>
  );
}