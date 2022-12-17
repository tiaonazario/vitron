import { Icon } from "@iconify/react";
import React, { useState } from "react";
import vitronLogo from "@/assets/images/vitron.svg";

export const TitleBar: React.FC = () => {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = () => {
    if (isMaximized) {
      setIsMaximized(false);
    } else {
      setIsMaximized(true);
    }
    window.Main.Maximize();
  };

  return (
    <header className="w-full h-8 flex items-center justify-between bg-dark-bg1 drag">
      <div className="p-2">
        <img src={vitronLogo} alt="" className="w-4" />
      </div>

      <span className="">Vitron</span>

      <div className="flex items-center no-drag">
        <button
          className="w-10 h-8 flex justify-center items-center hover:bg-dark-bg-2"
          onClick={window.Main.Minimize}
        >
          <Icon
            icon="fluent:minimize-12-regular"
            fontSize={20}
            className="text-dark-text"
          />
        </button>

        <button
          className="w-10 h-8 flex justify-center items-center hover:bg-dark-bg-2"
          onClick={handleMaximize}
        >
          <Icon
            icon={
              isMaximized
                ? "fluent:maximize-16-regular"
                : "codicon:chrome-restore"
            }
            fontSize={20}
            className="text-dark-text"
          />
        </button>

        <button
          className="w-10 h-8 flex justify-center items-center hover:bg-red-600"
          onClick={window.Main.Close}
        >
          <Icon
            icon="ic:round-close"
            fontSize={20}
            className="text-dark-text"
          />
        </button>
      </div>
    </header>
  );
};
