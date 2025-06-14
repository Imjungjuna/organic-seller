// src/components/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "hover:cursor-pointer hover:shadow-lg hover:translate-y-[-2px] px-6 py-3 rounded-xl font-semibold transition-all duration-300 ease-in-out";

  const variantStyles = {
    primary:
      "bg-[--color-primary] text-[--color-primary-text] hover:opacity-90",
    secondary:
      "bg-transparent text-[--color-text-main] border border-[--color-text-main] hover:bg-[--color-hover-background]",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
