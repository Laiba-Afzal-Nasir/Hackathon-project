export const metadata = {
    title: "FAQ"
  
  };
  import React from 'react'
  import Image from 'next/image'
  import Footer from '@/components/Footer'
  
  const page = () => {
    return (
      <div>
          <div className='w-[1920px] h-[286px] mt-14 bg-[#F6F5FF]'>
      <div className='absolute mt-[63px] left-[371px] w-[202px] h-[62px]'>
                <h1 className='text-[30px] w-[265px]  text-[#101750] font-bold'>FAQ</h1>
  
                <ul className='flex space-x-4 text-[16px]'>
                  <li>Home</li>
                  <li>Pages</li>
                  <li className='text-[#FB2E86]'>Faq</li>
                </ul>
              </div>
      </div>
  
  <div className='flex space-x-1 w-[1920px] h-[900px] mt-16 '>
      {/* right */}
      <div className='ml-[260px] mt-[40px]'>
      <h1 className='text-[30px] text-center text-[#101750] font-bold'>General Information</h1>
  
      <h3 className='text-[17px] text-[#101750] text-left mt-20  font-bold'>Eu dictumst cum at sed euismood condimentum?</h3>
      <p className='text-[#A1ABCC] w-[499px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
  
  
  
  <h3 className='text-[17px] text-[#101750] text-left mt-16 font-bold'>Eu dictumst cum at sed euismood condimentum?</h3>
  <p className='text-[#A1ABCC] w-[499px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
  
  <h3 className='text-[17px] text-[#101750] text-left mt-16 font-bold'>Eu dictumst cum at sed euismood condimentum?</h3>
  <p className='text-[#A1ABCC] w-[499px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
  
  <h3 className='text-[17px] text-[#101750] text-left mt-16  font-bold'>Eu dictumst cum at sed euismood condimentum?</h3>
  <p className='text-[#A1ABCC] w-[499px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
  
  
      </div>
  
     
      
  
      {/* left */}
      <div className='w-[566px] h-[738px] bg-[#F8F8FD]  absolute top-[534px] left-[982px] '>
      <h1 className='text-[30px] text-[#101750] ml-[50px] text-left mt-16  font-bold'>Ask a Question</h1>
     <div className='flex flex-col space-y-10'>
     <input className='w-[445px] h-[50px]  ml-5 mt-20 px-2 border-2' type="text" placeholder='Your Name*'/>
      <input className='w-[445px] h-[50px] ml-5  px-2 border-2' type="text" placeholder='Subject*'/>
      <input className='w-[445px] h-[197px]  ml-5 px-2 border-2' type="text" placeholder='Enter Your Email*'/>
     </div>
      <button className='w-[156px] h-[48px] ml-[190px] mt-20 bg-[#FB2E86] text-white text-center'>Send Mail</button>
      </div>
  </div>
  
   <div className=' mt-[px] ml-[508px]'>
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