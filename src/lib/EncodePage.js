import React, { useState } from "react";
import Processor from "./processor.js";

const EncodePage = () => {
  const [data, setData] = useState("");
  const [divisor, setDivisor] = useState("");
  const [encodedData, setEncodedData] = useState("");

  const handleEncode = () => {
    const result = Processor.dataSend(data, divisor);
    setEncodedData(result);
  };

  return (
    <div className="px-64 py-24">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Encode Data</h2>
        <input
          type="text"
          placeholder="Enter binary data"
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
          onClick={handleEncode}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Encode
        </button>
        {encodedData && (
          <div className="mt-4 p-4 bg-gray-200 rounded">
            <h3 className="font-bold">Encoded Data:</h3>
            <p>{encodedData}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EncodePage;
