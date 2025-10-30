"use client";

import ItemList from "./item-list";
import NewItems from "./new-items";
import itemData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

// clean the item name for TheMealDB:
// - keep text before first comma
// - strip emojis/variation selectors
// - remove non letter/number/space
// - normalize spaces + lowercase
function cleanIngredient(raw) {
  if (!raw) return "";
  const first = String(raw)
    .split(",")[0]
    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "") // emoji surrogate pairs
    .replace(/[\uFE0E\uFE0F]/g, ""); // emoji variation selectors

  const basic = first.replace(/[^\p{L}\p{N}\s]/gu, "");
  return basic.replace(/\s+/g, " ").trim().toLowerCase();
}

export default function Page() {
  const [items, setItems] = useState([...itemData]);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(item) {
    setItems((prev) => [...prev, item]);
  }

  function handleItemSelect(item) {
    const cleaned = cleanIngredient(item?.name);
    setSelectedItemName(cleaned);
  }

  return (
    <main>
      <header className="flex ml-170 md:ml-80">
        <h1 className="text-2xl font-bold my-3">Shopping List + Meal Ideas</h1>
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* left: add + list (your components & spacing) */}
        <div className="flex-1">
          <NewItems onAddItem={handleAddItem} />
          <ItemList passingItems={items} onItemSelect={handleItemSelect} />
        </div>

        {/* right: meal ideas panel */}
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
