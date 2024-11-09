import React, { useState } from "react";
import Processor from "./processor.js";

const EncodePage = () => {
  const [data, setData] = useState("");
  const [divisor, setDivisor] = useState("");
  const [encodedData, setEncodedData] = useState("");
  const [errorData, setErrorData] = useState("");
  const [errorDivisor, setErrorDivisor] = useState("");

  const handleEncode = () => {
    if (data === undefined || data === null || data === "") {
      setErrorData("binary data cannot be blank");
    } else {
      setErrorData(null);
    }
    if (divisor === undefined || divisor === null || divisor === "") {
      setErrorDivisor("divisor cannot be blank");
    } else {
      setErrorDivisor(null);
    }
    if (data && divisor) {
      const result = Processor.dataSend(data, divisor);
      setEncodedData(result);
    }
  };

  return (
    <div className="px-64 py-24">
      <div className="bg-white shadow-xl rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Encode Data</h2>
        <input
          type="text"
          placeholder="Enter binary data"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="border p-2 rounded mt-4 w-full"
        />
        {errorData && <p className="mt-2 text-sm text-red-500">{errorData}</p>}
        <input
          type="text"
          placeholder="Enter divisor"
          value={divisor}
          onChange={(e) => setDivisor(e.target.value)}
          className="border p-2 rounded mt-4 w-full"
        />
        {errorDivisor && <p className="mt-2 text-sm text-red-500">{errorDivisor}</p>}
        <button
          onClick={handleEncode}
          className="bg-blue-500 text-white mt-4 px-4 py-2 rounded hover:bg-blue-600"
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
