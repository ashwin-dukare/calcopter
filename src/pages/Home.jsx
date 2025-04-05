import React from "react";
import CalculatorCard from "../components/CalculatorCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const calculators = [
    {
      title: "Flight Time – Battery Based",
      description:
        "Calculate flight time using battery specs (capacity & voltage) and average hover power consumption. Ideal when motor hover wattage is known.",
      link: "/flight-time-battery",
    },
    {
      title: "Flight Time – MTOW Based",
      description:
        "Estimate endurance based on max takeoff weight (MTOW), using thrust-to-weight ratio and battery specs. Great for complete builds.",
      link: "/flight-time-mtow",
    },
    {
      title: "Flight Time – Motor Based",
      description:
        "Manually input motor power and battery specs to get endurance estimates. Best for custom builds or when using non-standard motors.",
      link: "/flight-time-motor",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-blue-600 mb-4">
            Multicopter Endurance Calculators
          </h1>
          <p className="text-base sm:text-xl text-gray-700">
            Get quick and accurate flight time estimates for your drone based on
            different input methods. Choose the calculator that matches the data
            you have.
          </p>
        </div>

        {/* 🧠 New Explanation Section */}
        <div className="mb-12 bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
  <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
    About the Calculators
  </h2>
  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
    These tools are designed to help drone builders, pilots, and engineers estimate the endurance of multicopters with precision. Whether you're working on a DIY drone, professional aerial platform, or agricultural multicopter, these calculators let you simulate real-world flight times.
  </p>
  <p className="text-gray-700 text-base sm:text-lg mt-4 leading-relaxed">
    Each calculator serves a different use case—based on what information you currently have. Battery-based for power data, MTOW-based for complete build estimation, and motor-based for custom setups. Use the one that fits your scenario and plan your builds with confidence.
  </p>
</div>


        {/* 🔢 Calculator Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {calculators.map((calc, index) => (
            <CalculatorCard
              key={index}
              title={calc.title}
              description={calc.description}
              link={calc.link}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
