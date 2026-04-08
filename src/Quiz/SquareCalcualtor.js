import React, { useState, useMemo } from "react";

const SquareCalculator = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  const calculateSquare = (n) => {
    console.log("Calculating square...");
    return n * n;
  };

  const squaredValue = useMemo(() => {
    return calculateSquare(number);
  }, [number]);

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}
    >
      <h2>useMemo Activity</h2>

      <div>
        <label>Enter a number to square: </label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        />
        <p>
          <strong>Result:</strong> {squaredValue}
        </p>
      </div>

      <hr />

      <div>
        <p>This counter triggers a re-render of the Parent component:</p>
        <button onClick={() => setCounter(counter + 1)}>
          Re-render Parent (Count: {counter})
        </button>
        <p style={{ fontSize: "12px", color: "gray" }}>
          Check the console! "Calculating square..." only appears when the
          number changes.
        </p>
      </div>
    </div>
  );
};

export default SquareCalculator;
