import "./App.css";
import Navbar from "./components/Navbar";
import AvailablePlayers from "./components/AvailablePlayers";
import { Suspense, useState } from "react";
import SelectedPlayers from "./components/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/Players.json");
  return res.json();
};
 const playerPromise = fetchPlayers();

function App() {
 
  const [toggle,setToggle] = useState(true)
  const [availableCoins,setAvailableCoins] = useState(600000);
  const [buyingPlayer,setBuyingPlayer] = useState([]);

  const removePlayer =(p) =>{
    const filteredPlayer = buyingPlayer.filter(player => player.id !== p.id)
    setBuyingPlayer(filteredPlayer)
    setAvailableCoins(availableCoins + p.price)
    
  }
  


  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar availableCoins={availableCoins} />
      <div className="flex justify-between items-center w-300 mx-auto mt-7">
        <h2 className="font-bold  text-2xl">{`${toggle ===true?"Available Players":`Selected Players (${buyingPlayer.length}/6)`}`}</h2>
        <div className="flex py-3 ">
          <button onClick={()=>setToggle(true)} className={`btn py-2 px-4  text-black rounded-l-2xl border-r-0 ${toggle ===true ?'bg-[#E7FE29]':'bg-white'}`}>Available</button>
          <button onClick={()=>setToggle(false)} className={`btn py-2 px-4  text-black rounded-r-2xl border-r-0 ${toggle ===false ?'bg-[#E7FE29]':'bg-white'}`}>Selected <span>({`${buyingPlayer.length}`})</span></button>
        </div>
      </div>

{
toggle===true ? 
  <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
  
      <AvailablePlayers playerPromise={playerPromise} availableCoins={availableCoins} setAvailableCoins={setAvailableCoins} buyingPlayer={buyingPlayer} setBuyingPlayer={setBuyingPlayer} />
      </Suspense>
  :
  <SelectedPlayers buyingPlayer={buyingPlayer} removePlayer={removePlayer}/>
}

      
    </div>
  );
}

export default App;
