"use client";

import { useEffect, useState } from "react";

// Fetch meals for a given ingredient via TheMealDB.
// Returns [] if ingredient is blank or API returns no results.
async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
    ingredient
  )}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data?.meals) ? data.meals : [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        setErr("");
        setLoading(true);
        const list = await fetchMealIdeas(ingredient);
        if (!ignore) setMeals(list);
      } catch (e) {
        if (!ignore) setErr("Could not load meal ideas.");
      } finally {
        if (!ignore) setLoading(false);
      }
    })();
    return () => {
      ignore = true;
    };
  }, [ingredient]);

  return (
    <div className="p-4 border-1 border-black rounded-sm ml-170 md:ml-10 mt-6 max-w-xl">
      <h2 className="text-xl font-bold mb-2">
        Meal Ideas {ingredient ? `for “${ingredient}”` : ""}
      </h2>

      {!ingredient && (
        <p className="text-gray-600">
          Click a shopping list item to see ideas.
        </p>
      )}
      {loading && <p className="text-gray-600 mt-2">Loading…</p>}
      {err && <p className="text-red-600 mt-2">{err}</p>}
      {!loading && ingredient && meals.length === 0 && (
        <p className="text-gray-600 mt-2">No meals found.</p>
      )}

      <ul className="mt-3">
        {meals.map((item) => (
          <li
            key={item.idMeal}
            className="flex items-center gap-3 p-2 border-1 border-gray-200 rounded-sm mb-2"
          >
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              className="w-12 h-12 rounded-sm object-cover"
            />
            <span className="text-gray-800">{item.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
