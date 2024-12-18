export const metadata = {
    title: "Shopping Cart"
  
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
                <h1 className='text-[30px] w-[265px]  text-[#101750] font-bold'>Shopping Cart</h1>
  
                <ul className='flex space-x-4 text-[16px]'>
                  <li>Home</li>
                  <li>Pages</li>
                  <li className='text-[#FB2E86] '>Shopping Cart</li>
                </ul>
              </div>
      </div>
  
  {/* headings */}
    
       
  <h3 className='font-bold text-2xl absolute top-[539px] left-[374px] text-[#1D3178]'>Product</h3>
  <h3 className='font-bold text-2xl absolute top-[539px] left-[674px] text-[#1D3178]'>Price</h3>
  <h3 className='font-bold text-2xl absolute top-[539px] left-[826px] text-[#1D3178]'>Quantity</h3>
  <h3 className='font-bold text-2xl absolute top-[539px] left-[1034px] text-[#1D3178]'>Total</h3>
  <h3 className='font-bold text-2xl absolute top-[539px] left-[1307px] text-[#1D3178]'>Cart Tools</h3>
  
  
  
  
  <div className='flex  justify-center items-center h-[1500px] w-[1920px] absolute top-[600px]'>
    {/* shopping */}
    <div className='w-[50%] h-[1500px] space-y-10  mt-[130px]'>
        <div className='w-full h-[120px] border-b-2'>
          {/* image */}
          <div className='flex space-x-3 mt-3'>
            <Image
            src={'/images/Rectangle 34.png'}
            alt=''
            width={83}
            height={87}          />
  
            {/* context */}
            <div>
              <p className='text-[14px]'>Ut diam consequat</p>
              <p className='text-[12px] text-[#A1A8C1]'>Color:Brown</p>
              <p className='text-[12px] text-[#A1A8C1]'>Size:XL</p>
            </div>
  
  {/* price */}
            <div>
              <p className='text-[#15245E] ml-[260px] mt-[30px] font-bold'>$32.00</p>
            </div>
  
  {/* quantity */}
  
  <div className='w-[51px] h-[15px] flex justify-between items-center px-2 bg-[#F0EFF2] text-[#A1A8C1] mt-[35px] absolute left-[830px] '>
    <span>-</span>
    <span>1</span>
    <span>+</span>
  </div>
  
  {/* total */}
  
  <div>
              <p className='text-[#15245E] ml-[300px] mt-[30px] font-bold'>$32.00</p>
            </div>
  
          </div>
        </div>
  
  
  {/* next div */}
  <div className='w-full h-[120px] border-b-2  '>
          {/* image */}
          <div className='flex space-x-3 mt-3'>
            <Image
            src={'/images/Rectangle 35.png'}
            alt=''
            width={83}
            height={87}          />
  
            {/* context */}
            <div>
              <p className='text-[14px]'>Ut diam consequat</p>
              <p className='text-[12px] text-[#A1A8C1]'>Color:Brown</p>
              <p className='text-[12px] text-[#A1A8C1]'>Size:XL</p>
            </div>
  
  {/* price */}
            <div>
              <p className='text-[#15245E] ml-[260px] mt-[30px] font-bold'>$32.00</p>
            </div>
  
  {/* quantity */}
  
  <div className='w-[51px] h-[15px] flex justify-between items-center px-2 bg-[#F0EFF2] text-[#A1A8C1] mt-[35px] absolute left-[830px] '>
    <span>-</span>
    <span>1</span>
    <span>+</span>
  </div>
  
  {/* total */}
  
  <div>
              <p className='text-[#15245E] ml-[300px] mt-[30px] font-bold'>$32.00</p>
            </div>
  
          </div>
        </div>
  
        <div className='w-full h-[120px] border-b-2'>
          {/* image */}
          <div className='flex space-x-3 mt-3'>
            <Image
            src={'/images/Rectangle 36.png'}
            alt=''
            width={83}
            height={87}          />
  
            {/* context */}
            <div>
              <p className='text-[14px]'>Ut diam consequat</p>
              <p className='text-[12px] text-[#A1A8C1]'>Color:Brown</p>
              <p className='text-[12px] text-[#A1A8C1]'>Size:XL</p>
            </div>
  
  {/* price */}
            <div>
              <p className='text-[#15245E] ml-[260px] mt-[30px] font-bold'>$32.00</p>
            </div>
  
  {/* quantity */}
  
  <div className='w-[51px] h-[15px] flex justify-between items-center px-2 bg-[#F0EFF2] text-[#A1A8C1] mt-[35px] absolute left-[830px] '>
    <span>-</span>
    <span>1</span>
    <span>+</span>
  </div>
  
  {/* total */}
  
  <div>
              <p className='text-[#15245E] ml-[300px] mt-[30px] font-bold'>$32.00</p>
            </div>
  
          </div>
        </div>
  
        <div className='w-full h-[120px] border-b-2'>
          {/* image */}
          <div className='flex space-x-3 mt-3'>
            <Image
            src={'/images/Rectangle 37.png'}
            alt=''
            width={83}
            height={87}          />
  
            {/* context */}
            <div>
              <p className='text-[14px]'>Ut diam consequat</p>
              <p className='text-[12px] text-[#A1A8C1]'>Color:Brown</p>
              <p className='text-[12px] text-[#A1A8C1]'>Size:XL</p>
            </div>
  
  {/* price */}
            <div>
              <p className='text-[#15245E] ml-[260px] mt-[30px] font-bold'>$32.00</p>
            </div>
  
  {/* quantity */}
  
  <div className='w-[51px] h-[15px] flex justify-between items-center px-2 bg-[#F0EFF2] text-[#A1A8C1] mt-[35px] absolute left-[830px] '>
    <span>-</span>
    <span>1</span>
    <span>+</span>
  </div>
  
  {/* total */}
  
  <div>
              <p className='text-[#15245E] ml-[300px] mt-[30px] font-bold'>$32.00</p>
            </div>
  
          </div>
        </div>
  
        <div className='w-full h-[120px] border-b-2 '>
          {/* image */}
          <div className='flex space-x-3 mt-3'>
            <Image
            src={'/images/Rectangle 38.png'}
            alt=''
            width={83}
            height={87}          />
  
            {/* context */}
            <div>
              <p className='text-[14px]'>Ut diam consequat</p>
              <p className='text-[12px] text-[#A1A8C1]'>Color:Brown</p>
              <p className='text-[12px] text-[#A1A8C1]'>Size:XL</p>
            </div>
  
  {/* price */}
            <div>
              <p className='text-[#15245E] ml-[260px] mt-[30px] font-bold'>$32.00</p>
            </div>
  
  {/* quantity */}
  
  <div className='w-[51px] h-[15px] flex justify-between items-center px-2 bg-[#F0EFF2] text-[#A1A8C1] mt-[35px] absolute left-[830px] '>
    <span>-</span>
    <span>1</span>
    <span>+</span>
  </div>
  
  {/* total */}
  
  <div>
              <p className='text-[#15245E] ml-[300px] mt-[30px] font-bold'>$32.00</p>
            </div>
  
          </div>
        </div>
  {/* buttons */}
  <div className='flex justify-between px-5'>
    <button className='text-white text-center w-[134px] h-[39px]  bg-[#FB2E86] '>Update Cart</button>
    <button className='text-white text-center w-[134px] h-[39px] bg-[#FB2E86]'>Clear Cart</button>
    </div>
    </div>
  
  
  
  
  
    {/* cart */}
    <div className='w-[30%] h-[1500px] '>
  
      <div className='w-[371px] h-[284px] bg-[#F4F4FC]  mt-[90px] ml-[80px]'>
        <div className='flex justify-between pt-10 px-4'>
          <p className='text-[#1D3178] text-[18px]'>Subtotals:</p>
          <p className='text-[#1D3178] text-[18px] '>£219.00</p>
        </div>
        
        <div className='flex justify-between pt-10 px-4'>
          <p className='text-[#1D3178] text-[18px]'>Totals:</p>
          <p className='text-[#1D3178] text-[18px] '>£325.00</p>
        </div>
  
        <div className='flex space-x-2 mt-6 ml-4'>
          <span>@</span>
          <p className='text-[#8A91AB]'>Shipping & taxes calculated at checkout</p>
        </div>
  
        <button className='w-[312px] h-[40px] mt-8 ml-7 bg-[#19D16F] text-center text-white rounded-sm'>Proceed To Checkout</button>
      </div>
  
  
      <h3 className='font-bold text-2xl absolute top-[517px] left-[1321px] text-center text-[#1D3178]'>Calculate Shopping</h3>
  
      <div className='w-[371px] h-[284px] bg-[#F4F4FC] mt-[220px] ml-[80px]'>
      <div className='flex flex-col space-y-8 px-4 py-8'>
        <p className='text-[#C5CBE3] border-b-2 border-b-[#C5CBE3] '>Banglades</p>
        <p className='text-[#C5CBE3] border-b-2 border-b-[#C5CBE3]'>Mirpur Dhaka - 1200</p>
        <p className='text-[#C5CBE3] border-b-2 border-b-[#C5CBE3]'>Postal Code</p>
      </div>
  
      <button className='bg-[#FB2E86] w-[179px] h-[41px] mt-4 ml-4 px=2 rounded-sm text-white'>Calcuate Shiping</button>
      </div>
     
    </div>
  
  </div>
  
  {/* logos */}
    <div className=' mt-[1250px] ml-[508px]'>
                            <Image 
                                  src={'/images/logos.png'}
                                  alt='bag'
                                  width={904}
                                  height={93}
                                  />
                        </div>
  
  
  {/* footer */}
  <div className='absolute top-[1800px]'>
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
  
  
  
  
        
      </div>
    )
  }
  
  export default page