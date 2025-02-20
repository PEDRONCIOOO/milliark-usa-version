"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Logo, StarsImage } from "@/assets";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import Image from "next/image";


const Planet = () => {
  const planetStyle = {
    backgroundImage:
      "radial-gradient(50% 50% at 16.8% 18.3%, white, #daa520 37.7%, rgb(24,40,66))",
  };

  return (
    <div
      className="absolute size-64 md:size-96 border border-white/20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[-20px_-20px_50px_rgba(255,255,255,0.5),-20px_-20px_80px_rgba(255,255,255,0.1),0_0_50px_rgb(218,165,32,255)]"
      style={planetStyle}
    />
  );
};


const RotatingRing = ({
  size,
  borderClass,
  duration,
  rotation,
  children,
}: {
  size: string;
  borderClass: string;
  duration: number;
  rotation: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{ translateX: "-50%", translateY: "-50%" }}
      animate={{ rotate: rotation }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
      className={`absolute ${size} top-1/2 left-1/2 rounded-full ${borderClass}`}
    >
      {children}
    </motion.div>
  );
};


export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <AnimatedContent
    distance={-150}
    direction="horizontal"
    reverse={false}
    config={{ tension: 80, friction: 20 }}
    initialOpacity={0.2}
    animateOpacity
    scale={1.1}
    threshold={0.2}
    >
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${StarsImage.src})`,
        backgroundPositionY,
      }}
      animate={{ backgroundPositionX: StarsImage.width }}
      transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
    >
      {/* Background overlay with our main color integrated into the gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(218,165,32,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]"></div>

      {/* Central Planet */}
      <Planet />

      {/* Ring 1 */}
      <RotatingRing
        size="size-[344px] md:size-[580px]"
        borderClass="border border-white opacity-20"
        duration={60}
        rotation="1turn"
      >
        <div className="absolute size-2 bg-white top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="absolute size-2 bg-white top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="absolute size-5 border border-white top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2 rounded-full inline-flex justify-center items-center">
          <div className="size-2 bg-white rounded-full" />
        </div>
      </RotatingRing>

      {/* Ring 2 */}
      <RotatingRing
        size="size-[444px] md:size-[780px]"
        borderClass="border border-dashed border-white/20"
        duration={60}
        rotation="-1turn"
      />

      {/* Ring 3 */}
      <RotatingRing
        size="size-[544px] md:size-[980px]"
        borderClass="border border-white opacity-20"
        duration={90}
        rotation="1turn"
      >
        <div className="absolute size-2 bg-white top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="absolute size-2 bg-white top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
      </RotatingRing>

      {/* Content Container */}
      <div className="container relative mt-16">
        <Image className="flex rounded-xl justify-self-center shadow-lg shadow-[#ffffff42]" src={Logo} alt="Milliark Logo" width={200} height={140} />
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
        At Milliark, we deliver for investors by buildin businesses that power tomorrows economy
        </p>
        <div className="flex justify-center mt-5">
          <Link href="#what-we-offer"><Button>See Our Job</Button></Link>
        </div>
      </div>
    </motion.section>
    </AnimatedContent>
  );
};
