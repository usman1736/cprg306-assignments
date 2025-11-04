"use client";
import React from "react";
import { useState, useEffect } from "react";

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [ingredient, setIngredient] = useState("");

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        ` https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = response.json();
      setMeals(data.meals);
    } catch (error) {
      console.log(error.message);
    }
  }

  function loadMealIdeas(ingredient) {
    fetchMealIdeas(ingredient);
  }

  useEffect(() => {
    loadMealIdeas(ingredient);
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
    <div>
      {meals.length > 0 ? (
        <header>
          <h2>Meal Ideas for "{ingredient}"</h2>
          <ul>
            {meals.map((item) => (
              <li key={item.idMeal}>{item.strName}</li>
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
