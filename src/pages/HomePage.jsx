import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Github,
  Youtube,
  Send,
  Facebook,
  ArrowUpRight,
  Linkedin,
} from "lucide-react";
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
} from "react-icons/si";
import { motion } from "framer-motion";

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

export default function HomePage() {
  const skills = [
    { name: "HTML", level: "70%", icon: <SiHtml5 size={40} color="#E34F26" /> },
    { name: "CSS", level: "60%", icon: <SiCss3 size={40} color="#1572B6" /> },
    {
      name: "JavaScript",
      level: "60%",
      icon: <SiJavascript size={35} color="#F7DF1E" />,
    },
    { name: "Git", level: "85%", icon: <SiGit size={40} color="#F05032" /> },
    {
      name: "React",
      level: "70%",
      icon: <SiReact size={40} color="#61DAFB" />,
    },
    {
      name: "Tailwind",
      level: "60%",
      icon: <SiTailwindcss size={40} color="#06B6D4" />,
    },
    {
      name: "Spring Boot",
      level: "50%",
      icon: <SiSpringboot size={40} color="#6DB33F" />,
    },
    {
      name: "Laravel",
      level: "70%",
      icon: <SiLaravel size={40} color="#FF2D20" />,
    },
    {
      name: "MongoDB",
      level: "70%",
      icon: <SiMongodb size={40} color="#47A248" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-[#0f0f11] selection:bg-slate-900 dark:selection:bg-slate-100 selection:text-white dark:selection:text-slate-900 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-8 py-16 lg:py-24">
        {/* Starry Background (Only visible in dark mode) */}
        <StarryBackground />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Animated Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative group"
          >
            {/* Soft Ambient Glow in Dark Mode */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-emerald-600 rounded-full blur-[80px] opacity-0 dark:opacity-20 transition-opacity duration-700 pointer-events-none" />

            <div className="relative aspect-square overflow-hidden bg-slate-200 dark:bg-[#111112] rounded-3xl shadow-xl dark:shadow-none border border-slate-200 dark:border-white/5 transition-colors duration-500">
              <img
                src="img/me2.jpg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Tep Panhasak"
              />
            </div>
          </motion.div>

          {/* Animated Hero Content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-4 border-l-2 border-slate-300 dark:border-slate-800 pl-6">
              <motion.h2
                variants={itemVariants}
                className="text-[10px] uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400 font-bold"
              >
                Web Developer & Student
              </motion.h2>

              <motion.h1
                variants={itemVariants}
                className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-400 leading-tight transition-colors duration-500"
              >
                Hello, I'm <br className="hidden lg:block" />
                <span className="text-slate-400 dark:text-slate-200 font-semibold italic">
                  Tep Panhasak
                </span>
              </motion.h1>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-100 leading-relaxed font-normal max-w-xl transition-colors duration-500"
            >
              Motivated and hardworking Third-year Computer Science student with
              practical experience in frontend and backend development. Skilled
              in building modern web applications.
            </motion.p>

            {/* Social Links Container */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <SocialLink
                href="https://github.com/juststudevpuc"
                icon={<Github size={16} />}
                label="GitHub"
              />
              <SocialLink
                href="https://t.me/tep_panhasak"
                icon={<Send size={16} />}
                label="Telegram"
              />
              <SocialLink
                href="http://linkedin.com/in/tep-panhasak-73420b390"
                icon={<Linkedin size={16} />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://www.facebook.com/On.lySak2006"
                icon={<Facebook size={16} />}
                label="Facebook"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-gray-200 dark:bg-[#0f0f11] py-32 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <StarryBackground />

          <div className="mb-20 text-center flex flex-col items-center">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-slate-500 dark:text-slate-400 font-bold mb-3">
              Technical Arsenal
            </h2>
            <p className="text-4xl font-bold tracking-tighter text-slate-900 dark:text-white uppercase transition-colors duration-500">
              My Tech Stack
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <Card
                key={skill.name}
                className="group relative border border-slate-100 dark:border-white/5 rounded-2xl bg-white dark:bg-[#151516] p-8 min-h-[220px] flex flex-col justify-between shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-500"
              >
                {/* Top Section: Logo & Arrow */}
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-slate-50 dark:bg-black/50 rounded-xl group-hover:scale-110 transition-transform duration-500 filter dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.05)]">
                    {skill.icon}
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-slate-300 dark:text-slate-700 group-hover:text-slate-900 dark:group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                {/* Middle: Name */}
                <div className="mt-8">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white transition-colors duration-500">
                    {skill.name}
                  </h3>
                </div>

                {/* Bottom Section: Progress */}
                <div className="space-y-3 pt-8">
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500 font-bold">
                    <span>Proficiency</span>
                    <span className="text-slate-900 dark:text-slate-300">
                      {skill.level}
                    </span>
                  </div>
                  <div className="h-[2px] w-full bg-slate-100 dark:bg-white/10 relative overflow-hidden transition-colors duration-500">
                    <div
                      className="h-full bg-slate-900 dark:bg-slate-300 transition-all duration-[1500ms] ease-out group-hover:bg-blue-600 dark:group-hover:bg-blue-400"
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Refined Social Link Component
function SocialLink({ href, icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 px-6 py-3 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none"
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </motion.a>
  );
}
