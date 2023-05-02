/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="flex">
              <img
                src="https://i.ibb.co/G70wXS4/Untitled-2-copy.png"
                className="mr-3 h-8 sm:h-9"
                alt="Logo"
              />
              <p className="self-center whitespace-nowrap text-xl font-semibold text-white">
                Chef Corner
              </p>
            </div>
            <p className="text-white">
              There are many variations of passages of lorem ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
          <div className="text-white">
            <h2>Useful Link</h2>
            <p>About Us</p>
            <p>Our Team</p>
            <p>Find Us</p>
          </div>
          <div className="text-white">
            <h2>Get In Touch</h2>
            <p>phone: (800) 216 2020</p>
            <p>Email: contact@company.com</p>
            <p>Address:No. 12, Ribon Building, Walse street, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
