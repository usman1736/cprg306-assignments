"use client";
import { React, useState } from "react";

export default function NewItems() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <header>
        <h1>Add New Item</h1>
      </header>
      <p>Quantity: {quantity}</p>
      <div>
        <button
          onClick={() =>
            setQuantity(
              (quantity > 1) & (quantity <= 20) ? quantity - 1 : quantity
            )
          }
        >
          -
        </button>
        <button
          onClick={() =>
            setQuantity(
              (quantity >= 1) & (quantity < 20) ? quantity + 1 : quantity
            )
          }
        >
          +
        </button>
      </div>
      <p>Allowed range: 1-20</p>
    </div>
  );
}
