import React from 'react'
import Adminsidebar from "../Components/Admin/AdminSidebar"
import Userslist from "../Components/Admin/Userlist"
import { Route, Routes } from 'react-router-dom'
const AdminRouter = () => {
  return (
    <div>
         <div className='w-full h-2 bg-emerald-800'></div>
        <div className='flex'>
           <Adminsidebar /> 
           <div>
               <Routes>
                <Route path='userlist' element={<Userslist />} />
                </Routes>  
           </div>
        </div>
          
    </div>
  )
}

export default AdminRouter
