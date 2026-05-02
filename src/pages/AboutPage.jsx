import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, User } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
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
    // Updated: Soft background colors for both modes

    <div className="min-h-screen bg-gray-200 dark:bg-[#0a0a0b] transition-colors duration-500 pb-24">
      <StarryBackground />
      <div className="mx-auto max-w-5xl px-8 py-16 lg:py-24">
        {/* Header - Balanced Border Color */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-3 mb-20 border-l-2 border-slate-300 dark:border-slate-800 pl-6"
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            About Me
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-normal">
            A look into my academic journey and professional background.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-24"
        >
          {/* Summary Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">
              <User size={14} />
              Biography
            </div>
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                Motivated and hardworking Third-year Computer Science student
                with practical experience in frontend and backend development.
                Skilled in
                <span className="text-slate-900 dark:text-slate-100 font-medium">
                  {" "}
                  React, Laravel, and Java Spring Boot
                </span>
                . I combine my technical background with communication skills
                gained through part-time teaching to build applications that are
                both functional and user-friendly.
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">
              <GraduationCap size={14} />
              Education
            </div>
            <div className="md:col-span-2 space-y-12">
              <InfoItem
                title="The University of Cambodia (UC)"
                subtitle="Bachelor of Computer Science — Third Year"
                date="2024 - Present"
                points={["GPA Year 1: 3.35", "GPA Year 2: 3.24"]}
              />
              <InfoItem
                title="Hun Sen Anksnoul High School"
                subtitle="General Secondary Education"
                date="2020 - 2023"
                points={["Graduated with Grade C"]}
              />
            </div>
          </section>

          {/* Experience Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">
              <Briefcase size={14} />
              Experience
            </div>
            <div className="md:col-span-2">
              <InfoItem
                title="Asia English Linguistics Academy"
                subtitle="English Teacher"
                date="2024 - Present"
                points={[
                  "Taught English to students at beginner and intermediate levels.",
                  "Created lesson plans and activities to improve speaking and grammar skills.",
                ]}
              />
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}

function InfoItem({ title, subtitle, date, points }) {
  return (
    <div className="flex flex-col gap-3 group">
      <div className="flex flex-wrap justify-between items-baseline gap-2">
        <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h4>
        <span className="text-[11px] font-bold text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full uppercase tracking-wider">
          {date}
        </span>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-500 font-medium uppercase tracking-wide">
        {subtitle}
      </p>
      <ul className="mt-2 space-y-3">
        {points.map((point, idx) => (
          <li
            key={idx}
            className="flex items-start gap-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed"
          >
            <div className="mt-2 h-[1px] w-4 bg-slate-300 dark:bg-slate-700 shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
