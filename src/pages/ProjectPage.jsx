import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  image,
  github,
  live,
  category,
  accentColor,
}) => {
  const handleImageClick = () => {
    if (live) window.open(live, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/50 bg-white/50 shadow-sm backdrop-blur-sm transition-all duration-500 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20">
        
        {/* Ambient Glow Background on Hover */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-30"
          style={{ backgroundColor: accentColor }}
        />

        {/* Image Section */}
        <div
          className="relative aspect-[16/10] cursor-pointer overflow-hidden bg-slate-100 dark:bg-zinc-900"
          onClick={handleImageClick}
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Dark Overlay on Hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 opacity-0 backdrop-blur-[2px] transition-all duration-500 group-hover:bg-slate-900/40 group-hover:opacity-100">
            <div className="scale-75 rounded-full bg-white/90 p-4 shadow-xl transition-transform duration-500 group-hover:scale-100 dark:bg-zinc-900/90">
              <ExternalLink size={24} className="text-slate-900 dark:text-white" />
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute left-4 top-4">
            <span className="rounded-full border border-white/20 bg-white/80 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-900 backdrop-blur-md dark:bg-black/60 dark:text-white">
              {category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-grow flex-col justify-between p-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="h-2 w-2 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }}
              />
              <h3 className="text-lg font-bold tracking-wide text-slate-900 dark:text-slate-100">
                {title}
              </h3>
            </div>
            <p className="line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
              {description}
            </p>
          </div>

          {/* Footer Actions */}
          <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6 dark:border-white/5">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="group/link flex items-center gap-2 text-slate-500 transition-colors hover:text-slate-900 dark:text-zinc-500 dark:hover:text-white"
            >
              <Github size={18} className="transition-transform group-hover/link:-translate-y-1" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Source Code
              </span>
            </a>

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-slate-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Custom Starry Background Component ---
const StarryBackground = () => {
  const stars = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden dark:block">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [0.1, 0.8, 0.1] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function ProjectPage() {
  const projects = [
    {
      title: "ICT Solutions Platform",
      category: "Full Stack / AWS",
      accentColor: "#3b82f6", // Blue
      description: "Architected and deployed a full-stack IT solutions platform to handle client service requests and technical operations. Hosted on AWS Lightsail.",
      image: "img/ict-solution.png", // Update with your actual image path
      github: "https://github.com/juststudevpuc", // Update if you have a specific repo
      live: "https://ict-solution-2.vercel.app/",
    },
    {
      title: "ICT Frontend Interface",
      category: "Frontend / React",
      accentColor: "#8b5cf6", // Purple
      description: "A modern, responsive frontend interface built for the ICT solutions ecosystem, featuring clean UI/UX and seamless data integration.",
      image: "img/ict-center.png", // Update with your actual image path
      github: "https://github.com/juststudevpuc", // Update if you have a specific repo
      live: "https://ict-front-five.vercel.app/",
    },
    {
      title: "MYPOS System",
      category: "Full Stack",
      accentColor: "#6366f1",
      description: "A professional Point of Sale system integrating Laravel for backend logic and React for a dynamic frontend. Features secure route protection for Admin and User roles.",
      image: "img/pos2.png",
      github: "https://github.com/juststudevpuc",
      live: "https://pos001.vercel.app/",
    },
    {
      title: "E-Commerce Platform",
      category: "Web App",
      accentColor: "#ec4899",
      description: "A full-scale digital storefront featuring advanced product management and a seamless multi-role authentication system built with React and Laravel.",
      image: "img/eco.png",
      github: "https://github.com/juststudevpuc",
      live: "https://eco-front-2fpz.vercel.app/",
    },
    {
      title: "Rocket Launch App",
      category: "Frontend",
      accentColor: "#06b6d4",
      description: "A high-tech interactive landing page optimized for performance. Utilizes Tailwind CSS and Framer Motion for premium-feel animations.",
      image: "img/rocket.png",
      github: "https://github.com/juststudevpuc",
      live: "https://juststudevpuc.github.io/rocket/",
    },
    {
      title: "Temperature Lab",
      category: "JavaScript",
      accentColor: "#f59e0b",
      description: "A modular, utility-driven conversion engine designed for precise temperature calculations using optimized vanilla JavaScript algorithms.",
      image: "img/temp.png",
      github: "https://github.com/juststudevpuc",
      live: "https://juststudevpuc.github.io/temp/",
    },
    {
      title: "Library Portal (Spring Boot)",
      category: "HTML / CSS / Spring",
      accentColor: "#10b981",
      description: "An academic-focused web portal implementing CRUD operations and Spring Security for authentication. Built for the COST community.",
      image: "img/spring.png",
      github: "https://github.com/juststudevpuc/library01.git",
    },
    {
      title: "COST College Portfolio",
      category: "HTML / CSS",
      accentColor: "#14b8a6",
      description: "A clean, academic-focused web portal designed with semantic HTML and modern CSS architecture for the COST community.",
      image: "img/cost.png",
      github: "https://github.com/juststudevpuc",
      live: "https://juststudevpuc.github.io/tep.panhasak/",
    },
    {
      title: "Static Dashboard",
      category: "Dashboard UI",
      accentColor: "#a855f7",
      description: "A comprehensive administrative UI kit built with core web technologies. Focuses on data visualization layouts and responsive sidebar architecture.",
      image: "img/dash.png",
      github: "https://github.com/juststudevpuc",
      live: "https://juststudevpuc.github.io/forjsmitterm/dashboad.html",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen bg-slate-50 pb-32 transition-colors duration-500 dark:bg-[#0a0a0b]"
    >
      <StarryBackground />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 lg:px-12 lg:pt-20">
        {/* Premium Header */}
        <motion.header
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 flex flex-col gap-4"
        >
          <div className="inline-flex items-center gap-2 self-start rounded-full bg-blue-100 px-4 py-1.5 dark:bg-white/5">
            <FolderGit2 size={16} className="text-blue-600 dark:text-blue-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-800 dark:text-zinc-300">
              Curated Works / 2024 - 2026
            </span>
          </div>
          <h1 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white md:text-7xl">
            Project <span className="font-light italic text-slate-400 dark:text-zinc-500">Archives</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-zinc-400">
            A comprehensive showcase of my full-stack applications, interactive interfaces, and software engineering solutions.
          </p>
        </motion.header>

        {/* Staggered Grid Layout */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}