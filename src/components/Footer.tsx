"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data/index";
import Image from "next/legacy/image";
import MagicButton from "@/components/ui/magic-button";
import { DotPattern } from "@/components/ui/dot-pattern"; // Assuming you have this component

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      {/* Background Dot Pattern with Masking */}
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

      {/* Background Grid Image */}
     

      <div className="relative flex flex-col items-center z-20">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to elevate your <span className="text-purple">digital projects</span> with innovative solutions?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s connect and explore how my skills can bring your ideas to life.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Get in Touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>


      <div className="flex mt-16 md:flex-row flex-col justify-between items-center z-20">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Shakuat Shraban
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image
                src={info.img}
                alt="social icon"
                width={20} // Set the desired width
                height={20} // Set the desired height
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
