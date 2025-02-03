// components/TeamMemberBox.tsx
import React, { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import useRelativeMousePosition from "@/hooks/useRelativeMousePosition";
import { StaticImageData } from "next/image";

type TeamMemberBoxProps = {

  name: string;

  role: string;

  avatarImg: StaticImageData;

};

const TeamMemberBox: React.FC<TeamMemberBoxProps> = ({ name, role, avatarImg }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [mouseX, mouseY] = useRelativeMousePosition(boxRef);

  // Assuming the card size is 288px x 288px (w-72/h-72)
  const rotateX = useTransform(mouseY, [0, 288], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 288], [-10, 10]);

  return (
    <motion.div
      ref={boxRef}
      style={{ rotateX, rotateY }}
      className="relative w-72 h-72 bg-white rounded-xl overflow-hidden shadow-xl cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <Image
        src={avatarImg}
        alt={name}
        width={288}
        height={288}
        className="object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
        <h3 className="text-white font-bold">{name}</h3>
        <p className="text-gray-300 text-sm">{role}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberBox;
