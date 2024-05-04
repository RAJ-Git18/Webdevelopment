import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='bg-blue-950 top-0 text-white flex justify-center items-center px-36 h-[7vh] w-full font-semibold text-base fixed z-10 md:text-xl md:justify-between '>
            <div className="hidden md:block">
                Pass<span className='text-green-400'>Manager</span>
            </div>
            <nav className='flex gap-10 list-none'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contactus'><li>ContactUs</li></Link>
            </nav>
        </div>
    )
}

export default Navbar
