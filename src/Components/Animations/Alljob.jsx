import React from 'react'
import Alljobsimg from "../../assets/Alljobs.svg"
const Alljob = ({margin="mt-5"}) => {
  return (
    <div>
         <div className={`w-full h-min  flex justify-center items-center  sm:mt-2 ${margin}`}>
                <div className='w-[350px] h-[180px] sm:w-[500px] sm:h-[250px] rounded-2xl shadow-inner-custom flex justify-center items-end'>
                  <img src={Alljobsimg} alt="" />
                </div>
          </div>
    </div>
  )
}

export default Alljob
