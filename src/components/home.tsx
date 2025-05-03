import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Facebook,
  Linkedin,
  Instagram,
  Github,
  Send,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import ProjectCard from "./ProjectCard";
import ToolBadge from "./ToolBadge";
import TimelineItem from "./TimelineItem";
import ContactForm from "./ContactForm";

const Home = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Design tools data
  const designTools = [
    { name: "Axure", icon: "🧩", url: "https://www.axure.com/" },
    { name: "Visily", icon: "🧠", url: "https://www.visily.ai/" },
    { name: "Figma", icon: "🎨", url: "https://www.figma.com/" },
    {
      name: "Adobe XD",
      icon: "📐",
      url: "https://www.adobe.com/products/xd.html",
    },
    { name: "Canva", icon: "🖼️", url: "https://www.canva.com/" },
    { name: "Miro", icon: "🧭", url: "https://miro.com/" },
    {
      name: "After Effects",
      icon: "🎬",
      url: "https://www.adobe.com/products/aftereffects.html",
    },
    { name: "Jira", icon: "🖌️", url: "https://www.coreldraw.com/" },
  ];

  // Projects data
  const projects = [
    {
      title: "Brand Identity Design",
      description:
        "Complete visual branding including logo, typography, color palette, and brand guidelines.",
      image:
        "https://images.unsplash.com/photo-1600775508114-5c30cf911a40?w=800&q=80",
      tags: ["Photoshop", "Illustrator", "Figma"],
    },
    {
      title: "Social Media Campaign",
      description:
        "Designed a complete set of social media posts for a product launch campaign.",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
      tags: ["Canva", "Photoshop", "Instagram"],
    },
    {
      title: "UI Concept for Mobile App",
      description:
        "Designed user-friendly interface and icons for a health & fitness mobile application.",
      image:
        "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&q=80",
      tags: ["Figma", "XD", "Illustrator"],
    },
  ];

  // Education data
  const education = [
    {
      institution: "North Western University,Khulna",
      degree: "Bachelor of Science",
      year: "2022–Present",
      details: "CGPA: 3.12, Final Year Student",
    },
    {
      institution: "Govt. Joybangla College, Khulna",
      degree: "Higher Secondary (HSC)",
      year: "2018–2019",
      details: "GPA: 5.00",
    },
    {
      institution: "A.C.Laha Pilot High School",
      degree: "Secondary (SSC)",
      year: "2016–2017",
      details: "GPA: 4.83",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/30 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Dipto Ray</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-purple-300 transition-colors">
            Home
          </a>
          <a href="#skills" className="hover:text-purple-300 transition-colors">
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-purple-300 transition-colors"
          >
            Projects
          </a>
          <a
            href="#education"
            className="hover:text-purple-300 transition-colors"
          >
            Education
          </a>
          <a
            href="#contact"
            className="hover:text-purple-300 transition-colors"
          >
            Contact
          </a>
        </div>
        <Button
          asChild
          variant="outline"
          className="bg-transparent border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
        >
          <a
            href="https://github.com/Diptoroy20221003010"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-4 w-4" /> GitHub Profile
          </a>
        </Button>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20"
      >
        <motion.div
          className="md:w-1/2 space-y-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Hi, I'm <span className="text-pink-500">Dipto Ray</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold">
            I am a UX/UI Designer
          </h2>
          <p className="text-lg text-gray-300 max-w-xl">
            I'm Dipto Ray, a UX/UI Designer focused on crafting user-friendly,
            accessible, and visually engaging digital experiences. I blend
            design thinking with tools like Figma and Axure to create intuitive
            interfaces that meet both user needs and business goals. I'm in my
            final year of studying Computer Science and combining tech with
            creativity to deliver impactful results.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-transform hover:scale-110"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
          </div>

          <Button className="bg-pink-600 hover:bg-pink-700 text-white" asChild>
            <a
              href="https://pdfhost.ing/docs/f3955c7b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg shadow-pink-500/20">
            <img
              src="https://i.imgur.com/wTgyfBk.jpeg"
              alt="Dipto Ray"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Design Tools Section */}
      <section id="skills" className="py-20 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Design Tools I Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {designTools.map((tool, index) => (
              <ToolBadge key={index} name={tool.name} icon={tool.icon} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/30">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Timeline Section */}
      <section id="education" className="py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="relative border-l-2 border-pink-500 pl-8 space-y-12">
            {education.map((item, index) => (
              <TimelineItem
                key={index}
                institution={item.institution}
                degree={item.degree}
                year={item.year}
                details={item.details}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/30">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <ContactForm />
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=800&q=80"
                alt="Contact illustration"
                className="max-w-full max-h-80 rounded-lg object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-black/50 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform hover:scale-110"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform hover:scale-110"
          >
            <Instagram size={20} />
          </a>
        </div>
        <p className="text-gray-400">
          Copyright © 2025 - All rights reserved by Dipto Ray.
        </p>
      </footer>
    </div>
  );
};

export default Home;
