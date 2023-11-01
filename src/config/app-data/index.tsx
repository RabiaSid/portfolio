import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { ImHtmlFive } from "react-icons/im";
import { Antd, Firebase, Mui, chakraUI } from "../../assets";

export const AdvanceToolData = [
  {
    icon: <FaReact />,
    title: "React",
    desc: `a free and open-source front-end JavaScript library for building user interfaces based on components`,
    iconSize: 54,
    iconColor: "#61DAFB",
  },
  {
    icon: <SiRedux />,
    title: "Redux",
    desc: `something that happens all over again`,
    iconSize: 54,
    iconColor: "#764ABC",
  },
  {
    icon: <BiLogoTypescript />,
    title: "Typescript",
    desc: `a free and open-source front-end JavaScript library for building user interfaces based on components`,
    iconSize: 54,
    iconColor: "#2F74C0",
  },
  {
    icon: <img src={Firebase} style={{ height: "12vh" }} />,
    title: "Firebase",
    desc: `a free and open-source front-end JavaScript library for building user interfaces based on components`,
    iconSize: 54,
    iconColor: "#FFCB2B",
  },
];
export const UIToolData = [
  {
    icon: <ImHtmlFive />,
    title: "Html",
    desc: `a text-based approach to describing how content contained within an HTML file is structured`,
    iconSize: 54,
    iconColor: "#E5532D",
  },
  {
    icon: <img src={Mui} style={{ height: "12vh" }} />,
    title: "Material UI",
    desc: `ui Library`,
    iconSize: 54,
    iconColor: "#2F74C0",
  },
  {
    icon: <img src={Antd} style={{ height: "8vh" }} />,
    title: "Ant Design",
    desc: `ui Library`,
    iconSize: 54,
    iconColor: "#2F74C0",
  },
  {
    icon: <img src={chakraUI} style={{ height: "8vh" }} />,
    title: "Chakra UI",
    desc: `ui Library`,
    iconSize: 54,
    iconColor: "#2F74C0",
  },
];
export const StyleToolData = [
  {
    icon: <SiCss3 />,
    title: "css",
    desc: `create great-looking web page`,
    iconSize: 54,
    iconColor: "#254bdd",
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap",
    desc: `Front-end framework`,
    iconSize: 54,
    iconColor: "#764ABC",
  },
  {
    icon: <BiLogoTailwindCss />,
    title: "Tailwind",
    desc: `Front-end framework`,
    iconSize: 54,
    iconColor: "#3EBFF8",
  },
];
