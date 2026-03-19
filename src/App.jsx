import "./App.css";
import Navbar from "./components/Navbar";
import AvailablePlayers from "./components/AvailablePlayers";
import { Suspense, useState } from "react";
import SelectedPlayers from "./components/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/Players.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayers();

  const [toggle,setToggle] = useState(true)


  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      <div className="flex justify-between items-center w-300 mx-auto mt-7">
        <h2 className="font-bold text-2xl">{`${toggle ===true?"Available Players":"Selected Players"}`}</h2>
        <div className="flex  ">
          <button onClick={()=>setToggle(true)} className={`btn py-2 px-4  text-black rounded-l-2xl border-r-0 ${toggle ===true ?'bg-[#E7FE29]':'bg-white'}`}>Available</button>
          <button onClick={()=>setToggle(false)} className={`btn py-2 px-4  text-black rounded-r-2xl border-r-0 ${toggle ===false ?'bg-[#E7FE29]':'bg-white'}`}>Selected <span>(0)</span></button>
        </div>
      </div>

{
toggle===true ? 
  <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <AvailablePlayers playerPromise={playerPromise} />
      </Suspense>
  :
  <SelectedPlayers/>
}

      
    </div>
  );
}

export default App;
