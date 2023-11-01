import  { useState } from "react";
import BoxAnime from "../../components/anime/Box-anime";
import PrimaryButton from "../../components/button/primary-button";
import ToolCard from "../../components/card/tool-card";
import {
  AdvanceToolData,
  StyleToolData,
  UIToolData,
} from "../../config/app-data";

export default function AppTool() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="row m-0 p-0">
      <div className="col-11 col-md-6 col-lg-4 py-2">
        <BoxAnime>
          <div className="row m-0 p-0 d-flex justify-content-start">
            <div className="col">
              <PrimaryButton
                title="All"
                onClick={() => setSelectedCategory("All")}
              />
            </div>
            <div className="col">
              <PrimaryButton
                title="UI"
                onClick={() => setSelectedCategory("UI")}
              />
            </div>
            <div className="col">
              <PrimaryButton
                title="Style"
                onClick={() => setSelectedCategory("Style")}
              />
            </div>
            <div className="col">
              <PrimaryButton
                title="Advance"
                onClick={() => setSelectedCategory("Advance")}
              />
            </div>
          </div>
        </BoxAnime>
      </div>
      <div className="col-12">
        {selectedCategory === "All" && (
          <div className="row">
            {AdvanceToolData.map((x, i) => (
              <ToolCard
                id={i}
                icon={x.icon}
                iconColor={x.iconColor}
                iconSize={x.iconSize}
                title={x.title}
                className="my-1"
                width="210px"
              />
            ))}
            {UIToolData.map((x, i) => (
              <ToolCard
                id={i}
                icon={x.icon}
                iconColor={x.iconColor}
                iconSize={x.iconSize}
                title={x.title}
                className="my-1"
                width="210px"
              />
            ))}
            {StyleToolData.map((x, i) => (
              <ToolCard
                id={i}
                icon={x.icon}
                iconColor={x.iconColor}
                iconSize={x.iconSize}
                title={x.title}
                className="my-1"
                width="210px"
              />
            ))}
          </div>
        )}
        {selectedCategory === "UI" && (
          <div className="row">
            {UIToolData.map((x, i) => (
              <ToolCard
                id={i}
                icon={x.icon}
                iconColor={x.iconColor}
                iconSize={x.iconSize}
                title={x.title}
                desc={x.desc}
                className="col col-sm-6 col-md-3 my-1"
              />
            ))}
          </div>
        )}
        {selectedCategory === "Style" && (
          <div className="row">
            {StyleToolData.map((x, i) => (
              <ToolCard
                id={i}
                icon={x.icon}
                iconColor={x.iconColor}
                iconSize={x.iconSize}
                title={x.title}
                desc={x.desc}
                className="col col-sm-6 col-md-3 my-1"
              />
            ))}
          </div>
        )}
        {selectedCategory === "Advance" && (
          <div className="row">
            {AdvanceToolData.map((x, i) => (
              <ToolCard
                id={i}
                icon={x.icon}
                iconColor={x.iconColor}
                iconSize={x.iconSize}
                title={x.title}
                desc={x.desc}
                className="col col-sm-6 col-md-3 my-1"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
