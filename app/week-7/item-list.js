"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ itemList }) {
  const [itemsList, setItemsList] = useState([...itemList]);
  const [sortBy, setSortBy] = useState("name");

  function sortByName() {
    const nameSorted = [...itemsList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setItemsList(nameSorted);
    setSortBy("name");
  }

  function sortByCategory() {
    const categorySorted = [...itemsList].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    setItemsList(categorySorted);
    setSortBy("category");
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
      {itemsList.map((item) => (
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
