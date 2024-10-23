import { gridItems } from "@/data/index";
import { useEffect } from 'react';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
const Grid = () => {
    useEffect(() => {
        // GSAP animation for the title
        gsap.fromTo(".grid-title", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });

        // GSAP animation for the grid items
        gsap.fromTo(".grid-item", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
    }, []);
    return (
        <section id="about" className="py-20">
            <motion.h2
                className="grid-title text-4xl font-bold text-center mb-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                About Me
            </motion.h2>
            <BentoGrid className="w-full">
                {gridItems.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                        img={item.img}
                        imgClassName={item.imgClassName}
                        titleClassName={item.titleClassName}
                        spareImg={item.spareImg}
                        isGif={item.isGif || false}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;