"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { 
  FloripaOffice, 
  ZurichOficce, 
  nyOffice, 
  CampinasOffice, 
  BVIoffice 
} from "@/assets";

// Import TiltedCard from React Bits
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";
import { Button } from "@/components/Button";

type Location = {
  location: string;
  image: StaticImageData;
};

export const Headquarter = () => {
  const locations: Location[] = [
    { location: "Florianópolis, Brazil", image: FloripaOffice },
    { location: "Zürich, Switzerland", image: ZurichOficce },
    { location: "Campinas, Brazil", image: CampinasOffice },
    { location: "New York, EUA", image: nyOffice },
    { location: "BVI, British Island", image: BVIoffice },
  ];

  // Function to generate Google Maps URL
  const getMapsUrl = (location: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
  };

  return (
    <AnimatedContent
    distance={-150}
    direction="horizontal"
    reverse={false}
    delay={0.3}
    config={{ tension: 80, friction: 20 }}
    initialOpacity={0.2}
    animateOpacity
    scale={1.1}
    threshold={0.2}
    >
    <div className="max-w-screen-lg mx-auto py-20 px-4 bg-black">
      <h2 className="text-center text-5xl md:text-6xl font-bold text-white mb-12">
        Our Headquarters
      </h2>

      {/* Location Cards using TiltedCard */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 place-items-center md:grid-cols-3 lg:grid-cols-5 mt-8 rounded-3xl">
        {locations.map((loc, index) => (
          <TiltedCard
            key={index}
            imageSrc={loc.image.src} // Assuming image is a StaticImageData object with a `src` property
            altText={loc.location}
            captionText={loc.location}
            containerHeight="300px" // Match Kendrick Lamar card size
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12} // Match Kendrick Lamar's tilt effect
            scaleOnHover={1.2} // Match hover scaling
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <a
                href={getMapsUrl(loc.location)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-base font-bold underline translate-x-14 translate-y-7 absolute w-[300px]"
              >
                <Button>View on Google Maps</Button>
              </a>
            }
          />
        ))}
      </div>
    </div>
    </AnimatedContent>
  );
};

export default Headquarter;