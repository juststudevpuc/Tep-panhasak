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

export default function HomePage() {
  const skills = [
    { name: "HTML", level: "70%", icon: <SiHtml5 size={45} color="#E34F26" /> },
    { name: "CSS", level: "60%", icon: <SiCss3 size={45} color="#1572B6" /> },
    {
      name: "JavaScript",
      level: "60%",
      icon: <SiJavascript size={40} color="#F7DF1E" />,
    },
    { name: "Git", level: "85%", icon: <SiGit size={45} color="#F05032" /> },
    {
      name: "React",
      level: "70%",
      icon: <SiReact size={45} color="#61DAFB" />,
    },
    {
      name: "Tailwind",
      level: "60%",
      icon: <SiTailwindcss size={45} color="#06B6D4" />,
    },
    {
      name: "Spring Boot",
      level: "50%",
      icon: <SiSpringboot size={45} color="#6DB33F" />,
    },
    {
      name: "Laravel",
      level: "70%",
      icon: <SiLaravel size={45} color="#FF2D20" />,
    },
    {
      name: "MongoDB",
      level: "70%",
      icon: <SiMongodb size={45} color="#6DB33F" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child element
        delayChildren: 0.3, // Initial delay before starting
      },
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
    <div className="min-h-screen bg-white selection:bg-slate-900 selection:text-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-10 py-10 ">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Animated Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[7/7] overflow-hidden bg-slate-100 rounded-sm shadow-2xl">
              <img
                src="img/me2.jpg"
                className="w-full h-full object-cover"
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
            <div className="space-y-4">
              <motion.h2
                variants={itemVariants}
                className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold"
              >
                Web Developer & Student
              </motion.h2>

              <motion.h1
                variants={itemVariants}
                className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight"
              >
                Hello, I'm{" "}
                <span className="text-slate-400 font-light italic">
                  Tep Panhasak
                </span>
              </motion.h1>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed font-light max-w-xl"
            >
              Motivated and hardworking Third-year Computer Science student with
              practical experience in frontend and backend development. Skilled
              in building modern web applications.
            </motion.p>

            {/* Social Links Container */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-4"
            >
              <SocialLink
                href="https://github.com/juststudevpuc"
                icon={<Github size={10} color="#1877F2" />}
                label="GitHub"
              />
              <SocialLink
                href="https://t.me/tep_panhasak"
                icon={<Send size={10} color="#0088CC" />}
                label="Telegram"
              />
              <SocialLink
                href="http://linkedin.com/in/tep-panhasak-73420b390"
                icon={<Linkedin size={10} color="#0A66C2" />}
                label="Linkedin"
              />
              <SocialLink
                href="https://www.facebook.com/On.lySak2006"
                icon={<Facebook size={10} color="#1877F2" />}
                label="Facebook"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-slate-50/50 py-24 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-slate-400 font-bold mb-2">
              Technical
            </h2>
            <p className="text-3xl font-bold tracking-tighter text-slate-900 uppercase">
              My Tech Stack
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <Card
                key={skill.name}
                className="group relative border border-slate-100 rounded-none bg-white p-10 min-h-[100px] flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Top Section: Logo & Arrow */}
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-slate-50 rounded-lg group-hover:scale-110 transition-transform duration-500">
                    {skill.icon}
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-slate-200 group-hover:text-slate-900 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                {/* Middle: Name & Label */}
                <div className="mt-8">
                  <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-900">
                    {skill.name}
                  </h3>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">
                    Technical Expertise
                  </p>
                </div>

                {/* Bottom Section: Progress */}
                <div className="space-y-4 pt-12">
                  <div className="flex justify-between text-[10px] uppercase tracking-tighter text-slate-400 font-bold">
                    <span>Proficiency</span>
                    <span className="text-slate-900">{skill.level}</span>
                  </div>
                  <div className="h-[1.5px] w-full bg-slate-100 relative overflow-hidden">
                    <div
                      className="h-full  bg-slate-900 transition-all duration-[1500ms] ease-out"
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

function SocialLink({ href, icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -3 }} // Moves up slightly on hover
      whileTap={{ scale: 0.95 }} // Shrinks slightly when clicked
      className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 text-slate-600 rounded-none text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-140"
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  );
}
