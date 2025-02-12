"use client";
import { featuresTabs } from "@/data/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FeatureTab from "@/components/FeatureTab";

export const Features = () => {
  const [currentTab, setCurrentTab] = useState<number | null>(null);

  const handleSelectTab = (tabIndex: number) => {
    setCurrentTab(tabIndex);
  };

  return (
    <section className="py-20 md:py-24" id="what-we-offer">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your BUSINESS efforts.
        </h2>
        <p className="text-lg md:text-xl text-white/70 text-center tracking-tight mt-5 max-w-2xl mx-auto">
          From small startups to large enterprises, our team has
          revolutionized the way businesses approach the market.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
          {featuresTabs.map((tab, tabIndex) => (
            <FeatureTab
              key={tabIndex}
              title={tab.title}
              icon={tab.icon}
              isNew={tab.isNew}
              description={tab.description ?? ""}
              backgroundPositionX={tab.backgroundPositionX}
              backgroundPositionY={tab.backgroundPositionY}
              backgroundSizeX={tab.backgroundSizeX}
              onClick={() => handleSelectTab(tabIndex)}
              selected={currentTab === tabIndex}
            />
          ))}
        </div>

        {/* Cards */}
        <div className="mt-6 relative">
          <AnimatePresence>
            {currentTab !== null && featuresTabs[currentTab].description && (
              <motion.div
                key={currentTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-white/10 border border-white/20 rounded-xl shadow-xl text-white"
              >
                <h3 className="text-2xl font-semibold">
                  {featuresTabs[currentTab].title}
                </h3>
                <p className="mt-3 text-white/70">
                  {featuresTabs[currentTab].description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
