import { useState } from "react";
import Navbar from "../components/Navbar";
import HelpTip from "../components/HelpTip";

const inputStyle = `
  w-full px-3 py-2 border border-gray-300 rounded-md 
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition
`;

export default function FlightTimeBatteryCalculator() {
  const [batteryCapacity, setBatteryCapacity] = useState("");
  const [batteryVoltage, setBatteryVoltage] = useState("");
  const [dischargeRate, setDischargeRate] = useState(80);
  const [powerConsumption, setPowerConsumption] = useState("");
  const [result, setResult] = useState("");

  const calculateFlightTime = () => {
    const capacity = parseFloat(batteryCapacity);
    const voltage = parseFloat(batteryVoltage);
    const discharge = parseFloat(dischargeRate) / 100;
    const power = parseFloat(powerConsumption);

    if (isNaN(capacity) || isNaN(voltage) || isNaN(discharge) || isNaN(power)) {
      alert("Please enter valid values for all fields.");
      return;
    }

    const flightTime = ((capacity / 1000) * discharge * voltage) / power;
    const flightTimeMinutes = (flightTime * 60).toFixed(2);

    setResult(`${flightTimeMinutes} minutes`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="bg-blue-600 text-white text-center py-5 px-4 sm:px-6 lg:px-8 rounded-lg shadow mb-8">
  <h1 className="text-3xl sm:text-4xl font-semibold">Flight Time – Battery Based</h1>
  <p className="text-sm sm:text-base opacity-90 mt-1">
    Estimate flight time from battery specs
  </p>
</div>


          {/* Card Container */}
          <div className="bg-white p-6 rounded-xl shadow space-y-6">
            <p className="bg-blue-50 text-blue-800 text-center p-4 rounded-md">
              Estimate your multicopter’s flight time using battery capacity, voltage, and power draw.
            </p>

            <div className="space-y-5">
              <div>
                <label className="block font-medium mb-1">Battery Capacity (mAh):</label>
                <input
                  type="number"
                  className={inputStyle}
                  placeholder="Enter battery capacity"
                  value={batteryCapacity}
                  onChange={(e) => setBatteryCapacity(e.target.value)}
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Nominal Voltage (V):</label>
                <input
                  type="number"
                  className={inputStyle}
                  placeholder="Enter battery voltage"
                  value={batteryVoltage}
                  onChange={(e) => setBatteryVoltage(e.target.value)}
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Battery Discharge Rate (%):</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  className={inputStyle}
                  placeholder="e.g., 80"
                  value={dischargeRate}
                  onChange={(e) => setDischargeRate(e.target.value)}
                />
              </div>

              <div>
                <label className="flex items-center gap-2 font-medium mb-1">
                  Total Power Consumption (W)
                  <HelpTip>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Divide MTOW by number of motors to get thrust per motor.</li>
                      <li>Use motor datasheet to find power for that thrust.</li>
                      <li>Multiply by number of motors for total power.</li>
                    </ul>
                  </HelpTip>
                </label>
                <input
                  type="number"
                  className={inputStyle}
                  placeholder="Enter total power consumption"
                  value={powerConsumption}
                  onChange={(e) => setPowerConsumption(e.target.value)}
                />
              </div>

              <button
                onClick={calculateFlightTime}
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
                aria-label="calculate flight time"
              >
                Calculate Flight Time
              </button>

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
