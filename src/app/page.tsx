"use client";
import { useState } from "react";

export default function Home() {
  const [passwordSize, setPasswordSize] = useState<number>(8);
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl text-gray-200 mb-4 text-center font-bold">
        Password Generator
      </h1>
      <div className="w-1/4 bg-slate-700 text-gray-200 rounded-md p-8">
        <div className="flex flex-col gap-3 text-2xl">
          <label className="flex justify-between">
            <span>Password size:</span>
            <span className="text-blue-500">{passwordSize}</span>
          </label>
          <input
            type="range"
            min={5}
            max={30}
            value={passwordSize}
            onChange={(e) => setPasswordSize(+e.target.value)}
          />
        </div>
      </div>
    </main>
  );
}
