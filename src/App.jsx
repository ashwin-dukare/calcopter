import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FlightTimeBatteryCalculator from './pages/FlightTimeBatteryCalculator';
import FlightTimeMTOWCalculator from './pages/MTOWBasedCalculator';
import FlightTimeMotorBasedCalculator from './pages/FlightTimeMotorBased'; // ✅ newly added import
import './App.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight-time-battery" element={<FlightTimeBatteryCalculator />} />
        <Route path="/flight-time-mtow" element={<FlightTimeMTOWCalculator />} />
        <Route path="/flight-time-motor" element={<FlightTimeMotorBasedCalculator />} /> {/* ✅ new route */}
      </Routes>
    </Router>
  );
}

export default App;
