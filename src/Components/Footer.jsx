import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#111F35] min-w-screen flex flex-col justify-center gap-10 py-18">
        {/* Website name appears in the middle section */}
        <div id="footer-logo" className="flex flex-col justify-center">
          <h1 className="font: font-heading font-semibold text-white text-2xl text-center">
            Guardians Of Wildlife.
          </h1>
          <p className="font: font-body font-medium text-white text-sm text-center">
            Protect Wildlife, Preserve Life
          </p>
        </div>

        {/* quote line for the website section*/}
        <div
          id="quotes"
          className="flex flex-col justify-center items-center gap-4"
        >
          <h1 className="font-heading text-2xl text-white font-semibold">
            Our Vision
          </h1>
          <p className="font-body text-lg text-white font-medium px-10 text-center">
            We're in the process of bringing about the extinction of all of the
            species we most care about — including our own.
          </p>
        </div>

        {/* Socal media links section  */}
        <div
          id="social-media"
          className="flex flex-col justify-center items-center gap-4"
        >
          <h1 className="font-heading text-2xl text-white font-semibold">
            Social Media
          </h1>
          <div className="flex gap-4">
            <a href="#">
              <FontAwesomeIcon
                icon="fa-brands fa-facebook"
                className="text-white text-lg border rounded-full p-2"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon="fa-brands fa-twitter"
                className="text-white text-lg border rounded-full p-2"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon="fa-brands fa-instagram"
                className="text-white text-lg border rounded-full p-2"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin"
                className="text-white text-lg border rounded-full p-2"
              />
            </a>
          </div>
        </div>

        {/* all pages link section  */}
        <div id="container" className="flex justify-around px-2">
          <div id="pages-container" className="flex flex-col gap-4 text-start">
            <h1 className="font-heading text-2xl text-white font-semibold">
              Pages
            </h1>
            <div className="text-start">
              <ul className="flex flex-col gap-3">
                <Link to="/">
                  <li className="font: font-body text-white text-md hover:text-[#FFEDC7]">
                    Home
                  </li>
                </Link>
                <Link to="/wildlife">
                  <li className="font: font-body text-white text-md hover:text-[#FFEDC7]">
                    Wildlife
                  </li>
                </Link>
                <Link to="/programs">
                  <li className="font: font-body text-white text-md hover:text-[#FFEDC7]">
                    Programs
                  </li>
                </Link>
                <Link to="/blogs">
                  <li className="font: font-body text-white text-md hover:text-[#FFEDC7]">
                    Blogs
                  </li>
                </Link>
                <Link to="/join-our-team">
                  <li className="font: font-body text-white text-md hover:text-[#FFEDC7]">
                    Join Our Team
                  </li>
                </Link>
                <Link to="/contact-us">
                  <li className="font: font-body text-white text-md hover:text-[#FFEDC7]">
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div id="queries" className="text-start">
            <h1 className="font-heading text-2xl text-white font-semibold">
              Queries
            </h1>
            <p className="font: font-body text-white text-sm pt-3">Mail us at: </p>
            <span className="font: font-body text-white text-xs">
              example@guardiansofwildlife.org
            </span>
            <p className="font: font-body text-white text-sm pt-4">Call us at: </p>
            <span className="font: font-body text-white text-xs">
              +91 1234567890,
              +01 2736535177
            </span>
            <p className="font: font-body text-white text-sm pt-4">For Media:</p>
            <span className="font: font-body text-white text-xs">
              media@guardiansofwildlife.org
            </span>
          </div>
        </div>
        <div>
          <p className="font: font-body text-white text-sm text-center py-4">
            &copy; {new Date().getFullYear()} Guardians of Wildlife. All rights reserved.
          </p>
          <div className="flex gap-3 justify-center font:font-body text-white font-sm">
            <p>Terms & Conditons</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
