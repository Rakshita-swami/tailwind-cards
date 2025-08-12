import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import Industries from "./pages/Industries";
import HealthCare from "./pages/HealthCare.js";
import Aviation from "./pages/Aviation";
import OilGas from "./pages/OilGas";

import Logistics from "./pages/Logistics.js";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800 font-sans">
        {/* Header */}
        <header className="p-4 bg-gradient-to-r from-white to-purple-100 shadow-md flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-xl font-bold mb-2 md:mb-0"></h1>
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/" className="text-gray-700 hover:text-purple-600">Industries</Link>
            <Link to="/health-care" className="text-gray-700 hover:text-purple-600">Healthcare</Link>
              <Link to="/logistics" className="text-gray-700 hover:text-purple-600">Logistics</Link>
            <Link to="/aviation" className="text-gray-700 hover:text-purple-600">Aviation</Link>
            <Link to="/oil-gas" className="text-gray-700 hover:text-purple-600">Oil & Gas</Link>
            
          
          </nav>
        </header>

        {/* Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Industries />} />
            <Route path="/aviation" element={<Aviation />} />
            <Route path="/oil-gas" element={<OilGas />} />
            <Route path="/health-care" element={<HealthCare />} />
            <Route path="/logistics" element={<Logistics />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="py-6 bg-gray-900 text-center text-white text-sm">
          © 2025  All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
