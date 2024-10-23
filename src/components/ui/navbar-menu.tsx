"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/legacy/image";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  className,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className={cn(
          "cursor-pointer text-light-blue-100 hover:text-bright-rose-300 text-lg font-medium",
          className
        )}
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-deep-navy-500 bg-opacity-30 backdrop-filter backdrop-blur-md rounded-2xl overflow-hidden shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full bg-transparent backdrop-filter backdrop-blur-sm flex justify-center items-center w-full"
    >
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-b from-deep-navy-700/30 to-midnight-blue-800/30"></div>
      <BorderBeam
        className={cn(
          "absolute inset-0 -z-10 rounded-full animate-custom-pulse"
        )}
      />
      <div className="flex justify-center items-center gap-6 py-2">
        {children}
      </div>
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-3">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-semibold mb-1 text-bright-rose-300">
          {title}
        </h4>
        <p className="text-sm max-w-[10rem] text-light-blue-100 font-light">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-light-blue-100 hover:text-bright-rose-300 text-base font-medium"
    >
      {children}
    </Link>
  );
};