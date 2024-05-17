import Image from "next/image";
import React, { useEffect, useState } from "react";
import { UseCart } from "./UseCart";

export interface Product {
  id: string;
  title: string;
  desc: string;
  price: number;
  image: string;
  createdAt: string;
}

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  full: boolean;
  product: Product;
};

const AddCartButton = ({ type, title, full, product }: ButtonProps) => {
  const { addItem } = UseCart();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Producto: ", product);
      setIsSuccess(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [isSuccess]);

  return (
    <button
      onClick={() => {
        addItem(product);
        setIsSuccess(true);
      }}
      className={
        "bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded inline-block"
      }
      type={type}
    >
      <p>{title}</p>
    </button>
  );
};

export default AddCartButton;
