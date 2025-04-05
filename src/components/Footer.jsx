import React from "react";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white pt-6 pb-4">
      {/* Footer Grid Layout */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left items-center">
        {/* Branding + Info */}
        <div>
          <h2 className="text-lg font-bold">Calcopter</h2>
          <p className="text-xs">
            By{" "}
            <span className="font-semibold">Ashwin Dukare</span> with{" "}
            <span className="inline-block animate-heartbeat text-pink-300">💖</span>
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center sm:justify-center gap-4 text-sm">
          <Link to="/flight-time-battery" className="hover:underline">
            Battery Based
          </Link>
          <Link to="/flight-time-mtow" className="hover:underline">
            MTOW Based
          </Link>
          <Link to="/flight-time-motor" className="hover:underline">
            Motor Based
          </Link>
        </div>

        {/* Social */}
        <div className="flex justify-center sm:justify-end space-x-4">
          <a
            href="https://github.com/ashwindukare"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
            alt="github-link"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Separator */}
      <div className="my-4 flex justify-center">
        <div className="w-1/4 h-px bg-white/50 rounded-full" />
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-white">
        © {new Date().getFullYear()} Calcopter. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
