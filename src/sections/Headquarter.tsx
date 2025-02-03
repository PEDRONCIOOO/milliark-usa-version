"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { FloripaOffice, ZurichOficce, nyOffice, CampinasOffice, BVIoffice } from "@/assets";
// Import the images statically for Next.js optimization


type HeadquarterCardProps = {
  location: string;
  image: StaticImageData;
};

const HeadquarterCard: React.FC<HeadquarterCardProps> = ({ location, image }) => {
  // Create a Google Maps URL based on the location string
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location
  )}`;

  return (
    <div className="group relative w-full sm:w-80 h-64 sm:h-80 rounded-xl overflow-hidden shadow-2xl cursor-pointer">
      <Image
        src={image}
        alt={location}
        fill
        className="object-cover border-l-2 border-yellow-600"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
        <h3 className="text-white font-bold text-lg">{location}</h3>
      </div>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
      >
        <div className="bg-black bg-opacity-70 p-3 rounded-md">
          <span className="text-white text-base font-bold">
            View on Google Maps
          </span>
        </div>
      </a>
    </div>
  );
};

export const Headquarter = () => {
  const locations = [
    { location: "Florianópolis, Brazil", image: FloripaOffice },
    { location: "Zürich, Switzerland", image: ZurichOficce },
    { location: "Campinas, Brazil", image: CampinasOffice },
    { location: "New York, EUA", image: nyOffice },
    { location: "BVI, Brazil", image: BVIoffice },
  ];

  return (
    <div className="max-w-screen-lg ml-auto mr-auto py-20 px-4 bg-black">
      <h2 className="text-center text-5xl md:text-6xl font-bold text-white mb-12">
        Our Headquarters
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 place-items-center md:grid-cols-3 lg:grid-cols-5">
        {locations.map((loc, index) => (
          <HeadquarterCard
            key={index}
            location={loc.location}
            image={loc.image}
          />
        ))}
      </div>
    </div>
  );
};
