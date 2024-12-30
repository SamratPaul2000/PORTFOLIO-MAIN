"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React & NextJS Portfolio Website",
    description: "This is my portfolio Website",
    image: "/images/P1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "CSS Practice Design",
    description: "First Project.. Its a dynamic CSS design page",
    image: "/images/P2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://cssdesign-zeta.vercel.app/",
  },
  {
    id: 3,
    title: "Nomad Nest Travel & Camping Website",
    description: "Camping and travel planing responsive WebPage",
    image: "/images/P3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://nomad-nest-travel.vercel.app/",
  },
  {
    id: 4,
    title: "VR Sense",
    description: "VR Sense build tools for developers",
    image: "/images/P4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://vr-sense-webpage.vercel.app/",
  },
  {
    id: 5,
    title: "API Calling Film Directory",
    description: "API calling and CRUD operations",
    image: "/images/P5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://film-directory.vercel.app/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Simple to-do List for FUll Stack Roadmap",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
