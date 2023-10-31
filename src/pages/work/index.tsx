import React from "react";
import AppLayout from "../../layout";
import BoxAnime from "../../components/anime/Box-anime";
import AnimeButton from "../../components/button/anime-button";
import TextAnime from "../../components/anime/text-anime";
import { ProfileImage } from "../../assets";
import PrimaryButton from "../../components/button/primary-button";

export default function AppWork() {

  return (
    // <AppLayout>
    <div className="row m-0 p-0 py-5 d-flex justify-content-evenly align-items-center">
      <div className="col-11 py-1">
        <div className="row m-0 p-0">
          <div className="col-1">
            <PrimaryButton title="websites"></PrimaryButton>
          </div>
          <div className="col-1">
            <PrimaryButton title="Reviews"></PrimaryButton>
          </div>
        </div>
      </div>
      <div className="col-11 col-md-4 py-5">
        <BoxAnime Boxbackground="linear-gradient(135deg, #212121 0%, #131313 100%)"></BoxAnime>
      </div>
      <div className="col-11 col-md-4 py-5">
        <BoxAnime Boxbackground="linear-gradient(135deg, #212121 0%, #131313 100%)">
            
        </BoxAnime>
      </div>
    </div>
    // </AppLayout>
  );
}
