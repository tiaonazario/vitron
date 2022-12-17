import React, { useState } from "react";

export const StatusBar: React.FC = () => {
  const [status, setStatus] = useState("Carregando...");

  return (
    <footer className="w-full h-5 flex items-center justify-between bg-dark-bg1 pl-2 pr-2">
      <span className="text-xs">{status}</span>

      <div className="flex gap-4">
        <span className="text-xs">Tião Nazário</span>

        <span className="text-xs">© 2022 Vitron</span>
      </div>
    </footer>
  );
};
