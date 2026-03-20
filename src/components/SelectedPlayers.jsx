import React from 'react';

const SelectedPlayers = ({buyingPlayer}) => {
    console.log(buyingPlayer)
    return (
        <div className='w-300 mx-auto'>
           {
            buyingPlayer.map(player =>(
                <div className='border border-gray-400 p-3 rounded-lg mt-5 flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={player.img} className='w-13 h-13  rounded-lg' alt="" />
                        <div className='ml-3'>
                            <h2>{player.name}</h2>
                            <p className='text-sm text-gray-400'>{player.role}</p>
                        </div>
                    </div>
                    <div><img src="https://i.ibb.co.com/8ZstQr2/Frame.png" alt="" /></div>
                </div>
            ))
           }
        </div>
    );
};

export default SelectedPlayers;