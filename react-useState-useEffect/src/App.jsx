import { useState, useEffect } from "react";

export default function App() {
  // Counter
  const [count, setCount] = useState(0);

  //Clock
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6">
      <h1 className="text-4xl font-extrabold mb-6"> React Hooks</h1>

      {/* Counter Section */}
      <div className="bg-white text-gray-800 shadow-xl rounded-2xl p-6 mb-6 w-80 text-center">
        <h2 className="text-2xl font-semibold mb-4">Counter</h2>
        <p className="text-3xl font-bold mb-4">{count}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          >
            - Decrease
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
          >
            + Increase
          </button>
        </div>
      </div>

      {/* Clock Section */}
      <div className="bg-white text-gray-800 shadow-xl rounded-2xl p-6 w-80 text-center">
        <h2 className="text-2xl font-semibold mb-4">⏰ Live Clock</h2>
        <p className="text-3xl font-mono font-bold text-indigo-600">{time}</p>
        <p className="text-sm text-gray-500 mt-2">Updates every second</p>
      </div>
    </div>
  );
}
