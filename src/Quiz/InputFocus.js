import React, { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h3>useRef Activity: Focus Input</h3>

      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me..."
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button
        onClick={handleButtonClick}
        style={{ padding: "8px 16px", cursor: "pointer" }}
      >
        Focus Input
      </button>
    </div>
  );
};

export default InputFocus;
