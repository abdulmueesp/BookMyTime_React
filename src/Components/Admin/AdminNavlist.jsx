import React from 'react'
import { Link } from 'react-router-dom'
const AdminNavlist = ({icon,text,btnlink,clstxt,maincls}) => {
  return (
    <div>
       <Link to={btnlink}>
          <div className={` h-[45px] flex items-center gap-x-3 hover:bg-white hover:text-black  rounded-3xl ${maincls}`}>
            {/* icon  */}
            <div>    
        {icon}
    </div>
     {/* text  */}
           <div className={clstxt}>
             <h1 className="font-local font-medium">{text}</h1>
           </div>
          </div>
          </Link>
    </div>
  )
}

export default AdminNavlist
