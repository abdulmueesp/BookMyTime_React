import React from 'react'
import LinkButton from '../Buttons/LinkButton' 
const Mainuseradds = ({
    title,
    subtitle,
    description,
    buttonText,
    buttonLink,
    imageUrladds,
    altText,
}) => (
 
    <div>
      <div className='shadow-inner-custom rounded-2xl  h-[600px] lg:h-[380px] bg-yellow-50    flex flex-col lg:flex-row 
          justify-center items-center mt-4 ml-[17px] sm:ml-0 2xl:ml-[114px] 
          w-[350px] 2xl:w-[1300px] xl:w-[1250px] lg:w-[1050px] md:w-[800px] sm:w-[600px] pt-3 lg:pt-0 '>
              {/* title secton  */}
            <div className='pl-0 lg:pl-[100px] w-[230px] sm:w-[50%] h-[400px]  flex flex-col items-start justify-center '>
                <div className='w-[200px] md:w-[300px] h-[40px] bg-yellow-50 font-loctxt uppercase text-xl font-semibold text-pink-600 '>
                  {title}
                </div>
                 <div className='w-[250px] md:w-[400px] h-[60px] bg-yellow-50 text-xl md:text-4xl font-bold font-local'>
                 {subtitle}
                 </div>
                 <div className='w-[250px] md:w-[550px] h-min bg-yellow-50 text-lg tracking-normal lg:tracking-wide font-local '>
                   <p>{description}</p>
                 </div>
                 <div className='md:w-[300px] h-[120px]  flex items-center'>
                 <LinkButton to={buttonLink}>{buttonText}</LinkButton>
                 </div>
            </div>

            {/* img section  */}
            <div className=' w-[300px] sm:w-[50%] h-[400px]   flex justify-center items-center'>
                <img src={imageUrladds} alt={altText} className='w-[470px] h-[170px] xl:w-[550px] xl:h-[350px] lg:h-[200px] lg:w-[250px] ' />
            </div>


         </div>
    </div>
  
)

export default Mainuseradds
