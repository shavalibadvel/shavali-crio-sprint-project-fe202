import React, { useState, useCallback } from "react";

const Square = React.memo(({ calculateSquare }) => {
  console.log("Square Component Rendered");
  return (
    <div
      style={{ marginTop: "10px", padding: "10px", border: "1px solid blue" }}
    >
      <p>Result from Child: {calculateSquare()}</p>
    </div>
  );
});

const Parent = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const calculateSquare = useCallback(() => {
    return number * number;
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
    padding: "20px",
    borderRadius: "8px",
  };

  return (
    <div style={themeStyles}>
      <h2>useCallback Activity</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />

      <button onClick={() => setDark(!dark)}>
        Toggle Theme (Current: {dark ? "Dark" : "Light"})
      </button>

      <p style={{ fontSize: "12px" }}>
        Notice: Toggling the theme re-renders Parent, but the
        <strong> Square component</strong> only re-renders when the number
        changes!
      </p>

      <Square calculateSquare={calculateSquare} />
    </div>
  );
};

export default Parent;
