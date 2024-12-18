export const metadata = {
    title: "Login"
  
  };
  import React from 'react'
  import Image from 'next/image'
  import Footer from '@/components/Footer'
  
  const page = () => {
    return (
           <div className='w-[1920px] h-[286px] absolute top-[125px] bg-[#F6F5FF]'>
              <div className='absolute mt-[63px] left-[371px] w-[202px] h-[62px]'>
                <h1 className='text-[30px] text-[#101750] font-bold'>My Account</h1>
  
                <ul className='flex space-x-4 text-[16px]'>
                  <li>Home</li>
                  <li>Pages</li>
                  <li className='text-[#FB2E86]'>My Account</li>
                </ul>
              </div>
  
  
  
              <div className='border-1 border-[#C2C5E1] flex justify-center items-center bg-[#ffff] shadow-md w-[544px] h-[474px] absolute top-[531px] left-[688px]'>
                  <div className='w-[433px] h-[374px] border-1 border-black '>
                    <h1 className='text-[32px] text-center font-bold'>Login</h1>
                    <p className='text-[#9096B2] text-center'>Please login using account detail bellow.</p>
  
                    <input type="text" placeholder='Email Address' className='w-[432px] h-[52px] border-2  rounded-sm px-[30px] py-[10px] mt-8' />
                    <input type="text" placeholder='Email Address'  className='w-[432px] h-[52px] border-2  rounded-sm px-[30px] py-[10px] mt-6' />
  
                    <p className='text-[#9096B2] text-left mt-4'>Forgot your password?</p>
  
                    <button className='w-[432px] h-47px] bg-[#FB2E86] rounded-sm text-white py-2 mt-6'>Sign Up</button>
  
                    <p className='text-center text-[#9096B2] text-[17px] mt-6'>Don’t have an Account?Create account</p>
                  </div>
              </div>
  
              <div className=' mt-[1114px] ml-[508px]'>
                  <Image 
                        src={'/images/logos.png'}
                        alt='bag'
                        width={904}
                        height={93}
                        />
              </div>
  
              <Footer />
         
      </div>
    )
  }
  
  export default page