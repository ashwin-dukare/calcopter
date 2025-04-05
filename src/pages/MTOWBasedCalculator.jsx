import { useState } from "react";
import Navbar from "../components/Navbar";
import HelpTip from "../components/HelpTip";

const inputStyle = `
  w-full px-3 py-2 border border-gray-300 rounded-md 
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition
`;

export default function MTOWBasedCalculator() {
  const [mtow, setMtow] = useState("");
  const [noOfMotors, setNoOfMotors] = useState("");
  const [batteryCapacity, setBatteryCapacity] = useState("");
  const [batteryVoltage, setBatteryVoltage] = useState("");
  const [dischargeRate, setDischargeRate] = useState("80");
  const [powerPerMotor, setPowerPerMotor] = useState("");
  const [result, setResult] = useState("");

  const calculateFlightEndurance = () => {
    const mtowVal = parseFloat(mtow);
    const motors = parseFloat(noOfMotors);
    const capacity = parseFloat(batteryCapacity);
    const voltage = parseFloat(batteryVoltage);
    const power = parseFloat(powerPerMotor);
    const discharge = parseFloat(dischargeRate) / 100;

    if (
      isNaN(mtowVal) ||
      isNaN(motors) ||
      isNaN(capacity) ||
      isNaN(voltage) ||
      isNaN(power) ||
      isNaN(discharge)
    ) {
      alert("Please enter valid values for all fields.");
      return;
    }

    const powerConsumption = motors * power;
    const flightEndurance = ((capacity / 1000) * discharge * voltage) / powerConsumption;
    const timeInMinutes = (flightEndurance * 60).toFixed(2);

    setResult(`${timeInMinutes} minutes`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <div className="bg-blue-600 text-white text-center py-5 rounded-lg shadow mb-8">
            <h1 className="text-3xl sm:text-4xl font-semibold">Flight Time – MTOW Based</h1>
            <p className="text-sm sm:text-base opacity-90 mt-1">
              Estimate flight endurance using MTOW, battery, and motor power.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white p-6 rounded-xl shadow space-y-6">
            <p className="bg-blue-50 text-blue-800 text-center p-4 rounded-md">
              Estimate your multicopter’s flight time based on Maximum Takeoff Weight (MTOW),
              number of motors, battery specifications, and motor power at 50% throttle.
            </p>

            <div className="space-y-5">
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

              {/* Number of Motors */}
              <div>
                <label className="block font-medium mb-1">Number of Motors:</label>
                <input
                  type="number"
                  placeholder="Enter number of motors"
                  className={inputStyle}
                  value={noOfMotors}
                  onChange={(e) => setNoOfMotors(e.target.value)}
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

              {/* Discharge Rate */}
              <div>
                <label className="block font-medium mb-1">Battery Discharge Rate (%):</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="e.g., 80"
                  className={inputStyle}
                  value={dischargeRate}
                  onChange={(e) => setDischargeRate(e.target.value)}
                />
              </div>

              {/* Power per Motor with Tooltip */}
              <div>
              <label className="flex items-center gap-2 font-medium mb-1">
  Power Rating of the Motor (W):
  <HelpTip>
    <ul className="list-disc pl-4 space-y-1">
      <li>Use motor datasheet to find power at ~50% throttle.</li>
      <li>Total Power = Motor Power × Number of Motors.</li>
    </ul>
  </HelpTip>
</label>

                <input
                  type="number"
                  placeholder="Enter power per motor"
                  className={inputStyle}
                  value={powerPerMotor}
                  onChange={(e) => setPowerPerMotor(e.target.value)}
                />
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateFlightEndurance}
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
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
