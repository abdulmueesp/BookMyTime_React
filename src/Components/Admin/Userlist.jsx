import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Instance/axiosinstance'
const Userlist = () => {
    const [userdata,setuserdata]=useState([])

    // delete data
    async function handledelete(id){
          try{
            const response =await axiosInstance.delete(`/admin/userlists/${id}`)
             if(response.status==200){
              // setuserdata(userdata.filter(user=> user._id !== id))
             }
          }catch(error){
            console.log(`handledelete function error is ${error}`);
          }
    }


        // fetching 
      async function fetchdata(){
          try{
          const response=await axiosInstance.get("/admin/userlists")
          setuserdata(response.data.userdata)
          }catch(error){
            console.log(`admin userlist error is ${error}`);
          }
      }

      useEffect(()=>{
        fetchdata()
      },[])

  return (
    <div>
     
        {/* table  */}
        <div className='  max-h-[600px] bg-black mt-[50px]  pl-[3px] pr-[3px] pb-[3px] border-t-[10px] rounded-tl-2xl rounded-tr-2xl border-black
       2xl:w-[1000px] 2xl:ml-[100px] xl:w-[860px] xl:ml-[60px] lg:w-[750px] lg:ml-[43px] md:ml-[15px] md:w-[700px] sm:w-[550px] sm:ml-[15px] ml-[8px] w-[300px]  overflow-x-auto overflow-y-auto hide-scrollbar'>
  <table className="min-w-full ">
    <thead>
      <tr className="bg-black text-white text-center">
        <th className="p-1 sm:p-2">Full Name</th>
        <th className="p-1 sm:p-2">Email</th>
        <th className="p-1 sm:p-2">Number</th>
        <th className=" p-1 sm:p-2">Block</th>
        <th className='p-1 sm:p-2'>Delete</th>
      </tr>
    </thead>
    <tbody >
      {userdata.map((user)=>(
      <tr key={user._id} className="bg-white text-center">
        <td className="p-3 sm:p-5 pb-1">{user.name}</td>
        <td className="p-3 sm:p-4 pb-1">{user.email}</td>
        <td className="p-3 sm:p-4 pb-1">{user.phone}</td>
        <td className="p-3 sm:p-4 pb-1">
          <button className="px-1 sm:px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700">Block</button>
        </td>
        <td className="p-3 sm:p-4 pb-1">
          <button className="px-1 sm:px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
          onClick={()=>handledelete(user._id)}
          >Delete</button>
        </td> 
      </tr>
     ))}
    </tbody>
  </table>
</div>

      </div>
    
  )
}

export default Userlist
