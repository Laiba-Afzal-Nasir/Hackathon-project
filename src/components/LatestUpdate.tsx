import React from 'react'
import Image from 'next/image'

const LatestUpdate = () => {
  return (
    <div className='absolute top-[6023px]'> 
        <div
        style={{background : "url('/images/Rectangle 102.png')"}}
         className='w-[1920px] h-[462px] mt-[100px] flex justify-center  items-center bg-[#F6F7FB]'>
           
            <div className='w-[574px] h-[185px]'>
                <h1 className='text-[35px] text-center font-bold text-[#151875]'>Get Leatest Update By Subscribe 0ur Newslater</h1>
                <button className='bg-[#FB2E86] text-[17px] text-white text-center mt-8 rounded-sm ml-[180px] px-[80px] py-[14px]'>Shop Now</button>

            </div>
        </div>


    <div className=' mt-[50px] ml-[508px]'>
                  <Image 
                        src={'/images/logos.png'}
                        alt='bag'
                        width={904}
                        height={93}
                        />
              </div>
         
</div>



       
           
    
  )
}

export default LatestUpdate