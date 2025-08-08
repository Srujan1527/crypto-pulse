import React from "react";
import Header from "./header";
import PopularListings from "./PopularListings";
import TrendingPage from "./TrendingPage";

const HomePage = () => {
  return (
    <>
      <div className="h-screen  w-full bg-[#ffffff]">
        <div className=" flex flex-col lg:flex-row w-full h-full justify-between items-center px-10 py-10">
          {/* LEFT SECTION*/}
          <div className="flex flex-col items-start text-left w-[85%] h-full">
            <h1 className=" font-binance text-5xl md:text-7xl font-extrabold text-[#F0B90B] mb-2 pl-30 pt-10">
              283,948,745
            </h1>
            <h1 className="text-5xl md:text-7xl font-extrabold  text-gray-900 mb-2 pl-30">
              USERS
            </h1>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 pl-30 pb-10">
              TRUST US
            </h1>

            <div className="flex w-full justify-start pl-30 mt-10 ">
              <input
                type="text"
                className="border border-gray-900  rounded-md p-2 w-[35%]  mr-5 hover:border-[#F0B90B] focus:outline-none transition-colors duration-200"
                placeholder="Email/Phone number"
              />

              <button className="bg-[#F0B90B] p-2 rounded-md text-white w-[20%] cursor-pointer">
                SignUp
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6 mt-10 lg:mt-0 w-1/2 h-full lg:w-1/2 ">
            <PopularListings />
            <TrendingPage />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
