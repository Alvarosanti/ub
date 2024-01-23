import Link from "next/link";
import React from "react";

type ArrowbackProps = {
  link: string;
};

const Arrowback = ({ link }: ArrowbackProps) => {
  return (
    <div className="relative">
      <Link
        href={link}
        className="absolute flex items-center text-black rounded-full hover:underline focus:outline-none focus:shadow-outline-blue active:bg-slate-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Atrás
      </Link>
    </div>
  );
};

export default Arrowback;
