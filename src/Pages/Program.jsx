import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProgramCard from "../Components/ProgramCard";
import { FetchProgramData } from "../redux/action/action";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Program = () => {
  const dispatch = useDispatch();
  const ProgramData = useSelector((state) => state.ProgramData);

  useEffect(() => {
    dispatch(FetchProgramData());
  }, [dispatch]);

  // if there's no data yet, we can render a simple message or spinner
  if (!ProgramData || ProgramData.length === 0) {
    return (
      <div className="w-full my-10 text-center">
        <p className="font-body text-lg">Loading programs...</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full my-10">
        <h1 className="font-heading text-3xl font-bold text-center pb-10">
          Our Programs
        </h1>
        <div className="grid grid-cols-1 gap-4"> 
          {ProgramData.map((data) => (
            <ProgramCard key={data.id}>
              <div id="card-image" className="w-full h-70 md:h-50 md:w-xl">
                <img
                  src={data.imageUrl}
                  alt="image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* heading and tthe main description about the project  */}
              <div id="description" className="space-y-3 md:pt-5">
                <h1 className="font-heading font-bold text-2xl">
                  {data.programName}
                </h1>
                <p className="font-body text-sm">{data.description}</p>
              </div>

              {/* button to see full detailed article of the respective project  */}
              <div className="pb-10 mx-3 my-auto">
                <button
                  type="submit"
                  className="text-[#8A7650] font-semibold font-body bg-transparent border-2 border-[#8A7650] px-6 py-2 rounded-full group hover:text-[#562F00] hover:bg-[#8A7650] hover:border-2 hover:border-[#562F00] hover:duration-600"
                >
                  <p className="text-nowrap">
                    View Details
                    <span>
                      <FontAwesomeIcon
                        icon="fa-solid fa-arrow-down"
                        className="ps-5 group-hover:translate-y-1 transition duration-300"
                      />
                    </span>
                  </p>
                </button>
              </div>
            </ProgramCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Program;
