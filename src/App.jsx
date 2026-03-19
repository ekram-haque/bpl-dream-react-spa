import "./App.css";
import Navbar from "./components/Navbar";
import AvailablePlayers from "./components/AvailablePlayers";
import { Suspense } from "react";

const fetchPlayers = async () => {
  const res = await fetch("/Players.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayers();
  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <AvailablePlayers playerPromise={playerPromise} />
      </Suspense>
    </div>
  );
}

export default App;
