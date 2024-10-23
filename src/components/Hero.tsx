"use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/magic-button";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { DotPattern } from "@/components/ui/dot-pattern";
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
    useEffect(() => {
        gsap.fromTo(".hero-content", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-20 bg-transparent">
            {/* Dot Pattern with Denser Center Masking */}
            <div
                className="absolute inset-0 opacity-70 z-0"
                style={{
                    maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 80%)',
                    WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 80%)',
                }}
            >
                <svg className="w-full h-full">
                    <DotPattern
                        width={25}
                        height={25}
                        cx={9.5}
                        cy={9.5}
                        cr={1.5}
                        color="rgba(255,255,255,0.5)"
                        className="fill-gray-500"
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="relative max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center z-10 space-y-6 hero-content">
                <p className="uppercase tracking-widest text-xs text-center text-blue-300">
                    Crafting Web Solutions with Next.js
                </p>

                <TextGenerateEffect
                    words="Turning Ideas into Dynamic Digital Experiences"
                    className="text-center text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold 
                bg-gradient-to-b from-blue-400 to-purple-500 bg-clip-text text-transparent"
                />

                <p className="text-center text-sm md:text-lg lg:text-xl leading-relaxed text-gray-300">
                    Hello! I&apos;m Shraban, a passionate developer ready to bring your projects to life.
                </p>

                <a href="#about">
                    <MagicButton
                        title="View My Work"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
        </div>
    );
};

export default Hero;
