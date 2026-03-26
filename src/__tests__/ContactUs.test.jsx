import React from 'react';
import ContactUs from "../Pages/ContactUs";
import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import { ToastContainer } from 'react-toastify';

//test cases for all input box whether they are present in the  document or not
describe("test for input fields of contact form", ()=>{
    //test case for firstname input field
    it("testcase for firstname", ()=>{
        const {getByTestId} = render(<ContactUs />);

        // test scenario
        const input = screen.getByTestId("firstName");

        // expected result 
        expect(input).toBeInTheDocument();
    });

    // testcase for lastname 
    it("testcase for lastname", ()=>{
        const {getByTestId} = render(<ContactUs />);

        // test scenario
        const input = screen.getByTestId("lastName");

        // expected result 
        expect(input).toBeInTheDocument();
    });

    //test case for email
    it("testcase for email", ()=>{
        const {getByTestId} = render(<ContactUs />);

        // test scenario
        const input = screen.getByTestId("email");

        // expected result 
        expect(input).toBeInTheDocument();
    });

    // test case for contact number 
    it("testcase for contact number", ()=>{
        const {getByTestId} = render(<ContactUs />);

        // test scenario
        const input = screen.getByTestId("contactNumber");

        // expected result 
        expect(input).toBeInTheDocument();
    });

    // test case for message box 
    it("testcase for message", ()=>{
        const {getByTestId} = render(<ContactUs />);

        // test scenario
        const input = screen.getByTestId("message");

        // expected result 
        expect(input).toBeInTheDocument();
    });
});


//test case to check the whether the button is disabled or not and success message will appear for onclick of a button
describe("test for submit button", ()=>{
    //test case to check disbaled button
    it("testcase for disbaled property", ()=>{
        const {getByTestId} = render(<ContactUs />);

        //test scenario
        const btn = screen.getByTestId("button");

        //expected result
        expect(btn).toHaveAttribute("disabled");
    });

    // // test case for onclick event of the button 
    // it("testcase for onClick event", async ()=>{
    //     render(
    //     <>
    //     <ToastContainer />
    //     <ContactUs/>
    //     </>
    // )
    //     //test scenario
    //     const btn = screen.getByTestId("button");
    //     fireEvent.click(btn);

    //     // expected result 
    //     const successMsg = await screen.findByText(/Form submitted successfully/i);
    //     expect(successMsg).toBeInTheDocument();
    // })
})