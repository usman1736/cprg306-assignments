"use client";
import ItemList from "./item-list";
import NewItems from "./new-items";
import { itemData } from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemData);

  function handleAddItem() {
    setItems();
  }
  return (
    <main>
      <header className="flex ml-170 md:ml-80">
        <h1 className="text-2xl font-bold my-3">Shopping List</h1>
      </header>
      <NewItems onAddItem={handleAddItem} />
      <div>
        <ItemList itemList={items} />
      </div>
    </main>
  );
}
