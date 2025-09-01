/* eslint-disable react/prop-types */
export default function RecipeCard({ recipe }) {
  const isEasy = recipe.difficulty === "Easy";

  return (
    <div
      className={`p-6 rounded-xl shadow-lg transition transform hover:-translate-y-2 ${
        isEasy ? "bg-green-100 border-2 border-green-400" : "bg-white"
      }`}
    >
      <h2 className="text-xl font-semibold text-pink-700">{recipe.name}</h2>
      <p className="text-gray-600">{recipe.cuisine}</p>
      <p className="mt-1 font-medium text-gray-800">Difficulty: {recipe.difficulty}</p>

      {/* Ingredients List (Nested List & Keys) */}
      <div className="mt-3">
        <h3 className="font-semibold text-gray-700">Ingredients:</h3>
        <ul className="list-disc list-inside mt-1 space-y-1">
          {recipe.ingredients.map((ing, idx) => (
            <li key={idx} className="text-gray-600">
              {ing}
            </li>
          ))}
        </ul>
      </div>

      {/* Easy Badge */}
      {isEasy && (
        <span className="mt-3 inline-block px-3 py-1 text-xs bg-green-500 text-white rounded-full shadow">
          🟢 Easy Recipe
        </span>
      )}
    </div>
  );
}
