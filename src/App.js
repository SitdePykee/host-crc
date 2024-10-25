import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EncodePage from "./lib/EncodePage";
import DecodePage from "./lib/DecodePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">CRC Encoder/Decoder</h1>
              <div>
                <Link to="/" className="text-blue-500 hover:text-blue-700 mx-4">
                  Encode
                </Link>
                <Link to="/decode" className="text-green-500 hover:text-green-700">
                  Decode
                </Link>
              </div>
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
