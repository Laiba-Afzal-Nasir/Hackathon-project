import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='mt-5'>
<div className='h-[764px] w-[1920px] flex justify-center items-center bg-[#F2F0FF]'>

    <div className='absolute left-[70px] top-[122px]'>
         <Image 
        src={'/images/lamp.png'}
        alt='lamp'
        width={387}
        height={387}
        /> 
    </div>

    <div className='absolute left-[375px] top-[325px]'>
        <p className='text-[#FB2E86] text-[16px]'>Best Furniture For Your Castle....</p>
        <h1 className='text-[53px] w-[644px]  font-semibold text-left'>New Furniture Collection Trends in 2020</h1>
        <p className='text-[#8A8FB9] w-[559px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
    </div>
<button className='bg-[#FB2E86] w-[163px] h-[50px] absolute left-[375px] top-[600px] text-white p-3 text-center rounded-sm'>Shop Now</button>

<div className=''>

    <div className='absolute left-[1041px] top-[161px]'>

        
    <Image 
         src={'/images/pink.png'}
         alt='pink'
         width={629}
         height={629}
         /> 
</div>

<div className='absolute left-[1051px] top-[161px]'>
        <Image 
         src={'/images/sofa.png'}
         alt='sofa'
         width={629}
         height={629}
         /> 

         
    </div>
    <div className='absolute left-[1598px] top-[216px]'>

<Image 
         src={'/images/discount.png'}
         alt='discount'
         width={136.56}
         height={136.56}
         /> 
</div>

</div>



</div>



















    </div>
  )
}

export default Hero