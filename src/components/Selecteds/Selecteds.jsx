
import React from 'react'
import SelectPlayer from '../SelectPlayer/SelectPlayer'

const Selecteds = ({ selectedPlayerInfo, handleToggleBtn,handleDeleteBtn }) => {

    return (
        <>

            <div className='selection_player max-w-[1280px] mx-auto px-4 xl:px-0 mt-12'>

                <div>
                    {
                        selectedPlayerInfo.map((singlePlayer, ind) => (
                            <SelectPlayer
                                key={ind}
                                singlePlayer={singlePlayer}
                                handleDeleteBtn={handleDeleteBtn}

                            ></SelectPlayer>
                        ))
                    }

                    {/* <SelectPlayer ></SelectPlayer> */}
                </div>

                <div className='mt-20'>
                    <button onClick={() => { handleToggleBtn("available") }} className="btn bg-yellow-200 px-8 border-2 border-gray-600 hover:bg-yellow-500">Add More Player</button>
                </div>


            </div>

        </>
    )
}

export default Selecteds