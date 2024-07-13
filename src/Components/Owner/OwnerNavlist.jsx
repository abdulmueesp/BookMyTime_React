import React from 'react'
import { Link } from 'react-router-dom'
const OwnerNavlist = ({icon,text,btnlink,clstxt,maincls,onclick,isSelected}) => {
  return (
    <div>
      <div onClick={onclick}>
       <Link to={btnlink}>
          <div className={` h-[45px] flex items-center gap-x-3 hover:bg-white hover:text-black  rounded-3xl ${maincls} ${isSelected ? "bg-white text-black" :"text-white"}`}>
            {/* icon  */}
            <div>    
        {icon}
    </div>
     {/* text  */}
           <div className={`animate-speedfade ${clstxt}`}>
             <h1 className="font-local font-medium">{text}</h1>
           </div>
          </div>
          </Link>
    </div>
    </div>
  )
}

export default OwnerNavlist
