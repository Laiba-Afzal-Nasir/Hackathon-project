import Image from 'next/image'
import React from 'react'



const LatestBlogs = () => {
  return (
    <div className='absolute top-[6770px]'>
              <h1 className=' text-[#1A0B5B] mt-20 text-[42px] ml-[833px] font-bold'>Latest Blogs </h1>

                <div className='mt-[90px] ml-[349px]  w-[1920px] flex space-x-20'>
                    <div className='w-[370px] h-[493px] shadow-md'>
                        <div className='rounded-sm w-[370px] h-[255px]'>
                             <Image
                            src={'/images/set1.png'}
                            alt=''
                            width={370}
                            height={255}
                            /> 
                        </div>


                        <div className='mt-6 ml-5'>
                            <div className='flex space-x-6'>
                            <div className='flex space-x-2'>
                                <span className='text-[#FB2E86]'>pen icon</span>
                                <p className='text-[#151875] font-semibold'>SaberAli </p>
                            </div>

                            <div className='flex space-x-2'>
                                <span className='text-[#FFA454]'>cale</span>
                                <p className='text-[#151875] font-semibold'>21 August,2020</p>
                            </div>
                            </div>
                                    <h3  className='text-[#151875] text-[18px] mt-5 font-semibold'>Top esssential Trends in 2021</h3>
                                    <p  className='text-[#72718F] text-[16px] mt-4'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                                    <p  className='text-[#151875] text-[16px] underline mt-4'>Read More</p>

                        </div>
                    </div>

                    <div className='w-[370px] h-[493px] shadow-md'>
                        <div className='rounded-sm  w-[370px] h-[255px]'>
                             <Image
                            src={'/images/set2.png'}
                            alt=''
                            width={370}
                            height={255}
                            /> 
                        </div>


                        <div className='mt-6 ml-5'>
                            <div className='flex space-x-6'>
                            <div className='flex space-x-2'>
                                <span className='text-[#FB2E86]'>pen icon</span>
                                <p className='text-[#151875] font-semibold'>Surfauxion </p>
                            </div>

                            <div className='flex space-x-2'>
                                <span className='text-[#FFA454]'>cale</span>
                                <p className='text-[#151875] font-semibold'>21 August,2020</p>
                            </div>
                            </div>
                                    <h3  className='text-[#FB2E86] text-[18px] mt-5 font-semibold'>Top esssential Trends in 2021</h3>
                                    <p  className='text-[#72718F] text-[16px] mt-4'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                                    <p  className='text-[#FB2E86] text-[16px] underline mt-4'>Read More</p>

                        </div>
                    </div>

                    <div className='w-[370px] h-[493px] shadow-md'>
                        <div className='rounded-sm w-[370px] h-[255px]'>
                            <Image
                            src={'/images/set3.png'}
                            alt=''
                            width={370}
                            height={255}
                            /> 
                        </div>


                        <div className='mt-6 ml-5'>
                            <div className='flex space-x-6'>
                            <div className='flex space-x-2'>
                                <span className='text-[#FB2E86]'>pen icon</span>
                                <p className='text-[#151875] font-semibold'>SaberAli </p>
                            </div>

                            <div className='flex space-x-2'>
                                <span className='text-[#FFA454]'>cale</span>
                                <p className='text-[#151875] font-semibold'>21 August,2020</p>
                            </div>
                            </div>
                                    <h3  className='text-[#151875] text-[18px] mt-5 font-semibold'>Top esssential Trends in 2021</h3>
                                    <p  className='text-[#72718F] text-[16px] mt-4'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                                    <p  className='text-[#151875] text-[16px] underline mt-4'>Read More</p>

                        </div>
                    </div>


                </div>


                
    </div>
  )
}

export default LatestBlogs