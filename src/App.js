import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import EncodePage from "./lib/EncodePage";
import DecodePage from "./lib/DecodePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-white">
          <div className="flex justify-between items-center relative">
            <div className="text-2xl font-bold absolute left-0 pl-4">
              CRC Encoder/Decoder
            </div>
            <div className="flex justify-center mx-auto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 py-3 bg-white text-blue-700  text-xl font-bold border-b-4 border-blue-600"
                    : "px-4 py-3 bg-white text-blue-400 hover:text-blue-700 text-xl font-bold "
                }
              >
                Encode
              </NavLink>
              <NavLink
                to="/decode"
                className={({ isActive }) =>
                  isActive
                    ? "px-4 py-3 bg-white text-green-700 text-xl font-bold border-b-4 border-green-600"
                    : "px-4 py-3 bg-white text-green-400 hover:text-green-700 text-xl font-bold"
                }
              >
                Decode
              </NavLink>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<EncodePage />} />
            <Route path="/decode" element={<DecodePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
