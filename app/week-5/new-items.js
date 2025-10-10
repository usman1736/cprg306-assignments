"use client";
import { React, useState } from "react";

export default function NewItems() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <header className="text-2xl flex justify-center mr-50 font-bold mt-6">
        <h1>Add New Item</h1>
      </header>
      <section className="flex flex-row justify-center">
        <div className="ml-10 border-1 border-black bg-white text-gray-600 pt-6 pb-4 pl-4 mt-4 rounded-sm w-100 h-40">
          <p>
            Quantity: <span className="text-gray-300">{quantity}</span>
          </p>
          <div className="flex gap-4 mt-4 mb-4">
            <div className="flex flex-row justify-center items-center bg-gray-300 p-4 rounded-sm w-10 h-10">
              <button
                className="text-gray-500"
                onClick={() =>
                  setQuantity(
                    (quantity > 1) & (quantity <= 20) ? quantity - 1 : quantity
                  )
                }
              >
                -
              </button>
            </div>
            <div className="flex flex-row justify-center items-center bg-blue-400 rounded sm p-4 w-10 h-10 hover:bg-blue-500">
              <button
                onClick={() =>
                  setQuantity(
                    (quantity >= 1) & (quantity < 20) ? quantity + 1 : quantity
                  )
                }
              >
                <span className="text-white">+</span>
              </button>
            </div>
          </div>
          <p className="text-gray-500">Allowed range: 1-20</p>
        </div>
      </section>
    </div>
  );
}
