import React from 'react'
import Available from '../Avialable/Available'
import Selecteds from '../Selecteds/Selecteds'

const Main = ({ toggleBtn, handleToggleBtn, handleSelectPlayers, selectPlayer, selectedPlayerInfo,handleDeleteBtn }) => {

    return (
        <>

            <main className='max-w-[1280px] mx-auto mt-12 pb-6'>
                <div className='main_section_head md:flex  justify-between items-center px-4 xl:px-0'>
                    <h2 className='text-sm md:text-xl font-semibold'>{toggleBtn === "available" ? "Available Players" : <span className='md:text-2xl font-semibold'>Selected Player (<span>{selectPlayer.length}</span>/6)</span>}</h2>
                    <div className='avialable_and_selected_btn border-2 rounded-lg mt-3 md:mt-0'>
                        <button onClick={() => { handleToggleBtn("available") }} className={`btn  w-[50%] rounded-r-none hover:rounded-r-none md:w-auto text-xs md:text-lg ${toggleBtn === "available" ? 'bg-lime-400' : 'bg-none'} `}>Available</button>
                        <button onClick={() => { handleToggleBtn("selected") }} className={`btn w-[50%] rounded-l-none hover:rounded-l-none md:w-auto text-xs md:text-lg ${toggleBtn === "selected" ? 'bg-lime-400' : 'bg-none'} `}>Selected ( <span>{selectPlayer.length}</span> )</button>

                    </div>
                </div>

                {/* condition wise component rendering here */}

                {
                    toggleBtn === "available" ? <Available

                        handleSelectPlayers={handleSelectPlayers}


                    ></Available>

                        :

                        <Selecteds

                            selectedPlayerInfo={selectedPlayerInfo}
                            handleToggleBtn={handleToggleBtn}
                            handleDeleteBtn={handleDeleteBtn}

                        ></Selecteds>
                }


            </main>


        </>
    )
}

export default Main