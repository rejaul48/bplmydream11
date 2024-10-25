import React, { useState, useEffect } from 'react'

const Header = ({ freeCredit }) => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>

            <header className={`pt-1 mb-5 sticky top-0 z-20 overflow-hidden transition-colors duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}>

                <div className="max-w-[1280px] mx-auto navbar px-4 xl:px-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><a>Home</a></li>
                                <li><a>Fixture</a></li>
                                <li><a>Teams</a></li>
                                <li><a>Schedule</a></li>
                            </ul>
                        </div>
                        <a><img className='w-[65px] md:w-[85px]' src="logo.png" alt="" /></a>
                    </div>

                    <div className="navbar-end">
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 text-lg">
                                <li><a>Home</a></li>
                                <li><a>Fixture</a></li>
                                <li><a>Teams</a></li>
                                <li><a>Schedule</a></li>
                            </ul>
                        </div>
                        <a className="border-2 border-gray-200 rounded-lg py-2 px-4 flex items-center gap-2 text-lg"><span className='font-bold'>{freeCredit}</span> Coin <span><img className='w-[25px]' src="https://img.icons8.com/?size=48&id=OFHwDWASQWmX&format=png" alt="" /></span></a>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header