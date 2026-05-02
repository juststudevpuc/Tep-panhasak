import { Card } from "@/components/ui/card";
import { ArrowUpRight, Code, Server, MessageSquare } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiLaravel,
  SiSpringboot,
  SiGit,
  SiMongodb,
  SiMysql,
  SiBootstrap,
} from "react-icons/si";
import {
  FaComments,
  FaLightbulb,
  FaChalkboardTeacher,
  FaSyncAlt,
  FaUsers,
  FaClock,
  FaBrain,
  FaHandsHelping,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function SkillPage() {
  const skills_front = [
    { name: "HTML", level: "70%", icon: <SiHtml5 color="#E34F26" /> },
    { name: "CSS", level: "60%", icon: <SiCss3 color="#1572B6" /> },
    {
      name: "JavaScript",
      level: "60%",
      icon: <SiJavascript color="#F7DF1E" />,
    },
    { name: "React", level: "70%", icon: <SiReact color="#61DAFB" /> },
    { name: "Tailwind", level: "60%", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "Bootstrap", level: "60%", icon: <SiBootstrap color="#7952B3" /> },
    { name: "Git", level: "85%", icon: <SiGit color="#F05032" /> },
  ];

  const skills_back = [
    {
      name: "Spring Boot",
      level: "50%",
      icon: <SiSpringboot color="#6DB33F" />,
    },
    { name: "Laravel", level: "70%", icon: <SiLaravel color="#FF2D20" /> },
    { name: "MongoDB", level: "70%", icon: <SiMongodb color="#47A248" /> },
    { name: "MySQL", level: "70%", icon: <SiMysql color="#4479A1" /> },
  ];

  const skills_soft = [
    {
      name: "Communication",
      level: "80%",
      icon: <FaComments color="#4A90E2" />,
    },
    {
      name: "Problem-Solving",
      level: "75%",
      icon: <FaLightbulb color="#FFB100" />,
    },
    { name: "Adaptability", level: "80%", icon: <FaSyncAlt color="#00BCD4" /> },
    { name: "Teamwork", level: "85%", icon: <FaUsers color="#50E3C2" /> },
    {
      name: "Time Management",
      level: "70%",
      icon: <FaClock color="#9013FE" />,
    },
    {
      name: "Teaching & Leadership",
      level: "80%",
      icon: <FaChalkboardTeacher color="#D0021B" />,
    },
    {
      name: "Critical Thinking",
      level: "75%",
      icon: <FaBrain color="#2EC866" />,
    },
    {
      name: "Teamwork (Collaboration)",
      level: "85%",
      icon: <FaHandsHelping color="#FF9800" />,
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
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        {/* Header */}
        <div className="space-y-4 mb-20">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-slate-400 dark:text-slate-500 font-bold">
            Capabilities
          </h2>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tighter text-slate-900 dark:text-white uppercase">
            Technical{" "}
            <span className="text-slate-400 dark:text-slate-600 font-light italic">
              Proficiency
            </span>
          </h1>
        </div>
        <StarryBackground />
        {/* Sections */}
        <div className="space-y-24">
          <SkillSection
            title="Frontend"
            icon={<Code size={18} />}
            data={skills_front}
          />
          <SkillSection
            title="Backend"
            icon={<Server size={18} />}
            data={skills_back}
          />
          <SkillSection
            title="Soft Skills"
            icon={<MessageSquare size={18} />}
            data={skills_soft}
          />
        </div>
      </div>
    </motion.div>
  );
}

function SkillSection({ title, icon, data }) {
  return (
    <div className="space-y-10">
      {/* Updated: Border colors for dark mode */}
      <div className="flex items-center gap-3 border-b border-slate-100 dark:border-white/5 pb-4">
        <span className="text-slate-900 dark:text-slate-400">{icon}</span>
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-slate-100">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((skill) => (
          <Card
            key={skill.name}
            // Updated: Card colors, borders, and hover effects for dark mode
            className="group relative border border-slate-100 dark:border-white/5 rounded-none bg-white dark:bg-[#111] p-8 min-h-[320px] flex flex-col justify-between shadow-sm hover:shadow-xl dark:hover:bg-[#161616] transition-all duration-500"
          >
            <div className="flex justify-between items-start">
              {/* Logo: Added a subtle drop-shadow filter in dark mode to make colors pop */}
              <div className="text-4xl transform transition-transform duration-500 group-hover:scale-110 filter dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
                {skill.icon}
              </div>
              <ArrowUpRight
                size={18}
                className="text-slate-200 dark:text-slate-700 group-hover:text-slate-900 dark:group-hover:text-white transition-colors"
              />
            </div>

            <div className="mt-8">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {skill.name}
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 mt-1">
                Professional Level
              </p>
            </div>

            <div className="space-y-4 pt-8">
              <div className="flex justify-between text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">
                <span>Mastery</span>
                <span className="text-slate-900 dark:text-slate-200">
                  {skill.level}
                </span>
              </div>
              {/* Updated: Progress bar colors */}
              <div className="h-[5px] w-full bg-slate-50 dark:bg-white/5">
                <div
                  className="h-full bg-slate-600 dark:bg-slate-400 transition-all duration-1000 group-hover:bg-blue-500 dark:group-hover:bg-blue-400"
                  style={{ width: skill.level }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
