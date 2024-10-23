"use client"
import modelUrl from "@/assets/models/Computer.glb";

import React from "react";
import { useGLTF, GLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

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
      {/* Rotate 180 degrees horizontally and increase size */}
      <group
        rotation={[-Math.PI / 2.5, 0, 0]}  // 180-degree rotation on Y-axis
        position={[0, 1.5, 0]}
  
      >
        <mesh
          geometry={nodes.defaultMaterial.geometry}
          material={materials.Material__37}
          rotation={[Math.PI / 2.5, 0, 0]} // Fine-tuning inner mesh rotation
        />
      </group>
    </group>
  );
}
