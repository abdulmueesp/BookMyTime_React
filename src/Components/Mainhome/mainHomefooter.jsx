import React from 'react'
import Footert from "../../assets/footer3.png"
import LinkButton from '../Buttons/LinkButton'
const mainHomefooter = ({
 btnlink,
 btntext    


}) => (
    <div>
<div className='w-full h-min  bg-white  relative mt-[50px] lg:mt-[100px]'>
          {/* position free  */}
         <div className='w-[870px] h-[300px] bg-white  absolute xl:left-[250px] 2xl:left-[350px] rounded-lg  hidden xl:block flex flex-col z-20'style={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.5)" }}>
                      {/* heading  */}
                 <div className='w-[858px] h-[80px]  rounded-lg flex justify-center items-end'>
                       <h1 className='text-3xl font-bold font-local'>Pricing?</h1>
                 </div>
                 {/* desciption  */}
                 <div className='w-[858px] h-[140px]  flex flex-col justify-center items-center'>
                    <div className='w-[830px] h-min   font-local text-xl '>
                    BookMyTime offers a free solution for scheduling needs. It is simple and extremely
                    </div>
                    <div className='w-[830] h-min  font-local text-xl'>
                    easy to use. It is the only scheduling platform where you can manage both your
                    </div>
                    <div className='w-[830] h-min  font-local text-xl'>
                    personal and business calendars all in one place. Signup now!
                    </div>
                 </div>
                 <div className='w-[850px] h-min flex justify-center items-center '>
                  <LinkButton to={btnlink} children={"signup now"}/>
                 </div>
           </div>
             {/* position free background div  */}
         <div className='w-full h-[220px] bg-white hidden xl:block '></div>
           {/* main black div last  */}
           <div className='w-full h-[530px] lg:h-[400px] bg-white  xl:pt-[120px] z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-cover pl-0 lg:pl-2 relative' style={{ backgroundImage: `url(${Footert})` }}>
               {/* first box  */}
           <div className='w-[380px] lg:w-[300px] h-[180px] relative border-t border-b sm:border rounded-lg border-pink-900  flex flex-col justify-start items-center'>
           <div className='absolute inset-0 bg-white lg:opacity-45'>
           </div>
           <h1 className='relative z-10 text-xl font-bold text-red-800 mb-2'>Product</h1>
           <h2 className='relative z-10 text-lg font-local'>Pricing</h2>
           <h2 className='relative z-10 text-lg font-local'>Features</h2>
           <h2 className='relative z-10 text-lg font-local'>Enterprice</h2>
           <h2 className='relative z-10 text-lg font-local'>System status</h2>
            </div>
            {/* second box  */}
            <div className='w-[380px] lg:w-[300px] h-[180px] relative border-b sm:border rounded-lg border-pink-900  flex flex-col justify-start items-center'>
           <div className='absolute inset-0 bg-white lg:opacity-45'>
           </div>
           <h1 className='relative z-10 text-xl font-bold text-red-800 mb-2'>Solutions</h1>
           <h2 className='relative z-10 text-lg font-local'>Calender</h2>
           <h2 className='relative z-10 text-lg font-local'>Online Booking</h2>
           <h2 className='relative z-10 text-lg font-local'>Customer Management</h2>
           <h2 className='relative z-10 text-lg font-local'>Business Management</h2>
            </div>
            {/* third box  */}
            <div className='w-[380px] lg:w-[300px] h-[180px] relative border-b sm:border rounded-lg border-pink-900  flex flex-col justify-start items-center'>
           <div className='absolute inset-0 bg-white lg:opacity-45'>
           </div>
           <h1 className='relative z-10 text-xl font-bold text-red-800 mb-2'>BookMyTime</h1>
           <h2 className='relative z-10 text-lg font-local'>Careers</h2>
           <h2 className='relative z-10 text-lg font-local'>Our Story</h2>
           <h2 className='relative z-10 text-lg font-local'>Why BookMyTime</h2>
           <h2 className='relative z-10 text-lg font-local'>References</h2>
            </div>
           
</div>

  </div>

    </div>
)
 


export default mainHomefooter
