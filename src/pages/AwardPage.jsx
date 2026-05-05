import React from 'react';

export default function AwardPage() {
  // 1. Properly structured data array
  const awardsData = [
    {
      id: 1,
      title: "យុវជន E-Gen 2025",
      institution: "The University of Cambodia",
      imgUrl: "https://placehold.co/600x400/f59e0b/ffffff?text=E-Gen+2025", // Replace with your actual image path
      year: "2025"
    },
    // You can easily add more awards here just by adding another object
    {
      id: 2,
      title: "Outstanding Student Award",
      institution: "The University of Cambodia",
      imgUrl: "https://placehold.co/600x400/1e293b/ffffff?text=Award+Image",
      year: "2024"
    }
  ];

  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      
      {/* Page Title */}
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-3xl font-extrabold tracking-tight dark:text-gray-200 sm:text-4xl">
          My Achievements
        </h1>
        <div className="mt-4 h-2 w-24 rounded-full bg-amber-500"></div>
      </div>

      {/* Cards Grid Container */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {awardsData.map((award) => (
          /* Individual Card Design */
          <div 
            key={award.id} 
            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image Section */}
            <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
              <img
                src={award.imgUrl}
                alt={award.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Text/Content Section */}
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-medium text-amber-600">
                  {award.institution}
                </p>
                <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700 border border-amber-200">
                  {award.year}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900">
                {award.title}
              </h3>
            </div>
            
            {/* Optional Card Footer/Border */}
            <div className="h-2 w-full bg-amber-500"></div>
          </div>
        ))}
      </div>
      
    </div>
  );
}