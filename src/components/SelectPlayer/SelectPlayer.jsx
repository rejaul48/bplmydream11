import React from 'react'

const SelectPlayer = ({ singlePlayer, handleDeleteBtn }) => {
    return (
        <>

            <div className='flex justify-between items-center my-5 border-2 border-gray-500  border-opacity-25 rounded-2xl p-2'>
                <div className='flex items-center gap-4'>
                    <img className='w-[65px] h-[65px] rounded-full' src={singlePlayer.img} alt="selected player img" />

                    <div>
                        <h2 className='text-xl font-semibold'>{singlePlayer.player_name}</h2>
                        <p className='text-sm font-light my-1'>{singlePlayer.batting_style}</p>
                        <p className='text-sm font-semibold'>{singlePlayer.beating_price} Lac</p>

                    </div>
                   

                </div>

                <div>
                    <button onClick={() => { handleDeleteBtn(singlePlayer) }}><img className='w-[35px] mr-5 ' src="https://img.icons8.com/?size=50&id=8329&format=png" alt="red bin" /></button>
                </div>

            </div>


        </>
    )
}

export default SelectPlayer