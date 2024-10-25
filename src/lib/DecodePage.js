import React, { useState } from "react";
import Processor from "./processor.js";

const DecodePage = () => {
  const [data, setData] = useState("");
  const [divisor, setDivisor] = useState("");
  const [isValid, setIsValid] = useState(null);

  const handleCheck = () => {
    const result = Processor.checkCRC(data, divisor);
    setIsValid(result);
  };

  return (
    <div className="px-64 py-24">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Decode Data</h2>
        <input
          type="text"
          placeholder="Enter received data"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="border p-2 rounded mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Enter divisor"
          value={divisor}
          onChange={(e) => setDivisor(e.target.value)}
          className="border p-2 rounded mb-4 w-full"
        />
        <button
          onClick={handleCheck}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Check
        </button>
        {isValid !== null && (
          <div className="mt-4 p-4 bg-gray-200 rounded">
            <h3 className="font-bold">Result:</h3>
            <p>{isValid ? "Data is valid!" : "Data is invalid."}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DecodePage;
