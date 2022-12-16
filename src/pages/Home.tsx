import { Icon } from "@iconify/react";
import { useState } from "react";

export const Home = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center gap-8">
      <div className="flex justify-center items-center gap-4">
        <a
          className="hover:drop-shadow-dark"
          href="https://vitejs.dev"
          target="_blank"
        >
          <Icon icon="logos:vitejs" fontSize={80} />
        </a>

        <a
          className="hover:drop-shadow-dark"
          href="https://reactjs.org"
          target="_blank"
        >
          <Icon icon="vscode-icons:file-type-reactts" fontSize={80} />
        </a>

        <a
          className="hover:drop-shadow-dark"
          href="https://www.typescriptlang.org"
          target="_blank"
        >
          <Icon icon="logos:typescript-icon" fontSize={80} />
        </a>

        <a
          className="hover:drop-shadow-dark"
          href="https://tailwindcss.com"
          target="_blank"
        >
          <Icon icon="logos:tailwindcss-icon" fontSize={80} />
        </a>

        <a
          className="hover:drop-shadow-dark"
          href="https://www.electronjs.org"
          target="_blank"
        >
          <Icon icon="logos:electron" fontSize={80} />
        </a>
      </div>

      <h1 className="text-3xl">
        Vite + React + Typescript + Tailwind + Electron
      </h1>

      <button
        onClick={handleClick}
        className="bg-dark-bg2 border border-dark-hover p-3 rounded-lg hover:bg-dark-hover hover:text-dark-title"
      >
        Count is {count}
      </button>
    </div>
  );
};
