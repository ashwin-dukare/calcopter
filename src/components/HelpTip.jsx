import { useState, useRef, useEffect } from "react";
import { Info } from "lucide-react";

export default function HelpTip({ children }) {
  const [show, setShow] = useState(false);
  const tipRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (tipRef.current && !tipRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={tipRef}>
      <button
        onClick={() => setShow((prev) => !prev)}
        className="text-blue-600 focus:outline-none"
      >
        <Info className="w-4 h-4" />
      </button>

      {show && (
        <div className="absolute z-50 w-64 text-sm text-gray-700 bg-white border border-gray-300 p-3 rounded-md shadow-lg left-1/2 -translate-x-1/2 bottom-full mb-2">
          {children}
        </div>
      )}
    </div>
  );
}
