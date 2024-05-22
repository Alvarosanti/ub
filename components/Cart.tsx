"use client";
import React, { useEffect } from "react";
import { UseCart } from "./UseCart";
import CartItem from "./CartItem";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  if (!isOpen) return null;

  const { items } = UseCart();

  const cartTotal = items.reduce(
    (total, { product }) => total + product.price,
    0
  );

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
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {items.map((product) => (
              <li key={product.product.id}>
                <CartItem product={product.product} />
              </li>
            ))}
          </ul>
        )}
        <div className="space-y-1.5 text-sm">
          <div className="flex">
            <span className="flex-1">Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex">
            <span className="flex-1">Transaction Fee</span>
            {/* <span>{formatPrice(fee)}</span> */}
          </div>
          <div className="flex">
            <span className="flex-1">Total</span>
            <span>{cartTotal}</span>
          </div>
        </div>
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
      `}</style>
    </div>
  );
};

export default CartModal;
