import React from 'react'

const PlayerCard = ({ player, handleSelectPlayers }) => {

    if (!player) {
        return null; // Render nothing if player is not available yet
    }
    const { img, player_name, nationality, position, batting_style, bowling_style, beating_price } = player
    return (
        <>

            <div className='single_player_card overflow-hidden'>
                <div className="card shadow-xl border-2 border-gray-300 p-2">
                    <img className='h-[230px] rounded-lg'
                        src={img}
                        alt="Shoes" />
                    <div className="card-body p-3">
                        <h2 className='card-title'><img className='w-[25px]' src="https://img.icons8.com/?size=30&id=99268&format=png" alt="" /> {player_name}</h2>
                        <div className='flex justify-between items-center py-2'>
                            <h2 className='flex items-center gap-1'><img className='w-[20px]' src="https://img.icons8.com/?size=256w&id=kvSrC8QSaaSl&format=png" alt="flag img" /> {nationality}</h2>
                            <h2 className='bg-green-200 py-1 px-2 rounded-md bg-opacity-50'>{position}</h2>
                        </div>
                        <div>
                            <h2 className='text-md font-semibold'>Rating</h2>
                            <div className='flex items-center justify-between mt-2'>
                                <h2>{batting_style}</h2>
                                <h2>{bowling_style}</h2>
                            </div>
                            <div className='flex items-center justify-between mt-3 pb-3'>
                                <h2 className='text-sm md:font-semibold flex items-center'>Price: <span><img className='w-[18px]' src="https://img.icons8.com/?size=256w&id=fQVp6cgYGxh3&format=png" alt="" /></span><span className='lg:text-sm'>{beating_price}</span></h2>
                                <button onClick={() => { handleSelectPlayers(player)}} className="btn text-xs md:text-base ring-offset-2 ring-2 ring-yellow-300 bg-yellow-200 px-2 md:px-4 lg:px-2">Choose Player</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default PlayerCard




