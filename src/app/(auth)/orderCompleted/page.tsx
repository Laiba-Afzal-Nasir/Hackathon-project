export const metadata = {
    title: "Order Completed"
  
  };
  import React from 'react'
  import Image from 'next/image'
  import Footer from '@/components/Footer'
  
  const page = () => {
    return (
      <div>
           <div className='w-[1920px] h-[286px] mt-14 bg-[#F6F5FF]'>
      <div className='absolute mt-[63px] left-[371px] w-[202px] h-[62px]'>
                <h1 className='text-[30px] w-[265px]  text-[#101750] font-bold'>Order Completed</h1>
  
                <ul className='flex space-x-4 text-[16px]'>
                  <li>Home</li>
                  <li>Pages</li>
                  <li className='text-[#FB2E86]'>Order Completed</li>
                </ul>
              </div>
      </div>
  
  {/* content */}
  
  <div className='w-[625px] h-[326px] absolute top-[592px] left-[648px]'>
      <Image 
                src={'/images/Vector 15.png'}    
                alt=''                 
                width={65}
                height={65}
                className='ml-[280px]'
                         />             <div>
                                        <h1 className='text-[36px]  text-[#101750] font-bold text-center mt-10'>Your Order Is Completed!</h1>
                                        <p className='text-[#8D92A7] text-center mt-2'>Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.</p>
                                        <button className='w-[208px] h-[59px] text-center text-[16px] mt-10 ml-[190px] rounded-sm text-white bg-[#FF1788]'>Continue Shopping</button>
                                      </div>
  </div>
  
  <div className='absolute top-[630px] left-[415px]'> <Image 
                src={'/images/notebook.png'}    
                alt=''                 
                width={94}
                height={94}
              
                         /> </div>
  <div  className='absolute top-[945px] left-[1483px]'> <Image 
                src={'/images/timer.png'}    
                alt=''                 
                width={70}
                height={70}
              
                         /> </div>
  
  {/* logos */}
  
  <div className='ml-[450px]'>
    <Image 
                                    src={'/images/logos.png'}
                                    alt='bag'
                                    width={904}
                                    height={93}
                                    className='mt-[800px] '
                                    />
  </div>
  
  <Footer />
      </div>
    )
  }
  
  export default page