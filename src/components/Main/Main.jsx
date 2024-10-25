import React from 'react'
import Available from '../Avialable/Available'
import Selecteds from '../Selecteds/Selecteds'

const Main = ({ toggleBtn, handleToggleBtn, handleSelectPlayers, selectPlayer, selectedPlayerInfo,handleDeleteBtn }) => {

    return (
        <>

            <main className='max-w-[1280px] mx-auto mt-12 pb-6'>
                <div className='main_section_head md:flex gap-5 md:gap-0 justify-between items-center px-4 xl:px-0'>
                    <h2 className='text-2xl font-semibold'>{toggleBtn === "available" ? "Available Players" : <span className='text-2xl font-semibold'>Selected Player (<span>{selectPlayer.length}</span>/6)</span>}</h2>
                    <div className='avialable_and_selected_btn flex gap-3 items-center justify-center md:justify-normal mt-5 md:mt-0'>
                        <button onClick={() => { handleToggleBtn("available") }} className={`btn btn-outline text-sm md:text-lg ${toggleBtn === "available" ? 'bg-yellow-400' : 'bg-none'} `}>Available</button>
                        <button onClick={() => { handleToggleBtn("selected") }} className={`btn btn-outline text-sm md:text-lg ${toggleBtn === "selected" ? 'bg-yellow-400' : 'bg-none'} `}>Selected ( <span>{selectPlayer.length}</span> )</button>

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