import React from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  institution: string;
  degree: string;
  year: string;
  details: string;
  side?: "left" | "right";
  isLast?: boolean;
}

const TimelineItem = ({
  institution = "North Western University",
  degree = "Bachelor of Science",
  year = "2022–Present",
  details = "CGPA: 3.12",
  side = "left",
  isLast = false,
}: TimelineItemProps) => {
  return (
    <div className="relative flex items-center w-full my-4 bg-background">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-0 left-1/2 w-0.5 h-full -translate-x-1/2 bg-gradient-to-b from-purple-500 to-pink-500" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-pink-500 z-10 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />

      {/* Content container */}
      <motion.div
        className={`w-5/12 ${side === "left" ? "mr-auto pr-8 text-right" : "ml-auto pl-8"}`}
        initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4 rounded-lg border border-purple-800 bg-black/50 backdrop-blur-sm hover:border-pink-500 transition-colors duration-300">
          <h3 className="text-xl font-bold text-white mb-1">{institution}</h3>
          <h4 className="text-lg text-purple-300 mb-2">{degree}</h4>
          <div className="flex flex-wrap justify-between items-center">
            <span className="text-sm text-gray-300">{year}</span>
            <span className="text-sm text-pink-400 font-medium">{details}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
