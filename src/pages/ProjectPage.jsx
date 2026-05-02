import { Card } from "@/components/ui/card";
import { Github, Earth, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.div whileHover={{ y: -5 }} className="h-full">
      <Card className="group relative overflow-hidden border border-slate-200/60 dark:border-white/5 rounded-2xl bg-gray-100 dark:bg-[#111112] shadow-sm transition-all duration-500 hover:shadow-2xl dark:hover:shadow-blue-500/10 flex flex-col h-full">
        {/* Ambient Glow Background (Hidden in light mode, subtle in dark) */}
        <div
          className="absolute -top-24 -right-24 w-48 h-48 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
          style={{ backgroundColor: accentColor }}
        />

        {/* Image Section */}
        <div
          className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-zinc-800 cursor-pointer"
          onClick={handleImageClick}
        >
          <img
            src={image}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt={title}
          />

          {/* Visit Overlay */}
          <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <div className="bg-white/90 dark:bg-zinc-900/90 p-3 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
              <ExternalLink
                size={20}
                className="text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md text-[9px] font-bold uppercase tracking-widest text-slate-900 dark:text-white border border-white/20">
              {category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-grow flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: accentColor }}
              />
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">
                {title}
              </h3>
            </div>

            <p className="text-[13px] leading-relaxed text-slate-500 dark:text-zinc-400 font-medium line-clamp-3">
              {description}
            </p>
          </div>

          {/* Footer Actions */}
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-400 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-white transition-colors group/link"
            >
              <Github size={16} />
              <span className="text-[10px] uppercase tracking-widest font-bold">
                Source
              </span>
            </a>

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-black rounded-lg text-[10px] uppercase tracking-widest font-bold hover:opacity-90 transition-all active:scale-95"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default function ProjectPage() {
  // ... (keep your projects array as it is) ...
  const projects = [
    {
      title: "MYPOS System",

      category: "Full Stack",

      accentColor: "#6366f1",

      description:
        "A professional Point of Sale system integrating Laravel for backend logic and React for a dynamic frontend. Features secure route protection for Admin and User roles.",

      image: "img/pos2.png",

      github: "https://github.com/juststudevpuc",

      live: "https://pos001.vercel.app/",
    },

    {
      title: "E-Commerce Platform",

      category: "Web App",

      accentColor: "#ec4899",

      description:
        "A full-scale digital storefront featuring advanced product management and a seamless multi-role authentication system built with React and Laravel.",

      image: "img/eco.png",

      github: "https://github.com/juststudevpuc",

      live: "https://eco-front-2fpz.vercel.app/",
    },

    {
      title: "Rocket Launch App",

      category: "Frontend",

      accentColor: "#06b6d4",

      description:
        "A high-tech interactive landing page optimized for performance. Utilizes Tailwind CSS and Framer Motion for premium-feel animations.",

      image: "img/rocket.png",

      github: "https://github.com/juststudevpuc",

      live: "https://juststudevpuc.github.io/rocket/",
    },

    {
      title: "Temperature Lab",

      category: "JavaScript",

      accentColor: "#f59e0b",

      description:
        "A modular, utility-driven conversion engine designed for precise temperature calculations using optimized vanilla JavaScript algorithms.",

      image: "img/temp.png",

      github: "https://github.com/juststudevpuc",

      live: "https://juststudevpuc.github.io/temp/",
    },

    {
      title: "CRUD with Spring Boot",

      category: "HTML / CSS / JS / Spring Boot",

      accentColor: "#10b981",

      description:
        "An academic-focused web portal built with semantic HTML, modern CSS, and Spring Boot for the COST community. The application implements CRUD operations, integrates Spring Security for authentication and authorization, and uses HTML, CSS, and JavaScript for the frontend.",

      image: "img/spring.png",

      github: "https://github.com/juststudevpuc/library01.git",

      // live: "https://juststudevpuc.github.io/tep.panhasak/",
    },

    {
      title: "CRUD with Spring Boot",

      category: "HTML / CSS / JS / Spring Boot",

      accentColor: "#10b981",

      description:
        "An academic-focused web portal built with semantic HTML, modern CSS, and Spring Boot for the COST community. The application implements CRUD operations, integrates Spring Security for authentication and authorization, and uses HTML, CSS, and JavaScript for the frontend.",

      image: "img/spring.png",

      github: "https://github.com/juststudevpuc/crud_sb.git",

      // live: "https://juststudevpuc.github.io/tep.panhasak/",
    },

    {
      title: "CRUD with Spring Boot",

      category: "HTML / CSS / JS / Spring Boot",

      accentColor: "#10b981",

      description:
        "An academic-focused web portal built with semantic HTML, modern CSS, and Spring Boot for the COST community. The application implements CRUD operations, integrates Spring Security for authentication and authorization, and uses HTML, CSS, and JavaScript for the frontend.",

      image: "img/spring.png",

      github: "https://github.com/juststudevpuc/ite01.git",

      // live: "https://juststudevpuc.github.io/tep.panhasak/",
    },

    {
      title: "COST College Portfolio",

      category: "HTML / CSS",

      accentColor: "#10b981",

      description:
        "A clean, academic-focused web portal designed with semantic HTML and modern CSS architecture for the COST community.",

      image: "img/cost.png",

      github: "https://github.com/juststudevpuc",

      live: "https://juststudevpuc.github.io/tep.panhasak/",
    },

    {
      title: "Static Dashboard",

      category: "Dashboard",

      accentColor: "#8b5cf6",

      description:
        "A comprehensive administrative UI kit built with core web technologies. Focuses on data visualization layouts and responsive sidebar architecture.",

      image: "img/dash.png",

      github: "https://github.com/juststudevpuc",

      live: "https://juststudevpuc.github.io/forjsmitterm/dashboad.html",
    },
  ];
  // --- Custom Starry Background Component ---
const StarryBackground = () => {
  // Generate random stars on mount
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1, // 1px to 3px
    delay: Math.random() * 3,
    duration: Math.random() * 3 + 2, // 2s to 5s twinkle
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden dark:block z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [0.1, 0.7, 0.1] }}
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

  return (
   <motion.div
      // 1. Start invisible and slightly higher up (-50px)
      initial={{ opacity: 0, y: 50 }}
      // 2. Fade in and slide down to its normal resting position (0px)
      animate={{ opacity: 1, y: 0 }}
      // 3. Make it smooth. 0.8s looks great for page loads.
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-gray-200 dark:bg-[#0a0a0b] transition-colors duration-500 pb-24"
    >
      <StarryBackground/>
      <div className="mx-auto max-w-7xl px-8 lg:px-12 py-20">
        <header className="mb-20 flex flex-col gap-3 border-l-2 border-slate-300 dark:border-slate-800 pl-6">
          <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400 dark:text-zinc-500 font-bold">
            Curated Works / 2024 - 2026
          </p>
          <h1 className="text-4xl lg:text-6xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
            Project{" "}
            <span className="text-slate-500 dark:text-zinc-500 font-semibold italic">
              Archives
            </span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
