import React, { useState, useEffect } from "react";
import Processor from "./processor.js";

const DecodePage = () => {
  const [data, setData] = useState("");
  const [divisor, setDivisor] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [oldData, setOldData] = useState(null);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [errorData, setErrorData] = useState("");
  const [errorDivisor, setErrorDivisor] = useState("");

  const validate = () => {
    let isValid = true;

    if (data === undefined || data === null || data === "") {
      setErrorData("Received data cannot be blank");
      isValid = false;
    } else if (!Processor.kiemTraBit(data)) {
      setErrorData("Received data is incorrectly formatted");
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

  const handleCheck = () => {
    if (!validate()) return;

    const result = Processor.checkCRC(data, divisor);

    if (result) {
      const isValid = Processor.dataReceive(data, divisor);
      setOldData(isValid);
    } else {
      setOldData(null);
    }
    setIsReadOnly(true);
    setIsValid(result);
  };

  const handleReset = () => {
    setData("");
    setDivisor("");
  };

  useEffect(() => {
    setIsValid(null);
    setIsReadOnly(false);
    setErrorDivisor('');
    setErrorData('')
  }, [data, divisor]);

  return (
    <div className="px-64 py-24">
      <div className="bg-white shadow-xl rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Decode Data</h2>
        <input
          type="text"
          placeholder="Enter received data"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="border p-2 rounded mt-4 w-full"
          id="input_data"
          readOnly={isReadOnly}
        />
        {errorData && <p className="mt-2 text-sm text-red-500">{errorData}</p>}
        <input
          type="text"
          placeholder="Enter divisor"
          value={divisor}
          onChange={(e) => setDivisor(e.target.value)}
          className="border p-2 rounded mt-4 w-full"
          id="input_divisor"
          readOnly={isReadOnly}
        />
        {errorDivisor && (
          <p className="mt-2 text-sm text-red-500">{errorDivisor}</p>
        )}
        <button
          onClick={handleCheck}
          className="bg-green-500 mt-4 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Check
        </button>
        <button
          onClick={handleReset}
          className="bg-orange-500 text-white mt-4 ml-4 px-4 py-2 rounded hover:bg-orange-600"
        >
          Reset
        </button>
        {isValid !== null && (
          <div className="mt-4 p-4 bg-gray-200 rounded">
            <h3 className="font-bold">Result:</h3>

            <p>{isValid ? "Data is valid!" : "Data is invalid."}</p>
            {oldData !== null && <p>Data: {oldData}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default DecodePage;
