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
  // 1. Define skills with their official brand colors
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
    {
      name: "Teamwork",

      level: "85%",

      icon: <FaUsers size={45} color="#50E3C2" />,
    },

    {
      name: "Time Management",

      level: "70%",

      icon: <FaClock size={45} color="#9013FE" />,
    },

    {
      name: "Teaching & Leadership",

      level: "80%",

      icon: <FaChalkboardTeacher size={45} color="#D0021B" />,
    },

    {
      name: "Critical Thinking",

      level: "75%",

      icon: <FaBrain size={45} color="#2EC866" />,
    },

    {
      name: "Teamwork (Collaboration)",

      level: "85%",

      icon: <FaHandsHelping size={45} color="#FF9800" />,
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
        {/* Header */}
        <div className="space-y-4 mb-20">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-slate-400 font-bold">
            Capabilities
          </h2>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tighter text-slate-900 uppercase">
            Technical{" "}
            <span className="text-slate-400 font-light italic">
              Proficiency
            </span>
          </h1>
        </div>

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
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <span className="text-slate-900">{icon}</span>
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((skill) => (
          <Card
            key={skill.name}
            className="group relative border border-slate-100 rounded-none bg-white p-8 min-h-[320px] flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="flex justify-between items-start">
              {/* Logo with original color always visible */}
              <div className="text-4xl transform transition-transform duration-500 group-hover:scale-110">
                {skill.icon}
              </div>
              <ArrowUpRight
                size={18}
                className="text-slate-200 group-hover:text-slate-900 transition-colors"
              />
            </div>

            <div className="mt-8">
              <h3 className="text-base font-semibold text-slate-900">
                {skill.name}
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">
                Professional Level
              </p>
            </div>

            <div className="space-y-4 pt-8">
              <div className="flex justify-between text-[12px] font-bold text-slate-400 uppercase tracking-tighter">
                <span>Mastery</span>
                <span className="text-slate-900">{skill.level}</span>
              </div>
              <div className="h-[5px] w-full bg-slate-50">
                <div
                  className="h-full bg-slate-600 transition-all duration-1000"
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
