"use client";
import Item from "./item.js";
import { useState } from "react";
import items from "./items.json";

export default function ItemList() {
  const [sortby, setSortBy] = useState("name");

  return (
    <div>
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
