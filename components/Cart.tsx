"use client";
import React, { useEffect } from "react";
import { UseCart } from "./UseCart";
import CartItem from "./CartItem";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  if (!isOpen) return null;
  const router = useRouter();

  const { items, clearCart } = UseCart();

  const cartTotal = items
    .reduce((total, { product }) => total + product.price * product.cantidad, 0)
    .toFixed(2);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const setPath = () => {
    router.push("/");
    clearCart();
    if (isOpen) {
      onClose();
    }
  };
  const setListProdutcs = () => {
    router.push("/products?categories=inicial");
    if (isOpen) {
      onClose();
    }
  };

  const productList = items.map((product) => {
    return `${product.product.title} - Precio: S/.${product.product.price} - Cantidad: ${product.product.cantidad}u.`;
  });

  const productListString = productList.join(", ");
  const message1 = `Hola que tal, quiero comprar este producto: ${productListString}, Precio total: S/.${cartTotal}`;
  const message2 = `Hola que tal, quiero comprar estos productos: ${productListString}, Precio total: S/.${cartTotal}`;

  return (
    <div
      className={`modal-overlay ${isOpen ? "open" : ""}`}
      onClick={handleBackdropClick}
    >
      <div className="modal-content">
        <h2>Carrito({items.length})</h2>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {items.length === 0 ? (
          <div className="empty-cart-container">
            <Image
              src={"/empty-cart.png"}
              alt={`empty-cart`}
              width={200}
              height={200}
              className="empty-cart-image"
            />
            <p className="empty-cart-text">Carrito vacío</p>
            <a
              onClick={setListProdutcs}
              className="bg-green-500 hover:bg-green-600 text-white mt-2 py-2 px-11 rounded inline-block w-full max-w-xl text-center cursor-pointer"
              rel="noopener noreferrer"
            >
              {`Ir a comprar ->`}{" "}
            </a>
          </div>
        ) : (
          <ul>
            {items.map((product) => (
              <li key={product.product.id}>
                <CartItem product={product.product} />
              </li>
            ))}
          </ul>
        )}
        {items.length === 0 ? (
          ""
        ) : (
          <div>
            <div className="space-y-1.5 text-sm">
              <div className="flex">
                <span className="flex-1">Env&iacute;o:</span>
                <span>Previa coordinaci&oacute;n</span>
              </div>
              <div className="flex">
                <span className="flex-1">IGV:</span>
                <span>Incluido</span>
              </div>
              <div className="flex">
                <span className="flex-1">Total:</span>
                <strong>S/.{cartTotal}</strong>
              </div>
            </div>
            <a
              onClick={setPath}
              href={`https://wa.me/+51902356831?text=${
                items.length === 1 ? message1 : message2
              }`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white mt-2 py-2 px-11 rounded inline-block w-full max-w-xl text-center"
            >
              Comprar
            </a>
          </div>
        )}
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          right: -100%;
          bottom: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: flex-end;
          align-items: center;
          transition: right 0.3s ease-in-out;
          z-index: 1000;
        }
        .modal-overlay.open {
          right: 0;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px 0 0 8px;
          position: relative;
          width: 90%;
          max-width: 400px;
          height: 100%;
          overflow-y: auto;
          z-index: 1001;
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }
        .empty-cart-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 95%;
        }
        .empty-cart-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .empty-cart-text {
          margin-top: 5px;
          margin-left: 25px;
          font-size: 18px;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default CartModal;
