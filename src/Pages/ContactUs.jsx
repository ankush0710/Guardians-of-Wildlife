import React from "react";

const ContactUs = () => {
  const state = {};

  return (
    <>
      <div id="container" className="md:flex md:justify-between">
        {/* address of offices in INDIA and LA  */}
        <div
          id="address_section"
          className="flex flex-col gap-10 mx-3 mt-10 md:flex-1 md:ms-8"
        >
          <h1 className="font-heading text-3xl font-bold text-center">
            Find Us
          </h1>
          <div
            id="card-1"
            className="h-lg max-w-xl bg-[#ECE7D1] rounded-xl shadow-lg p-4"
          >
            <p className="font-body text-lg font-semibold pb-4">
              Benguluru Office
            </p>
            <p className="font-body text-md leading-8">
              Plot No. 31/2, Phase II, Electronics City, Bangalore, Karnataka
              560100.
            </p>
            <p className="font-body text-md leading-8">
              Contact -
              <span className="hover:border-b-2 hover:p-1 hover:cursor-pointer">
                +91-1234567890
              </span>
              .
            </p>
            <p className="font-body text-md leading-8">
              Location -
              <span className="px-1 hover:border-b-2 hover:p-1 hover:cursor-pointer">
                12.9722&deg;N
              </span>
              ,
              <span className="px-1 hover:border-b-2 hover:p-1 hover:cursor-pointer">
                79.5956&deg;E
              </span>
              .
            </p>
          </div>
          <div
            id="card-2"
            className="h-lg max-w-xl bg-[#ECE7D1] rounded-xl shadow-lg p-4"
          >
            <p className="font-body text-lg font-semibold pb-4">
              Los Angeles Office
            </p>
            <p className="font-body text-md leading-8">
              {" "}
              300 South Spring Street, Room 12513, Los Angeles, CA 90013.
            </p>
            <p className="font-body text-md leading-8">
              Contact -
              <span className="hover:border-b-2 hover:p-1 hover:cursor-pointer">
                +01-2736535177
              </span>
              .
            </p>
            <p className="font-body text-md leading-8">
              Location -
              <span className="px-1 hover:border-b-2 hover:p-1 hover:cursor-pointer">
                12.9722&deg;N
              </span>
              ,
              <span className="px-1 hover:border-b-2 hover:p-1 hover:cursor-pointer">
                79.5956&deg;E
              </span>
              .
            </p>
          </div>
        </div>

        {/* contact form for contact details  */}
        <div id="contact-form" className="mt-10 md:flex-1">
          <h1 className="font-heading text-3xl font-bold text-center">
            Contact Us
          </h1>
          <div
            id="contact-form"
            className="bg-[#ECE7D1] rounded-xl flex flex-col py-15 px-10 mx-3 my-10 relative md:w-auto lg:w-2xl md:shadow-lg"
          >
            <form action="">
              <div className="md:flex md:gap-4">

                {/* input box for first name  */}
                <div className="relative z-0 w-full mb-5 group md:flex-1">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-default-medium border-[#8A7650] appearance-none focus:outline-none focus:ring-0 focus:border-[#562F00] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="first_name"
                    className="absolute font-body text-md text-[#8A7650] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    First Name
                  </label>
                </div>

                {/* input box for last name  */}
                <div className="relative z-0 w-full mb-5 group md:flex-1">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-default-medium border-[#8A7650] appearance-none focus:outline-none focus:ring-0 focus:border-[#562F00] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="last_name"
                    className="absolute font-body text-md text-[#8A7650] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              {/* input box for email  */}
              <div className="relative z-0 w-full mb-5 mt-3 group">
                <input
                  type="email"
                  name="email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-default-medium border-[#8A7650] appearance-none focus:outline-none focus:ring-0 focus:border-[#562F00] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="message"
                  class="absolute font-body text-md text-[#8A7650] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Email
                </label>
              </div>

              {/* input box for contact number  */}
              <div className="relative z-0 w-full mb-5 mt-3 group">
                <input
                  type="number"
                  name="number"
                  id="floating_number"
                  class="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 border-default-medium border-[#8A7650] appearance-none focus:outline-none focus:ring-0 focus:border-[#562F00] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating number"
                  class="absolute font-body text-md text-[#8A7650] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Contact Number
                </label>
              </div>

              {/* message for query  */}
              <div className="relative z-0 w-full mb-5 mt-3 group">
                <textarea
                  id="message"
                  rows="4"
                  className="bg-neutral-secondary-medium border-2 border-default-medium border-[#8A7650] text-md text-[#562F00] text-semibold trounded-base focus:ring-brand focus:outline-none focus:border-[#562F00] block w-full p-3.5 shadow-xs placeholder:text-body"
                  placeholder="Your Query for us ...."
                ></textarea>
              </div>

              {/* checkbox for terms and condition  */}
              <div className="flex items-start mb-4 mt-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 border-2 border-default-medium border-[#562F00] rounded-xs focus:ring-2 focus:ring-brand-soft"
                />
                <label
                  for="default-checkbox"
                  className="font-body select-none ms-2 text-sm font-medium text-[#562F00]"
                >
                  By submitting this form, I agree to the collection and use my
                  personla dataas per the privacy Policy for marketing purpose.
                </label>
              </div>

              {/* form submitt button  */}
              <div className="absolute right-0 px-10">
                <button
                  type="button"
                  className="text-[#8A7650] font-semibold font-body bg-transparent border-2 border-[#8A7650] px-8 py-2 rounded-full hover:text-[#562F00] hover:bg-[#8A7650] hover:border-2 hover:border-[#562F00] hover:duration-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
