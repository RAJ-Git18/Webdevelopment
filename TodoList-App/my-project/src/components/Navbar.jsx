import React from 'react'

function Navbar() {
    return (
        <div>
            <div className="navbar bg-purple-500 text-white text-lg flex justify-around items-center h-[8vh]">
                <span className='font-bold'>MyTask</span>
                <ul className='flex justify-around items- gap-3 md:gap-10 lg:gap-16 font-semibold m'>
                    <li className='hover:font-bold transition-all duration-500'>Home</li>
                    <li className='hover:font-bold transition-all duration-500'>Your Task</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar