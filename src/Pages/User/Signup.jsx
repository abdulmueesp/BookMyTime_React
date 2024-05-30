import React from 'react'
import logo from"../../assets/logo1.png"
import bg1 from "../../assets/bg2.jpg"
import { Formik,Form,Field } from 'formik'
import * as yup from 'yup';

const Signup = () => {
  const handlesubmit=(values,{resetForm})=>{
      console.log(values);
      resetForm();
  }
     const initialValues={
      name:"",
      email:"",
      phone:"",
      password:""
     }
 const validationSchema=yup.object({
    name:yup.string().required("name is required"),
    email:yup.string().email().required("email is required"),
    phone: yup.string()
    .required("Phone number is required")
    .matches(
        /^(\+\d{1,3}[- ]?)?\d{10}$/,
        "Phone number is not valid"
    ),
    password:yup.string().required("password is required")
 })



  return (
    <div>
       <div className='w-full h-[700px] flex justify-center pt-[58px] ' style={{backgroundImage:`url(${bg1})`}}>
              {/* form main div  */}
           <div className='w-[400px] h-[590px] bg-white rounded-2xl shadow-lg flex flex-col'>
                 {/* icon and title  */}
                <div className='w-[400px] h-[60px]  flex justify-center items-center rounded-2xl'>
                        <img src={logo} alt="" className='w-[70px] h-[70px]' />
                        <h1 className='font-mainTxt font-semibold text-xl'>BookMyTime</h1>
                  </div>   
                       {/* create account section  */}
                  <div className='w-[400px] h-[40px]  flex justify-center items-center bg-pink-700 text-white'>
                          <h1 className='uppercase font-extrabold text-lg'>create account</h1>
                  </div>
                  {/* inputs main*/}
                  <div className='w-[400px] h-[490px]  flex flex-col items-center pt-3 space-y-2 rounded-2xl'>
                        <Formik
                          initialValues={initialValues}
                          validationSchema={validationSchema}
                          onSubmit={handlesubmit}  
                        >
                           {({ errors,touched}) => (
                         <Form>   
                               {/* full name  */}
                       <div className='w-[380px] h-[99px] bg-white flex flex-col pl-4'>
                          <label htmlFor="" className='font-bold'>Full name</label>
                          <Field type="text" name="name" placeholder="Enter name" className={`userinput_box`} />
                          {errors.name && touched.name ? <div className='text-red-600'>{errors.name}</div> : null}
                       </div>
                          {/* Email  */}
                          <div className='w-[380px] h-[99px] bg-white flex flex-col pl-4'>
                          <label htmlFor="" className='font-bold'>Email</label>
                          <Field type="Email" name="email" placeholder="Enter Email" className={`userinput_box`} />
                          {errors.email && touched.email ? <div className='text-red-600'>{errors.email}</div> : null}
                       </div>
                          {/* phone  */}
                          <div className='w-[380px] h-[99px] bg-white flex flex-col pl-4'>
                          <label htmlFor="" className='font-bold'>Phone</label>
                          <Field type="Phone" name="phone" placeholder="Enter number" className={`userinput_box`} />
                          {errors.phone && touched.phone ? <div className='text-red-600'>{errors.phone}</div> : null}
                       </div>
                        {/* password  */}
                        <div className='w-[380px] h-[99px] bg-white flex flex-col pl-4'>
                          <label htmlFor="" className='font-bold'>Password</label>
                          <Field type="password" name="password" placeholder="Enter password" className={`userinput_box`} />
                          {errors.password && touched.password ? <div className='text-red-600'>{errors.password}</div> : null}
                       </div>
                         {/* buttton  */}
                         <div className='w-[380px] h-[40px]  flex justify-center items-center'>
                              <button type='submit' className='w-[200px] h-[40px] bg-pink-700 rounded-3xl text-white font-bold'>SUBMIT</button>
                         </div>
                         <div className='w-[380px] h-[32px]  flex justify-center items-center'>
                               <h2>Already Have Account?</h2>
                               <h2 className='text-pink-600 font-semibold'>Login</h2>
                         </div>
                       </Form>
                        )}
                       </Formik>
                  </div>
             


           </div>
       </div>
    </div>
  )
}

export default Signup
