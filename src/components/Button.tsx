import React from "react";
import { IButton } from "@/types/index";
const Button = ({ title, className, onClick }: IButton) => {
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
};

export default Button;
