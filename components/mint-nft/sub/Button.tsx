import React from "react";

const Button = ({ children, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...rest}
      className="w-full btn btn-xl text-neutral-content font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] disabled:hover:scale-100"
    >
      {children}
    </button>
  );
};

export default Button;
