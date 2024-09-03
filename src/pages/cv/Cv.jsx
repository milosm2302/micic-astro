import React from "react";
import "./Cv.css";
import HomeButton from "../../components/HomeButton";
const CV = () => {
  return (
    <>
      <div className="blur-overlay"></div>
      <div className="container">
        <div className="cvButtons">
          <button className="btn-cv">
            <a href="./cv_micic.pdf" download="cv_Marko_Micic.pdf">
              DOWNLOAD
            </a>
          </button>
          <button className="btn-cv">
            <HomeButton />
          </button>
        </div>
        <iframe
          src="./cv_micic.pdf"
          width="100%"
          height="700px"
          style={{ border: "none" }}
          title="PDF Viewer"
        />
      </div>
    </>
  );
};

export default CV;
