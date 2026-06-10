import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function AwardPage() {
  // 1. Updated Data Structure to use an 'images' array
  const awardsData = [
    {
      id: 1,
      title: "យុវជន E-Gen 2025",
      institution: "The University of Cambodia",
      // Changed 'img' to an 'images' array containing multiple photos
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
      // Even if it's only one photo, keep it in an array for consistency
      images: ["award/uc-cer.jpg"],
      year: "2025-2026",
    },
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
        {awardsData.map((item) => (
          /* 2. Move PhotoProvider HERE so each card acts as an isolated gallery */
          <PhotoProvider
            key={item.id}
            speed={() => 100}
            easing={(type) =>
              type === 2
                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
          >
            <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              {/* Image Section Mapping */}
              {item.images.map((imgSrc, index) => (
                <PhotoView key={index} src={imgSrc}>
                  {index === 0 ? (
                    // VISIBLE UI: Only render the actual image tag for the first photo (index 0)
                    <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                      <img
                        src={imgSrc}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />

                      {/* Optional UX Bonus: Add a badge if there are multiple photos */}
                      {item.images.length > 1 && (
                        <div className="absolute top-2 right-2 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          1 / {item.images.length}
                        </div>
                      )}
                    </div>
                  ) : (
                    // HIDDEN UI: These register the rest of the photos in the lightbox carousel without breaking the card UI
                    <span className="hidden"></span>
                  )}
                </PhotoView>
              ))}

              {/* Text/Content Section */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-medium text-amber-600">
                    {item.institution}
                  </p>
                  <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700 border border-amber-200">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
              </div>

              {/* Card Footer/Border */}
              <div className="h-2 w-full bg-amber-500"></div>
            </div>
          </PhotoProvider>
        ))}
      </div>
    </div>
  );
}
