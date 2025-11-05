"use client";
import React from "react";
import { useState, useEffect } from "react";

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMeals(data.meals ?? []);
    } catch (error) {
      console.log(error.message);
    }
  }

  function loadMealIdeas(ingredient) {
    fetchMealIdeas(ingredient);
  }
  useEffect(() => {
    if (!ingredient) {
      setMeals([]);
    } else {
      loadMealIdeas(ingredient);
    }
  }, [ingredient]);

  if (!ingredient) {
    return (
      <div>
        <header>
          <h2>Meal ideas (select an item)</h2>
        </header>
        <p>choose an item to see ideas</p>
      </div>
    );
  }

  return (
    <div className="mt-10">
      {meals.length > 0 ? (
        <header>
          <h2 className="text-xl font-bold">Meal Ideas for "{ingredient}"</h2>
          <ul className="grid grid-cols-2 gap-3">
            {meals.map((item) => (
              <li
                className="flex border-1 rounded-sm border-white  p-2 "
                key={item.idMeal}
              >
                {item.strMeal}
              </li>
            ))}
          </ul>
        </header>
      ) : (
        <header>
          <h2>Meal ideas for "{ingredient}"</h2>
          <p>No meals found</p>
        </header>
      )}
    </div>
  );
}

export default MealIdeas;
