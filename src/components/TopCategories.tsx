import Image from 'next/image'
import React from 'react'

const TopCategories = () => {
  return (
    <div className='absolute top-[5402px] left-[px]'>
      <h1 className=' text-[#1A0B5B] mt-10 text-[42px] ml-[760px] font-bold'>Top Categories</h1>

<div className='flex space-x-16 mt-[50px] ml-[350px]'>
  <div className='w-[269px] h-[365px] shadow-md'>
    <div className='w-[269px] h-[269px] flex items-center justify-center rounded-full bg-[#F6F7FB]'>
      <Image
      src={'/images/image 20.png'}
      alt=''
      width={178}
      height={178}
       />
    </div>

    <div className='w-[150px] text-center h-[49px] ml-10 mt-2'>
      <p className='text-[#151875] text-[20px]'>Mini LCW Chair</p>
      <p className='text-[#151875] text-[16px]'>$56.00</p>
    </div>

  </div>


  <div className='w-[269px] h-[365px] shadow-md'>
    <div className='w-[269px] h-[269px] flex items-center justify-center rounded-full  bg-[#F6F7FB]'>
    <Image
      src={'/images/chair4.png'}
      alt=''
      width={158}
      height={157}
       />
    </div>

    <div className='w-[150px] text-center h-[49px] ml-10 mt-2'>
      <p className='text-[#151875] text-[20px]'>Mini LCW Chair</p>
      <p className='text-[#151875] text-[16px]'>$56.00</p>
    </div>

  </div>

  <div className='w-[269px] h-[365px] shadow-md'>
    <div className='w-[269px] h-[269px] flex items-center justify-center rounded-full bg-[#F6F7FB]'>
    <Image
      src={'/images/image 1171.png'}
      alt=''
      width={149}
      height={149}
       />
    </div>

    <div className='w-[150px] text-center h-[49px] ml-10 mt-2'>
      <p className='text-[#151875] text-[20px]'>Mini LCW Chair</p>
      <p className='text-[#151875] text-[16px]'>$56.00</p>
    </div>

  </div>
  <div className='w-[269px] h-[365px] shadow-md'>
    <div className='w-[269px] h-[269px] flex items-center justify-center rounded-full bg-[#F6F7FB]'>
    <Image
      src={'/images/chair4.png'}
      alt=''
      width={178}
      height={178}
       />
    </div>

    <div className='w-[150px] text-center h-[49px] ml-10 mt-2'>
      <p className='text-[#151875] text-[20px]'>Mini LCW Chair</p>
      <p className='text-[#151875] text-[16px]'>$56.00</p>
    </div>

  </div>

</div>
    </div>
  )
}

export default TopCategories