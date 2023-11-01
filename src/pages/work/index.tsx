import { useState } from "react";
import BoxAnime from "../../components/anime/Box-anime";
import PrimaryButton from "../../components/button/primary-button";
import SimpleSlider from "../../components/carousel";
import WebsiteSlider from "../../components/carousel";

export default function AppWork() {
  const [selectedSection, setSelectedSection] = useState("website");

  const showWebsiteSection = () => {
    setSelectedSection("website");
  };

  const showReviewSection = () => {
    setSelectedSection("review");
  };

  return (
    <div className="row m-0 p-0">
      <div className="col-9 col-md-6 col-lg-3 py-2">
        <BoxAnime>
          <div className="row m-0 p-0 d-flex justify-content-start">
            <div className="col">
              <PrimaryButton
                title="websites"
                onClick={showWebsiteSection}
              ></PrimaryButton>
            </div>
            <div className="col">
              <PrimaryButton
                title="Reviews"
                onClick={showReviewSection}
              ></PrimaryButton>
            </div>
          </div>
        </BoxAnime>
      </div>
      <div className="col-11">
        {selectedSection === "website" && (
          <div className="row m-0 p-0">
            {/* <BoxAnime Boxbackground="linear-gradient(135deg, #212121 0%, #131313 100%)"> */}
            <WebsiteSlider />
            {/* </BoxAnime> */}
          </div>
        )}

        {selectedSection === "review" && (
          <div className="row">
            <BoxAnime Boxbackground="linear-gradient(135deg, #212121 0%, #131313 100%)"></BoxAnime>
          </div>
        )}
      </div>
      {/* <div className="col-11 col-md-4 py-5">
        <BoxAnime Boxbackground="linear-gradient(135deg, #212121 0%, #131313 100%)"></BoxAnime>
      </div>
      <div className="col-11 col-md-4 py-5">
        <BoxAnime Boxbackground="linear-gradient(135deg, #212121 0%, #131313 100%)"></BoxAnime>
      </div> */}
    </div>
  );
}
