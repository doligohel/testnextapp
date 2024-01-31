import React from "react";

const Button = ({ text, url }) => {
  return (
    <button type="button" href={url} size="md" radius="md">
      {text}
    </button>
  );
};

export default Button;
