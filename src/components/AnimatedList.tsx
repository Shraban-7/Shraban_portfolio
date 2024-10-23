"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLists = ({ leftLists, rightLists }) => {
    // Variants for the upward scrolling effect (left)
    const leftMarqueeVariants = {
        hidden: { y: '100%' }, // Start below
        visible: {
            y: '0%', // Move to original position
            transition: {
                duration: 5,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
            },
        },
    };

    // Variants for the downward scrolling effect (right)
    const rightMarqueeVariants = {
        hidden: { y: '-100%' }, // Start above
        visible: {
            y: '0%', // Move to original position
            transition: {
                duration: 5,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
            },
        },
    };

    return (
        <div className="flex gap-5 w-full overflow-hidden">
            {/* Left Column with Upward Marquee Effect */}
            <motion.div
                className="flex flex-col gap-3 overflow-hidden relative h-40"
                initial="hidden"
                animate="visible"
            >
                {leftLists.map((item, i) => (
                    <motion.span
                        key={i}
                        className="py-2 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]"
                        variants={leftMarqueeVariants}
                    >
                        {item}
                    </motion.span>
                ))}
                {/* Extra items for continuous effect */}
                {leftLists.map((item, i) => (
                    <motion.span
                        key={`extra-${i}`}
                        className="py-2 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]"
                        variants={leftMarqueeVariants}
                    >
                        {item}
                    </motion.span>
                ))}
            </motion.div>

            {/* Right Column with Downward Marquee Effect */}
            <motion.div
                className="flex flex-col gap-3 overflow-hidden relative h-40"
                initial="hidden"
                animate="visible"
            >
                {rightLists.map((item, i) => (
                    <motion.span
                        key={i}
                        className="py-2 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]"
                        variants={rightMarqueeVariants}
                    >
                        {item}
                    </motion.span>
                ))}
                {/* Extra items for continuous effect */}
                {rightLists.map((item, i) => (
                    <motion.span
                        key={`extra-${i}`}
                        className="py-2 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]"
                        variants={rightMarqueeVariants}
                    >
                        {item}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
};

export default AnimatedLists;
