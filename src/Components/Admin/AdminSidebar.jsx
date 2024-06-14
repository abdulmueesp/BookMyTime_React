import React, { useState } from "react";
import Logo from "../../assets/logo1.png";
import AdminNavlist from "./AdminNavlist";

const AdminSidebar = () => {
  const [full, setFull] = useState(false);
  const [select,setSelect]=useState(0)

  const handleNavClick = (index) => {
    setSelect(index);
  };
  const toglle = () => {
    console.log("ok muees");
    setFull(!full);
  };
  return (
    <div>
      {/* main  */}
      {/* "block md:hidden" : "hidden md:block" */}
      <div
        className={` h-[720px] bg-emerald-800 transition-all duration-700 ${full ? "w-[60px] lg:w-[230px]" : " w-[60px]"
          }  text-white flex flex-col   items-center `}
      >
        {/* menu  */}
        <div
          className={` flex bg-emerald-800 transition-all duration-700   ${full ? "w-[60px] justify-center lg:w-[230px] lg:justify-around" : "w-[60px] justify-center"
            } h-[50px] items-center rounded-xl `}
        >
          <div className={` ${full ? "hidden lg:block" :"hidden"} `}>
            <h1 className="font-mainTxt font-bold text-xl">ADMIN</h1>
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
        {/* BookMyTime  */}
        <div
          className={`transition-all duration-700 ${full ? "w-[60px] lg:w-[230px]" : "w-[60px]"
            } h-[50px] bg-white flex border-r border-b-2 border-emerald-800 justify-center items-center`}
        >
          {/* logo  */}
          <div>
            <img src={Logo} alt="" className="w-[50px] h-[50px]" />
          </div>
          {/* name  */}
          <div className={`${full ? "hidden  lg:block" : "hidden"}`}>
            <h3 className="font-mainTxt text-black font-medium animate-speedfade  ">BookMyTime</h3>
          </div>
        </div>
        {/* users  */}
        <div>
          <AdminNavlist
          onclick={() => handleNavClick(1)}
          isSelected={select === 1}
            text={"users List"}
            btnlink={"/admin/userlist"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
              </svg>
            }
            clstxt={`${full ? "hidden  lg:block" : "hidden"}`}
            maincls={`${full ? "w-[60px] lg:w-[220px] lg:pl-6  " : "w-[60px] justify-center"
              }`}
          />
        </div>
        {/* users  */}
        <div>
          <AdminNavlist
          onclick={() => handleNavClick(2)}
          isSelected={select === 2}
            text={"shop list"}
            btnlink={"/admin/shoplist"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
              </svg>
            }
            clstxt={`${full ? "hidden  lg:block" : "hidden"}`}
            maincls={`${full ? "w-[60px] lg:w-[220px] lg:pl-6  " : "w-[60px] justify-center"
              }`}
          />
        </div>
        {/* users  */}
        <div>
          <AdminNavlist
          onclick={() => handleNavClick(3)}
          isSelected={select === 3}
            text={"Dashboard"}
            btnlink={"#"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
              </svg>
            }
            clstxt={`${full ? "hidden  lg:block" : "hidden"}`}
            maincls={`${full ? "w-[60px] lg:w-[220px] lg:pl-6 " : "w-[60px] justify-center "
              }`}
          />
        </div>
        {/* users  */}
        <div>
          <AdminNavlist
          onclick={() => handleNavClick(4)}
          isSelected={select === 4}
            text={"users list"}
            btnlink={"#"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
              </svg>
            }
            clstxt={`${full ? "hidden  lg:block" : "hidden"}`}
            maincls={`${full ? "w-[60px] lg:w-[220px] lg:pl-6 " : "w-[60px] justify-center "
              }`}
          />
        </div>
        {/* users  */}
        <div>
          <AdminNavlist
          onclick={() => handleNavClick(5)}
          isSelected={select === 5}
            text={"users List"}
            btnlink={"#"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
              </svg>
            }
            clstxt={`${full ? "hidden  lg:block" : "hidden"}`}
            maincls={`${full ? "w-[60px]  lg:w-[220px] lg:pl-6 " : "w-[60px] justify-center"
              }`}
          />
        </div>
        {/* users  */}
        <div>
          <AdminNavlist
          onclick={() => handleNavClick(6)}
          isSelected={select === 6}
            text={"users List"}
            btnlink={"#"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
              </svg>
            }
            clstxt={`${full ? "hidden  lg:block" : "hidden"}`}
            maincls={`${full ? "w-[60px] lg:w-[220px] lg:pl-6 " : "w-[60px] justify-center"
              }`}
          />
        </div>
        {/* users  */}
        <div>
          <AdminNavlist
          onclick={() => handleNavClick(7)}
          isSelected={select === 7}
            text={"users List"}
            btnlink={"#"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
              </svg>
            }
            clstxt={`${full ? "hidden  lg:block" : "hidden"}`}
            maincls={`${full ? "w-[60px] lg:w-[220px] lg:pl-6 " : "w-[60px] justify-center"
              }`}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
