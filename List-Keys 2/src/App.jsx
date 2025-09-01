import { useState } from "react";
import RecipeCard from "./components/RecipeCard";

function App() {
  const recipes = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      cuisine: "Italian",
      difficulty: "Medium",
      ingredients: ["Spaghetti", "Eggs", "Parmesan", "Bacon"],
    },
    {
      id: 2,
      name: "Sushi Roll",
      cuisine: "Japanese",
      difficulty: "Hard",
      ingredients: ["Rice", "Nori", "Salmon", "Avocado", "Cucumber"],
    },
    {
      id: 3,
      name: "Pancakes",
      cuisine: "American",
      difficulty: "Easy",
      ingredients: ["Flour", "Eggs", "Milk", "Baking Powder"],
    },
    {
      id: 4,
      name: "Paneer Butter Masala",
      cuisine: "Indian",
      difficulty: "Medium",
      ingredients: ["Paneer", "Tomatoes", "Butter", "Cream", "Spices"],
    },
  ];

  const [filter, setFilter] = useState("All");

  const filteredRecipes =
    filter === "All"
      ? recipes
      : recipes.filter((r) => r.cuisine === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-50 p-8">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-8">
        🍽 Recipe Explorer
      </h1>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        {["All", "Italian", "Japanese", "American", "Indian"].map((cuisine) => (
          <button
            key={cuisine}
            onClick={() => setFilter(cuisine)}
            className={`px-4 py-2 rounded-lg shadow-md transition ${
              filter === cuisine
                ? "bg-pink-600 text-white"
                : "bg-white hover:bg-pink-100"
            }`}
          >
            {cuisine}
          </button>
        ))}
      </div>

      {/* Recipe List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
