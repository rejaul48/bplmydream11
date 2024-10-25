import React from 'react'

const Hero = ({ handleClaimCredit }) => {
    return (
        <>

            <section className='Hero_section max-w-[1280px] mx-auto px-4 xl:px-0 mt-2'>
                <div
                    className="hero h-[350px] md:h-[450px] lg:h-[500px] rounded-lg"
                    style={{
                        backgroundImage: "url(bg-shadow.png)",
                        backgroundColor: "black"
                    }}>
                    <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-5xl">
                            <div className='w-full flex justify-center items-center'>
                                <img className=' w-[130px] md:w-[180px]' src="banner-main.png" alt="" />
                            </div>
                            <h1 className="mt-5 mb-2 text-xl md:text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                            <p className='mb-2 text-lg text-gray-400 font-[500]'>Beyond Boundaries Beyond Limits</p>
                            <button onClick={() => { handleClaimCredit() }}

                                className="btn bg-yellow-400 border-none ring-offset-4 ring-2 ring-yellow-500 px-8 text-lg font-[500] hover:bg-yellow-300 mt-3">Claim Free Credit</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


export default Hero