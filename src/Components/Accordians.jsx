import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Accordian = ({ data }) => {
  const [showAnswer, setShowAnswer] = useState(null);

  const handleToggle = (id) => {
    setShowAnswer(showAnswer === id ? null : id);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.map((items) => (
          <div
            key={items.id}
            className="h-fit mt-5 py-6 px-4 border-b-2 border-[#8C5A3C] rounded-lg cursor-pointer hover:shadow-xl"
            onClick={() => handleToggle(items.id)}
          >
            <div className="flex justify-between items-center">
              <p className="font-heading text-lg font-semibold text-gray-600">
                {items.question}
              </p>
              <FontAwesomeIcon
                icon="fa-solid fa-angle-down"
                className={`text-xl text-gray-600 transiton-transform duration-300 ${showAnswer === items.id ? "rotate-180" : ""}`}
              />
            </div>

            {/* Answer will show only when user clicked on question div  */}
            {
              (showAnswer === items.id && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${showAnswer === items.id ? "max-h-40 mt-4" : "max-h-0"}`}
                >
                  <p className="font-body text-gray-500">{items.answer}</p>
                </div>
              ))
            }
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordian;
