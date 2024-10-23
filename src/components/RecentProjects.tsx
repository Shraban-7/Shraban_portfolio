"use client";

import { useEffect, useRef } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image"; // Use next/image for optimized images
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg from "@/public/images/bg.png"; // Ensure this image is correctly imported
import { projects } from "@/data/index";
import { PinContainer } from "@/components/ui/Pin";

gsap.registerPlugin(ScrollTrigger);

const RecentProjects = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();

  // GSAP Scroll Animation Setup
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".project-card"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert(); // Cleanup GSAP context on unmount
  }, []);

  return (
    <div className="py-20" ref={sectionRef} id="projects">
      {/* Framer Motion Animated Heading */}
      <motion.h2
        className="text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Recent Projects
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] project-card"
            key={item.id}
          >
            <PinContainer title="/ui.aceternity.com" href={item.href}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                  {/* Background Image */}
                  <Image
                    src={bg}
                    alt="background image"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="absolute top-0 left-0 z-0" // Ensure it covers the entire area
                  />
                </div>

                <Image
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                  width={500}
                  height={300}
                  objectFit="contain"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt={`icon-${index}`}
                        width={24}
                        height={24}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;