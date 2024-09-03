import React from "react";
import HomeButton from "../../components/HomeButton";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="blur-overlay"></div>
      <div className="container">
        <HomeButton />
        <h2>CONTACT</h2>
        <h3>Email</h3>

        <div className="contact-span">
          <span style={{ display: "flex", alignItems: "center" }}>
            <MdOutlineEmail />
          </span>
          <span>micic@ou.edu</span>
        </div>

        <h3>Office</h3>
        <div className="contact-span" style={{ marginBottom: "2rem" }}>
          <span style={{ display: "flex", alignItems: "center" }}>
            <HiBuildingOffice2 />
          </span>
          <span>
            Nielsen Hall #241
            <br />
            The University of Oklahoma
          </span>
        </div>
      </div>
    </>
  );
};

export default Contact;
