// components/Skills.tsx
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { technologies } from '@/data/techData';
import AnimatedBeamSkills from './AnimatedBeamSkills';
import TechCard from '@/components/TechCard';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);

    return (
        <section className="py-20 bg-transparent text-white min-h-screen">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-5xl font-bold text-center mb-16"
                    style={{ scale, opacity }}
                >
                    My Technical Skills
                </motion.h2>
                <motion.div className="relative mb-24" style={{ opacity }}>
                    <div className="flex items-center justify-center">
                        <AnimatedBeamSkills />
                    </div>
                </motion.div>
                <motion.h2
                    className="text-5xl font-bold text-center mb-16"
                    style={{ scale, opacity }}
                >
                    Why I Use Those Technologies
                </motion.h2>
                <TechDetails />
            </div>
        </section>
    );
};

const TechDetails = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const cards = gsap.utils.toArray('.tech-card');
        gsap.set(cards, { y: 100, opacity: 0 });

        ScrollTrigger.batch(cards, {
            onEnter: (batch) =>
                gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
            onLeave: (batch) =>
                gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
            onEnterBack: (batch) =>
                gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
            onLeaveBack: (batch) =>
                gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
            start: 'top 80%',
            end: 'bottom 20%',
            markers: false,
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div ref={containerRef} className="space-y-32">
            {technologies.map((tech) => (
                <TechCard key={tech.name} tech={tech} />
            ))}
        </div>
    );
};

export default Skills;
