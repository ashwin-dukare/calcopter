import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react"; // optional: install lucide-react if not used yet

export default function CalculatorCard({ title, description, link }) {
  return (
    <Link
      to={link}
      className="group block p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
          {title}
        </h3>
        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition" />
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  );
}
