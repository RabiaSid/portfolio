import React from "react";
import AppLayout from "../../layout";
import BoxAnime from "../../components/anime/Box-anime";
import AnimeButton from "../../components/button/anime-button";
import TextAnime from "../../components/anime/text-anime";
import { ProfileImage } from "../../assets";
import { useState, useEffect } from "react";

export default function AppHome() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {

    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // Hide loader after 1 second

    return () => {
      clearTimeout(loaderTimer);
    };
  }, []);

  return (
      <div className="row m-0 p-0 py-5 d-flex justify-content-evenly align-items-center">
        <div className="col-11 col-md-6 py-5">
          <TextAnime>
            <h1 className="Heading-white-xxl">
              Say Hi from <span className="Heading-Primary-xxl">Rabia'</span>,
              Web Application Developer and Front-End Developer
            </h1>
            <h4 className="Text-1">
              <span className="primary-Hover-text">I</span>
              <span className="primary-Hover-text"> design</span>
              <span className="primary-Hover-text"> and</span>
              <span className="primary-Hover-text"> code </span>
              <span className="primary-Hover-text"> beautifully</span>
              <span className="primary-Hover-text"> simple </span>
              <span className="primary-Hover-text"> things </span>
              <span className="primary-Hover-text"> and</span>
              <span className="primary-Hover-text"> i </span>
              <span className="primary-Hover-text"> love</span>
              <span className="primary-Hover-text"> what</span>
              <span className="primary-Hover-text"> i</span>
              <span className="primary-Hover-text"> do.</span>
              <span className="primary-Hover-text"> Just </span>
              <span className="primary-Hover-text"> simple </span>
              <span className="primary-Hover-text"> like </span>
              <span className="primary-Hover-text"> that!</span>
            </h4>
          </TextAnime>
        </div>
        <div className="col-11 col-md-4 py-5">
          <BoxAnime>
            <img src={ProfileImage} className="ProfileImage" />
          </BoxAnime>
        </div>
      </div>
  );
}
