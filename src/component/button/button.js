import React from "react";
import "./button.css";

export default function Button({
  title,
  background,
  lefticon,
  righticon,
  width,
  marginLeft,
  marginRight,
  color,
}) {
  return (
    <>
      <div className="button-container">
        <button
          style={{
            background: background,
            height: "60px",
            width: width ? width : "fit-content",
            marginRight: marginRight ? marginRight : "none",
            marginLeft: marginLeft ? marginLeft : "none",
            color: color ? color : "black",
            fontSize: "23px",
          }}
        >
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
