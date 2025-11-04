"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ passingItems, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedArr = [...passingItems].sort((a, b) =>
    sortBy === "name"
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category)
  );

  function sortByCategory() {
    setSortBy("category");
  }

  function sortByName() {
    setSortBy("name");
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

      {sortedArr.map((item, index) => (
        <Item
          onClick={onItemSelect}
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}
