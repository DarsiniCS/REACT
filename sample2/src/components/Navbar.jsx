
import { Cross, User2 } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const nav = useNavigate()
    const NavLinks = [{
        title: "Profile",
        path: "/"
    },
    {
        title: "Projects",
        path: "/projects"
    },
    {
        title: "Contact",
        path: "/contact"
    }
    ]
    const emailref = useRef(null)
    const passwordref = useRef(null)
   
    const handleLogin = (e) => {
        e.preventDefault()
        setvisible(false)
       
        nav('/contact')
        console.log(emailref.current.value, passwordref.current.value)
    }

    const [visible, setvisible] = useState(false)
    return (
        <>
            <div className="w-full h-[11vh] flex justify-center items-center text-white bg-[#1D2F3E] shadow-md shadow-purple-100 rounded-sm sticky top-0 left-0">
                <div className="w-[80%] h-full flex justify-center items-center flex-row">
                    <div className='w-1/2 flex h-full justify-start items-center font-bold text-xl '> Darsini C S</div>
                    <div className='w-1/2 flex  h-full justify-end items-center'>
                        <ul className='w-[75%] list-none flex flex-row justify-evenly h-full'>
                            {
                                NavLinks.map((navdata, index) => (
                                    <NavLink key={index} to={navdata.path} className='border-b-4 border-transparent w-[5rem]'>
                                        <li className='font-bold text-xl    h-full rounded-sm flex justify-center items-center'>{navdata.title}</li>
                                    </NavLink>
                                ))
                            }
                        </ul>
                        <User2 className='cursor-pointer h-10 w-10  rounded-full border-2 hover:bg-white ' onClick={() => setvisible(true)} />
                    </div>
                </div>

            </div>
            {
                visible && (
                    <>
                        <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
                            <div className=" h-[40%] w-[30%] bg-red z-50 flex flex-col  bg-white  shadow-lg ">
                                <div className="w-full h-[20%] flex flex-row justify-start px-10 items-center border-5 bg-[#1D2F3E] text-white text-xl font-bold shadow-sm">
                                    <div className="w-1/2">
                                        Login
                                    </div>
                                    <div className="w-1/2 flex justify-end">
                                      
                                        <label className="relative inline-flex items-center cursor-pointer" onClick={() => setvisible(!visible)} >
                                            <input type="checkbox" value="" className="sr-only peer" />
                                            <div className="peer ring-0 bg-red-500  rounded-full outline-none duration-300 after:duration-500 w-8 h-8  after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0">
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full h-[85%] flex flex-row justify-center items-center">
                                    <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleLogin}>
                                        <input type="email" ref={emailref} name="" id="email" placeholder="Email" className="p-3 bg-[#f8f8f8] text-black w-full font-bold outline-none active:outline-none focus:border-b-7 hover:border-b-7 hover:border-black-300  " required />
                                        <input type="password" ref={passwordref} name="" id="password" placeholder="Password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-black-300   mb-3" required />
                                       
                                        <button type="submit" className="text-white bg-gradient-to-r   to-bg-[#1D2F3E]  hover:bg-gradient-to-br focus:ring-4 focus:outline-none bg-[#1D2F3E]  shadow-lg shadow-bg-[#1D2F3E]  dark:shadow-lg dark:shadow-bg-[#1D2F3E]  font-medium rounded-sm text-md px-5 py-2.5 text-center w-full h-[25%] mt-4">   Login</button>
                                    </form>
                                </div>
                                
                            </div>
                        </div>

                    </>
                )
            }
        </>
    )
}

export default Navbar