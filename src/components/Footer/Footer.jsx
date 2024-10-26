
import React from 'react'
import Subscribe from '../Subscribe/Subscribe'

const Footer = () => {
    return (
        <>
            <footer className=' bg-black bg-opacity-85  relative mt-56'>
                <section className='max-w-[1280px] mx-auto px-4 xl:px-0'>
                    <div className='absolute -top-44 left-0 w-full'>
                        <Subscribe ></Subscribe>
                    </div>
                    <div className='for_spacing h-[140px]'></div>

                    <div className='flex justify-center items-center py-12 md:py-6 '>
                        <img className='w-[155px]' src="logo-footer.png" alt="" />
                    </div>

                    <div className="footer_menu grid grid-cols-1 gap-12 md:gap-0 md:grid-cols-2 lg:grid-cols-3 text-white">
                        <div>
                            <h2 className='text-2xl font-semibold'>About Us</h2>
                            <p className='mt-2 w-4/5 md:w-3/5 text-gray-400'>We are a passionate team dedicated to providing the best services to our customers.</p>
                        </div>
                        <div >
                            <h2 className='text-2xl font-semibold'>Quick Links</h2>
                            <ul className='list-disc ml-12 mt-2 text-gray-400  '>
                                <li><a>Home</a></li>
                                <li><a>Fixture</a></li>
                                <li><a>Teams</a></li>
                                <li><a>Schedule</a></li>
                            </ul>
                        </div>

                        <div className='pb-8'>
                            <h2 className='text-2xl font-semibold'>Subscribe</h2>
                            <p className='text-gray-400 mt-2'>Subscribe to our newsletter for the latest updates.</p>
                            <div className="join mt-5 w-5/6 pb-4">
                                <input className="input input-bordered join-item w-full" placeholder="Enter Your Email" />
                                <button className="btn join-item rounded-r-full bg-yellow-100">Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className='copyright text-white text-center mt-2 pb-5'>
                        <p>all &copy;copyright are reserved by <a className='text-yellow-200' href="https://facebook.com/mrreja.me" target='_blank'>Rejaul Islam</a></p>
                    </div>

                </section>
            </footer>

        </>
    )
}

export default Footer