import React, { useEffect, useState } from 'react'
import PlayerCard from '../PlayerCard/PlayerCard'

const Available = ({handleSelectPlayers}) => {

    const [availablePlayer, setAvialablePlayer] = useState([])

    useEffect(() => {
        const handleAvialAbleAllPlayer = async () => {
            try {
                const res = await fetch('Data.json')
                const data = await res.json()
                setAvialablePlayer(data)
            } catch (err) {
                return
            }
        }
        handleAvialAbleAllPlayer()
    }, [])

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 xl:px-0 mt-12'>
                {
                    availablePlayer.map((player, ind) => (
                        <PlayerCard
                            key={ind}
                            player={player}
                            handleSelectPlayers={handleSelectPlayers}
                           
                        ></PlayerCard>
                    ))
                }

            </div>
        </>
    )
}

export default Available