import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={`${className} border px-5 py-3 rounded-lg`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
