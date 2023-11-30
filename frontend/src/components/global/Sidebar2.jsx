import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as LogoV } from "../../assets/logo2.svg";
import HeroIcon from "./HeroIcon";
import { lightenColor } from "../../utils";

const Sidebar2 = () => {
  const [navbar, setNavbar] = useState(true);
  return (
    <header
      className={
        "duration-300 transition-all h-screen flex border-r-2 tracking-tight justify-between border-[#F6F8FA] flex-none flex-col pt-6 bg-white " +
        (navbar ? "w-[13%]" : "w-auto")
      }
    >
      {/* //! LOGOURI */}

      <div className="space-y-6">
        <div className="flex items-center justify-between  px-8">
          <NavLink exact="true" to="/">
            <Logo
              className={
                "hover:cursor-pointer duration-300 h-[2rem] transition-all " +
                (navbar ? " block opacity-100" : " hidden opacity-0")
              }
            />
            <LogoV
              className={
                "hover:cursor-pointer h-[2rem] duration-300 transition-all " +
                (navbar ? " hidden opacity-0" : "block opacity-100")
              }
            />
          </NavLink>
        </div>
        {/* //! CATEGORII SIDEBAR */}
        <div className=" scrollbar-hide">
          <Category nume="Menu" name_disabled="true" nav={navbar}>
            <Subcategory nav={navbar} nume="Acasă" icon="home" catre="/" />
            <Subcategory
              nav={navbar}
              nume="Studenți"
              icon="user"
              catre="/studenti"
            />
          </Category>
          <Category nume="Tests" name_disabled="true" nav={navbar}>
            <Subcategory
              nav={navbar}
              nume="Crează"
              icon="newspaper"
              catre="/creaza"
            />
            <Subcategory
              nav={navbar}
              nume="șabloane"
              icon="chart-bar"
              catre="/sabloane"
            />
            <Subcategory
              nav={navbar}
              nume="Gestionează"
              icon="queue-list"
              catre="/manager"
            />
            <Subcategory
              nav={navbar}
              nume="Analiză"
              icon="chart-bar"
              catre="/analiza"
            />
          </Category>
          <Category nume="Students" name_disabled="true" nav={navbar}>
            <Subcategory
              nav={navbar}
              nume="performanțe"
              icon="user"
              catre="/performante"
            />
            <Subcategory
              nav={navbar}
              nume="scoruri"
              icon="user-group"
              catre="/scoruri"
            />
            <Subcategory
              nav={navbar}
              nume="istoric"
              icon="backward"
              catre="/istoric"
            />
          </Category>
          <Category nume="Reports" name_disabled="true" nav={navbar}>
            <Subcategory
              nav={navbar}
              nume="rapoarte"
              icon="clipboard-document-list"
              catre="/rapoarte"
            />
            <Subcategory
              nav={navbar}
              nume="clase"
              icon="chart-pie"
              catre="/clase"
            />
            <Subcategory
              nav={navbar}
              nume="individuale"
              icon="newspaper"
              hideIcon="false"
              catre="/individuale"
            />
          </Category>
          {/*         <div className="w-full h-0.5 bg-[#ECECEC]"></div>
        <Category nume="Clase" nav={navbar}>
          <Classes nume="12A - Info" color="#4AD6FF" />
          <Classes nume="10B - Tic" color="#FA4AA4" />
          <Classes nume="9C - Info" color="#4AD6FF" />
        </Category> */}
          {/*
        <div className="w-full h-0.5 bg-[#ECECEC]"></div>
        <CategoryTag nume="Clase">
          <ClassesTag nume="12A - Info" color="#4AD6FF" />
          <ClassesTag nume="10B - Tic" color="#FA4AA4" />
          <ClassesTag nume="9C - Info" color="#4AD6FF" />
        </CategoryTag>
         */}
        </div>
      </div>

      {/* //! BUTON JOS */}
      <div onClick={() => setNavbar(!navbar)} className="mb-3">
        <Category nume="Reports" name_disabled="true" nav={navbar}>
          <Subcategory
            nav={navbar}
            nume="ascunde"
            icon="arrow-left-circle"
            hideIcon="true"
          />
        </Category>
      </div>
    </header>
  );
};

{
  /* //! COMPONENTA PARENT CATEGORII */
}
const Category = (props) => {
  return (
    <div>
      <div className="w-full h-px bg-[#EEF0F2]"></div>
      <div className="space-y-4">
        {props.name_disabled != "true" && (
          <p className="text-sm font-medium text-[#B4B5B9] hover:cursor-default">
            {props.nume}
          </p>
        )}
        {props.children && <ul className="font-medium ">{props.children}</ul>}
      </div>
    </div>
  );
};

{
  /* //! COMPONENTA CHILD CATEGORII */
}
const Subcategory = (props) => {
  const location = useLocation();
  const active =
    "/" + location.pathname.split("/")[1].toLowerCase() === props.catre;
  const firstWord = props.nume.split(" ")[0].slice(0, 5);
  return (
    <NavLink exact="true" to={props.catre}>
      <div
        className={
          "w-full px-8 flex relative" + (active ? " bg-[#EEF0F2]" : " ")
        }
      >
        {active && (
          <div className="top-0 left-0 h-full absolute w-[3px] bg-blue-600"></div>
        )}
        <li className="group hover:cursor-pointer py-4 relative flex space-x-3">
          {/* Use the icon variable as the value for the icon prop */}
          <div className="min-w-[1.3rem]">
            <HeroIcon
              icon={props.icon}
              outline={active ? false : true}
              className={
                " h-6 aspect-square group-hover:text-[#111315] " +
                (props.hideIcon === "true" ? "rotate-0" : "rotate-0") +
                (active ? " text-[#111315]" : " text-[#88898A]")
              }
            />
          </div>
          <p
            className={
              "capitalize w-full overflow-auto group-hover:text-[#111315] group-hover:font-semibold " +
              (active ? " text-[#111315] font-semibold" : "text-[#606165]")
            }
          >
            {props.nume}
          </p>
        </li>
      </div>
    </NavLink>
  );
};

{
  /* //! COMPONENTA PARENT CLASE */
}
const Classes = (props) => {
  return (
    <li className="group hover:cursor-pointer flex space-x-3 items-center">
      <div className="min-w-[1.5rem]">
        <div
          className="aspect-square bg-red-400 rounded-[25%] h-3"
          style={{
            backgroundColor: props.color ? props.color : "#131821",
          }}
        ></div>
      </div>
      <p className="font-light group-hover:font-semibold duration-300 text-[#606165] group-hover:text-[#131821]">
        {props.nume}
      </p>
    </li>
  );
};

{
  /* //! COMPONENTA CHILD CLASE 1 */
}
const CategoryTag = (props) => {
  return (
    <div className="space-y-4">
      {props.name_disabled != "true" && (
        <p className="text-sm font-medium text-[#B4B5B9] hover:cursor-default">
          {props.nume}
        </p>
      )}
      {props.children && (
        <ul className="gap-y-3 gap-x-3 font-medium flex flex-wrap">
          {props.children}
        </ul>
      )}
    </div>
  );
};

{
  /* //! COMPONENTA CHILD CLASE 2 */
}
const ClassesTag = (props) => {
  return (
    <li className="group hover:cursor-pointer flex space-x-3 items-center">
      <p
        style={{
          backgroundColor: props.color
            ? lightenColor(props.color, 0.3)
            : "#ECECEC",
          borderColor: props.color ? props.color : "#BCBCBE",
        }}
        className="font-light group-hover:font-semibold bg-[#FA4AA4]/30 border-[1px] px-3 py-1 rounded-full duration-300 text-[#606165] group-hover:text-[#131821]"
      >
        {props.nume}
      </p>
    </li>
  );
};

export default Sidebar2;
