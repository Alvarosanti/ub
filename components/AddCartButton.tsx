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
  cantidad: number;
}

type ButtonProps = {
  type: "button" | "submit";
  product: Product;
  cantidad?: number;
};

const AddCartButton = ({ type, product, cantidad }: ButtonProps) => {
  const { addItem } = UseCart();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
      setIsDisabled(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [isSuccess]);

  return (
    <button
      onClick={() => {
        const productWquantity = { ...product, cantidad: cantidad ?? 1 };
        addItem(productWquantity);
        setIsSuccess(true);
        setIsDisabled(true);
      }}
      disabled={isDisabled}
      className={
        isSuccess
          ? "bg-green-600 text-white py-2 px-4 rounded inline-block cursor-not-allowed"
          : "bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded inline-block"
      }
      type={type}
    >
      <p>{isSuccess ? "✅ Agregado" : "➕ Agregar al carrito"}</p>
    </button>
  );
};

export default AddCartButton;
