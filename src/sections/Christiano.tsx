"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/Button";
import TeamMemberBox from "./TeamMemberBox";
import { TeamMilliark as teamData } from "@/data/data";

import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";

export const Christiano = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const containerOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <AnimatedContent
    distance={150}
    direction="horizontal"
    reverse={false}
    delay={0.3}
    config={{ tension: 80, friction: 20 }}
    initialOpacity={0.2}
    animateOpacity
    scale={1.1}
    threshold={0.2}
    >
    <motion.div
      ref={containerRef}
      style={{ opacity: containerOpacity }}
      className="py-20 px-4 bg-black"
      id="who-we-are"
    >
      <h2 className="text-center text-5xl md:text-6xl font-bold text-white mb-12">
        Meet the Milliark Team
      </h2>
      <p className="text-lg md:text-xl text-center text-white/70 tracking-tight mt-5 mb-5 max-w-screen-md mx-auto">With a strategic vision and a focus on results, Christiano Trotta steered global companies through restructuring, management, and growth especially in international business and M&A boosting performance and turning organizations into success stories worldwide.</p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {teamData.map((member, index) => (
          <TeamMemberBox
            key={index}
            name={member.name}
            role={member.role}
            avatarImg={member.avatarImg}
          />
        ))}
      </div>
        <div className="items-center place-items-center place-content-center flex pt-8"><Link href="tel:+5511975544049"><Button>Talk To Us</Button></Link></div>
    </motion.div>
    </AnimatedContent>
  );
};
