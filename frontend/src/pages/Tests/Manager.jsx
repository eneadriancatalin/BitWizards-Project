import React from "react";
import {
  useLocation,
  useParams,
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import HeroIcon from "../../components/global/HeroIcon";
import data from "../../data.json";
import Tags from "../../components/blocks/tests/Tags";
import Setari from "./Settings/Setari";
import Intrebari from "./Settings/Intrebari";
import Generari from "./Settings/Generari";
import Acces from "./Settings/Acces";
import Finala from "./Settings/Finala";
import Timp from "./Settings/Timp";
import { removeDiacritics } from "../../utils";
import Info from "./Settings/Info";
const Manager = () => {
  let myArray = [];
  const { id } = useParams();
  const { name } = useParams();
  const location = useLocation();
  const setari = [
    {
      setare: "Informatii",
      icon: "information-circle",
    },
    {
      setare: "Setari",
      icon: "cog-6-tooth",
    },
    {
      setare: "Intrebari",
      icon: "clipboard-document-list",
    },
    {
      setare: "Generări",
      icon: "arrow-path-rounded-square",
    },
    {
      setare: "Acces",
      icon: "eye",
    },
    {
      setare: "Pagina finala",
      icon: "clipboard",
    },
    {
      setare: "Setari timp",
      icon: "clock",
    },
  ];
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
      <div className="duration-300 space-y-6 transition-all h-screen flex border-r-2 tracking-tight border-[#F6F8FA] flex-none flex-col pt-6 bg-white ">
        <div className="space-y-3 px-5">
          <Tags nume={testObject.tag} />
          <p className="font-medium text-[#111315] text-2xl">
            {testObject.nume}
          </p>
        </div>
        <div className="">
          {setari.map((setare, idx) => (
            <Link
              to={`/manager/${id}/${removeDiacritics(
                setare.setare.toLocaleLowerCase()
              )}`}
            >
              <Settings
                setare={setare.setare}
                icon={setare.icon}
                active={
                  a[a.length - 1].replace("%20", " ") ===
                  removeDiacritics(setare.setare.toLocaleLowerCase())
                    ? true
                    : false
                }
              />
            </Link>
          ))}
        </div>
      </div>
      {name === "informatii" && <Info object={testObject} />}
      {name === "setari" && <Setari />}
      {name === "intrebari" && <Intrebari />}
      {name === "generari" && <Generari />}
      {name === "acces" && <Acces />}
      {name === "pagina finala" && <Finala />}
      {name === "setari timp" && <Timp />}
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
        "w-full px-8 flex relative" + (props.active ? " bg-[#EEF0F2]" : " ")
      }
    >
      {props.active && (
        <div className="top-0 left-0 h-full absolute w-[3px] bg-blue-600"></div>
      )}
      <li className="group hover:cursor-pointer py-4 relative flex space-x-3">
        {/* Use the icon variable as the value for the icon prop */}
        <div className="min-w-[1.3rem]">
          <HeroIcon
            icon={props.icon}
            outline={props.active ? false : true}
            className={
              "h-6 aspect-square group-hover:text-[#111315] " +
              (props.active ? " text-[#111315]" : " text-[#88898A]")
            }
          />
        </div>
        <p
          className={
            "capitalize w-full overflow-auto group-hover:text-[#111315] group-hover:font-semibold " +
            (props.active ? " text-[#111315] font-semibold" : "text-[#606165]")
          }
        >
          {props.setare}
        </p>
      </li>
    </div>
  );
};
