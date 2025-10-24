"use client";
import Item from "./item.js";
import { useState } from "react";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  function sortByName() {
    setSortBy("name");
    items.sort((a, b) => a.name.localeCompare(b.name));
  }

  function sortByCategory() {
    setSortBy("category");
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div>
      <div className="flex flex-row gap-2 items mb-5 md:ml-80">
        <p className="text-gray-700">Sort by: </p>
        <button
          onClick={sortByName}
          className={`rounded-sm px-2 py-1 ${
            sortBy === "name" ? "bg-blue-700" : "bg-white"
          }  ${sortBy === "name" ? "text-white" : "text-black"}`}
        >
          Name
        </button>
        <button
          className={`rounded-sm px-2 py-1 ${
            sortBy === "category" ? "bg-blue-600" : "bg-white"
          }  ${sortBy === "category" ? "text-white" : " text-black"}  `}
          onClick={sortByCategory}
        >
          Category
        </button>
      </div>
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}
