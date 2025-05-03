import React from "react";
import { motion } from "framer-motion";

interface ToolBadgeProps {
  icon: string;
  name: string;
  color?: string;
}

const ToolBadge = ({ icon, name, color = "#8A2BE2" }: ToolBadgeProps) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-40 h-[90px] rounded-xl bg-gray-900 border border-gray-800 shadow-lg p-4 cursor-pointer transition-all"
      whileHover={{
        scale: 1.05,
        boxShadow: `0 0 15px ${color}`,
        borderColor: color,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-2">
        <img src={icon} alt={name} className="w-10 h-10 object-contain" />
      </div>
      <span className="text-sm font-medium text-gray-200">{name}</span>
    </motion.div>
  );
};

export default ToolBadge;
