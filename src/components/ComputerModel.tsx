"use client"; // Required for client-side rendering

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import Computer from "@/assets/models/Computer/Computer";

const ComputerModel = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([5, 5, 10]);
  const [modelScale, setModelScale] = useState([2, 2, 2]);

  // Detect screen size to apply absolute positioning for small screens
  useEffect(() => {
    const updateSize = () => {
      const isSmall = window.innerWidth < 768;
      setIsSmallDevice(isSmall);

      if (isSmall) {
        setCameraPosition([0, 0, 6]);
        setModelScale([1, 1, 1]);
      } else {
        setCameraPosition([5, 5, 10]);
        setModelScale([2, 2, 2]);
      }
    };

    // Add resize event listener
    window.addEventListener("resize", updateSize);

    // Initial size setup
    updateSize();

    // Cleanup on unmount
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className={`w-full h-screen flex items-center justify-center
        `}
    >
      <Canvas camera={{ position: cameraPosition }} className={`w-full h-full ${isSmallDevice ? 'absolute inset-0 top-0 left-0' : ''}`}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={cameraPosition} fov={50} />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            autoRotate
            autoRotateSpeed={1.5}
          />

          <ambientLight intensity={0.7} />
          <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.4} />

          <Computer scale={modelScale} />

          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ComputerModel;
