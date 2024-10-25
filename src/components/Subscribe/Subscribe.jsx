import React from 'react'

const Subscribe = () => {
    return (
        <>

            <div className='text-black bg-opacity-75 rounded-lg w-[95%] md:w-4/6 mx-auto text-center py-5 mt-20 z-10  '>

                <div
                    className="hero rounded-lg"
                    style={{
                        backgroundImage: "url(bg-shadow.png)",
                        backgroundColor: "white"
                    }}>

                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h2 className='text-2xl font-semibold text-black text-opacity-85'>Subscribe to our Newsletter</h2>
                            <p className='text-gray-600 py-3 w-3/4 mx-auto md:w-full'>Get the latest updates and news right in your inbox!</p>
                            <div className="join mt-5 w-full pb-4">
                                <input className="input input-bordered join-item w-full" placeholder="Email" />
                                <button className="btn join-item rounded-r-full bg-yellow-600 bg-opacity-65 hover:bg-yellow-500">Subscribe</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Subscribe
