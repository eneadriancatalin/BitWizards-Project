import React from "react";
import {
  useLocation,
  useParams,
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faClipboardQuestion,
  faShuffle,
  faEye,
  faFileLines,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import data from "../../data.json";
import Tags from "../../components/blocks/tests/Tags";
import Setari from "./Settings/Setari";
import Intrebari from "./Settings/Intrebari";
import Generari from "./Settings/Generari";
import Acces from "./Settings/Acces";
import Finala from "./Settings/Finala";
import Timp from "./Settings/Timp";
const Manager = () => {
  let myArray = [];
  const { id } = useParams();
  const { name } = useParams();
  const location = useLocation();
  {
    /* //! ARRAYUL CU CALEA CATRE PAGINA */
  }
  const a = location.pathname.split("/").filter(Boolean);
  const testObject = data.tests.find((test) => test.id === id);
  myArray.push(
    a[0],
    testObject.categorie ? testObject.categorie : "Necatalogat"
  );

  return (
    <div className="flex h-full">
      <div className="duration-300 transition-all space-y-7 h-screen flex border-r-2 tracking-tight border-[#ECECEC] flex-none flex-col px-5 min-w-[17rem] pt-6 bg-[#F8F8F8] ">
        <div className="space-y-2">
          <Tags nume={testObject.tag} />
          <p className="font-medium text-2xl">{testObject.nume}</p>
        </div>
        <div className="">
          <Link to={`/manager/${id}/setari`}>
            <Settings setare="Settings" icon={faGear} active="true" />
          </Link>
          <Link to={`/manager/${id}/intrebari`}>
            <Settings setare="Intrebari" icon={faClipboardQuestion} />
          </Link>
          <Link to={`/manager/${id}/generari`}>
            <Settings setare="Generări" icon={faShuffle} />
          </Link>
          <Link to={`/manager/${id}/acces`}>
            <Settings setare="Acces" icon={faEye} />
          </Link>{" "}
          <Link to={`/manager/${id}/finala`}>
            <Settings setare="Pagina finala" icon={faFileLines} />
          </Link>
          <Link to={`/manager/${id}/timp`}>
            <Settings setare="Setari timp" icon={faClock} />
          </Link>
        </div>
      </div>
      {name === "setari" && <Setari />}
      {name === "intrebari" && <Intrebari />}
      {name === "generari" && <Generari />}
      {name === "acces" && <Acces />}
      {name === "finala" && <Finala />}
      {name === "timp" && <Timp />}
    </div>
  );
};

export default Manager;

{
  /* //! COMPONENTA CU INFORMATII */
}
const Settings = (props) => {
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
