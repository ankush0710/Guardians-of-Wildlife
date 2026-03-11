import React, { useEffect, useState } from "react";
import bannerImage from "../assets/blog-banner-image.png";
import { useDispatch, useSelector } from "react-redux";
import ProgramCard from "../Components/ProgramCard";
import { Link } from "react-router-dom";
import { FetchProgramData } from "../redux/action/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Program = () => {
  const dispatch = useDispatch();
  const ProgramData = useSelector((state) => state.ProgramData);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  //pagination logic
  const lastIndex = currentPage * cardsPerPage;
  const startIndex = lastIndex - cardsPerPage;
  const currentNumber = ProgramData.slice(startIndex, lastIndex);

  const selectPageHandle = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage !== currentPage &&
      selectedPage <= ProgramData.length / 3
    ) {
      setCurrentPage(selectedPage);
    }
  };

  //disppatch the funtion and render the data
  useEffect(() => {
    dispatch(FetchProgramData());
  }, [ProgramData]);

  // if there's no data yet, we can render a simple message or spinner
  if (!ProgramData || ProgramData.length === 0) {
    return (
      <div className="w-full my-10 text-center">
        <p className="font-body text-lg">Loading programs...</p>
      </div>
    );
  }
  //else part
  return (
    <>
      <div className="w-full my-10">
        <h1 className="font-heading text-3xl font-bold text-center pb-10">
          Our Programs
        </h1>
        <div className="w-full h-auto grid grid-cols-1 gap-4">
          {currentNumber.map((data) => (
            <ProgramCard key={data.id}>
              <div
                id="card-image"
                className="relative w-full h-70 md:max-h-5xl md:w-7xl"
              >
                <img
                  src={data.imageUrl}
                  alt="image"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 rounded-lg bg-black z-10 opacity-50 hover:opacity-0"></div>
              </div>

              {/* heading and tthe main description about the project  */}
              <div id="description" className="space-y-3 md:pt-5">
                <h1 className="font-heading font-bold text-2xl">
                  {data.programName}
                </h1>
                <p className="font-body text-sm">{data.description}</p>
              </div>

              {/* button to see full detailed article of the respective project  */}
              <Link to={`/Program/${data.id}`} className="pb-10 mx-3 my-auto">
                <button
                  type="submit"
                  className="text-[#8A7650] font-semibold font-body bg-transparent border-2 border-[#8A7650] px-6 py-2 rounded-full cursor-pointer group hover:text-[#562F00] hover:bg-[#8A7650] hover:border-2 hover:border-[#562F00] hover:duration-600"
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
              </Link>
            </ProgramCard>
          ))}

          {/* number and next, previous arrow  */}
          {ProgramData.length > 0 && (
            <div
              id="pagination"
              className="flex justify-center text-xl mt-5 space-x-5 font-heading font-semibold"
            >
              <span>
                <FontAwesomeIcon
                  icon="fa-solid fa-angle-left"
                  className={
                    currentPage > 1
                      ? "text-gray-400 hover:text-black hover:transform hover:scale-130 hover:duration-300 cursor-pointer"
                      : "opacity-0"
                  }
                  onClick={() => selectPageHandle(currentPage - 1)}
                />
              </span>
              {[...Array(ProgramData.length / 3)].map((_, i) => {
                return (
                  <span
                    key={i}
                    className={
                      currentPage == i + 1
                        ? "text-black transform translate scale-140 ease-in-out duration-300 cursor-pointer"
                        : "text-gray-400 cursor-pointer"
                    }
                    onClick={() => selectPageHandle(i + 1)}
                  >
                    {i + 1}
                  </span>
                );
              })}
              <span>
                <FontAwesomeIcon
                  icon="fa-solid fa-angle-right"
                  className={
                    currentPage == ProgramData.length / 3
                      ? "opacity-0"
                      : "text-gray-400 hover:text-black hover:transform hover:scale-130 hover:duration-300 cursor-pointer"
                  }
                  onClick={() => selectPageHandle(currentPage + 1)}
                />
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Program;
