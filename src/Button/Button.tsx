import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button = 
(
  { 
    children,
    ...props 
  }: ButtonProps
) => {
  return <button {...props}>{children}</button>;
};

export default Button;