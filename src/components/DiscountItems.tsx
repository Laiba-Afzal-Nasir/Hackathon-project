import React from 'react'
import Image from 'next/image'

const DiscountItems = () => {
  return (
    <div className='absolute top-[4658px] left-[57px]'>
              <h1 className=' text-[#1A0B5B] mt-16 text-[42px] ml-[760px] font-bold'>Discount Items</h1>
              <ul className='flex space-x-4 text-[18px] mt-[20px] ml-[750px]'>
              <li className='text-[#FB2E86] underline'>Wood Chair</li>
                <li>Plastic Chair</li>            
                <li>Sofa Collection</li>
              </ul>

              <div className='w-[1214px] h-[597px] flex space-x-4'>
                <div className='w-[699px] ml-[350px] h-[597px]'>
               <div>
               <h1 className='w-[507px] h-[92px] mt-[82px] text-[35px] font-bold ml-[px] text-[#151875]'>20% Discount Of All Products</h1>
                <p className='text-[#FB2E86] text-[21px]'>Eams Sofa Compact</p>
                <p className='text-[#B7BACB] mt-4 w-[523px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>

                <div className='flex space-x-6 mt-4'>
                <div>
                    <p className='text-[#B7BACB]'>Material expose like metals</p>
                    <p className='text-[#B7BACB]'>Simple neutral colours.</p>
                </div>
                <div>
                    <p className='text-[#B7BACB]'>Material expose like metals</p>
                    <p className='text-[#B7BACB]'>Simple neutral colours.</p>
                </div>
                </div>
                

                </div>
                <button className='bg-[#FB2E86] text-[17px] text-white text-center mt-5 rounded-sm px-[80px] py-[14px]'>Shop Now</button>

               </div>
    

                <div className='w-[699px] h-[597px] ml-[515px] '>
                   
               <Image 
                            src={'/images/sofa2.png'}
                            alt='pink'
                            width={699}
                            height={697}
                            className='absolute top-100'
                            /> 
                 
            </div>


              </div>
    </div>
  )
}

export default DiscountItems