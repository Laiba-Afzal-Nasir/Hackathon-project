import React from 'react'
import Image from 'next/image'

const ShopexOffer = () => {
  return (
    <div>
         <h1 className='absolute left-[761px] top-[2529px] text-[#1A0B5B]  text-[42px] font-bold'>What Shopex Offer!</h1>
        
        <div className='flex justify-center w-[1920px] h-[300px] items-center gap-20 absolute top-[2626px] left-[px]'>
        <div className='w-[270] h-[320] '>
        <Image
                  src={'/images/free-delivery.png'}
                  alt='free-delivery'
                    width={65}
                    height={65}
                    className='mt-[px] ml-[80px]'
                    />
                    <div className='text-center mt-3  w-[217px] h-[127px]'>
                      <h3 className='text-[22px] font-semibold text-[#151875]'>24/7 Support</h3>
                      <p className=' text-[#1A0B5B4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
        </div>
        <div className='w-[270] h-[320]  '>
          <Image
                  src={'/images/cashback.png'}
                  alt='free-delivery'
                    width={65}
                    height={65}
                    className='mt-[px] ml-[80px]'
                    />
                    <div className='text-center mt-3 w-[217px] h-[127px]'>
                      <h3 className='text-[22px] font-semibold text-[#151875]'>24/7 Support</h3>
                      <p className='text-[#1A0B5B4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    </div>
        <div className='w-[270] h-[320] '>
        <Image
                  src={'/images/support.png'}
                  alt='free-delivery'
                    width={65}
                    height={65}
                    className='mt-[px] ml-[80px]'
                    />
                    <div className='text-center mt-3 w-[217px] h-[127px]'>
                      <h3 className='text-[22px] font-semibold text-[#151875]'>24/7 Support</h3>
                      <p className='text-[#1A0B5B4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
        </div>
        <div className='w-[270] h-[320]'>
        <Image
                  src={'/images/call.png'}
                  alt='free-delivery'
                    width={65}
                    height={65}
                    className='mt-[px] ml-[80px]'
                    />
                    <div className='text-center mt-3 w-[217px] h-[127px]'>
                      <h3 className='text-[22px] font-semibold text-[#151875]'>24/7 Support</h3>
                      <p className='text-[#1A0B5B4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
        </div>
        
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    </div>
  )
}

export default ShopexOffer