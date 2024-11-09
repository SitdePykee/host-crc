import React, { useState, useEffect } from "react";
import Processor from "./processor.js";

const EncodePage = () => {
  const [data, setData] = useState("");
  const [divisor, setDivisor] = useState("");
  const [encodedData, setEncodedData] = useState("");
  const [errorData, setErrorData] = useState("");
  const [errorDivisor, setErrorDivisor] = useState("");
  const [isReadOnly, setIsReadOnly] = useState(false);

  const validate = () => {
    let isValid = true;

    if (data === undefined || data === null || data === "") {
      setErrorData("Binary data cannot be blank");
      isValid = false;
    } else if (!Processor.kiemTraBit(data)) {
      setErrorData("Binary data is incorrectly formatted");
      isValid = false;
    } else {
      setErrorData(null);
    }

    if (divisor === undefined || divisor === null || divisor === "") {
      setErrorDivisor("Divisor cannot be blank");
      isValid = false;
    } else if (!Processor.kiemTraBit(divisor)) {
      setErrorDivisor("Divisor is incorrectly formatted");
      isValid = false;
    } else {
      setErrorDivisor(null);
    }

    return isValid;
  };

  const handleEncode = () => {
    if (!validate()) return;
    const result = Processor.dataSend(data, divisor);
    setIsReadOnly(true);

    setEncodedData(result);
  };

  const handleReset = () => {
    setData("");
    setDivisor("");
  };

  useEffect(() => {
    setIsReadOnly(false);
    setErrorDivisor('');
    setErrorData('')
  }, [data, divisor]);

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
          readOnly={isReadOnly}
        />
        {errorData && <p className="mt-2 text-sm text-red-500">{errorData}</p>}
        <input
          type="text"
          placeholder="Enter divisor"
          value={divisor}
          onChange={(e) => setDivisor(e.target.value)}
          className="border p-2 rounded mt-4 w-full"
          readOnly={isReadOnly}
        />
        {errorDivisor && (
          <p className="mt-2 text-sm text-red-500">{errorDivisor}</p>
        )}
        <button
          onClick={handleEncode}
          className="bg-blue-500 text-white mt-4 px-4 py-2 rounded hover:bg-blue-600"
        >
          Encode
        </button>
        <button
          onClick={handleReset}
          className="bg-orange-500 text-white mt-4 ml-4 px-4 py-2 rounded hover:bg-orange-600"
        >
          Reset
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
