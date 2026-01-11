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
  // Logic for making the image clickable
  const handleImageClick = () => {
    window.open(live, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="group relative overflow-hidden border-2 rounded-xl bg-white shadow-sm transition-all duration-500 hover:shadow-3xl flex flex-col h-full">
      {/* Image Section */}
      <div
        className="relative aspect-[16/9] overflow-hidden bg-slate-100 cursor-pointer"
        onClick={handleImageClick}
      >
        <img
          src={image}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt={title}
        />

        {/* Professional Hover Overlay for Image */}
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-500 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <Earth className="text-white" size={24} />
            <span className="text-white text-[9px] font-bold uppercase tracking-[0.2em]">
              Visit Project
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex-grow space-y-4">
        <div className="space-y-1">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 group-hover:text-slate-600 transition-colors">
            {title}
          </h3>
          <div
            className="h-[2px] w-8 transition-all duration-500 group-hover:w-full"
            style={{ backgroundColor: accentColor }}
          />
        </div>

        <p className="text-xs leading-relaxed text-slate-500 font-medium line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer Actions */}
      <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-2 hover:bg-white transition-colors rounded-sm group/link"
        >
          <Github
            size={14}
            className="text-slate-400 group-hover/link:text-slate-900"
          />
          <span className="text-[9px] uppercase tracking-widest font-bold text-slate-500 group-hover/link:text-slate-900">
            Code
          </span>
        </a>

        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-slate-900 text-white transition-transform hover:scale-105 rounded-sm shadow-lg group/btn"
        >
          <span className="text-[9px] uppercase tracking-widest font-bold">
            Visit Site
          </span>
          <ExternalLink
            size={12}
            className="group-hover/btn:translate-x-0.5 transition-transform"
          />
        </a>
      </div>
    </Card>
  );
};

export default function ProjectPage() {
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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-white text-slate-700 pb-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <div className="mb-20 space-y-2">
          <p className="text-[10px] uppercase tracking-[0.5em] text-slate-400 font-bold">
            Showcase / 2024 - 2025
          </p>
          <h1 className="text-4xl lg:text-6xl font-black tracking-tighter text-slate-900 uppercase">
            Project{" "}
            <span className="text-slate-300 font-light italic text-3xl lg:text-5xl">
              Academic
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
