import {Menu , X } from 'lucide-react'
import  { useState } from 'react';
import { Nav } from '../contant/Nav';

const Navbar = () => {
    const [open , setopen] = useState(false)
    const Toggle = ()=>(
        setopen(!open)
    )

    return (
        <header className="bg-black paddings realtive innerWidth">
            <nav className="flex justify-between  items-center">
                <img src="./logo.png" alt="Logo" width={90} className='logo z-10 ' />
                <figure className='bg-white w-[20rem] h-[20rem]  lg:w-[35rem] lg:h-[35rem] -left-7 top-[30px] lg:-left-[200px] absolute opacity-20 lg:-top-14 blur-3xl rounded-full ' />
                <figure className='bg-blue-600 w-[4rem] h-[4rem] top-[120px] left-[14rem] md:top-[150px] md:left-[16rem] lg:top-[180px] lg:left-[19.5rem] absolute rounded-full ' />
                <ul className="md:flex hidden gap-8">
                    {Nav.map((link, i) => (
                        <li key={i} className="flex items-center text-white hover:text-sky-500 font-medium ">
                            <a href={link.link}>{link.label}</a>
                        </li>
                    ))}
                    <button className="btn btn-outline btn-primary">Login</button>
                </ul>
                {/* Mobile */}
                <div className="md:hidden flex" onClick={Toggle} >
                <label className="btn-circle swap swap-rotate">
                    {!open ? <Menu color='white' /> : <X color='white' /> }
                
                </label>
                </div>
                <div className={`absolute top-20 z-50 right-4 w-full max-w-xs  rounded-lg shadow-lg p-6 text-base font-semibold  bg-slate-800 text-slate-400 highlight-white/5 ${open ? ' visible':'hidden' }    `} onClick={Toggle}>
                    <ul className=' space-y-4' >
                        {Nav.map((link , i)=>(
                        <li key={i} onClick={Toggle} className="flex items-center text-white hover:text-sky-500 transition-all font-medium ">
                            <a href={link.link}>{link.label}</a>
                        </li>
                        ))}
                        <div className="flex justify-between    ">
                        <button className="btn btn-outline btn-primary">Login</button>
                        </div>
                    </ul>
                </div>
                {/* Mobile */}
            </nav>
        </header>
    );
};

export default Navbar;
