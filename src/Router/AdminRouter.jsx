import React from 'react'
import Adminsidebar from "../Components/Admin/AdminSidebar"
import Userlist from '../Pages/Admin/Userlist'
import { Route, Routes } from 'react-router-dom'
import Shoplist from '../Components/Admin/Shoplist'
const AdminRouter = () => {
  return (
    <div>
         <div className='w-full h-2 bg-emerald-800'></div>
        <div className='flex'>
           <Adminsidebar /> 
           <div>
               <Routes>
                <Route path='userlist' element={<Userlist/>} />
                <Route path='shoplist' element={<Shoplist />} />
                </Routes>  
           </div>
        </div>
          
    </div>
  )
}

export default AdminRouter
