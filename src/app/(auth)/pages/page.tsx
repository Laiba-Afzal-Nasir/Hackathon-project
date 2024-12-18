export const metadata = {
    title: "Pages"
  
  };
  import React from 'react'
  import Image from 'next/image'
  import Footer from '@/components/Footer'
  
  const page = () => {
    return (
      <div>
           <div className='w-[1920px] h-[286px] mt-14 bg-[#F6F5FF]'>
      <div className='absolute mt-[63px] left-[371px] w-[202px] h-[62px]'>
                <h1 className='text-[30px] w-[265px]  text-[#101750] font-bold'>404 Not Found</h1>
  
                <ul className='flex space-x-4 text-[16px]'>
                  <li>Home</li>
                  <li>Pages</li>
                  <li className='text-[#FB2E86]'>404 Not Found</li>
                </ul>
              </div>
      </div>
  
     
  
  
   <div className='w-[913px] h-[677px]  absolute top-[439px] left-[504px]'>
          <Image 
                src={'/images/404.png'}
                 alt='bag'
                 width={913}
                 height={526.6}
                                  />
      <h3 className='text-[30px]  text-center text-[#101750] font-semibold'>oops! The page you requested was not found!</h3>
      <button className='w-[165px] h-[44px] mt-10 ml-[350px] bg-[#FB2E86] text-white'>Back To Home</button>
                        </div>
  
  
   {/* logo and context */}
  
   <div className=' mt-[900px] ml-[508px]'>
      <Image 
                                  src={'/images/logos.png'}
                                  alt='bag'
                                  width={904}
                                  height={93}
                                  />
      </div>
  
  
  <Footer />
      {/* end */}
      </div>
    )
  }
  
  export default page