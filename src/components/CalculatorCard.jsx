import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CalculatorCard({ title, description, link, image }) {
  // Remove the .webp extension to build the resized image paths
  const imageBase = image ? image.replace(/\.webp$/, "") : "";

  return (
    <Link
      to={link}
      className="group block p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200"
    >
      {/* Image */}
      {image && (
        <div className="aspect-[16/9] w-full mb-4 overflow-hidden rounded-lg">
          <img
            src={`${imageBase}-800.webp`} // default fallback image
            srcSet={`
              ${imageBase}-400.webp 400w,
              ${imageBase}-800.webp 800w,
              ${imageBase}-1200.webp 1200w
            `}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt={title}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      )}

      {/* Title + Arrow */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
          {title}
        </h3>
        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition" />
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  );
}
