"use client"
import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLDivElement>;
  fromRef: React.RefObject<HTMLDivElement>;
  toRef: React.RefObject<HTMLDivElement>;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  containerRef,
  fromRef,
  toRef,
}) => {
  const beamRef = useRef<SVGPathElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const updateBeam = () => {
      if (
        !containerRef.current ||
        !fromRef.current ||
        !toRef.current ||
        !beamRef.current
      )
        return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();

      const fromX = fromRect.left + fromRect.width / 2 - containerRect.left;
      const fromY = fromRect.top + fromRect.height / 2 - containerRect.top;
      const toX = toRect.left + toRect.width / 2 - containerRect.left;
      const toY = toRect.top + toRect.height / 2 - containerRect.top;

      const path = `M${fromX},${fromY} Q${(fromX + toX) / 2},${(fromY + toY) / 2 - 50
        } ${toX},${toY}`;

      beamRef.current.setAttribute("d", path);
    };

    updateBeam();
    window.addEventListener("resize", updateBeam);

    const animateBeam = async () => {
      await controls.start({
        pathLength: [0, 1],
        opacity: [0.2, 0.8, 0.2],
        transition: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        },
      });
    };

    animateBeam();

    return () => {
      window.removeEventListener("resize", updateBeam);
    };
  }, [containerRef, fromRef, toRef, controls]);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <motion.path
        ref={beamRef}
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="2"
        animate={controls}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#9333EA" />
        </linearGradient>
      </defs>
    </svg>
  );
};