import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`You typed: ${text}`);
    setText("");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-teal-600">
        Event Handling 
      </h1>

      {/* Counter with onClick */}
      <div className="bg-white p-6 rounded-2xl shadow w-80 text-center mb-6">
        <h2 className="text-lg font-semibold mb-2">Counter</h2>
        <p className="text-3xl font-bold mb-4">{count}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            −
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            +
          </button>
        </div>
      </div>

      {/* Form with onChange + onSubmit */}
      <div className="bg-white p-6 rounded-2xl shadow w-80">
        <h2 className="text-lg font-semibold mb-2">Form</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
