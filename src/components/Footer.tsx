import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";






const Footer = () => {
 return (
   <div className=''>
<div className='h-[532px] w-[1920px] mt-20 bg-[#EEEFFB] flex justify-evenly'>
         <div className=' mt-[150px]'>
           <h1 className='text-[#0D0E43] font-bold text-[34px]'>Hekto</h1>
           <div>
             <input type="text" placeholder='Enter Email Adress' className=' p-2 mt-5 border-2 ' />
             <span className='bg-[#FB2E86] text-white p-2'>Sign Up</span>
           </div>

           <p className='font-semibold mt-5 text-[#8A8FB9]'>Contact Info</p>
           <p className='font-semibold mt-2 text-[#8A8FB9]'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
         </div>

         <div className=' mt-[100px]'>
           <h3 className='text-[22px] font-semibold mt-14 text-center text-[#000000]'>Categories</h3>
           <ul className='text-[#8A8FB9] py-8 text-left text-[16px] font-semibold'>
             <li className='pt-3'>Laptops & Computers</li>
             <li className='pt-3'>Cameras & Photography</li>
             <li className='pt-3'>Smart Phones & Tablets</li>
             <li className='pt-3'>Video Games & Consoles</li>
             <li className='pt-3'>Waterproof Headphones</li>
           </ul>

         </div>

         <div className='mt-[100px]'>

         <h3 className='text-[22px] font-semibold mt-14 text-center text-[#000000]'>Customer Care</h3>
           <ul className='text-[#8A8FB9] py-8 text-left text-[16px] font-semibold'>
             <li className='pt-3'>My Account</li>
             <li className='pt-3'>Discount</li>
             <li className='pt-3'>Returns</li>
             <li className='pt-3'>Orders History</li>
             <li className='pt-3'>Order Tracking</li>
           </ul>

         </div>

         <div className='mt-[100px]'>
         <h3 className='text-[22px] font-semibold mt-14  text-[#000000]'>Pages</h3>
           <ul className='text-[#8A8FB9] py-8 text-left text-[16px] font-semibold'>
             <li className='pt-3'>Blog</li>
             <li className='pt-3'>Browse the Shop</li>
             <li className='pt-3'>Category</li>
             <li className='pt-3'>Pre-Built Pages</li>
             <li className='pt-3'>Visual Composer Elements</li>
             <li className='pt-3'>WooCommerce Pages</li>
           </ul>

         </div>
     </div>

     <div>
       <div className='h-[53px] w-[1920px] flex items-center bg-[#E7E4F8]'>
           <p className='text-[#9DA0AE] ml-[377px]'>©Webecy - All Rights Reserved</p>

           <div className='flex space-x-2 ml-[900px] items-center'>
           <div className='bg-[#151875] text-white h-[20px] flex justify-center items-center w-[20px] py-1 rounded-full'>
                                            <FaFacebookF />
                              
                          </div>

           <div className='bg-[#151875] text-white h-[20px] flex justify-center items-center w-[20px] py-1 rounded-full'>
                                            <FaTwitter />
                              
                          </div>

       <div className='bg-[#151875] text-white h-[20px] flex justify-center items-center w-[20px] py-1 rounded-full'>
                                        <IoLogoInstagram />
                          
                      </div>

           </div>
       </div>
     </div>












   </div>
 )
}

export default Footer