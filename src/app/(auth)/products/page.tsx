export const metadata = {
    title: "Products Details"
  
  };
  import Footer from '@/components/Footer'
  import Image from 'next/image'
  import { RiStarSFill } from "react-icons/ri";
  import { BsHeart } from "react-icons/bs";
  import { FaFacebook } from "react-icons/fa";
  import { FaInstagram } from "react-icons/fa";
  import { FaTwitterSquare } from "react-icons/fa";
  import { FaArrowRightLong } from "react-icons/fa6";
  
  
  
  
  
  import React from 'react'
  
  const contact = () => {
    return (
      <div>
      <div className='w-[1920px] h-[286px] mt-14 bg-[#F6F5FF]'>
      <div className='absolute mt-[63px] left-[371px] w-[202px] h-[62px]'>
                <h1 className='text-[30px] w-[265px]  text-[#101750] font-bold'>Products Details</h1>
  
                <ul className='flex space-x-4 text-[16px]'>
                  <li>Home</li>
                  <li>Pages</li>
                  <li className='text-[#FB2E86]'>Products Details</li>
                </ul>
              </div>
      </div>
  
  
  
  <div className='w-[1170px] shadow-md h-[509px] flex space-x-4 ml-[471px] mt-[150px] bg-[#FFFFFF]'>
  
  {/* 3 dives */}
    <div className='space-y-2'>
      <div className='w-[151px] h-[155px] bg-[#C4C4C4]'>
        <Image 
        src={'/images/Rectangle 134.png'}
        alt='bag'
        width={151}
        height={155}
        />
      </div>
      <div className='w-[151px] h-[155px] bg-[#C4C4C4]'>
      <Image 
        src={'/images/Rectangle 136.png'}
        alt='bag'
        width={151}
        height={155}
        />
      </div>
      <div className='w-[151px] h-[155px] bg-[#C4C4C4]'>
      <Image 
        src={'/images/Rectangle 137.png'}
        alt='bag'
        width={151}
        height={155}
        />
      </div>
    </div>
  
  
  {/* 1 div */}
  <div>
  <Image 
        src={'/images/Rectangle 138.png'}
        alt='bag'
        width={375}
        height={487}
        />
  </div>
  
  {/* playwood arm chair */}
  <div className=''>
  <h1 className='text-[36px] text-[#0D134E] font-semibold'>Playwood arm chair</h1>
  
  <div className='flex space-x-2'>
  <span className='w-[69px] flex space-x-1 h-[12px] mt-[5px]'>
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px' />
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
    
  {/* five stars yellow */}
  </span>
  <span className='text-[#151875]'>(22)</span>
  </div>
  
  <p className='text-[#0D134E] text-[16px] font-semibold'>Color</p>
  
  <p className='text-[#A9ACC6] w-[549px] h-45px]'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
  </p>
  
  
  <div className='flex space-x-5 mt-8 ml-28 text-[#151875]'>
    <p>Add To Cart</p>
    <span className='mt-[6px]'><BsHeart />
    </span>
  </div>
  
  <p className='text-[#151875] mt-8 text-[16px]'>Categories:</p>
  <p className='text-[#151875] py-4 text-[16px]'>Tags</p>
  
  <div className='flex space-x-2'>
    <p className='text-[#151875] text-[16px]'>Share</p>
    <div className='flex space-x-2 mt-[5px] ' >
      <span className='bg-[#0D134E]  w-[16px] h-[16px] flex justify-center items-center py-1 text-white rounded-full'>
      <FaFacebook />
  
      </span>
  
  
      <span className='bg-[#FB2E86] w-[20px] h-[20px] flex justify-center items-center  text-white rounded-full'>
      <FaInstagram />
  
  
      </span>
  
      <span className='bg-[#0D134E] w-[16px] h-[16px] flex justify-center items-center py-1 text-white rounded-full'>
      <FaTwitterSquare />
  
  
  
  
      </span>
    </div>
  </div>
  
  </div>
  
  </div>
  
  
  
  <div className='w-[1920px] h-[649px] mt-[148px]  bg-[#F9F8FE]'>
  
  <ul className='text-[#151875] text-[24px] py-4 ml-[576px] text-left font-semibold flex space-x-8'>
    <li className='underline'>Description</li>
    <li>Additional Info</li>
    <li>Reviews</li>
    <li>Video</li>
  </ul>
  
  
  <h1 className='text-[#151875] ml-[466px] text-left mt-[60px] text-[24px] font-semibold'>Varius tempor.</h1>
  <p className='w-[1153px] h-[87px] ml-[466px] text-[#A9ACC6] mt-10 text-[16px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
  
  
  <h1 className='text-[#151875] ml-[466px] text-left mt-[60px] text-[24px] font-semibold'>More details</h1>
  
  <div className='flex space-x-2'>
    <span><FaArrowRightLong className=' ml-[466px] mt-4 text-left font-bold text-[#151875]'/>
    </span>
    <p className='text-[#A9ACC6]  ml-[466px] text-left py-3 '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
  </div>
  
  <div className='flex space-x-2'>
    <span><FaArrowRightLong className=' ml-[466px] mt-4 text-left font-bold text-[#151875]'/>
    </span>
    <p className='text-[#A9ACC6]  ml-[466px] text-left py-3 '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
  </div>
  
  <div className='flex space-x-2'>
    <span><FaArrowRightLong className=' ml-[466px] mt-4 text-left font-bold text-[#151875]'/>
    </span>
    <p className='text-[#A9ACC6]  ml-[466px] text-left py-3 '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
  </div>
  
  <div className='flex space-x-2'>
    <span><FaArrowRightLong className=' ml-[466px] mt-4 text-left font-bold text-[#151875]'/>
    </span>
    <p className='text-[#A9ACC6]  ml-[466px] text-left py-3 '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
  </div>
  
  </div>
  
  
  <div className='mt-20'>
    <h1 className='text-[36px] text-[#101750] font-bold ml-[371px] '>Related Products</h1>
  
    <div className='flex space-x-5 mt-[70px] ml-[371px]'>
      <div className='w-[270px] h-[340px]'>
      <Image 
        src={'/images/Rectangle 128.png'}
        alt='bag'
        width={270}
        height={340}
        />
  
        <div className='flex justify-between '>
            <div><p className='text-[#151875] text-[16px]'>Mens Fashion Wear</p>
            <p  className='text-[#151875] text-[13px]'>$43.00</p>
            </div>
  
            <div className='flex space-x-2'>
  <span className='w-[69px] flex space-x-1 h-[12px] mt-[5px]'>
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px' />
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
  <RiStarSFill className='text-gray-400  w-[12px] h-[12px'/>
    
  {/* five stars yellow */}
  </span>
  
  </div>
        </div>
  
        
  
      </div>
  
  
      <div className='w-[270px] h-[340px]'>
      <Image 
        src={'/images/Rectangle 133.png'}
        alt='bag'
        width={270}
        height={340}
        />
  
        <div className='flex justify-between '>
            <div><p className='text-[#151875] text-[16px]'>Mens Fashion Wear</p>
            <p  className='text-[#151875] text-[13px]'>$43.00</p>
            </div>
  
            <div className='flex space-x-2'>
  <span className='w-[69px] flex space-x-1 h-[12px] mt-[5px]'>
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px' />
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
  <RiStarSFill className='text-gray-400  w-[12px] h-[12px'/>
    
  {/* five stars yellow */}
  </span>
  
  </div>
        </div>
  
        
  
      </div>
      <div className='w-[270px] h-[340px]'>
      <Image 
        src={'/images/Rectangle 130.png'}
        alt='bag'
        width={270}
        height={340}
        />
  
        <div className='flex justify-between '>
            <div><p className='text-[#151875] text-[16px]'>Mens Fashion Wear</p>
            <p  className='text-[#151875] text-[13px]'>$43.00</p>
            </div>
  
            <div className='flex space-x-2'>
  <span className='w-[69px] flex space-x-1 h-[12px] mt-[5px]'>
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px' />
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
  <RiStarSFill className='text-gray-400  w-[12px] h-[12px'/>
    
  {/* five stars yellow */}
  </span>
  
  </div>
        </div>
  
        
  
      </div>
      <div className='w-[270px] h-[340px]'>
      <Image 
        src={'/images/Rectangle 131.png'}
        alt='bag'
        width={270}
        height={340}
        />
  
        <div className='flex justify-between '>
            <div><p className='text-[#151875] text-[16px]'>Mens Fashion Wear</p>
            <p  className='text-[#151875] text-[13px]'>$43.00</p>
            </div>
  
            <div className='flex space-x-2'>
  <span className='w-[69px] flex space-x-1 h-[12px] mt-[5px]'>
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px' />
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
  <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
  <RiStarSFill className='text-gray-400  w-[12px] h-[12px'/>
    
  {/* five stars yellow */}
  </span>
  
  </div>
        </div>
  
         
  
      </div>
      
             
    </div>
      <div className=' mt-[250px] ml-[508px]'>
                    <Image 
                          src={'/images/logos.png'}
                          alt='bag'
                          width={904}
                          height={93}
                          />
                </div>
           
  </div>
        <Footer />
  
       
  
      </div>
     
    )
  }
    export default contact