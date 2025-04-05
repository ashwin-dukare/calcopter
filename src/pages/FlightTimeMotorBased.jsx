import { useState } from "react";
import Navbar from "../components/Navbar";

const inputStyle = `
  w-full px-3 py-2 border border-gray-300 rounded-md 
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition
`;

export default function MotorBasedCalculator() {
  const [motorType, setMotorType] = useState("X6Pro");
  const [mtow, setMtow] = useState("");
  const [batteryCapacity, setBatteryCapacity] = useState("");
  const [batteryVoltage, setBatteryVoltage] = useState("");
  const [numberOfMotors, setNumberOfMotors] = useState("");
  const [result, setResult] = useState("");

  const calculateEndurance = () => {
    const mtowVal = parseFloat(mtow);
    const batteryCap = parseFloat(batteryCapacity);
    const voltage = parseFloat(batteryVoltage);
    const motors = parseFloat(numberOfMotors);

    if (
      isNaN(mtowVal) ||
      isNaN(batteryCap) ||
      isNaN(voltage) ||
      isNaN(motors)
    ) {
      alert("Please enter valid values for all fields.");
      return;
    }

    const batteryPower = (batteryCap * voltage) / 1000; // in Wh
    const thrustPerMotor = mtowVal / motors;

    let totalPowerUsed = 0;
    if (motorType === "X6Pro") {
      totalPowerUsed =
        motors *
        (-105 +
          0.129 * thrustPerMotor +
          0.00000167 * Math.pow(thrustPerMotor, 2) +
          0.000000000646 * Math.pow(thrustPerMotor, 3));
    } else if (motorType === "X6Plus") {
      totalPowerUsed =
        motors *
        (-67.5 +
          0.0934 * thrustPerMotor +
          0.00000821 * Math.pow(thrustPerMotor, 2) +
          0.000000000122 * Math.pow(thrustPerMotor, 3));
    } else if (motorType === "X8") {
      totalPowerUsed =
        motors *
        (-25.1 +
          0.0687 * thrustPerMotor +
          0.00000945 * Math.pow(thrustPerMotor, 2) -
          0.000000000181 * Math.pow(thrustPerMotor, 3));
    }

    const flightEndurance = (batteryPower * 0.8 * 60) / totalPowerUsed;
    setResult(`Flight Time: ${flightEndurance.toFixed(2)} minutes`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="bg-blue-600 text-white text-center py-5 px-4 sm:px-6 lg:px-8 rounded-lg shadow mb-8">
  <h1 className="text-3xl sm:text-4xl font-semibold">Flight Time – Motor Based</h1>
  <p className="text-sm sm:text-base opacity-90 mt-1">
    Estimate flight time using OEM motor data
  </p>
</div>


          {/* Card Container */}
          <div className="bg-white p-6 rounded-xl shadow space-y-6">
            <p className="bg-blue-50 text-blue-800 text-center p-4 rounded-md">
              This calculator uses data provided by the OEM for Hobbywing motors (X6 Pro, X6 Plus, X8)
              to estimate your multicopter’s flight time.
            </p>

            <div className="space-y-5">
              {/* Motor Type Dropdown */}
              <div>
                <label className="block font-medium mb-1">Select Motor Type:</label>
                <select
                  value={motorType}
                  onChange={(e) => setMotorType(e.target.value)}
                  className={inputStyle}
                >
                  <option value="X6Pro">Hobbywing X6 Pro Motor</option>
                  <option value="X6Plus">Hobbywing X6 Plus Motor</option>
                  <option value="X8">Hobbywing X8 Motor</option>
                </select>
              </div>

              {/* MTOW */}
              <div>
                <label className="block font-medium mb-1">MTOW (g):</label>
                <input
                  type="number"
                  placeholder="Enter MTOW in grams"
                  className={inputStyle}
                  value={mtow}
                  onChange={(e) => setMtow(e.target.value)}
                />
              </div>

              {/* Battery Capacity */}
              <div>
                <label className="block font-medium mb-1">Battery Capacity (mAh):</label>
                <input
                  type="number"
                  placeholder="Enter battery capacity"
                  className={inputStyle}
                  value={batteryCapacity}
                  onChange={(e) => setBatteryCapacity(e.target.value)}
                />
              </div>

              {/* Battery Voltage */}
              <div>
                <label className="block font-medium mb-1">Battery Voltage (V):</label>
                <input
                  type="number"
                  placeholder="Enter battery voltage"
                  className={inputStyle}
                  value={batteryVoltage}
                  onChange={(e) => setBatteryVoltage(e.target.value)}
                />
              </div>

              {/* Number of Motors */}
              <div>
                <label className="block font-medium mb-1">Number of Motors:</label>
                <input
                  type="number"
                  placeholder="Enter number of motors"
                  className={inputStyle}
                  value={numberOfMotors}
                  onChange={(e) => setNumberOfMotors(e.target.value)}
                />
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateEndurance}
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
                aria-label="calculate flight time"
              >
                Calculate Flight Time
              </button>

              {/* Result Display */}
              <div className="mt-6">
                <label className="block font-semibold mb-2 text-center text-gray-800">
                  Estimated Flight Time
                </label>
                <div
                  className={`${inputStyle} bg-blue-50 border-blue-300 text-blue-700 text-center font-semibold shadow-sm`}
                >
                  {result || "Result will appear here"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
