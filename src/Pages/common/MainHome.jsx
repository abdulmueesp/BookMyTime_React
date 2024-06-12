import React from 'react'
import Mainhomenav from '../../Components/Mainhome/Mainhomenav'
import Appointsvg from "../../assets/appointments.svg"
import Onlinebooksvg from "../../assets/onlineboking.svg"
import Paymentsvg from "../../assets/paymnt.svg"
import LinkButton from '../../Components/Buttons/LinkButton'
import Onlinebook from "../../assets/onlinebook.svg"
import Mainuseradds from '../../Components/Mainhome/Mainuseradds'
import Locationimg from "../../assets/location.png"
import Mainusersadd2 from '../../Components/Mainhome/Mainusersadd2'
import Paymentimg from "../../assets/paymentimg.svg"
import Reminder from "../../assets/reminder.svg"
import Alljob from '../../Components/Animations/Alljob'
import Footert from "../../assets/footer3.png"

const MainHome = () => {
 
  return (
    <div>
      <Mainhomenav title={"get start for free"} link={"/user/signup"} heading={"Simplified Scheduling for Everyone"} />
        {/* admin deatile section  */}
       <div className='w-full h-min  flex items-center flex-col '>
          {/* title section  */}
          <div className='w-full sm:h-[150px] flex flex-col items-center mt-3 lg:mt-6 space-y-1 sm:space-y-5 mb-5 sm:mb-0 '>
               <h3 className='font-loctxt uppercase text-sm  sm:text-xl font-semibold  text-black'>here is what <span className=' font-mainTxt text-pink-600'>BookMyTime</span> can do for you</h3>
               <div>
                <h1 className='text-center sm:text-right  sm:text-xl text-gray-600 tracking-normal lg:tracking-widest hidden sm:block'>Schedule your Appointments, Classes, and Interviews with BookMyTime.</h1>
                <h1 className='text-center  sm:text-xl text-gray-600 tracking-normal lg:tracking-widest hidden sm:block '>Easily manage your Rooms and Equipment with a few clicks.</h1>
               </div>
                <h1 className='uppercase font-loctxt font-bold text-pink-600 text-xl'>For business owners</h1>
          </div>
          
       </div>
         {/* grid section  */}
         
         <div className='w-full  h-min  flex justify-center items-center pb-1 pt-0 lg:pt-14 lg:pb-5'>
          
                 <div className='h-min lg:h-[350px] w-[340px]  2xl:ml-3 sm:w-[680px] lg:w-[1250px] grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-x-1 gap-y-1'>
                 <div className='bg-gray-50 h-[340px] w-[340px] shadow-2xl border rounded-xl flex flex-col '>
                    
                     <div className='w-[340px] h-[150px]  rounded-t-xl flex justify-center items-end'>
                          <img src={Appointsvg} alt="" className='w-[100px] h-[100px]' />
                     </div>
                     <div className='flex items-end justify-center w-[340px] h-[40px] font-bold'>
                         <h1>Appointments</h1>
                     </div>
                     <div className='w-[320px] h-[130px]  text-center pl-4 pt-2 '>
                        <p className='font-local'>Experience seamless appointment management and hassle-free scheduling. Say goodbye to no-shows and double bookings.</p>
                     </div>

                 </div>
                    {/* second box */}
                 <div className='bg-gray-50 h-[340px] w-[340px] shadow-2xl border rounded-xl '>
                 <div className='w-[340px] h-[150px]  rounded-t-xl flex justify-center items-end'>
                          <img src={Paymentsvg} alt="" className='w-[100px] h-[100px]' />
                     </div>
                     <div className='flex items-end justify-center w-[340px] h-[40px] font-bold'>
                         <h1>Take Payments</h1>
                     </div>
                     <div className='w-[320px] h-[130px]  text-center pl-4 pt-2 font-local'>
                        <p >Support Cash and Card Payments right from your Picktime Calendar. Say goodbye to no-shows and double bookings.</p>
                     </div>
                 </div>
                   {/* third box */}
                 <div className='bg-gray-50 h-[340px] w-[340px] shadow-2xl border rounded-xl '>
                 <div className='w-[340px] h-[150px]  rounded-t-xl flex justify-center items-end'>
                          <img src={Onlinebooksvg} alt="" className='w-[100px] h-[100px]' />
                     </div>
                     <div className='flex items-end justify-center w-[340px] h-[40px] font-bold'>
                         <h1>24x7 Online Booking</h1>
                     </div>
                     <div className='w-[320px] h-[130px]  text-center pl-4 pt-2 font-local'>
                        <p>Be easily accessible to your customers.right from your Picktime Calendar Say goodbye to no-shows and double bookings.</p>
                     </div>
                 </div>
                 </div>
                 
         </div>
         {/* after grid section  */}
         <div className='2xl:w-[1450px] xl:w-[1200px] h-[100px]  flex justify-center items-center  mb-0 xl:mb-14'>
               <LinkButton to={"/Busineshome"} background='black'>Learn More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</LinkButton>
         </div>
          {/* title  */}
          <div className='w-full h-[50px]  flex justify-center items-center  '>
              <h1 className='sm:text-xl md:text-3xl lg:text-4xl  text-gray-800 font-local'><span className='text-pink-600'>Every</span>thing you <span className='text-pink-600'>need</span> all in one <span className='text-pink-600'>place</span></h1>
              </div>    
           
               {/* animation  */}
               <Alljob margin='mt-0' />
         
          {/* add section  */}
          
          <div className='mt-12 sm:mt-5 xl:mt-16'>
          <Mainuseradds 
             title={"online booking"}
             subtitle={"Take bookings 24x7"}
             description={" Our booking system is available 24/7, so you can schedule your appointment at your convenience, anytime, anywhere. Don't miss out - take control of your time and book today!"}
             imageUrladds={Onlinebook}
             buttonText={"get start for free"}
             buttonLink={"/user/signup"}
             altText={"online booking img"}
          
          />
          </div>
         {/* last section  */}
        <div>
         <Mainusersadd2 
             title={"LOCATION MANAGEMENT"}
             subtitle={"Nearby services at your fingertips"}
            description={"Simplify your scheduling with location-based convenience. Your ideal service destination, now at your fingertips,discover and manage appointments at the closest venues."}
             imageUrladds={Locationimg}
             buttonText={"get start for free"}
             buttonLink={"/user/signup"}
             altText={"location img"}
         />
        </div>
        <div>
        <Mainuseradds 
             title={"REMINDERS"}
             subtitle={"Notification Feature"}
             description={"Our appointment booking system comes with a built-in notification feature! Get friendly reminders via text message or email to ensure you show up on time for your appointments."}
             imageUrladds={Reminder}
             buttonText={"get start for free"}
             buttonLink={"/user/signup"}
             altText={"online booking img"}
          
          />
        </div>
        <div>
        <Mainusersadd2 
             title={"PAYMENTS AND INVOICING"}
             subtitle={"Accept Payments & Deposits"}
            description={"Easily process your payments online in a secure manner. Choose to either take deposits or full payments in advance,you can ensure seamless transactions every time. "}
             imageUrladds={Paymentimg}
             buttonText={"get start for free"}
             buttonLink={"/user/signup"}
             altText={"location img"}
         />
        </div>
        
  {/* laast  */}
  {/* main  total 620px  */}
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
                  <LinkButton to={"/user/signup"} children={"signup now"}/>
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
}

export default MainHome
