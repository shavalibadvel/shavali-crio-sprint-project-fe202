import React from "react";
import useWindowSize from "./useWindowSize";
const WindowSizeDisplay = () => {
  const { width, height } = useWindowSize();

  return (
    <div
      style={{ padding: "20px", textAlign: "center", fontFamily: "sans-serif" }}
    >
      <h2>Custom Hook: UseWindowSize</h2>
      <div
        style={{
          background: "#f0f2f5",
          padding: "20px",
          borderRadius: "10px",
          display: "inline-block",
        }}
      >
        <p>
          <strong>Width:</strong> {width}px
        </p>
        <p>
          <strong>Height:</strong> {height}px
        </p>
      </div>
      <p style={{ marginTop: "15px", color: "#666" }}>
        Try resizing your browser window to see the numbers update!
      </p>
    </div>
  );
};

export default WindowSizeDisplay;
