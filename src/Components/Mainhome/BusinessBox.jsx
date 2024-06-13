import React from 'react'

const BusinessBox = ({
    boximage,
     boxheading,
     boxdescription
}) => {
  return (
    <div>
       <div className='w-[350px] h-[180px] bg-white   flex flex-col  space-y-1'>
                     <img src={boximage} alt="" className='w-[60px] h-[60px]' />
                     <h1 className='text-xl font-bold font-loctxt'>{boxheading}</h1>
                     <div className='w-[300px] h-min '><h2 className='font-extralight text-lg text-gray-500'>{boxdescription}</h2></div>
                  </div>
    </div>
  )
}

export default BusinessBox
