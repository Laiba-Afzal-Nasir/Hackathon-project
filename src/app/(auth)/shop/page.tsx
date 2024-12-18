export const metadata = {
    title: "Shop List"
  
  };
  import React from 'react'
  import { RiStarSFill } from "react-icons/ri";
  import { FaRegHeart } from "react-icons/fa";
  import { IoCartOutline } from "react-icons/io5";
  import { CiSearch } from "react-icons/ci";
  import Image from 'next/image';
  import Footer from '@/components/Footer';
  
  
  const page = () => {
    return (
      <div>
         <div className='w-[1920px] h-[286px] mt-14 bg-[#F6F5FF]'>
      <div className='absolute mt-[63px] left-[371px] w-[202px] h-[62px]'>
                <h1 className='text-[30px] w-[265px]  text-[#101750] font-bold'>Shop List </h1>
  
                <ul className='flex space-x-4 text-[16px]'>
                  <li>Home</li>
                  <li>Pages</li>
                  <li className='text-[#FB2E86]'>Shop List</li>
                </ul>
              </div>
      </div>
  
  
        <div className='w-[1071px] h-[44px] flex  absolute top-[535px] left-[374px]'>
  
          <div>
            <h3 className=' font-bold text-[#151875]'>Ecommerce Acceories & Fashion item</h3>
            <p className='text-[#8A8FB9] text-[12px]'>About 9,620 results (0.62 seconds)</p>
          </div>
  
  
        <div className='flex space-x-10  mt-2 ml-[220px]'>
  
  
  
        <div className='flex space-x-1'>
          <p className='text-[#3F509E]'>Per Page:</p>
          <input type="text" className='w-[55px] h-[25px] border-2 border-[#E7E6EF]'/>
        </div>
  
        <div className='flex space-x-1'>
          <p className='text-[#3F509E]'>Sort By:</p>
          <input type="text" className='w-[96px] h-[28px] border-2 border-[#E7E6EF]'/>
        </div>
  
        <div className='flex space-x-1'>
          <p className='text-[#3F509E] '>View:</p>
          <input type="text" className='w-[162px] h-[30px] border-2 border-[#E7E6EF]'/>
        </div>
  
  
        </div>
  
  
  {/* shopping starts here */}
        
        <div className='absolute top-[156px] space-y-16 '>
  
  <div className='w-[1141px] h-[254px] shadow-md flex'>
          <div className=' w-[313.63px] h-[217.56px]'>
                <Image 
                                      src={'/images/shop1.png'}
                                      alt='bag'
                                      width={313.63}
                                      height={217.56 }
                                      className=''
                                      />
          </div>
  
  <div>
  <div className=' mt-[0px] '>
            <div className='flex space-x-2 ml-[30px]'>
              <h3 className='font-bold text-[#111C85]'>Accumsan tincidunt</h3>
              <div className= 'flex space-x-1 mt-2'>
                <span className='w-[12.15px] h-[12.15px] bg-[#DE9034] rounded-full'></span>
                <span className='w-[12.15px] h-[12.15px] bg-[#E60584] rounded-full'></span>
                <span className='w-[12.15px] h-[12.15px] bg-[#5E37FF] rounded-full'></span>
              </div>
  
            </div>
  
  
          </div>
  
          <div className='flex space-x-4 ml-[30px] mt-5'>
            <p className='text-[#111C85]'>$26.00</p>
            <p className='text-[#FF2AAA] line-through'>$52.00</p>
            <div className='flex space-x-2'>
            <span className='w-[69px] flex space-x-1 h-[12px] mt-[5px]'>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px' />
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-gray-400  w-[12px] h-[12px'/>
              
            {/* five stars yellow */}
            </span>
            
            </div>
          </div>
          <p className='ml-[30px] mt-2 text-[#9295AA] w-[]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
  
          <div className='ml-[30px] mt-5 flex items-center text-3xl text-[#535399] space-x-10 w-[144.67px] h-[34.23px]'>
          <IoCartOutline />
          <FaRegHeart />
          <CiSearch />
          </div>
  </div>
  </div>
  
  
  
  
  <div className='w-[1141px] h-[254px] shadow-md flex'>
          <div className=' w-[313.63px] h-[217.56px]'>
                <Image 
                                      src={'/images/shop2.png'}
                                      alt='bag'
                                      width={313.63}
                                      height={217.56 }
                                      className=''
                                      />
          </div>
  
  <div>
  <div className=' mt-[0px] '>
            <div className='flex space-x-2 ml-[30px]'>
              <h3 className='font-bold text-[#111C85]'>Accumsan tincidunt</h3>
              <div className= 'flex space-x-1 mt-2'>
                <span className='w-[12.15px] h-[12.15px] bg-[#DE9034] rounded-full'></span>
                <span className='w-[12.15px] h-[12.15px] bg-[#E60584] rounded-full'></span>
                <span className='w-[12.15px] h-[12.15px] bg-[#5E37FF] rounded-full'></span>
              </div>
  
            </div>
  
  
          </div>
  
          <div className='flex space-x-4 ml-[30px] mt-5'>
            <p className='text-[#111C85]'>$26.00</p>
            <p className='text-[#FF2AAA] line-through'>$52.00</p>
            <div className='flex space-x-2'>
            <span className='w-[69px] flex space-x-1 h-[12px] mt-[5px]'>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px' />
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-gray-400  w-[12px] h-[12px'/>
              
            {/* five stars yellow */}
            </span>
            
            </div>
          </div>
          <p className='ml-[30px] mt-2 text-[#9295AA] w-[]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
  
          <div className='ml-[30px] mt-5 flex items-center text-3xl text-[#535399] space-x-10 w-[144.67px] h-[34.23px]'>
          <IoCartOutline />
          <FaRegHeart />
          <CiSearch />
          </div>
  </div>
  </div>
  
  
  
  <div className='w-[1141px] h-[254px] shadow-md flex'>
          <div className=' w-[313.63px] h-[217.56px]'>
                <Image 
                                      src={'/images/shop3.png'}
                                      alt='bag'
                                      width={313.63}
                                      height={217.56 }
                                      className=''
                                      />
          </div>
  
  <div>
  <div className=' mt-[0px] '>
            <div className='flex space-x-2 ml-[30px]'>
              <h3 className='font-bold text-[#111C85]'>Accumsan tincidunt</h3>
              <div className= 'flex space-x-1 mt-2'>
                <span className='w-[12.15px] h-[12.15px] bg-[#DE9034] rounded-full'></span>
                <span className='w-[12.15px] h-[12.15px] bg-[#E60584] rounded-full'></span>
                <span className='w-[12.15px] h-[12.15px] bg-[#5E37FF] rounded-full'></span>
              </div>
  
            </div>
  
  
          </div>
  
          <div className='flex space-x-4 ml-[30px] mt-5'>
            <p className='text-[#111C85]'>$26.00</p>
            <p className='text-[#FF2AAA] line-through'>$52.00</p>
            <div className='flex space-x-2'>
            <span className='w-[69px] flex space-x-1 h-[12px] mt-[5px]'>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px' />
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-gray-400  w-[12px] h-[12px'/>
              
            {/* five stars yellow */}
            </span>
            
            </div>
          </div>
          <p className='ml-[30px] mt-2 text-[#9295AA] w-[]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
  
          <div className='ml-[30px] mt-5 flex items-center text-3xl text-[#535399] space-x-10 w-[144.67px] h-[34.23px]'>
          <IoCartOutline />
          <FaRegHeart />
          <CiSearch />
          </div>
  </div>
  </div>
  
  
  <div className='w-[1141px] h-[254px] shadow-md flex'>
          <div className=' w-[313.63px] h-[217.56px]'>
                <Image 
                                      src={'/images/shop4.png'}
                                      alt='bag'
                                      width={313.63}
                                      height={217.56 }
                                      className=''
                                      />
          </div>
  
  <div>
  <div className=' mt-[0px] '>
            <div className='flex space-x-2 ml-[30px]'>
              <h3 className='font-bold text-[#111C85]'>Accumsan tincidunt</h3>
              <div className= 'flex space-x-1 mt-2'>
                <span className='w-[12.15px] h-[12.15px] bg-[#DE9034] rounded-full'></span>
                <span className='w-[12.15px] h-[12.15px] bg-[#E60584] rounded-full'></span>
                <span className='w-[12.15px] h-[12.15px] bg-[#5E37FF] rounded-full'></span>
              </div>
  
            </div>
  
  
          </div>
  
          <div className='flex space-x-4 ml-[30px] mt-5'>
            <p className='text-[#111C85]'>$26.00</p>
            <p className='text-[#FF2AAA] line-through'>$52.00</p>
            <div className='flex space-x-2'>
            <span className='w-[69px] flex space-x-1 h-[12px] mt-[5px]'>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px' />
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-gray-400  w-[12px] h-[12px'/>
              
            {/* five stars yellow */}
            </span>
            
            </div>
          </div>
          <p className='ml-[30px] mt-2 text-[#9295AA] w-[]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
  
          <div className='ml-[30px] mt-5 flex items-center text-3xl text-[#535399] space-x-10 w-[144.67px] h-[34.23px]'>
          <IoCartOutline />
          <FaRegHeart />
          <CiSearch />
          </div>
  </div>
  </div>
  
  <div className='w-[1141px] h-[254px] shadow-md flex'>
          <div className=' w-[313.63px] h-[217.56px]'>
                <Image 
                                      src={'/images/shop5.png'}
                                      alt='bag'
                                      width={313.63}
                                      height={217.56 }
                                      className=''
                                      />
          </div>
  
  <div>
  <div className=' mt-[0px] '>
            <div className='flex space-x-2 ml-[30px]'>
              <h3 className='font-bold text-[#111C85]'>Accumsan tincidunt</h3>
              <div className= 'flex space-x-1 mt-2'>
                <span className='w-[12.15px] h-[12.15px] bg-[#DE9034] rounded-full'></span>
                <span className='w-[12.15px] h-[12.15px] bg-[#E60584] rounded-full'></span>
                <span className='w-[12.15px] h-[12.15px] bg-[#5E37FF] rounded-full'></span>
              </div>
  
            </div>
  
  
          </div>
  
          <div className='flex space-x-4 ml-[30px] mt-5'>
            <p className='text-[#111C85]'>$26.00</p>
            <p className='text-[#FF2AAA] line-through'>$52.00</p>
            <div className='flex space-x-2'>
            <span className='w-[69px] flex space-x-1 h-[12px] mt-[5px]'>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px' />
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-gray-400  w-[12px] h-[12px'/>
              
            {/* five stars yellow */}
            </span>
            
            </div>
          </div>
          <p className='ml-[30px] mt-2 text-[#9295AA] w-[]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
  
          <div className='ml-[30px] mt-5 flex items-center text-3xl text-[#535399] space-x-10 w-[144.67px] h-[34.23px]'>
          <IoCartOutline />
          <FaRegHeart />
          <CiSearch />
          </div>
  </div>
  </div>
  
  
  <div className='w-[1141px] h-[254px] shadow-md flex'>
          <div className='w-[313.63px] h-[217.56px]'>
                <Image 
                                      src={'/images/shop6.png'}
                                      alt='bag'
                                      width={313.63}
                                      height={217.56 }
                                      className=''
                                      />
          </div>
  
  <div>
  <div className=' mt-[0px] '>
            <div className='flex space-x-2 ml-[30px]'>
              <h3 className='font-bold text-[#111C85]'>Accumsan tincidunt</h3>
              <div className= 'flex space-x-1 mt-2'>
                <span className='w-[12.15px] h-[12.15px] bg-[#DE9034] rounded-full'></span>
                <span className='w-[12.15px] h-[12.15px] bg-[#E60584] rounded-full'></span>
                <span className='w-[12.15px] h-[12.15px] bg-[#5E37FF] rounded-full'></span>
              </div>
  
            </div>
  
  
          </div>
  
          <div className='flex space-x-4 ml-[30px] mt-5'>
            <p className='text-[#111C85]'>$26.00</p>
            <p className='text-[#FF2AAA] line-through'>$52.00</p>
            <div className='flex space-x-2'>
            <span className='w-[69px] flex space-x-1 h-[12px] mt-[5px]'>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px' />
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-gray-400  w-[12px] h-[12px'/>
              
            {/* five stars yellow */}
            </span>
            
            </div>
          </div>
          <p className='ml-[30px] mt-2 text-[#9295AA] w-[]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
  
          <div className='ml-[30px] mt-5 flex items-center text-3xl text-[#535399] space-x-10 w-[144.67px] h-[34.23px]'>
          <IoCartOutline />
          <FaRegHeart />
          <CiSearch />
          </div>
  </div>
  </div>
  
  
  <div className='w-[1141px] h-[254px] shadow-md flex'>
          <div className=' w-[313.63px] h-[217.56px]'>
                <Image 
                                      src={'/images/shop7.png'}
                                      alt='bag'
                                      width={313.63}
                                      height={217.56 }
                                      className=''
                                      />
          </div>
  
  <div>
  <div className=' mt-[0px] '>
            <div className='flex space-x-2 ml-[30px]'>
              <h3 className='font-bold text-[#111C85]'>Accumsan tincidunt</h3>
              <div className= 'flex space-x-1 mt-2'>
                <span className='w-[12.15px] h-[12.15px] bg-[#DE9034] rounded-full'></span>
                <span className='w-[12.15px] h-[12.15px] bg-[#E60584] rounded-full'></span>
                <span className='w-[12.15px] h-[12.15px] bg-[#5E37FF] rounded-full'></span>
              </div>
  
            </div>
  
  
          </div>
  
          <div className='flex space-x-4 ml-[30px] mt-5'>
            <p className='text-[#111C85]'>$26.00</p>
            <p className='text-[#FF2AAA] line-through'>$52.00</p>
            <div className='flex space-x-2'>
            <span className='w-[69px] flex space-x-1 h-[12px] mt-[5px]'>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px' />
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-yellow-500  w-[12px] h-[12px'/>
            <RiStarSFill className='text-gray-400  w-[12px] h-[12px'/>
              
            {/* five stars yellow */}
            </span>
            
            </div>
          </div>
          <p className='ml-[30px] mt-2 text-[#9295AA] w-[]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
  
          <div className='ml-[30px] mt-5 flex items-center text-3xl text-[#535399] space-x-10 w-[144.67px] h-[34.23px]'>
          <IoCartOutline />
          <FaRegHeart />
          <CiSearch />
          </div>
  </div>
  </div>
  
  
  </div>
  
  </div>
  
  
           
            <div className=' mt-[2600px] ml-[508px]'>
                             <Image 
                                   src={'/images/logos.png'}
                                   alt='bag'
                                   width={904}
                                   height={93}
                                   />
                         </div>
      
  
       
          <Footer />
  
        
  
  
  
        </div>
  
  
    )
  }
  
  export default page