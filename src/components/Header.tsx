'use client';
import Link from 'next/link';
import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";



import { LuUser } from "react-icons/lu";

import { FaRegHeart } from "react-icons/fa";







const Header = () => {
  return (
    <div>
        <div className='w-[1920px] h-[44px] bg-[#7E33E0] flex items-center text-white space-x-2'>
<div className='ml-[350px] '>

{/* left */}


<div className='flex space-x-[180px]'>


<div className='flex space-x-2 items-center'>
<FaRegEnvelope className='mt-1' />
  <p>mhhasanul@gmail.com</p>
  </div>

<div className='flex space-x-2'>
<MdPhoneInTalk className='mt-1' /> 
<p>(12345)67890</p>
</div>

</div>

</div>

{/* right */}
<div className='flex relative left-[520px] space-x-2'>
<div className='flex '>
  <p className='w-[54] h-[16]'>English</p>
  <IoIosArrowDown className='mt-2 w-[16] h-[16]' />
</div>
<div className='flex'>
<p className='w-[34] h-[16]'>USD</p>
<IoIosArrowDown className='mt-1 w-[16] h-[16] ' />
</div>
<div className='flex'>
  <p className='w-[43] h-[16]'>
    <Link href={'/login'} >Login</Link>
  </p>
  <LuUser className='mt-1 ml-1 w-[10] h-[16]' />
</div>
<div className='flex'>
  <p className='w-[58] h-[16]'>Wishlist</p>
  <FaRegHeart className='mt-1 ml-1 w-[16] h-[16]' />
</div>
<div>
   <Link href={'/cart'}><IoCartOutline className='mt-1 ml-1 w-[24] h-[24] text-xl' /></Link> 

</div>

</div>

        </div>


        <div className='w-[1177px] h-[40px] mt-[16px] ml-[403px] flex flex-row'>
                  <div className=''>
                    <h1 className='text-[#0D0E43] mt-[3px] h-[34px] font-bold text-[34px] font-Josephin-sans'>Hekto</h1>
                  </div>
                  <div >
                    <ul className='flex space-x-4 mt-[16px] ml-[100px]  text-[#0D0E43]'>
                      <li className='text-[#FB2E86]'><Link href={"/"}> <p>Home </p>
                    
                     </Link></li>
                      <li className='hover:text-[#fb2e86]'><Link href={"/pages"}>Pages</Link></li>
                      <li className='hover:text-[#fb2e86]'><Link href={"/products"}>Products</Link></li>
                      <li className='hover:text-[#fb2e86] '><Link href={"/blog"}>Blog</Link></li>
                      <li className='hover:text-[#fb2e86] '><Link href={"/shop"}>Shop</Link></li>
                      <li className=' hover:text-[#fb2e86] '><Link href={"/contact"}>Contact</Link></li>
                    </ul>
                  </div>
        
        
                  
                    <div className='w-[317] h-[40] ml-[400px] flex border-2 items-center bg-[#FB2E86] '>
                    <input type="text" className='border-2 h-[40px] ' />
                    <span className='p-2'>
                    <CiSearch className='w-[24px] h-[24px] text-white'/>
        
                    </span>
                      </div>
                    
                </div>















         </div>
  )
}

export default Header
