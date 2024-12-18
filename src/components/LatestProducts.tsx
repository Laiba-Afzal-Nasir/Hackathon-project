import React from 'react'
import Image from 'next/image'

const LatestProducts = () => {
  return (
    <div>

        <h1 className='absolute left-[791px] top-[1594px] text-[#1A0B5B]  text-[42px] font-bold'>Leatest Products</h1>
        
               <div className='w-[527px] h-[22px] absolute top-[1670px] left-[750px]'>
                <ul className=' flex space-x-10'>
                  <li className='text-[#FB4997]'>New Arrival</li>
                  <li className='text-[#151875]'>Best Seller</li>
                  <li className='text-[#151875]'>Featured</li>
                  <li className='text-[#151875]'>Special Offer</li>
                </ul>
        
               </div>
        
               <div className='flex  justify-center items-center absolute top-[1739px] gap-16 left-[378px]'>
                <div className='w-[360px] h-[306px] bg-[#F7F7F7]'>
                <Image
                  src={'/images/chair5.png'}
                  alt='chair'
                  width={223}
                  height={229}
                  className='mt-[33px] ml-[73px]'
                  />
                  <div className='h-[14px] text-[#151875] flex justify-between'>
                    <p>Comfort Handy Craft</p>
                    <p>$42.00 <span className='line-through text-[12px] text-[#FB2448]'>$65.00</span></p>
                  </div>
                </div>
                <div  className='w-[360px] h-[306px] bg-[#FFFFFF]'>
                <Image
                  src={'/images/chair6.png'}
                  alt='chair'
                  width={245}
                  height={245}
                  className='mt-[25px] ml-[68px]'
                  />
                  <div className='h-[14px] text-[#151875] flex justify-between'>
                    <p>Comfort Handy Craft</p>
                    <p>$42.00 <span className='line-through text-[12px] text-[#FB2448]'>$65.00</span></p>
                  </div>
                </div>
                <div  className='w-[360px] h-[306px] bg-[#F7F7F7]'>
                <Image
                  src={'/images/image 1168.png'}
                  alt='chair'
                    width={221.84}
                    height={222.2 }
                    className='mt-[38.98px] ml-[69.08px]'
                    />
                  <div className='h-[14px] text-[#151875] mt-16 flex justify-between'>
                    <p>Comfort Handy Craft</p>
                    <p>$42.00 <span className='line-through text-[12px] text-[#FB2448]'>$65.00</span></p>
                  </div>
                </div>
               </div>
        
        
              {/*  next box of latest products */}
        
              <div className=' flex justify-center items-center absolute top-[2100px] left-[378px] gap-16 '>
        
                <div className=' w-[360px] h-[306px] bg-[#F7F7F7] '>
                <Image
                  src={'/images/chair9.png'}
                  alt='chair'
                    width={267}
                    height={277 }
                    className=' ml-[54px]'
                    />
                  <div className='h-[14px] text-[#151875] mt-16 flex justify-between'>
                    <p>Comfort Handy Craft</p>
                    <p>$42.00 <span className='line-through text-[12px] text-[#FB2448]'>$65.00</span></p>
                  </div>
                </div>
        
                <div className='w-[360px] h-[306px] bg-[#F7F7F7] '>
         <Image
                  src={'/images/chair8.png'}
                  alt='chair'
                    width={303}
                    height={264 }
                    className='mt-[13px] ml-[36px]'
                    />
                  <div className='h-[14px] text-[#151875] mt-16 flex justify-between'>
                    <p>Comfort Handy Craft</p>
                    <p>$42.00 <span className='line-through text-[12px] text-[#FB2448]'>$65.00</span></p>
                  </div>
                </div>
        
                <div className=' w-[360px] h-[306px] bg-[#F7F7F7] '>
                <Image
                  src={'/images/chair1.png'}
                  alt='chair'
                    width={360}
                    height={261 }
                    className='mt-[16px] ml-[5px]'
                    />
                  <div className='h-[14px] text-[#151875] mt-16 flex justify-between'>
                    <p>Comfort Handy Craft</p>
                    <p>$42.00 <span className='line-through text-[12px] text-[#FB2448]'>$65.00</span></p>
                  </div>
                </div>
        
        
                
        
        
              </div>
        
              
             </div>
  )
}

export default LatestProducts