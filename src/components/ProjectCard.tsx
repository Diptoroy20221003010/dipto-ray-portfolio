import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  tags?: string[];
}

const ProjectCard = ({
  title = "Project Title",
  description = "This is a sample project description that highlights the key features and aspects of the work.",
  imageUrl = "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  tags = ["Design", "Branding", "UI/UX"],
}: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl overflow-hidden shadow-lg w-full max-w-md border border-purple-500/20 bg-gradient-to-b from-gray-900 to-black"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden h-48">
        <motion.div
          className="absolute inset-0 bg-black/50 opacity-0 flex items-center justify-center"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
            View Project
          </button>
        </motion.div>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-purple-900/30 text-purple-300 border-purple-500/50 hover:bg-purple-800/50"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
