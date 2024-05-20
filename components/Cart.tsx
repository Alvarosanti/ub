"use client";
import React from "react";
import { UseCart } from "./UseCart";

interface Product {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartModalProps {
  isOpen: boolean;
  // products: Product[];
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  if (!isOpen) return null;

  const { items } = UseCart();

  const cartTotal = items.reduce(
    (total, { product }) => total + product.price,
    0
  );

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Shopping Cart</h2>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {items.map((product) => (
              <li key={0}>
                {product.product.title} - S/.{product.product.price}
              </li>
            ))}
          </ul>
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
