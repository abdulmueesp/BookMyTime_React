import React, { useState } from "react";
import Logo from "../../assets/logo1.png";

const OwnerHome = () => {
    const [full, setFull] = useState(false);
    const [select,setSelect]=useState(0)
  
    const handleNavClick = (index) => {
      setSelect(index);
    };
    const toglle = () => {
      setFull(!full);
    };
    return (
      <div>
        {/* main  */}
        {/* "block md:hidden" : "hidden md:block" */}
        <div
          className={` h-[720px] bg-pink-950 transition-all duration-700 ${full ? "w-[60px] lg:w-[230px]" : " w-[60px]"
            }  text-white flex flex-col   items-center `}
        >
          {/* menu  */}
          <div
            className={` flex bg-pink-950 transition-all duration-700   ${full ? "w-[60px] justify-center lg:w-[230px] lg:justify-around" : "w-[60px] justify-center"
              } h-[50px] items-center rounded-xl `}
          >
            <div className={` ${full ? "hidden lg:block" :"hidden"} `}>
              <h1 className="font-mainTxt font-bold text-xl">Owner</h1>
            </div>
            <div className="hidden lg:block">
            <button  onClick={toglle}>
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            </div>
            {/* sub icon  */}
               <div className="block lg:hidden">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
  
               </div>
          </div>
            {/* shopname main div  */}
          <div
            className={`transition-all duration-700 ${full ? "w-[60px] lg:w-[230px]" : "w-[60px]"
              } h-[50px] bg-white flex border-r border-b-2 border-emerald-800 justify-center items-center cursor-pointer`}
          >
            {/* shop name  */}
            <div className={`${full ? "hidden  lg:block" : "hidden"}`}>
              <h3 className="font-mainTxt text-black font-medium animate-speedfade  ">Shopname</h3>
            </div>
          </div>
          {/* users  */}
         
        </div>
      </div>
    );
  };
  
  export default OwnerHome;
  