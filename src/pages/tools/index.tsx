import BoxAnime from "../../components/anime/Box-anime";
import PrimaryButton from "../../components/button/primary-button";
import ToolCard from "../../components/card/tool-card";
import { AdvanceToolData } from "../../config/app-data";

export default function AppTool() {
  return (
    <div className="row m-0 p-0  ">
      <div className="col-11 col-md-6 col-lg-4 py-2">
        <BoxAnime>
          <div className="row m-0 p-0 d-flex justify-content-start">
            <div className="col">
              <PrimaryButton title="All"></PrimaryButton>
            </div>
            <div className="col">
              <PrimaryButton title="UI"></PrimaryButton>
            </div>
            <div className="col">
              <PrimaryButton title="style"></PrimaryButton>
            </div>
            <div className="col">
              <PrimaryButton title="Advance"></PrimaryButton>
            </div>
          </div>
        </BoxAnime>
      </div>
      <div className="col-11 ">
        <div className="row px-5">
          {AdvanceToolData.map((x) => (
            <ToolCard
              id={x.id}
              icon={x.icon}
              iconColor={x.iconColor}
              iconSize={x.iconSize}
              title={x.title}
              desc={x.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
