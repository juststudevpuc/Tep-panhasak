import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, GraduationCap, ArrowUpRight, Calendar, MapPin, User } from 'lucide-react';

export default function PremiumPortfolio() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans selection:bg-blue-500/30 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-32">
        
        {/* Hero Section */}
        <motion.section 
          initial="hidden" animate="visible" variants={fadeUp}
          className="max-w-4xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide uppercase">
            <User size={14} /> Full-Stack Web Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Building practical, <br className="hidden md:block"/> user-centric applications.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-3xl">
            I am a Computer Science student and software engineer with proven experience developing complete platforms from scratch using <span className="font-semibold text-zinc-900 dark:text-white">React, Laravel, and AWS Lightsail</span>. I specialize in bridging the gap between complex technical architecture—including Generative AI, IoT hardware, and biometric systems—and everyday user adoption.
          </p>
        </motion.section>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="space-y-32">
          
          {/* Experience Section - Minimalist Timeline */}
          <motion.section variants={fadeUp}>
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="text-blue-500" size={28} />
              <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            </div>
            
            <div className="space-y-12 border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 pl-8">
              {/* Experience 1 */}
              <div className="relative group">
                <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-white dark:border-zinc-950 bg-blue-500 group-hover:scale-125 transition-transform" />
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-xl font-bold">Web Developer Intern <span className="text-blue-500 mx-2">•</span> ICT Center</h3>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-zinc-500 mt-1 md:mt-0">
                    <Calendar size={14} /> March 2026 - Present
                  </span>
                </div>
                <ul className="space-y-3 text-zinc-600 dark:text-zinc-400 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                    <span>Engineered intuitive frontend dashboards for school administrators and students using React, translating UX/UI designs into clean code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                    <span>Optimized frontend performance and resolved critical system bugs through proactive cross-functional collaboration</span>
                  </li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div className="relative group">
                <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-white dark:border-zinc-950 bg-zinc-300 dark:bg-zinc-700 group-hover:bg-blue-400 transition-colors" />
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-xl font-bold">System Training Intern <span className="text-blue-500 mx-2">•</span> CheckinMe</h3>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-zinc-500 mt-1 md:mt-0">
                    <Calendar size={14} /> March 2026 - Present
                  </span>
                </div>
                <ul className="space-y-3 text-zinc-600 dark:text-zinc-400 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                    <span>Guided new clients in configuring HR policies, employee shifts, and basic payroll settings within the admin dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                    <span>Configured AI face scans utilizing the CheckinMe API to automate attendance tracking securely and efficiently</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Featured Projects - Bento Grid */}
          <motion.section variants={fadeUp}>
            <div className="flex items-center gap-3 mb-12">
              <Code className="text-indigo-500" size={28} />
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Project Card 1 */}
              <div className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-indigo-500 transition-colors">Face Recognition System</h3>
                    <ArrowUpRight className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" size={22} />
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    Engineered a local face tracking and recognition application deployed on a Raspberry Pi and ESP32 architecture. Secured a Top 10 placement in the government-organized EGEN competition.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'OpenCV', 'Raspberry Pi', 'ESP32'].map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-indigo-500 transition-colors">AI Chatbot Assistant</h3>
                    <ArrowUpRight className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" size={22} />
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    Developed a specialized mini chatbot leveraging Retrieval-Augmented Generation (RAG) to provide highly accurate user responses. Integrated Pinecone for efficient vector database management.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['RAG', 'Pinecone', 'Gemini API', 'Python'].map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Card 3 - Full Width */}
              <div className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between md:col-span-2">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-indigo-500 transition-colors">ICT Solutions Platform</h3>
                    <ArrowUpRight className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" size={22} />
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed md:w-4/5">
                    Architected and deployed a full-stack IT solutions platform to handle client service requests and technical operations. Hosted the live production environment using AWS Lightsail, configuring the server for optimal performance and secure database connections.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Laravel', 'MongoDB', 'AWS Lightsail'].map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.section>

          {/* Education Section - Clean Cards */}
          <motion.section variants={fadeUp}>
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="text-emerald-500" size={28} />
              <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30">
                <h3 className="text-xl font-bold mb-1">The University of Cambodia</h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-6">Bachelor of Science in Computer Science</p>
                <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-2"><Calendar size={16} /> Expected May 2027</div>
                  <div className="flex items-center gap-2"><MapPin size={16} /> Phnom Penh, Cambodia</div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xl font-bold mb-1">ICT Professional Training Center</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-semibold mb-6">Web Developer Certification</p>
                <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-2"><Calendar size={16} /> 2020 - 2023</div>
                  <p className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">Specialized in React, Laravel, and MongoDB database architectures.</p>
                </div>
              </div>
            </div>
          </motion.section>

        </motion.div>
      </div>
    </div>
  );
}