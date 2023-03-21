import React from "react";
import "./button.css";

export default function Button({ title, background, lefticon, righticon }) {
  return (
    <>
      <div className="button-container">
        <button style={{ background: background }}>
          <span style={{ marginRight: "10px", color: "black" }}>
            {lefticon && lefticon}
          </span>
          {title}
          <span>{righticon && righticon}</span>
        </button>
      </div>
    </>
  );
}
