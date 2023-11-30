import React from "react";
import Tags from "../../components/blocks/tests/Tags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faClipboardQuestion,
  faShuffle,
  faEye,
  faFileLines,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
const Sidebar = (props) => {
  const location = useLocation();
  return (
    <div className="duration-300 transition-all space-y-7 h-screen flex border-r-2 tracking-tight border-[#ECECEC] flex-none flex-col px-5 min-w-[17rem] pt-6 bg-[#F8F8F8] ">
      <div className="space-y-2">
        <Tags nume={props.object.status} />
        <p className="font-medium text-2xl">{props.object.nume}</p>
      </div>
      <div className="">
        <Link to={`${location.pathname}/setari`}>
          <Setari setare="Setari" icon={faGear} active="true" />
        </Link>
        <Link to={`${location.pathname}/intrebari`}>
          <Setari setare="Intrebari" icon={faClipboardQuestion} />
        </Link>
        <Setari setare="Generări" icon={faShuffle} />
        <Setari setare="Acces" icon={faEye} />
        <Setari setare="Pagina finala" icon={faFileLines} />
        <Setari setare="Setari timp" icon={faClock} />
      </div>
    </div>
  );
};

export default Sidebar;

const Setari = (props) => {
  return (
    <div
      className={
        "flex items-center space-x-5 rounded-lg py-4 px-4 text-xl group cursor-pointer hover:bg-neutral-200/50" +
        (props.active === "true" ? " bg-neutral-200/50" : "")
      }
    >
      <FontAwesomeIcon
        icon={props.icon}
        className={
          "text-lg group-hover:text-[#89E894]" +
          (props.active === "true" ? " text-[#89E894]" : " text-neutral-500")
        }
      />
      <p className="text-sm capitalize font-medium text-neutral-500">
        {props.setare}
      </p>
    </div>
  );
};
