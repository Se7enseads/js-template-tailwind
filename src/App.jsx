import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <p className="mb-5 text-5xl font-semibold text-white">
        <a href="https://pnpm.io/" className="hover:font-medium">
          {count === 3 ? "pnpm is cool" : "pnpm"}
        </a>
      </p>
      <div className="mb-4 flex justify-center">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="./vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src="./react.svg" className="logo react" alt="React logo" />
        </a>
        <a href="https://javascript.info" target="_blank" rel="noreferrer">
          <img src="./javascript.svg" className="logo js" alt="JS logo" />
        </a>
        <a href="https://eslint.org/" target="_blank" rel="noreferrer">
          <img src="./eslint.svg" className="logo esl" alt="ESL logo" />
        </a>
        <a
          href="https://typicode.github.io/husky/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./husky.svg" className="logo husky" alt="Husky logo" />
        </a>
        <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
          <img
            src="./tailwind.svg"
            className="logo react"
            alt="Tailwind logo"
          />
        </a>
      </div>
      <h2 className="text-4xl text-white">
        Vite + React + JavaScript + ESLint + Husky + Tailwind
      </h2>
      <div className="my-3">
        <button
          type="button"
          className="text-white"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="my-4 text-slate-500">Click on the logos to learn more</p>
      </div>
    </div>
  );
}

export default App;
