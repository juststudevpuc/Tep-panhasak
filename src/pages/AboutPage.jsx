import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, User } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <div className="min-h-screen bg-white text-slate-700 selection:bg-slate-100 selection:text-slate-900 pb-24">
      <div className="mx-auto max-w-5xl px-8 py-16 lg:py-24">
        {/* Header - Simple & Clean */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-3 mb-20 border-l-4 border-slate-600 pl-6"
        >
          <h1 className="text-4xl font-semibold text-slate-900 tracking-tight">
            About Me
          </h1>
          <p className="text-lg text-slate-500 font-normal">
            A look into my academic journey and professional background.
          </p>
        </motion.div>

        <motion.div
          // variants={containerVariants}
          // initial="hidden"
          // animate="visible"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="space-y-24"
        >
          {/* Summary Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3 text-slate-900 font-medium uppercase tracking-wider text-sm">
              <User size={18} className="text-slate-600" />
              Biography
            </div>
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed text-slate-600">
                Motivated and hardworking Third-year Computer Science student
                with practical experience in frontend and backend development.
                Skilled in
                <span className="text-slate-900 font-medium">
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
            <div className="flex items-center gap-3 text-slate-900 font-medium uppercase tracking-wider text-sm">
              <GraduationCap size={18} className="text-slate-600" />
              Education
            </div>
            <div className="md:col-span-2 space-y-10">
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
            <div className="flex items-center gap-3 text-slate-900 font-medium uppercase tracking-wider text-sm">
              <Briefcase size={18} className="text-slate-600" />
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

// Cleaner Item Component
function InfoItem({ title, subtitle, date, points }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap justify-between items-baseline gap-2">
        <h4 className="text-xl font-medium text-slate-900">{title}</h4>
        <span className="text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-md">
          {date}
        </span>
      </div>
      <p className="text-base text-slate-600 font-medium italic">{subtitle}</p>
      <ul className="mt-3 space-y-2">
        {points.map((point, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-slate-600 text-base leading-relaxed"
          >
            <div className="mt-2.5 h-1.5 w-1.5 rounded-full bg-slate-300 shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

// function a(){

// }
