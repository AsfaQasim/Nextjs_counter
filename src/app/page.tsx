"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  // Functions for Increment, Decrement, and Reset
  function addVal() {
    setCounter(counter + 1);
  }

  function delVal() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <div className="bg-purple-900 h-[100vh] flex items-center justify-center">
      <div className="counter-container bg-gradient-to-b from-purple-400 to-purple-600 rounded-lg 
      shadow-lg py-10 w-72 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Counter</h2>
        <div className="count-display text-5xl font-extrabold text-black mb-8">
          {counter}
        </div>
        <div className="button-group flex justify-between px-2">
          <button
            onClick={addVal}
            className="bg-white text-purple-700 px-2  py-2 rounded-md shadow-md font-semibold
             hover:bg-gray-200 transition"
          >
            Increment
          </button>
          <button
            onClick={delVal}
            className="bg-white text-purple-700 px-2 py-2 rounded-md shadow-md font-semibold
             hover:bg-gray-200 transition"
          >
            Decrement
          </button>
          <button
            onClick={reset}
            className="bg-white text-purple-700 px-2 py-2 rounded-md shadow-md font-semibold
             hover:bg-gray-200 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
