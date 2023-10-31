import React, { useState, useEffect, ReactNode } from "react";
import BoxAnime from "../../anime/Box-anime";
import { FaReact } from "react-icons/fa";
import { ClassNames } from "@emotion/react";

type ToolCardProps = {
  id?: number;
  className?: any;
  width?: any;
  icon?: ReactNode;
  iconSize?: number;
  desc?: string;
  title?: string;
  iconColor?: string;
};

export default function ToolCard(props: ToolCardProps) {
  const { id, className, icon, iconSize, desc, title, iconColor,width } = props;
  const colors = [
    "linear-gradient(135deg, rgba(19, 19, 19) 0%, rgba(33, 33, 33) 100%)",
    "linear-gradient(135deg, rgba(33, 33, 33) 0%, rgba(19, 19, 19) 100%)",
  ];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const updateColor = () => {
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  };

  useEffect(() => {
    const interval = setInterval(updateColor, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentColorIndex]);

  return (
    <div className={className} key={id} style={{ minHeight: "22vh", width:width}}>
      <BoxAnime
        className="ColorChangeBox"
        Boxbackground={colors[currentColorIndex]}
      >
        <div className="row m-0 p-0">
          <div
            className="col-11 text-center "
            style={{ color: iconColor, fontSize: iconSize }}
          >
            {icon ? icon : "icon"}
          </div>
          <div className="col-11 text-center">
            <h3 className="Heading-white-md">{title}</h3>
          </div>
          <div className="col-11 text-center">
            <h3 className="Text-secondary-md">{desc}</h3>
          </div>
        </div>
      </BoxAnime>
    </div>
  );
}
