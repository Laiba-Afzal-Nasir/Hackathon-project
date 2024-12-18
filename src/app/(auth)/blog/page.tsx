
export const metadata = {
    title: "Blog"
  
  };
  
  import React from 'react'
  import Image from 'next/image';
  import { FaFacebookF } from "react-icons/fa";
   import { FaTwitter } from "react-icons/fa";
   import { IoLogoInstagram } from "react-icons/io";
   import { CiSearch } from "react-icons/ci";
 
  
  
  
  const page = () => {
    return (
      <div>
         <div className='w-[1920px] h-[286px] mt-14 bg-[#F6F5FF]'>
      <div className='absolute mt-[63px] left-[371px] w-[202px] h-[62px]'>
                <h1 className='text-[30px] w-[265px]  text-[#101750] font-bold'>Blog Page</h1>
  
                <ul className='flex space-x-4 text-[16px]'>
                  <li>Home</li>
                  <li>Pages</li>
                  <li className='text-[#FB2E86] '>Blog Page</li>
                </ul>
              </div>
      </div>
  
  
  
   {/* content */}
   <div className='w-[1920px] mt-[50px] flex'>
  
  {/* rght */}
  <div className='h-[161px] w-[254px] absolute top-[550px] left-[1297px]'>
    {/* search */}
  
    <div className='w-[270px] h-[77px] relative top-[0px] left-[px]'>
    <h1 className='text-[22px]  text-[#101750] font-semibold'>Search</h1>
    <div className='flex'>
      <input className='border-2 px-2 mt-4' type="text" placeholder='Search for post ' /> 
      <CiSearch className=' absolute right-16 mt-6 text-[#3F509E]' />
      </div>
  
    </div>
  <h1 className='text-[22px] mt-20 text-[#101750] font-semibold'>Categories</h1>
  {/* buttons */}
  <div className='flex space-x-5'>
  <div className='space-y-4 '>
  <button className='w-[122px] h-[36px] text-white mt-2 bg-[#F939BF] rounded-sm'>Hobbies (14)</button>
  <p className='text-[#3F509E]'> Women (21)</p>
  <p className='text-[#3F509E]'> Women (21)</p>
  </div>
  {/* next div of buttons */}
  <div className='space-y-5 mt-3'>
  <p className='text-[#3F509E]'> Women (21)</p>
  <p className='text-[#3F509E]'> Women (21)</p>
  <p className='text-[#3F509E]'> Women (21)</p>
  
  </div>
  </div>
  {/* recent post */}
  <h1 className='text-[22px] mt-20  text-[#101750] font-semibold'>Recent Post</h1>
  
  {/* 3 pictures */}
  <div className=' ml-[0px] mt-[50px]'>
        <div className='w-[250px] h-[57px] border-b-2 flex space-x-2 mt-[15px]'>
          <div className='w-[70px] h-[57px] bg-[#F5F6F8]'>
          <Image
                      src={'/images/Rectangle 126 (0).png'}
                      alt='free-delivery'
                        width={70}
                        height={57}
                        className='mt-[px] ml-[1px]'
                        />
          </div>
          <div>
            <p  className='text-[#151875] text-[16px]'>Executive Seat chair</p>
            <p className='text-[#151875] text-[12px]'>$32.00</p>
          </div>
        </div>
    
    
        <div className='w-[250px] h-[57px] border-b-2 flex space-x-2 mt-[15px]'>
          <div className='w-[70px] h-[57px]  bg-[#F5F6F8]'>
          <Image
                      src={'/images/Rectangle 126 (1).png'}
                      alt='free-delivery'
                        width={70}
                        height={57}
                        className='mt-[px] ml-[1px]'
                        />
          </div>
          <div>
            <p  className='text-[#151875] text-[16px]'>Executive Seat chair</p>
            <p className='text-[#151875] text-[12px]'>$32.00</p>
          </div>
        </div>
  
  
        <div className='w-[250px] h-[57px] border-b-2  flex space-x-2 mt-[15px]'>
          <div className='w-[78px] h-[57px] bg-[#F5F6F8]'>
          <Image
                      src={'/images/Rectangle 126 (2).png'}
                      alt='free-delivery'
                        width={78}
                        height={57}
                        className='mt-[px] ml-[1px]'
                        />
          </div>
          <div>
            <p  className='text-[#151875] text-[16px]'>Executive Seat chair</p>
            <p className='text-[#151875] text-[14px]'>$32.00</p>
          </div>
        </div>
    
    
        <div className='w-[250px] h-[57px] border-b-2  flex space-x-2 mt-[15px]'>
          <div className='w-[78px] h-[57px] bg-[#F5F6F8]'>
          <Image
                      src={'/images/Rectangle 126 (3).png'}
                      alt='free-delivery'
                        width={78}
                        height={57}
                        className='mt-[px] ml-[1px]'
                        />
          </div>
          <div>
            <p  className='text-[#151875] text-[16px]'>Executive Seat chair</p>
            <p className='text-[#151875] text-[12px]'>$32.00</p>
          </div>
        </div>
      </div>
  
  
  {/* recent post */}
  <h1 className='text-[22px]  text-[#101750] mt-20 font-semibold'>Sale Product</h1>
  
  {/* 3 pictures */}
  <div className=' ml-[0px] mt-[50px]'>
        <div className='w-[250px] h-[62px] border-b-2   flex space-x-2 mt-[15px]'>
          <div className='w-[78px] h-[57px] bg-[#F5F6F8]'>
          <Image
                      src={'/images/Rectangle 126 (4).png'}
                      alt='free-delivery'
                        width={78}
                        height={57}
                        className='mt-[px] ml-[1px]'
                        />
          </div>
          <div>
            <p  className='text-[#151875] text-[16px]'>Executive Seat chair</p>
            <p className='text-[#151875] text-[12px]'>$32.00</p>
          </div>
        </div>
  
  
        <div className='w-[250px] h-[62px] border-b-2 flex space-x-2 mt-[15px]'>
          <div className='w-[78px] h-[57px] bg-[#F5F6F8]'>
          <Image
                      src={'/images/Rectangle 126 (5).png'}
                      alt='free-delivery'
                        width={78}
                        height={57}
                        className='mt-[px] ml-[1px]'
                        />
          </div>
          <div>
            <p  className='text-[#151875] text-[16px]'>Executive Seat chair</p>
            <p className='text-[#151875] text-[12px]'>$32.00</p>
          </div>
        </div>
    
    
        <div className='w-[250px] h-[62px] border-b-2 flex space-x-2 mt-[15px]'>
          <div className='w-[78px] h-[57px] bg-[#F5F6F8]'>
          <Image
                      src={'/images/Rectangle 126 (6).png'}
                      alt='free-delivery'
                        width={78}
                        height={57}
                        className='mt-[px] ml-[1px]'
                        />
          </div>
          <div>
            <p  className='text-[#151875] text-[16px]'>Executive Seat chair</p>
            <p className='text-[#151875] text-[12px]'>$32.00</p>
          </div>
        </div>
      </div>
  
  {/* offer products */}
      <h1 className='text-[22px]  text-[#101750] mt-20 font-semibold'>Offer product</h1>
  <div className='w-[267px] h-[282px] mt-10'>
    <div className='flex justify-between '>
    <div className='w-[126px] h-[126px]  bg-[#F5F6F8]'>
          <Image
                      src={'/images/Mask Group.png'}
                      alt='free-delivery'
                        width={126}
                        height={80}
                        className='mt-[px] ml-[px]'
                        />
                         <div>
            <p  className='text-[#151875] text-[16px]'>Duis lectus est.</p>
            <p className='text-[#8A8FB9] text-[12px]'>$12.00 - $15.00</p>
          </div>
          </div>
          <div className='w-[126px] h-[126px] bg-[#F5F6F8]'>
          <Image
                      src={'/images/p0OlRAAYXLY (1).png'}
                      alt='free-delivery'
                        width={126}
                        height={80}
                        className='mt-[px] ml-[px]'
                        />
                           <div>
            <p  className='text-[#151875] text-[16px]'>Duis lectus est.</p>
            <p className='text-[#8A8FB9] text-[12px]'>$12.00 - $15.00</p>
          </div>
          </div>
    </div>
    <div className='flex justify-between mt-4'>
    <div className='w-[126px] h-[126px] bg-[#F5F6F8]'>
          <Image
                      src={'/images/Mask Group (1).png'}
                      alt='free-delivery'
                        width={126}
                        height={80}
                        className='mt-[px] ml-[px]'
                        />
                         <div>
            <p  className='text-[#151875] text-[16px]'>Duis lectus est.</p>
            <p className='text-[#8A8FB9] text-[12px]'>$12.00 - $15.00</p>
          </div>
          </div>
          <div className='w-[126px] h-[126px] bg-[#F5F6F8]'>
          <Image
                      src={'/images/p0OlRAAYXLY.png'}
                      alt='free-delivery'
                        width={126}
                        height={80}
                        className='mt-[px] ml-[px]'
                        />
                           <div>
            <p  className='text-[#151875] text-[16px]'>Duis lectus est.</p>
            <p className='text-[#8A8FB9] text-[12px]'>$12.00 - $15.00</p>
          </div>
          </div>
    </div>
   
  </div>
  
  {/* foolow */}
  
  <div>
  <h1 className='text-[22px]  text-[#101750] mt-20 font-semibold'>Follow</h1>
  {/* links */}
  <div className='flex space-x-3 mt-10'>
    <span className='w-[25px] flex justify-center items-center h-[25px] rounded-full bg-[#5625DF] text-white'><FaFacebookF /></span>
    <span className='w-[25px] flex justify-center items-center h-[25px] rounded-full bg-[#FF27B7] text-white'><IoLogoInstagram/></span>
    <span className='w-[25px] flex justify-center items-center h-[25px] rounded-full bg-[#37DAF3] text-white'><FaTwitter /></span>
   
    </div>
  </div>
  
  {/* tags */}
  
  <h1 className='text-[22px]  text-[#101750] mt-20 font-semibold'>Tag</h1>
  
  <div className='w-[228px] h-[64px] mt-10 flex  space-x-5'>
  <p className='text-[#151875] underline  '>General</p>
  <p className='text-[#FB2E86] underline'>Atsanil</p>
  <p className='text-[#151875] underline  '>Insas.</p>
  </div>
  <div className=' flex  space-x-5'>
  <p className='text-[#151875] underline '>Bibsaas</p>
  <p className='text-[#151875] underline  '>Nulla.</p>
  </div>
  
  {/* end of 2 div */}
  </div>
  
  {/* end of 1 iv */}
  </div>
  
  {/* right */}
      
  
  <div className='absolute top-[536px] left-[371px]'>
  <Image
                      src={'/images/girl1.png'}
                      alt='free-delivery'
                        width={870}
                        height={453}
                        className='mt-[px] ml-[px]'
                        />
  
                      
  </div>
    {/* date */}
    <div className='w-[360px] h-[23px] flex space-x-2 absolute top-[1016px] left-[371px]'>
      {/* pen */}
      <div className='flex space-x-2'>
        <span>@</span>
        <p className='text-[#151875] w-[160px] h-[23px] text-center bg-[#FFE7F9] '>Surf Auxion</p>
      </div>
  
      {/* date */}
      <div className='flex space-x-2'>
        <span>@</span>
        <p className='text-[#151875] w-[123px] h-[23px] text-center bg-[#FFE7F9]'>Aug 09 2020</p>
      </div>
      </div>   
  
              {/* context */}
        
    <div className='absolute top-[1027px] left-[371px] '>
    <h1 className='text-[22px]  text-[#101750] mt-10 font-bold'>Mauris at orci non vulputate diam tincidunt nec.</h1>
     
     <p className='text-[#8A8FB9] mt-5 w-[852px] h-[49px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
   <p className='text-[#151875] mt-10 text-[18px]'>Read More</p>
   
    </div>
  
  
  {/* 2nd div */}
  <div className='absolute top-[1267px] left-[371px]'>
  <Image
                      src={'/images/girl2.png'}
                      alt='free-delivery'
                        width={870}
                        height={453}
                        className='mt-[px] ml-[px]'
                        />
  
                      
  </div>
    {/* date */}
    <div className='w-[360px] h-[23px] flex space-x-2 absolute top-[1750px] left-[371px]'>
      {/* pen */}
      <div className='flex space-x-2'>
        <span>@</span>
        <p className='text-[#151875] w-[160px] h-[23px] text-center bg-[#FFE7F9] '>Surf Auxion</p>
      </div>
  
      {/* date */}
      <div className='flex space-x-2'>
        <span>@</span>
        <p className='text-[#151875] w-[123px] h-[23px] text-center bg-[#FFE7F9]'>Aug 09 2020</p>
      </div>
      </div>   
  
              {/* context */}
        
    <div className='absolute top-[1760px] left-[371px] '>
    <h1 className='text-[22px]  text-[#101750] mt-10 font-bold'>Mauris at orci non vulputate diam tincidunt nec.</h1>
     
     <p className='text-[#8A8FB9] mt-5 w-[852px] h-[49px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
   <p className='text-[#151875] mt-10 text-[18px]'>Read More</p>
   
    </div>
  
  {/* 3rd div */}
  
  <div className='absolute top-[2000px] left-[371px]'>
  <Image
                      src={'/images/girl3.png'}
                      alt='free-delivery'
                        width={870}
                        height={453}
                        className='mt-[px] ml-[px]'
                        />
  
                      
  </div>
    {/* date */}
    <div className='w-[360px] h-[23px] flex space-x-2 absolute top-[2500px] left-[371px]'>
      {/* pen */}
      <div className='flex space-x-2'>
        <span>@</span>
        <p className='text-[#151875] w-[160px] h-[23px] text-center bg-[#FFE7F9] '>Surf Auxion</p>
      </div>
  
      {/* date */}
      <div className='flex space-x-2'>
        <span>@</span>
        <p className='text-[#151875] w-[123px] h-[23px] text-center bg-[#FFE7F9]'>Aug 09 2020</p>
      </div>
      </div>   
  
              {/* context */}
        
    <div className='absolute top-[2520px] left-[371px] '>
    <h1 className='text-[22px]  text-[#101750] mt-10 font-bold'>Mauris at orci non vulputate diam tincidunt nec.</h1>
     
     <p className='text-[#8A8FB9] mt-5 w-[852px] h-[49px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
   <p className='text-[#151875] mt-10 text-[18px]'>Read More</p>
   
    </div>
  {/* pages */}
  
  <div className='w-[236px] h-[24px] flex justify-between absolute top-[2763px] left-[688px]'>
    <span className='w-[32px] h-[24px] text-white bg-[#FB2CA8] text-center'>1</span>
    <span className='w-[32px] h-[24px] text-[#E0D3F5] border-2 text-center'>2</span>
    <span className='w-[32px] h-[24px] text-[#E0D3F5] border-2 text-center'>3</span>
    <span className='w-[32px] h-[24px] text-[#E0D3F5] border-2 text-center'>4</span>
  </div>
  
  {/* logos */}
    <div className=' absolute top-[2900px] left-[450px]'>
                            <Image 
                                  src={'/images/logos.png'}
                                  alt='bag'
                                  width={904}
                                  height={93}
                                  />
                        </div>
  
                        {/* footer */}
  
                         <div className='h-[532px] w-[1920px] absolute top-[3100px] bg-[#EEEFFB] flex justify-evenly'>
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
                        
                              <div className='absolute top-[3600px]'>
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