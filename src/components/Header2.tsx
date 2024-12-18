import Image from 'next/image'
import React from 'react'

const Header2 = () => {
  return (
    <div className='mt-1'>
      <div className='bg-white w-[1920px] h-[100vh]  '>
      <h1 className=' text-[#1A0B5B] absolute top-[1017px] left-[777px]  text-[42px] font-bold'>Featured Products</h1>

<div className='flex absolute top-[1105px] justify-center items-center left-[376px] gap-16 '>
<div className='bg-[#F6F7FB] w-[270px] h-[361px]'>
<Image
          src={'/images/chair4.png'}
          alt='chair'
          width={178}
          height={178}
          className='mt-[46px] ml-[40px]'
          />
                 <h3 className='text-[#FB2E86] text-[18px] mt-4 ml-[71px]'>Cantilever chair</h3>

                 <div className='w-[52px] h-[4px] flex space-x-1 ml-[110px] mt-4'>
                  <div className='w-[14px] h-[4px] bg-[#05E6B7]'></div>
                  <div className='w-[14px] h-[4px] bg-[#F701A8]'></div>
                  <div className='w-[14px] h-[4px] bg-[#00009D]'></div>
                 </div>

<div className='mt-4 text-center'>
<p className='text-[#151875] mt-2'>Code - Y523201</p>
<p className='text-[#151875] mt-2 '>$42.00</p>
</div>
                 
                 
</div>
        <div className='bg-[#F6F7FB] w-[270px] h-[361px]'>
          <Image
          src={'/images/chair3.png'}
          alt='chair'
          width={178}
          height={178}
           className='mt-[48px] ml-[79px]'
          />
     <button className='w-[94px] h-[29px] mb-2 text-sm ml-[90px] mt-2 text-center bg-[#08D15F] text-white'>View Details</button>

     <div className='w-[270px] bg-[#2F1AC4] text-white pt-2'>
       <h3 className='text-center'>Cantilever chair</h3>
       <div className='w-[52px] h-[4px] flex space-x-1 ml-[110px] mt-4'>
                  <div className='w-[14px] h-[4px] bg-[#05E6B7]'></div>
                  <div className='w-[14px] h-[4px] bg-[#F701A8]'></div>
                  <div className='w-[14px] h-[4px] bg-[#00009D]'></div>
                 </div>
                 <div className='mt-4 text-center pb-2'>
<p className=' mt-2'>Code - Y523201</p>
<p className=' mt-2 '>$42.00</p>
</div> 
     </div>
        </div>
        <div className='bg-[#F6F7FB] w-[270px] h-[361px]'>
        <Image
          src={'/images/chair2.png'}
          alt='chair'
          width={178}
          height={178}
           className='mt-[41px] ml-[41px]'
          />
           <h3 className='text-[#FB2E86] text-[18px] mt-4 ml-[71px]'>Cantilever chair</h3>

<div className='w-[52px] h-[4px] flex space-x-1 ml-[110px] mt-4'>
 <div className='w-[14px] h-[4px] bg-[#05E6B7]'></div>
 <div className='w-[14px] h-[4px] bg-[#F701A8]'></div>
 <div className='w-[14px] h-[4px] bg-[#00009D]'></div>
</div>

<div className='mt-4 text-center'>
<p className='text-[#151875] mt-2'>Code - Y523201</p>
<p className='text-[#151875] mt-2 '>$42.00</p>
</div>
        </div>
        <div className='bg-[#F6F7FB] w-[270px] h-[361px]'>
        <Image
          src={'/images/chair1.png'}
          alt='chair'
          width={178}
          height={178}
           className='mt-[53px] ml-[26px]'
          />
           <h3 className='text-[#FB2E86] text-[18px] mt-4 ml-[71px]'>Cantilever chair</h3>

<div className='w-[52px] h-[4px] flex space-x-1 ml-[110px] mt-4'>
 <div className='w-[14px] h-[4px] bg-[#05E6B7]'></div>
 <div className='w-[14px] h-[4px] bg-[#F701A8]'></div>
 <div className='w-[14px] h-[4px] bg-[#00009D]'></div>
</div>

<div className='mt-4 text-center'>
<p className='text-[#151875] mt-2'>Code - Y523201</p>
<p className='text-[#151875] mt-2 '>$42.00</p>
</div>
        </div>
</div>

<div>
<div className='w-[91px] h-[4px] flex space-x-1 absolute top-[1559px] left-[915px]'>

 <div className='w-[14px] h-[4px] bg-[#F701A8]'></div>
 <div className='w-[14px] h-[4px] bg-[#FEBAD7]'></div>
 <div className='w-[14px] h-[4px] bg-[#FEBAD7]'></div>
 <div className='w-[14px] h-[4px] bg-[#FEBAD7]'></div>
</div>

</div>
{/* 
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
            <p>$42.00 <span className='text-strikethrough text-[12px] text-[#FB2448]'>$65.00</span></p>
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
            <p>$42.00 <span className='text-strikethrough text-[12px] text-[#FB2448]'>$65.00</span></p>
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
            <p>$42.00 <span className='text-strikethrough text-[12px] text-[#FB2448]'>$65.00</span></p>
          </div>
        </div>
       </div>


       next box of latest products
  */}
{/*   
      <div className=' flex justify-center items-center absolute top-[2165px] left-[378px] gap-16 '>

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
            <p>$42.00 <span className='text-strikethrough text-[12px] text-[#FB2448]'>$65.00</span></p>
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
            <p>$42.00 <span className='text-strikethrough text-[12px] text-[#FB2448]'>$65.00</span></p>
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
            <p>$42.00 <span className='text-strikethrough text-[12px] text-[#FB2448]'>$65.00</span></p>
          </div>
        </div>


        


      </div> */}

      
      {/* <h1 className='absolute left-[761px] top-[2669px] text-[#1A0B5B]  text-[42px] font-bold'>What Shopex Offer!</h1>

<div className='flex justify-center w-[1920px] h-[300px] items-center gap-20 absolute top-[2756px] left-[60px]'>
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











 */}



</div>
    </div>
  )
}

export default Header2