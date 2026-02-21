import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#111F35] min-w-screen flex flex-col justify-center gap-10 py-18">
        {/* Website name appears in the middle  */}
        <div id="footer-logo" className="flex flex-col justify-center">
          <h1 className="font: font-heading font-semibold text-white text-2xl text-center">
            Guardians Of Wildlife.
          </h1>
          <p className="font: font-body font-medium text-white text-sm text-center">
            Protect Wildlife, Preserve Life
          </p>
        </div>

        {/* quote line for the website  */}
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
        <div id="social-media" className="flex flex-col justify-center items-center gap-4">
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
      </footer>
    </>
  );
};

export default Footer;
