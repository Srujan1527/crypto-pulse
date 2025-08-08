import React from "react";
import Header from "./header";
import PopularListings from "./PopularListings";

const HomePage = () => {
  return (
    <>
      <div className="h-screen  w-full bg-[#F5F5F5]">
        <div className=" flex flex-col lg:flex-row w-full h-full justify-around items-center px-10 py-10">
          {/* LEFT SECTION*/}
          <div className="flex flex-col items-start justify-center text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#F0B90B] mb-2">
              283,948,745
            </h1>
            <h1 className="text-5xl md:text-6xl font-extrabold  text-gray-900 mb-2">
              USERS
            </h1>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
              TRUST US
            </h1>
          </div>
          <div className="flex flex-col gap-6 mt-10 lg:mt-0 w-full lg:w-1/2"></div>
          <PopularListings />
        </div>
      </div>
    </>
  );
};

export default HomePage;
