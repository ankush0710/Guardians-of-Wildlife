import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchGovProgramData } from "../redux/action/action";
import JoinTeamCard from "../Components/JoinTeamCard";
import bgImage from "../assets/Giant-panda.webp";

const JoinTeam = () => {
  const dispatch = useDispatch();
  const govProgram = useSelector((state) => state.GovProgram);

  //disppatch the funtion and render the data
  useEffect(() => {
    dispatch(FetchGovProgramData());
  }, [dispatch]);
  return (
    <>
      {/* bg -image and intro of page  */}
      <div id="bg-image" className="w-full min-h-screen">
        <div
          id="banner-image"
          style={{ backgroundImage: `url('${bgImage}')` }}
          className="absolute top-0 w-full min-h-screen z-0 overflow-hidden bg-no-repeat bg-cover bg-center flex items-center justify-center"
        >
          <div className="bg-black absolute inset-0 opacity-50"></div>
          <div className="absolute z-10 inset-0 top-1/2 space-y-4">
            <h1 className="text-4xl text-center text-[#44A194] font-heading font-bold md:text-7xl">
              Join Our Team
            </h1>
          </div>
        </div>
      </div>
    
        {/* line for seperation  */}
      <div className="border-1 border-gray-400 my-5 mx-3"></div>

      {/* carausal section for goverment initiatives and Program  */}
      <h1 className="mb-5 text-3xl font-heading text-center font-bold text-gray-500 md:text-5xl">
        Goverment Initiatives
      </h1>
      <JoinTeamCard>
        {govProgram.map((gp) => {
          return (
            <>
              <div className="min-w-78 h-auto mb-10 md:min-w-xl border-1 border-gray-400 rounded-xl">
                <div id="crad-image" className="w-full h-75 rounded-t-xl">
                  <img src={gp.imageUrl} alt="card-image" className="w-full h-full object-cover object-center rounded-t-xl"/>
                </div>
                <div className="border-1 border-gray-400 mx-4 "></div>
                <div id="card-content" className="p-5 space-y-3">
                  <div className="flex justify-between">
                    <p className="font-heading font-semibold text-md text-black">
                      Project Name:{" "}
                      <span className="font-body text-md text-gray-600">
                        {gp.programName}
                      </span>
                    </p>
                    <p className="font-heading font-semibold text-md text-black">
                      Country:{" "}
                      <span className="font-body text-md text-gray-600">
                        {gp.country}
                      </span>
                    </p>
                  </div>
                  <p className="font-heading font-semibold text-md text-black">
                    Launched Year:{" "}
                    <span className="font-body text-md text-gray-600">
                      {gp.year}
                    </span>
                  </p>
                  <p className="font-heading font-semibold text-md text-black">
                    About:{" "}
                    <span className="font-body text-md text-gray-600">
                      {gp.description}
                    </span>
                  </p>
                  <p className="font-heading font-semibold text-md text-black">
                    Department:{" "}
                    <span className="font-body text-md text-gray-600">
                      {gp.goverment}
                    </span>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </JoinTeamCard>
    </>
  );
};

export default JoinTeam;

// https://sheet2api.com/v1/LZ3hk9ALR3i2/goverment_initiatives
