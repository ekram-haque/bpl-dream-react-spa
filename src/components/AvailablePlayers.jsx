import React, { use } from 'react';
import Player from './Player';

const AvailablePlayers = ({playerPromise,availableCoins,setAvailableCoins}) => {
    const players = use(playerPromise)
    // console.log(players)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 w-300 mx-auto gap-5'>
            {
                players.map(player =>(
                        <Player key={player.id} player={player} availableCoins={availableCoins} setAvailableCoins={setAvailableCoins}/> 
                )
                  
                )
            }
        </div>
    );
};

export default AvailablePlayers;