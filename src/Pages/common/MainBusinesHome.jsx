import React from 'react'
import Mainhomenav from '../../Components/Mainhome/Mainhomenav'
import Appointmentimg from "../../assets/Busines/appointments.svg"
import Onlineboking from "../../assets/Busines/onlineboking.svg"
import Managecustimg from "../../assets/Busines/Bmanagecst.svg"
import Locationimg from "../../assets/Busines/Blocation.svg"
import Teammanageimg from "../../assets/Busines/Bteammanag.svg"
import Paymntimg from "../../assets/Busines/Bpaymnt.svg"
import Invoiceimg from "../../assets/Busines/invoice.svg"
import Overviewimg from "../../assets/Busines/Boverview.svg"
import Recuringbookingimg from "../../assets/Busines/recuringbooking.svg"
import Widgetbookimg from "../../assets/Busines/Widgetbook.svg"
import Remindersbookimg from "../../assets/Busines/Breminder.svg"
import Reportimg from "../../assets/Busines/Breports.svg"
import Bookformimg from "../../assets/Busines/Bookform.svg"
import Voucherimg from "../../assets/Busines/Bvoucher.svg"
import Reviewimg from "../../assets/Busines/Breview.svg"
import Alljob from '../../Components/Animations/Alljob'
const MainBusinesHome = () => {
  return (
    <div>
      <Mainhomenav heading={"Grow Your Business"} title={"Start business"} link={"/user/signup"} />
       <div className='w-full sm:h-[150px] flex flex-col   justify-center items-center space-y-2 lg:space-y-6 sm:mt-0 mt-2'>
            <h2 className='text-pink-600 text-xl uppercase font-loctxt font-bold'>FOR BUSINESS OWNERS</h2>
            <h1 className=' sm:text-xl md:text-3xl lg:text-4xl font-local text-gray-800'> <span className='text-pink-600'>Every</span>thing your <span className='text-pink-600'>business</span> needs in <span className='text-pink-600' >one place</span></h1>
       </div>
          {/* animation section  */}
            <Alljob />
           {/* grid section  */}
           <div className='w-full h-[2800px] md:h-[1510px]  xl:h-[1140px]  flex justify-center items-center pt-0 xl:mt-9'>
               <div className='w-[1380px] md:h-[1450px] xl:h-[1070px] bg-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-0 pl-7 sm:pl-[220px] md:pl-[40px] lg:pl-[130px] xl:pl-48 '>
                     {/* first box  */}
                  <div className='w-[350px] h-[180px] bg-white   flex flex-col  space-y-1'>
                     <img src={Appointmentimg} alt="" className='w-[60px] h-[60px]' />
                     <h1 className='text-xl font-bold font-loctxt'>Appointment Sheduling</h1>
                     <div className='w-[300px] h-min '><h2 className='font-extralight text-lg text-gray-500'>Easily manage your Appointments with a few clicks.</h2></div>
                  </div>
                  {/* second box  */}
                  <div className='w-[350px]  h-[180px] bg-white   space-y-1'>
                  <img src={Onlineboking} alt="" className='w-[60px] h-[60px]' />
                     <h1 className='text-xl font-bold font-loctxt'>24x7 Online Booking</h1>
                     <h2 className='font-extralight text-lg text-gray-500'>Be easily accessible to your customers.</h2>
                  </div>
                  {/* third box  */}
                  <div className='w-[350px]  h-[180px] bg-white   space-y-1 '>
                  <img src={Managecustimg} alt="" className='w-[60px] h-[60px]' />
                     <h1 className='text-xl font-bold font-loctxt'>Manage Customers</h1>
                     <h2 className='font-extralight text-lg text-gray-500'>Manage your Customer data, their appointment history all in one place.</h2>
                  </div>
                   {/* fourth box  */}
                  <div className='w-[350px]  h-[180px] bg-white  space-y-1'>
                  <img src={Locationimg} alt="" className='w-[60px] h-[60px]' />
                     <h1 className='text-xl font-bold font-loctxt'>Multiple Locations</h1>
                     <h2 className='font-extralight text-lg text-gray-500'>Check what is going on in all your business locations at a glance.</h2>
                  </div>
                    {/* fifth box  */}
                  <div className='w-[350px]  h-[180px] bg-white  space-y-1'>
                  <img src={Teammanageimg} alt="" className='w-[60px] h-[60px]' />
                     <h1 className='text-xl font-bold font-loctxt'>Team Management</h1>
                     <h2 className='font-extralight text-lg text-gray-500'>Manage your team`s schedule, bookings <br /> & day off’s.</h2>
                  </div>
                    {/* sixth box  */}
                  <div className='w-[350px]  h-[180px] bg-white space-y-1'>
                  <img src={Paymntimg} alt="" className='w-[60px] h-[60px]' />
                     <h1 className='text-xl font-bold font-loctxt'>Take Payments</h1>
                     <h2 className='font-extralight text-lg text-gray-500'>Support Cash and Card Payments right from your Picktime Calendar</h2>
                  </div>
                  {/* seventh box  */}
                  <div className='w-[350px]  h-[180px] bg-white space-y-1'>
                  <img src={Invoiceimg} alt="" className='w-[60px] h-[60px]' />
                     <h1 className='text-xl font-bold font-loctxt'>Invoice Generation</h1>
                     <h2 className='font-extralight text-lg text-gray-500'>Keep track of all your bookings, invoices <br /> and refunds.</h2>
                  </div>
                     {/* eight box  */}
                  <div className='w-[350px]  h-[180px] bg-white space-y-1'>
                  <img src={Overviewimg} alt="" className='w-[60px] h-[60px]' />
                     <h1 className='text-xl font-bold font-loctxt'>Overview</h1>
                     <h2 className='font-extralight text-lg text-gray-500'>Check your revenue, account activity & upcoming bookings</h2>
                  </div>
                {/* nineth box  */}
                  <div className='w-[350px]  h-[180px] bg-white space-y-1'>
                  <img src={Recuringbookingimg} alt="" className='w-[60px] h-[60px]' />
                     <h1 className='text-xl font-bold font-loctxt'>Recurring Bookings</h1>
                     <h2 className='font-extralight text-lg text-gray-500'>Give your customers priority service by pre-booking their slots</h2>
                  </div>
                    {/* tenth box  */}
                  <div className='w-[350px]  h-[180px] bg-white space-y-1'>
                  <img src={Widgetbookimg} alt="" className='w-[60px] h-[60px]' />
                     <h1 className='text-xl font-bold font-loctxt'>Booking Widget</h1>
                     <h2 className='font-extralight text-lg text-gray-500'>Turn your Website into a Booking Engine.</h2>
                  </div>
                   {/* eleventh box  */}
                  <div className='w-[350px]  h-[180px] bg-white space-y-1'>
                  <img src={Remindersbookimg} alt="" className='w-[60px] h-[60px]' />
                     <h1 className='text-xl font-bold font-loctxt'>Reminders</h1>
                     <h2 className='font-extralight text-lg text-gray-500'>Avoid no-shows & missed appointments.</h2>
                  </div>
                    {/* twelth box */}
                  <div className='w-[350px]  h-[180px] bg-white space-y-1'>
                  <img src={Reportimg} alt="" className='w-[60px] h-[60px]' />
                     <h1 className='text-xl font-bold font-loctxt'>Reports</h1>
                     <h2 className='font-extralight text-lg text-gray-500'>View end-to-end detailed reports of all your business activities</h2>
                  </div>
                   {/* 13th box  */}
                  <div className='w-[350px]  h-[180px] bg-white space-y-1'>
                  <img src={Bookformimg} alt="" className='w-[60px] h-[60px]' />
                     <h1 className='text-xl font-bold font-loctxt'>Booking Forms</h1>
                     <h2 className='font-extralight text-lg text-gray-500'>Get to know your customers with <br /> customized forms.</h2>
                  </div>
                  {/* 14th box  */}
                  <div className='w-[350px]  h-[180px] bg-white space-y-1'>
                  <img src={Voucherimg} alt="" className='w-[60px] h-[60px]' />
                     <h1 className='text-xl font-bold font-loctxt'>Vouchers & Discounts</h1>
                     <h2 className='font-extralight text-lg text-gray-500'>Notify customers about the latest offers <br /> and discounts (Coming soon).</h2>
                  </div>
                   {/* 15th box  */}
                  <div className='w-[350px]  h-[180px] bg-white'>
                  <img src={Reviewimg} alt="" className='w-[60px] h-[60px]' />
                     <h1 className='text-xl font-bold font-loctxt'>Reviews</h1>
                     <h2 className='font-extralight text-lg text-gray-500'>Get the right feedback from your customers (Coming soon).</h2>
                  </div>
                  
                  
               </div>
           </div>


       <div className='w-full h-[300px] bg-white'>
       </div>

    </div>
  )
}

export default MainBusinesHome
