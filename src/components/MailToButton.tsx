import React from "react";
import { Link } from "react-router-dom";

interface ButtonMailtoProps {
  mailTo: string;
  label: string;
  enable: boolean;
}

const ButtonMailto = ({ mailTo, label, enable = false }: ButtonMailtoProps) => {
  const cursor = enable ? "cursor-pointer" : "cursor-not-allowed";
  return (
    <Link
      className={`bg-white px-4 py-3 rounded ${cursor} text-black`}
      to="#"
      onClick={(e) => {
        e.preventDefault();
        if (enable) {
          window.location.href = mailTo;
        }
      }}
    >
      {label}
    </Link>
  );
};

export default ButtonMailto;
