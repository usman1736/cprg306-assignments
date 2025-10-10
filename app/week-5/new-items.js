"use client";
import { React, useState } from "react";

export default function NewItems() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();
    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };
    console.log(item);
    alert(`Item: ${name}
      Quantity: ${quantity}
      Category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }
  return (
    <div>
      <header className="text-2xl flex justify-center mr-50 font-bold mt-6">
        <h1>Week 5 — New Item</h1>
      </header>
      <section className="flex flex-row justify-center">
        <div className="ml-10 border-1 border-black bg-white text-gray-600 pt-6 pb-4 pl-4 mt-4 rounded-sm w-100 h-40">
          <form onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="name">Item Name</label>
            <input
              type="text"
              required
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="eg., milk, 4 L 🥛"
            />
            <p>
              Quantity: <span className="text-gray-300">{quantity}</span>
            </p>
            <div className="flex gap-4 mt-4 mb-4">
              <div className="flex flex-row justify-center items-center bg-gray-300 p-4 rounded-sm w-10 h-10">
                <button
                  type="button"
                  className="text-gray-500"
                  onClick={() =>
                    setQuantity(
                      (quantity > 1) & (quantity <= 20)
                        ? quantity - 1
                        : quantity
                    )
                  }
                >
                  -
                </button>
              </div>
              <div className="flex flex-row justify-center items-center bg-blue-400 rounded sm p-4 w-10 h-10 hover:bg-blue-500">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity(
                      quantity >= 1 && quantity < 20 ? quantity + 1 : quantity
                    )
                  }
                >
                  <span className="text-white">+</span>
                </button>
              </div>
            </div>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              onChange={(event) => setCategory(event.target.value)}
              value={category}
            >
              <option value="produce">Produce</option>
              <option value="diary">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
            <p className="text-gray-500">Allowed range: 1-20</p>
            <button type="submit">Add Item</button>
          </form>
        </div>
      </section>
    </div>
  );
}
