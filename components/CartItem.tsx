import { ImageIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { UseCart } from "./UseCart";

interface Product {
  id: string;
  title: string;
  desc: string;
  price: number;
  image: string;
  createdAt: string;
  cantidad: number;
}

const CartItem = ({ product }: { product: Product }) => {
  const image = product.image;
  const precio = product.price.toFixed(2);
  const { removeItem } = UseCart();

  return (
    <div className="space-y-3 py-2">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
            {typeof image == "string" ? (
              <Image
                src={image}
                alt={product.title}
                fill
                className="absolute object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-secondary">
                <ImageIcon
                  aria-hidden="true"
                  className="h-4 w-4 text-muted-foreground"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col self-start">
            <span className="line-clamp-1 text-sm font-medium mb-1">
              {product.title} x {product.cantidad} unidades
            </span>

            <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
              {product.desc}
            </span>
            <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
              Precio: S/.{precio}u.
            </span>
            <div className="mt-4 text-xs text-muted-foreground">
              <button
                onClick={() => removeItem(product.id)}
                className="flex items-center gap-0.5 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:shadow-outline-blue p-0.5"
              >
                X Eliminar
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-1 font-medium">
          <span className="ml-auto line-clamp-1 text-sm">
            {/* {formatPrice(product.price)} */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
