"use client";

import { useState } from "react";

export const CardCounter = () => {
  const [counter, setSounter] = useState(0);
  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button
          onClick={() => setSounter(counter + 1)}
          className="bg-slate-950 text-white flex items-center justify-center rounded-xl p-2 w-[100px] mr-2 "
        >
          +1
        </button>
        <button
          onClick={() => setSounter(counter - 1)}
          className="bg-slate-950 text-white flex items-center justify-center rounded-xl p-2 w-[100px]"
        >
          -1
        </button>
      </div>
    </>
  );
};
