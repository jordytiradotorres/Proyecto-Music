import React from "react";

const Title = ({ text, colorText }) => {
  return (
    <h2 className="Title" style={{ color: colorText }}>
      {text}
    </h2>
  );
};

export default Title;
