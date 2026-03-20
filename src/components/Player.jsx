// import React, { useState } from "react";
import { toast } from "react-toastify";

const Player = ({
  player,
  availableCoins,
  setAvailableCoins,
  buyingPlayer,
  setBuyingPlayer,
}) => {
  //   const [isSelected, setIsSelected] = useState(false);
  const isSelected = buyingPlayer.some((p) => p.id === player.id);

  return (
    <div
      className={` rounded-2xl mt-5 shadow-md p-4 ${isSelected ? "bg-gray-400" : "bg-white"}`}
    >
      {/* Image */}
      <img
        src={player.img}
        alt={player.name}
        className="h-50 w-88  object-cover rounded-xl"
      />

      {/* Name */}
      <div className="flex items-center gap-2 mt-4">
        <span className="text-xl">👤</span>
        <h2 className="font-semibold text-lg">{player.name}</h2>
      </div>

      {/* Country + Role */}
      <div className="flex justify-between items-center mt-2 text-gray-500 text-sm">
        <div className="flex items-center gap-1">
          <span>🏳️</span>
          <p>{player.country}</p>
        </div>
        <span className=" px-2 py-1 rounded-md text-xs">{player.role}</span>
      </div>

      <hr className="my-3" />

      {/* Rating */}
      <p className="font-medium">Rating</p>

      {/* Batting */}
      <div className="flex justify-between text-sm mt-1">
        <p className="font-semibold">{player.battingStyle}</p>
        <p className="text-gray-500">{player.bowlingStyle}</p>
      </div>

      {/* Price + Button */}
      <div className="flex justify-between items-center mt-4">
        <p className="font-semibold">Price: ${player.price}</p>

        <button
          disabled={isSelected}
          onClick={() => {
            if (availableCoins < player.price) {
              toast("Not enough money");
              return;
            }

            if (buyingPlayer.length === 6) {
              toast("Select only 6 players");
              return;
            }

            setAvailableCoins(availableCoins - player.price);
            setBuyingPlayer([...buyingPlayer, player]);
          }}
          className={`btn ${
            isSelected
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-white text-black"
          }`}
        >
          {isSelected ? "Selected" : "Choose Player"}
        </button>
      </div>
    </div>
  );
};

export default Player;
