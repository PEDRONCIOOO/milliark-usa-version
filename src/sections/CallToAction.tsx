"use client";
import { Button } from "@/components/Button";
import { StarsImage, GridLines } from "@/assets";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import useRelativeMousePosition from "@/hooks/useRelativeMousePosition";

import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300],
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <AnimatedContent
    distance={100}
    direction="vertical"
    reverse={false}
    delay={0.3}
    config={{ tension: 80, friction: 20 }}
    initialOpacity={0.2}
    animateOpacity
    scale={1.1}
    threshold={0.2}
    >
    <section ref={sectionRef} className="py-20 md:py-24" id="contact">
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          animate={{
            backgroundPositionX: StarsImage.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(${StarsImage.src})`,
          }}
          className="relative py-24 border border-white/15 rounded-xl overflow-hidden group"
        >
          <div
            className="absolute inset-0 bg-[rgb(218,165,32)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${GridLines.src})`,
            }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[rgb(218,165,32)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              maskImage,
              backgroundImage: `url(${GridLines.src})`,
            }}
          ></motion.div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl text-center font-medium tracking-tighter max-w-sm mx-auto">
              Milliark for everyone.
            </h2>
            <p className="text-lg md:text-xl text-center text-white/70 tracking-tight px-5 mt-5 max-w-xs mx-auto">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Link href="tel:+5511975544049"><Button>Talk To Us</Button></Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </AnimatedContent>
  );
};
