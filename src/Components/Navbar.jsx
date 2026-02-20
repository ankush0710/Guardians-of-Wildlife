//here I am created responsive navbar and all routes and link
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars2 } from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#111F35] w-80 py-3 px-6 rounded-full mx-auto my-10 md:w-2xl md:px-10 opacity-75">
        <div id="navbar" className="flex justify-between items-center">
          <div
            id="nav-links-left"
            className="hidden lg:flex items-center gap-4"
          >
            <Link to="/">
              <p className="font: font-body text-white text-sm">HOME</p>
            </Link>
            <Link to="/Program">
              <p className="font: font-body text-white text-sm">PROGRAM</p>
            </Link>
          </div>
          <Link to="/">
            <div id="nav-logo" className="flex flex-col justify-center">
              <h1 className="font: font-heading font-semibold text-white text-xl text-center">
                Guardians Of Wildlife.
              </h1>
              <p className="font: font-heading font-medium text-white text-xs text-center">
                Protect Wildlife, Preserve Life
              </p>
            </div>
          </Link>
          <div
            id="navlinks-right"
            className="hidden lg:flex items-center gap-4"
          >
            <Link to="/JoinOurTeam">
              <p className="font: font-body text-white text-sm">
                JOIN OUT TEAM
              </p>
            </Link>
            <Link to="/ContactUs">
              <p className="font: font-body text-white text-sm">CONTACT US</p>
            </Link>
          </div>

          {/* For mobile view hammburger button will display*/}
          <button
            className="lg:hidden text-white"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <HiMiniBars2 size={30} />
          </button>
        </div>
      </nav>

      {/* links for mobile view */}
      {isOpen && (
        <div className="md:hidden w-full h-full bg-[#111F35] flex flex-col gap-12 items-center py-10">
        <Link
          className="font: font-body text-white text-3xl font-medium"
          to="/"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          HOME
        </Link>
        <Link
          className="font: font-body text-white text-3xl font-medium"
          to="/Wildlife"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          WILDLIFE
        </Link>
        <Link
          className="font: font-body text-white text-3xl font-medium"
          to="/Program"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          PROGRAM
        </Link>
        <Link
          className="font: font-body text-white text-3xl font-medium"
          to="/JoinOurTeam"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          JOIN OUR TEAM
        </Link>
        <Link
          className="font: font-body text-white text-3xl font-medium"
          to="/AboutUs"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          ABOUT US
        </Link>
        <Link
          className="font: font-body text-white text-3xl font-medium"
          to="/ContactUs"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          CONTACT US
        </Link>
      </div>
      )};
    </>
  );
};

export default Navbar;
