import React from 'react'
import { Field, Form, Formik } from 'formik'
import Button from '../../Components/MainButton/Button'
import Ownimg from "../../assets/Owner/owsimg.jpg"
import Logos from "../../assets/logo1.png"
import axiosInstance from '../../Instance/axiosinstance'
import * as yup from "yup"
const OwnerSignup = () => {
   const handlesubmit=async (values)=>{
       console.log("handlesubmit working");
       try{
          const response =await axiosInstance.post("/owner/ownersignup",values)
       }catch(error){
        console.log(`error is owner signup post${error}`);
       }
   }

    const initialValues={
       name:"",
       email:"",
       password:"Abc123@op",
       phone:""
    }
    const validationSchema = yup.object({
      name: yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters')
        .max(50, 'Name must not exceed 50 characters')
        .matches(/^[a-zA-Z\s]+$/, 'Name must only contain letters and spaces'),
      email: yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      phone: yup.string()
        .required('Phone number is required')
        .matches(
          /^(\+\d{1,3}[- ]?)?\d{10}$/,
          'Phone number is not valid'
        ),
      password: yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/\d/, 'Password must contain at least one number')
        .matches(/[@$!%*?&]/, 'Password must contain at least one special character'),
    });
    
  return (
    <div>
      {/* main  */}
     <div className='w-full h-[725px] bg-gray-200 flex  justify-center items-center'>
      
        
         {/* form main */}
        <div className='w-[800px] h-[470px] bg-blue-950 border-t-4 border-blue-950  rounded-2xl flex flex-col justify-start items-center px-[20px] space-y-4 '>
          {/* top div signup now and icon  */}
        <div className='w-[700px] h-[40px] bg-blue-950 flex place-content-between rounded-b-2xl  '>
           {/* icon  */}
           <div className='w-[250px] h-[40px] bg-gray-200 rounded-b-2xl flex justify-center items-center '>
              <h1 className=' font-mainTxt text-xl font-bold text-blue-950'>signup now</h1>
           </div>
           {/* signup now  */}
           <div className='w-[250px] h-[40px] bg-gray-200 rounded-b-2xl flex justify-center items-center '>
           <img src={Logos} alt="" className='w-[50px] h-[50px]' />
           <h1 className='font-mainTxt font-bold text-xl text-blue-950'>BookMyTime</h1>
           </div>
          

        </div>
            {/* right left main box */}
            <div className='flex'>
              {/* left side box  */}
            <div className='w-[415px] h-[400px] flex flex-col justify-center items-center  '>
              <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handlesubmit}
              >
                 {({ errors,touched}) => (
                <Form>
                  <div className='w-[290px] h-[75px] '>
                    <Field type="text" name="name" placeholder="Your name" className="w-[250px] h-[40px] border-b-2 border-white bg-blue-950  focus:outline-none focus:border-b-2 focus:border-blue-500  text-white" />
                    {errors.name && touched.name ? <div className='text-red-600'>{errors.name}</div> : null}
                  </div>
                  <div className='w-[290px] h-[75px]  '>
                    <Field type="Email" name="email" placeholder="Email" className="w-[250px] h-[40px] border-b-2 border-white bg-blue-950 focus:outline-none focus:border-b-2 focus:border-blue-500  text-white" />
                    {errors.email && touched.email ? <div className='text-red-600'>{errors.email}</div> : null}
                  </div>
                  <div className='w-[290px] h-[75px] '>
                    <Field type="phone" name="phone" placeholder="Phone" className="w-[250px] h-[40px] border-b-2 border-white bg-blue-950 focus:outline-none focus:border-b-2 focus:border-blue-500  text-white " />
                    {errors.phone && touched.phone ? <div className='text-red-600'>{errors.phone}</div> : null}
                  </div>
                  <div className='w-[290px] h-[75px]'>
                    <Field type="password" name="password" placeholder="Password" className="w-[250px] h-[40px] border-b-2 border-white bg-blue-950 focus:outline-none focus:border-b-2 focus:border-blue-500 text-white " />
                    {errors.password && touched.password ? <div className='text-red-600'>{errors.password}</div> : null}
                  </div>
                   <div className='w-[240px] h-[50px]  flex justify-center items-center'>
                      <Button type='submit' className={"w-[130px] h-[35px] border  bg-gray-200 text-blue-950 rounded-2xl font-local font-bold"}>submit</Button>
                    
                   </div>
                </Form>
                   )}
              </Formik>
            </div>
            {/* right side box */}
            <div className='w-[360px] h-[400px] bg-blue-950 flex justify-center items-center '>
                <img src={Ownimg} alt="" className='h-[360px] rounded-xl' />
            </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default OwnerSignup
