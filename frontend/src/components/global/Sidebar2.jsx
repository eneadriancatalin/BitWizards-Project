import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as LogoV } from "../../assets/logo2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faHome,
  faChartBar,
  faChartPie,
  faFileInvoice,
  faClipboardList,
  faHistory,
  faUser,
  faUsers,
  faTasks,
  faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";
import { lightenColor } from "../../utils";

const Sidebar2 = () => {
  const [navbar, setNavbar] = useState(true);
  return (
    <header
      className={
        "duration-300 transition-all h-screen flex border-r-2 tracking-tight justify-between border-[#ECECEC] flex-none flex-col px-5 pt-6 bg-[#F8F8F8] " +
        (navbar ? "w-[13%]" : "w-auto")
      }
    >
      {/* //! LOGOURI */}

      <div className="space-y-6">
        <div className="flex items-center justify-between">
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
        <div className="space-y-6 overflow-y-auto scrollbar-hide">
          <Category nume="Menu" name_disabled="true" nav={navbar}>
            <Subcategory nav={navbar} nume="Acasă" icon={faHome} catre="/" />
            <Subcategory nav={navbar} nume="Studenți" icon={faUsers} />
          </Category>
          <Category nume="Tests" name_disabled="true" nav={navbar}>
            <Subcategory nav={navbar} nume="Crează" icon={faFile} />
            <Subcategory nav={navbar} nume="șabloane" icon={faChartBar} />
            <Subcategory
              nav={navbar}
              nume="Gestionează"
              icon={faTasks}
              catre="/manager"
            />
            <Subcategory nav={navbar} nume="Analiză" icon={faChartBar} />
          </Category>
          <Category nume="Students" name_disabled="true" nav={navbar}>
            <Subcategory nav={navbar} nume="performanțe" icon={faUsers} />
            <Subcategory nav={navbar} nume="scoruri" icon={faUser} />
            <Subcategory nav={navbar} nume="istoric" icon={faHistory} />
          </Category>
          <Category nume="Reports" name_disabled="true" nav={navbar}>
            <Subcategory nav={navbar} nume="rapoarte" icon={faClipboardList} />
            <Subcategory nav={navbar} nume="clase" icon={faChartPie} />
            <Subcategory nav={navbar} nume="individuale" icon={faFileInvoice} />
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
            icon={faAnglesLeft}
            hide_icon="true"
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
      <div className="w-full h-0.5 mb-6 bg-[#ECECEC]"></div>
      <div className="space-y-4">
        {props.name_disabled != "true" && (
          <p className="text-sm font-medium text-[#B4B5B9] hover:cursor-default">
            {props.nume}
          </p>
        )}
        {props.children && (
          <ul className="space-y-3 font-medium ">{props.children}</ul>
        )}
      </div>
    </div>
  );
};

{
  /* //! COMPONENTA CHILD CATEGORII */
}
const Subcategory = (props) => {
  const firstWord = props.nume.split(" ")[0].slice(0, 5);
  return (
    <div>
      <NavLink exact="true" to={props.catre}>
        <li className="group hover:cursor-pointer relative flex space-x-3 items-center">
          {/* Use the icon variable as the value for the icon prop */}
          <div className="min-w-[1.3rem]">
            <FontAwesomeIcon
              icon={props.icon}
              className={
                "h-4 text-[#BEBDBF] duration-300 transition-all group-hover:text-[#131821] " +
                (props.hide_icon === "true" ? "rotate-0" : "rotate-180")
              }
            />
          </div>
          <p
            className={
              "font-light capitalize w-full overflow-auto group-hover:font-semibold text-[#606165] duration-300 transition-all top-0 left-5 absolute group-hover:text-[#131821] " +
              (props.nav ? " opacity-100" : " opacity-0")
            }
          >
            {props.nume}
          </p>
        </li>
      </NavLink>
    </div>
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
