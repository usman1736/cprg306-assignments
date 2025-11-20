"use client";
import ItemList from "./item-list";
import NewItems from "./new-items";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import { getItems } from "../_services/shopping-list-services";
import { addItem } from "../_services/shopping-list-services";
import { useUserAuth } from "@/app/context/AuthContext";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  const loadItems = async () => {
    try {
      const shoppingList = await getItems(user.uid);
      setItems(shoppingList);
    } catch (error) {
      console.error(`Error getting items for the user: ${user.uid}`, error);
    }
  };

  function handleItemSelect(selectedItem) {
    setSelectedItemName(cleanName(selectedItem));
  }

  function cleanName(name) {
    if (!name) return "";

    let cleaned = name;

    if (name.includes(",")) {
      cleaned = name.split(",")[0];
    } else if (name.includes(" ")) {
      cleaned = name.split(" ")[0];
    }
    return cleaned.trim();
  }

  const handleAddItem = async (item) => {
    const id = await addItem(user.uid, item);
    const addedItem = { id, ...item };
    setItems([...items, item]);
  };

  if (!user) {
    return (
      <main>
        <p>Access denied</p>
        <p>Login and try again</p>
      </main>
    );
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  return (
    <main>
      <header className="flex ml-100 md:ml-1">
        <h1 className="text-2xl font-bold my-3">Shopping List + Meal Ideas</h1>
      </header>
      <div className="flex flex-row gap-5">
        <div>
          <NewItems onAddItem={handleAddItem} />
          <ItemList passingItems={items} onItemSelect={handleItemSelect} />
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
