"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/legacy/image";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import GridGlobe from "@/components/ui/grid-globe";
import animationData from "@/data/confetti.json";
import MagicButton from "@/components/ui/magic-button";
import ComputerModel from "@/components/ComputerModel";
import AnimatedLists from "@/components/AnimatedList";

// Bento Grid component
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

// Bento Grid Item component
export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  isGif = false,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  isGif?: boolean;
}) => {
  const leftLists = ["ReactJS", "Laravel", "Typescript", "Express", "GraphQL"];
  const rightLists = ["VueJS", "NuxtJS", "MySQL", "MongoDB","PostgreSQL"];
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4",
        className
      )}
      style={{
        background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`h-full ${id === 6 ? "flex justify-center" : ""}`}>
        {/* Absolute positioning for computer model */}
        {id === 1 && (
          <div className="absolute inset-0 p-4">
            <ComputerModel />
          </div>
        )}

        {/* Spare Image */}
        {spareImg && id === 5 && (
          <div className="absolute right-0 -bottom-5 w-full opacity-80">
            <Image
              src={spareImg}
              alt="Spare Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        )}

        {/* Content Section */}
        <div
          className={cn(
            titleClassName,
            "relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 group-hover/bento:translate-x-2 transition duration-200"
          )}
        >
          {/* Description */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          {/* Title */}
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>

          {/* Grid Globe */}
          {id === 2 && <GridGlobe />}

          {/* Animated Lists */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <AnimatedLists leftLists={leftLists} rightLists={rightLists} />
            </div>
          )}

          {/* Lottie Animation & Magic Button */}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 ${copied ? "block" : ""}`}>
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
