import React, { type FC } from "react";
import { type ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white hover:bg-blue-700 focus:outline-none
        ${sizeClasses[size]} ${shape} transition`}
    >
      {children}
    </button>
  );
};

export default Button;
