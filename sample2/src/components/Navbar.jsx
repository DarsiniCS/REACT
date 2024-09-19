
import { User2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
const NavBar=({appname})=>
    {
      
        return (
            
            <div className=" w-full h-full flex flex-col bg-white justify-start items-start gap-3">
        <div className="w-full h-full bg-[#1D2F3E] text-white flex flex-row justify-between items-between py-8">
         <div className="font-bold text-2xl px-4">DARSINI C S</div> 
         <div>
            <ul className="text-2xl flex flex-row justify-center items-center font-bold gap-8 px-9 list-none">
                <Link to={'/'}>
                <li>PROFILE</li></Link>
                <Link to={'/projects'}>
                <li>PROJECT</li></Link>
                <Link to={'/contact'}>
                <li>CONTACT</li></Link>
                <User2 className='h-9 w-9 text-white rounded-full border-2 border-white' />
            </ul>
            {/* <User2 className="h-[30%] w-[30%]"/> */}
            
         </div> 
        </div>
        </div>
    )
    }
    export default NavBar;