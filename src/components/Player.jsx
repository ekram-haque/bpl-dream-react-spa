import React from 'react';

const Player = ({player}) => {
    console.log(player)
    return (
    <div className="bg-white rounded-2xl shadow-md p-4 ">
      {/* Image */}
      <img
        src={player.img}
        alt={player.name}
        className=" object-cover rounded-xl"
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
        <span className="bg-gray-100 px-2 py-1 rounded-md text-xs">
          {player.role}
        </span>
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
        <button className="border px-3 py-1 rounded-lg text-sm hover:bg-gray-100">
          Choose Player
        </button>
      </div>
    </div>
    );
};

export default Player;