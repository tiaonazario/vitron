import { StatusBar } from "@/components/StatusBar";
import { TitleBar } from "@/components/TitleBar";
import { Home } from "@/pages/Home";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <TitleBar />
      <Home />
      <StatusBar />
    </div>
  );
}

export default App;
