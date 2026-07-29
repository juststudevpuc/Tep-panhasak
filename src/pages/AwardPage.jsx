import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { motion } from "framer-motion";
import { Trophy, Calendar, Award, Image as ImageIcon } from "lucide-react";

export default function AwardPage() {
  const awardsData = [
    {
      id: 1,
      title: "យុវជន E-Gen 2025",
      institution: "The University of Cambodia",
      images: [
        "award/egen.jpg",
        "award/egen.png",
        "award/egen6.png",
        "award/egen2.jpg",
        "award/egen3.jpg",
        "award/egen4.jpg",
      ],
      year: "2025",
    },
    {
      id: 2,
      title: "Outstanding Student Award",
      institution: "The University of Cambodia",
      images: ["award/uc-cer.jpg"],
      year: "2025-2026",
    },
  ];

  // Subtle Starry Background for Dark Mode
  const StarryBackground = () => {
    const stars = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 3 + 2,
    }));

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden dark:block z-0 opacity-40">
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
            animate={{ opacity: [0.1, 0.6, 0.1] }}
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

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="min-h-screen relative bg-zinc-50 dark:bg-zinc-950 font-sans text-zinc-900 dark:text-zinc-100 pb-24 transition-colors duration-500">
      <StarryBackground />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-16">
        
        {/* Header Section */}
        <motion.section 
          initial="hidden" animate="visible" variants={fadeUp}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-sm font-semibold tracking-wide uppercase">
            <Trophy size={14} /> Recognitions & Awards
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-zinc-900 dark:text-white">
            Featured Achievements
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            A visual record of my academic milestones, competition placements, and professional recognitions throughout my journey in software engineering.
          </p>
        </motion.section>

        {/* Cards Grid */}
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          animate="visible" 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {awardsData.map((item) => (
            <PhotoProvider
              key={item.id}
              speed={() => 200}
              easing={(type) =>
                type === 2
                  ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                  : "cubic-bezier(0.34, 1.56, 0.64, 1)"
              }
            >
              <motion.div 
                variants={fadeUp}
                className="group flex flex-col bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:border-yellow-500/30 dark:hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
              >
                
                {/* Image Gallery Section */}
                <div className="relative p-2">
                  {item.images.map((imgSrc, index) => (
                    <PhotoView key={index} src={imgSrc}>
                      {index === 0 ? (
                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                          <img
                            src={imgSrc}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Photo Count Badge */}
                          {item.images.length > 1 && (
                            <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-zinc-900/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                              <ImageIcon size={12} />
                              {item.images.length} Photos
                            </div>
                          )}
                        </div>
                      ) : (
                        <span className="hidden"></span>
                      )}
                    </PhotoView>
                  ))}
                </div>

                {/* Text Content Section */}
                <div className="flex flex-col flex-1 p-6 md:p-8 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                      <Award size={16} className="text-yellow-500" />
                      {item.institution}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-bold text-zinc-700 dark:text-zinc-300">
                      <Calendar size={12} />
                      {item.year}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h3>
                </div>

              </motion.div>
            </PhotoProvider>
          ))}
        </motion.div>
        
      </div>
    </div>
  );
}