import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container text-center mt-5">
      <h1 className="text-white display-1 fw-bold">
        {count === 3 ? "pnpm is cool" : "pnpm"}
      </h1>
      <div className="mb-4">
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
        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
          <img
            src="./bootstrap.svg"
            className="logo bootstrap"
            alt="Bootstrap logo"
          />
        </a>
      </div>
      <h2 className="text-white">
        Vite + React + JavaScript + ESLint + Husky + Bootstrap
      </h2>
      <div className="my-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="my-4 text-white">Click on the logos to learn more</p>
      </div>
    </div>
  );
}

export default App;
