import { useState } from "react";
import { RxChevronRight } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import "./AccordionItem.css";

const AccordionItems = ({ items }) => {
  const [activeIndex1, setActiveIndex1] = useState(false);
  const [activeIndex2, setActiveIndex2] = useState(false);

  const handleClick1 = () => {
    setActiveIndex1(!activeIndex1);
    setActiveIndex2(false);
  };

  const handleClick2 = () => {
    setActiveIndex2(!activeIndex2);
    setActiveIndex1(false);
  };

  return (
    <div className="accordion">
      {/* accordion 01 */}
      <div className="accordion-item">
        <button
          className="accordion-header p-2 flex items-center justify-between cursor-pointer w-full font-bold text-gray-600"
          onClick={handleClick1}
        >
          Flight Search
          <RxChevronRight
            className={`text-xl ${
              activeIndex1 ? "icon-move-bottom" : "icon-move-left"
            }`}
          />
        </button>
        <div
          className={`accordion-content-container ${
            activeIndex1 ? "open" : ""
          }`}
        >
          <div className={`accordion-content bg-white `}>
            <NavLink
              to="/round-trip"
              className="mt-2 block pl-7 text-gray-500 hover:text-gray-600 transition-all duration-100"
            >
              Round Trip
            </NavLink>
            <NavLink
              to="/multi-city"
              className="mt-2 block pl-7 text-gray-500 hover:text-gray-600 transition-all duration-100"
            >
              Multi City
            </NavLink>
            <NavLink
              to="/search-result"
              className="mt-2 block pl-7 text-gray-500 hover:text-gray-600 transition-all duration-100"
            >
              Search Result
            </NavLink>
            <NavLink
              to="/flight-details"
              className="mt-2 block pl-7 text-gray-500 hover:text-gray-600 transition-all duration-100"
            >
              Flight Details
            </NavLink>
            <NavLink
              to="/booking-process"
              className="mt-2 block pl-7 text-gray-500 hover:text-gray-600 transition-all duration-100"
            >
              Booking Process
            </NavLink>
          </div>
        </div>
      </div>
      {/* accordion 02 */}
      <div className="accordion-item">
        <button
          className="accordion-header p-2 flex items-center justify-between cursor-pointer w-full font-bold text-gray-600"
          onClick={handleClick2}
        >
          Hotel Search
          <RxChevronRight
            className={`text-xl ${
              activeIndex2 ? "icon-move-bottom" : "icon-move-left"
            }`}
          />
        </button>
        <div
          className={`accordion-content-container ${
            activeIndex2 ? "open" : ""
          }`}
        >
          <div className={`accordion-content bg-white `}>
            <NavLink
              to="/"
              className="mt-2 block pl-7 text-gray-500 hover:text-gray-600 transition-all duration-100"
            >
              Search Box
            </NavLink>
            <NavLink
              to="/"
              className="mt-2 block pl-7 text-gray-500 hover:text-gray-600 transition-all duration-100"
            >
              Search Result
            </NavLink>
            <NavLink
              to="/"
              className="mt-2 block pl-7 text-gray-500 hover:text-gray-600 transition-all duration-100"
            >
              Hotel Details
            </NavLink>
            <NavLink
              to="/"
              className="mt-2 block pl-7 text-gray-500 hover:text-gray-600 transition-all duration-100"
            >
              Booking Process
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItems;
