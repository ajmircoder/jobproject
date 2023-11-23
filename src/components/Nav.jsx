import React, { useState } from 'react'
import "../index.css"

export default function Nav() {
    const [toggle, setToggle] = useState(false);

    const toggleFun = () => {
        setToggle(!toggle);
    }
    return (
        <nav className=" bg-slate-400">
            <div className="px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span onClick={() => toggleFun()} className="absolute -inset-0.5" />
                            {/*Icon when menu is closed.Menu open: "hidden", Menu closed: "block"*/}
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {/*Icon when menu is open.Menu open: "block", Menu closed: "hidden"*/}
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <p className='logo text-white text-xl sm:text-3xl font-mono'>Basis Mathematics</p>
                        </div>

                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex">
                            <img src="https://cdn-icons-png.flaticon.com/128/724/724664.png" alt="" width="25px" />
                            <p className='mx-2'>Call Teacher</p>
                            <img className='' src="https://cdn-icons-png.flaticon.com/128/4526/4526832.png?ga=GA1.1.65379776.1698385560" alt="" width="25px" />
                            <p className='mx-2'>Support</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            {toggle ? <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <img className='block mx-auto' src="https://cdn-icons-png.flaticon.com/128/724/724664.png" alt="" width="25px" />
                    <p className=' text-center'>Call Teacher</p>
                    <img className='block mx-auto' src="https://cdn-icons-png.flaticon.com/128/4526/4526832.png?ga=GA1.1.65379776.1698385560" alt="" width="25px" />
                    <p className='text-center'>Support</p>
                </div>
            </div> : ""}

        </nav>
    )
}
