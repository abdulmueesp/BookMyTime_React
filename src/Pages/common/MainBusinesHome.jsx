import React from "react";
import Mainhomenav from "../../Components/Mainhome/Mainhomenav";
import Appointmentimg from "../../assets/Busines/appointments.svg";
import Onlineboking from "../../assets/Busines/onlineboking.svg";
import Managecustimg from "../../assets/Busines/Bmanagecst.svg";
import Locationimg from "../../assets/Busines/Blocation.svg";
import Teammanageimg from "../../assets/Busines/Bteammanag.svg";
import Paymntimg from "../../assets/Busines/Bpaymnt.svg";
import Invoiceimg from "../../assets/Busines/invoice.svg";
import Overviewimg from "../../assets/Busines/Boverview.svg";
import Recuringbookingimg from "../../assets/Busines/recuringbooking.svg";
import Widgetbookimg from "../../assets/Busines/Widgetbook.svg";
import Remindersbookimg from "../../assets/Busines/Breminder.svg";
import Reportimg from "../../assets/Busines/Breports.svg";
import Bookformimg from "../../assets/Busines/Bookform.svg";
import Voucherimg from "../../assets/Busines/Bvoucher.svg";
import Reviewimg from "../../assets/Busines/Breview.svg";
import Alljob from "../../Components/Animations/Alljob";
import MainHomefooter from "../../Components/Mainhome/mainHomefooter";
import BusinessBox from "../../Components/Mainhome/BusinessBox";
const MainBusinesHome = () => {
  return (
    <div>
      <Mainhomenav
        heading={"Grow Your Business"}
        title={"Start business"}
        link={"/user/signup"}
      />
      <div className="w-full sm:h-[150px] flex flex-col   justify-center items-center space-y-2 lg:space-y-6 sm:mt-0 mt-2">
        <h2 className="text-pink-600 text-xl uppercase font-loctxt font-bold">
          FOR BUSINESS OWNERS
        </h2>
        <h1 className=" sm:text-xl md:text-3xl lg:text-4xl font-local text-gray-800">
          {" "}
          <span className="text-pink-600">Every</span>thing your{" "}
          <span className="text-pink-600">business</span> needs in{" "}
          <span className="text-pink-600">one place</span>
        </h1>
      </div>
      {/* animation section  */}
      <Alljob />
      {/* grid section  */}
      <div className="w-full h-[2800px] md:h-[1510px]  xl:h-[1140px]  flex justify-center items-center pt-0 xl:mt-9">
        <div className="w-[1380px] md:h-[1450px] xl:h-[1070px] bg-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-0 pl-7 sm:pl-[220px] md:pl-[40px] lg:pl-[130px] xl:pl-48 ">
          {/* first box  */}
          <BusinessBox
            boximage={Appointmentimg}
            boxheading={"Appointment Sheduling"}
            boxdescription={
              "Easily manage your Appointments with a few clicks."
            }
          />
          {/* second box  */}
          <BusinessBox
            boximage={Onlineboking}
            boxheading={"24x7 Online Booking"}
            boxdescription={"Be easily accessible to your customers."}
          />
          {/* third box  */}

          <BusinessBox
            boximage={Managecustimg}
            boxheading={"Manage Customers"}
            boxdescription={
              "Manage your Customer data, their appointment history all in one place."
            }
          />
          {/* fourth box  */}

          <BusinessBox
            boximage={Locationimg}
            boxheading={"Multiple Locations"}
            boxdescription={
              "Check what is going on in all your business locations at a glance."
            }
          />
          {/* fifth box  */}

          <BusinessBox
            boximage={Teammanageimg}
            boxheading={"Team Management"}
            boxdescription={
              "Manage your team`s schedule  bookings & day off’s."
            }
          />
          {/* sixth box  */}

          <BusinessBox
            boximage={Paymntimg}
            boxheading={"Take Payments"}
            boxdescription={
              "Support Cash and Card Payments right from your Picktime Calendar"
            }
          />
          {/* seventh box  */}

          <BusinessBox
            boximage={Invoiceimg}
            boxheading={"Invoice Generation"}
            boxdescription={
              "Keep track of all your bookings, invoices  and refunds."
            }
          />
          {/* eight box  */}

          <BusinessBox
            boximage={Overviewimg}
            boxheading={"Overview"}
            boxdescription={
              "Check your revenue, account activity & upcoming bookings"
            }
          />

          {/* nineth box  */}

          <BusinessBox
            boximage={Recuringbookingimg}
            boxheading={"Recurring Bookings"}
            boxdescription={
              "Give your customers priority service by pre-booking their slots"
            }
          />
          {/* tenth box  */}

          <BusinessBox
            boximage={Widgetbookimg}
            boxheading={"Booking Widget"}
            boxdescription={"Turn your Website into a Booking Engine."}
          />
          {/* eleventh box  */}

          <BusinessBox
            boximage={Remindersbookimg}
            boxheading={"Reminders"}
            boxdescription={"Avoid no-shows & missed appointments."}
          />
          {/* twelth box */}

          <BusinessBox
            boximage={Reportimg}
            boxheading={"Reports"}
            boxdescription={
              "View end-to-end detailed reports of all your business activities"
            }
          />
          {/* 13th box  */}

          <BusinessBox
            boximage={Bookformimg}
            boxheading={"Booking Forms"}
            boxdescription={
              "Get to know your customers with  customized forms."
            }
          />
          {/* 14th box  */}

          <BusinessBox
            boximage={Voucherimg}
            boxheading={"Vouchers & Discounts"}
            boxdescription={
              "Notify customers about the latest offers  and discounts (Coming soon)."
            }
          />
          {/* 15th box  */}
          <BusinessBox
            boximage={Reviewimg}
            boxheading={"Reviews"}
            boxdescription={
              "Get the right feedback from your customers (Coming soon)."
            }
          />
        </div>
      </div>

      {/* footer  */}

      <MainHomefooter btnlink={"/user/signup"} />
    </div>
  );
};

export default MainBusinesHome;
