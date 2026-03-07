import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PrgramDetails = () => {
  const { id } = useParams();
  const ProgramData = useSelector((state) => state.ProgramData);

  const ProgramDetails = ProgramData.find((data) => data.id === Number(id));

  if (!ProgramDetails || ProgramData.length === 0) {
    return (
      <div className="w-full my-10 text-center">
        <p className="font-body text-2xl text-red-500">
          Oops Something Went Wrong...
        </p>
      </div>
    );
  }

  return (
    <>
      <div id="container" className="min-h-screen mx-3">
        {/* header section  */}
        <div id="heading" className="space-y-3">
          <h1 className="font-heading text-black text-3xl font-bold text-center">
            {ProgramDetails.programName}
          </h1>
          <p className="font-heading text-black text-xl font-semibold">
            Launced by:-{" "}
            <span className="font-body text-black text-lg">
              {ProgramDetails.govermentAgency}
            </span>
          </p>
          <p className="font-heading text-black text-xl font-semibold">
            Country:-{" "}
            <span className="font-body text-black text-lg">
              {ProgramDetails.country}
            </span>
          </p>
        </div>
        <div className="border-b-2 border-gray-400 py-3"></div>

        {/* description section  */}
        <div id="sub_conatainer">
          {/* image and others details  */}
          <div id="image_and_details">
            <div
              id="image"
              className="w-full h-70 md:h-50 md:w-xl"
            >
              <img
                src={ProgramDetails.imageUrl}
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 rounded-lg bg-black z-10 opacity-50 hover:opacity-0"></div>
            </div>
            <div>
                <p></p>
            </div>
          </div>

          {/* main description  */}
          <div id="description"></div>
        </div>
      </div>
    </>
  );
};

export default PrgramDetails;
