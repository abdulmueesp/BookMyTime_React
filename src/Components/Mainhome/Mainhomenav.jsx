import React from 'react'
import Homeimg from "../../assets/home2.jpg"
import Logo from "../../assets/logo1.png"
import LinkButton from '../Buttons/LinkButton'
const Mainhomenav = ({title,link,heading}) => {
  return (
    <div>
      <div className='w-full h-[400px] bg-cover 'style={{backgroundImage:`url(${Homeimg})`}}>
             {/* logo section  */}
             <div className='w-full h-[60px] flex justify-start items-center  '>
             <img src={Logo} alt="" className='w-[80px] h-[80px] ml-0 md:ml-[100px] lg:ml-[200px]' />
             <h1 className='font-mainTxt font-bold text-2xl text-white '>BookMyTime</h1>
             </div>
                  {/* main head  */}
             <div className='w-full h-[100px]  mt-[50px] flex justify-center items-center'>
                   <h1 className='text-xl  font-extrabold sm:text-4xl lg:text-5xl sm:font-bold text-white animate-fadeIn lg:font-local'>{heading}</h1>
             </div>
                 {/* description  */}
             <div className='pl-7 sm:pl-0 w-[200px]sm:w-full h-[70px] bg-black opacity-35 sm:flex justify-start items-center flex-col text-white text-xs sm:text-lg font-local '>
                  <span>Free online Appointment scheduling software with Payments, Invoicing, Sales,</span>
                  <span>Reporting, Customer & Team management.</span>
             </div>
             {/* button section  */}
             <div className='w-full h-[100px]  flex items-center justify-center'>
                <LinkButton to={link}>{title}</LinkButton>
             </div>
              
        </div> 
    </div>
  )
}

export default Mainhomenav
