import React from "react";

const Title = ({ text, colorText }) => {
  return (
    <h2
      className="Title animate__animated animate__bounceIn"
      style={{ color: colorText }}
    >
      {text}
    </h2>
  );
};

export default Title;
