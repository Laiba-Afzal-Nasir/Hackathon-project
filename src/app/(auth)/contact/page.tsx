export const metadata = {
    title: "Contact"
  
  };
  import React from 'react'
  import Image from 'next/image'
  import { FaFacebookF } from "react-icons/fa";
   import { FaTwitter } from "react-icons/fa";
   import { IoLogoInstagram } from "react-icons/io";
  
  const page = () => {
    return (
      <div>
           <div className='w-[1920px] h-[286px] mt-14 bg-[#F6F5FF]'>
      <div className='absolute mt-[63px] left-[371px] w-[202px] h-[62px]'>
                <h1 className='text-[30px] w-[265px]  text-[#101750] font-bold'>Contact</h1>
  
                <ul className='flex space-x-4 text-[16px]'>
                  <li>Home</li>
                  <li>Pages</li>
                  <li className='text-[#FB2E86]'>Contact Us</li>
                </ul>
              </div>
      </div>
  
  {/* content */}
  <div className='w-[1191px] h-[490px] flex space-x-4  absolute top-[531px] left-[375px]'>
      <div className=' '>
      <h1 className='text-[30px] text-[#101750] font-bold'>Information About us</h1>
      <p className='text-[#8A8FB9] w-[550px] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
      
  
      <div className= 'flex space-x-1 mt-8 '>
                <span className='w-[25px] h-[25px] bg-[#5E37FF] rounded-full'></span>
                <span className='w-[25px] h-[25px] bg-[#E60584] rounded-full'></span>
                <span className='w-[25px] h-[25px] bg-[#37DAF3] rounded-full'></span>
              </div>
  
              <h1 className='text-[30px] mt-[120px] text-[#101750] font-bold'>Get In Touch</h1>
      <p className='text-[#8A8FB9] w-[550px] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
      
  
              </div>
  
  
  
  {/* contact way */}
           <div>
           <h1 className='text-[30px] ml-[130px] text-[#101750] font-bold'>Contact Way</h1>
           <div className='w-[489px] h-[155px] ml-[50px]'>
              {/* two items  */}
              <div className='flex space-x-4 mt-[50px] ml-3'>
                  <div className='flex space-x-3'>
                      <span className='w-[45px] h-[45px] rounded-full bg-[#5726DF]'></span>
                      <p className='w-[172px] h-[53px] text-[#8A8FB9]'>Tel: 877-67-88-99 E-Mail: shop@store.com</p>
                      </div>
  
                      <div className='flex space-x-3'>
                      <span className='w-[45px] h-[45px] rounded-full bg-[#FB2E86]'></span>
                      <p className='w-[172px] h-[53px] text-[#8A8FB9]'>Tel: 877-67-88-99 E-Mail: shop@store.com</p>
                      </div>
              </div>
  
              <div className='flex space-x-4 mt-[50px] ml-3'>
                  <div className='flex space-x-3'>
                      <span className='w-[45px] h-[45px] rounded-full bg-[#FFB265]'></span>
                      <p className='w-[172px] h-[53px] text-[#8A8FB9]'>Tel: 877-67-88-99 E-Mail: shop@store.com</p>
                      </div>
  
                      <div className='flex space-x-3'>
                      <span className='w-[45px] h-[45px] rounded-full bg-[#1BE982]'></span>
                      <p className='w-[172px] h-[53px] text-[#8A8FB9]'>Tel: 877-67-88-99 E-Mail: shop@store.com</p>
                      </div>
              </div>
           </div>
           </div>   
             
  </div>
  
  {/* bottom */}
  
  <div className='w-[534px] h-[414px] absolute top-[1067px] left-[377px] '>
      <div className='flex  justify-between '>
          <input className='w-[255px] h-[45px] border-2' type="text" placeholder='Your Name'/>
          <input className='w-[255px] h-[45px] border-2' type="text" placeholder='Your email' />
      </div>
      <input className='w-[534px] h-[45px] mt-5 border-2' type="text" placeholder='Subject' />
      <input className='w-[534px] h-[166px] mt-5 border-2' type="text" placeholder='Type Your Message' />
      <button className='w-[157px] h-[44px] text-white mt-10 bg-[#FB2E86]'>Send Mail</button>
      </div>
  
      {/* image */}
      <div className='absolute top-[876px] left-[927px]'>
                                <Image 
                                      src={'/images/contact.png'}
                                      alt='bag'
                                      width={723}
                                      height={692}
                                      />
                            </div>
      
  {/* footer */}
  <div className='h-[532px] w-[1920px] mt-[1300px] bg-[#EEEFFB] flex justify-evenly'>
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
  
  
  
  
  
  
  
  
  
  
  
  
      {/* end */}
      </div>
    )
  }
  
  export default page