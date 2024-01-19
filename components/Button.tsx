import Image from "next/image";
import React from "react";
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full: boolean;
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 border bg-blue-950 text-white px-4 py-3 rounded-2xl hover:bg-blue-900 focus:outline-none focus:shadow-outline-blue active:bg-blue-800`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24}></Image>}
      <p>{title}</p>
    </button>
  );
};

export default Button;
