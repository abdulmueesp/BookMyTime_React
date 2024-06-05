import React from 'react'
import LinkButton from '../Buttons/LinkButton'
const Mainusersadd2 = ({
    title,
    subtitle,
    description,
    buttonText,
    buttonLink,
    imageUrladds,
    altText,
}) => (
  
    <div>
         <div className='w-full h-[650px] lg:h-[450px]  flex items-center justify-center'>
             <div className='h-[590px] lg:h-[380px] w-[350px] sm:w-[1300px] bg-lime-50 rounded-2xl flex flex-col lg:flex-row  justify-center items-center shadow-inner-custom  mt-5 lg:mt-0 pb-2'>
                 {/* img section  */}
                 <div className='w-[69%] sm:w-[39%] h-[220px]  flex justify-center items-center '>
                        <img src={imageUrladds} alt={altText} className='w-[420px] h-[200px] lg:w-[430px] lg:h-[350px]'/>
                 </div>
                 {/* title section  */}
                 <div className=' sm:w-[49%] h-[360px]  flex flex-col items-start justify-start 2xl:pt-7 pl-0 2xl:pl-16 space-y-1'>
                     <div className='w-[270px] sm:w-[400px] h-[40px] bg-lime-50 font-loctxt uppercase text-xl font-semibold text-pink-600 mb-1'>
                        <h1>{title}</h1>
                     </div>
                     <div className='w-[270px] sm:w-[400px] h-[60px] sm:h-[80px] bg-lime-50 text-xl md:text-3xl font-bold font-local'>
                        <h1>{subtitle}</h1>
                     </div>
                     <div className='w-[280px] sm:w-[350px] lg:w-[550px] h-min bg-lime-50 text-lg tracking-normal lg:tracking-wide font-local'>
                        <p>{description}</p>
                     </div>
                     <div className='h-[90px] w-min bg-lime-50 flex justify-center items-center'>
                        <LinkButton to={buttonLink} >{buttonText}</LinkButton>
                     </div>

                 </div>
             </div>
        </div>

      
    </div>

)

export default Mainusersadd2
