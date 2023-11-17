import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { AcademicCapIcon, ListBulletIcon } from "@heroicons/react/24/outline";
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
  faUserAlt,
  faUserAltSlash,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const lightenColor = (color, opacity) => {
  const hex = color.replace(/^#/, "");
  const alpha = Math.round(opacity * 255);
  return `rgba(${parseInt(hex.substring(0, 2), 16)}, ${parseInt(
    hex.substring(2, 4),
    16
  )}, ${parseInt(hex.substring(4, 6), 16)}, ${opacity})`;
};

const Navbar2 = () => {
  return (
    <header className="w-[13%] h-screen flex flex-none flex-col space-y-6 px-5 pt-6 bg-[#F8F8F8]">
      <div className="">
        <Logo className="w-[6rem] hover:cursor-pointer" />
      </div>
      <div className="w-full h-0.5 bg-[#ECECEC]"></div>
      <div className="space-y-6 overflow-y-auto scrollbar-hide">
        <Category nume="Menu" name_disabled="true">
          <Subcategory nume="Home" icon={faHome} />
          <Subcategory nume="Students" icon={faUsers} />
        </Category>
        <div className="w-full h-0.5 bg-[#ECECEC]"></div>
        <Category nume="Tests">
          <Subcategory nume="Create test" icon={faFile} />
          <Subcategory nume="Templates" icon={faChartBar} />
          <Subcategory nume="Manage tests" icon={faTasks} />
          <Subcategory nume="Test Analytics" icon={faChartBar} />
        </Category>
        <div className="w-full h-0.5 bg-[#ECECEC]"></div>
        <Category nume="Students">
          <Subcategory nume="Performances" icon={faUsers} />
          <Subcategory nume="Scores" icon={faUser} />
          <Subcategory nume="History" icon={faHistory} />
        </Category>
        <div className="w-full h-0.5 bg-[#ECECEC]"></div>
        <Category nume="Reports">
          <Subcategory nume="Test Reports" icon={faClipboardList} />
          <Subcategory nume="Class Reports" icon={faChartPie} />
          <Subcategory nume="Individual" icon={faFileInvoice} />
        </Category>
        <div className="w-full h-0.5 bg-[#ECECEC]"></div>
        <Category nume="Clase">
          <Classes nume="12A - Info" color="#4AD6FF" />
          <Classes nume="10B - Tic" color="#FA4AA4" />
          <Classes nume="9C - Info" color="#4AD6FF" />
        </Category>
        {/*
        <div className="w-full h-0.5 bg-[#ECECEC]"></div>
        <CategoryTag nume="Clase">
          <ClassesTag nume="12A - Info" color="#4AD6FF" />
          <ClassesTag nume="10B - Tic" color="#FA4AA4" />
          <ClassesTag nume="9C - Info" color="#4AD6FF" />
        </CategoryTag>
         */}
      </div>
    </header>
  );
};

const Category = (props) => {
  return (
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
  );
};
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

const Subcategory = (props) => {
  return (
    <li className="group hover:cursor-pointer flex space-x-3 items-center">
      {/* Use the icon variable as the value for the icon prop */}
      <div className="min-w-[1.5rem]">
        <FontAwesomeIcon
          icon={props.icon}
          className="h-4 text-[#BCBCBE] group-hover:text-[#131821]"
        />
      </div>
      <p className="font-light group-hover:font-semibold duration-300 text-[#606165] group-hover:text-[#131821]">
        {props.nume}
      </p>
    </li>
  );
};

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

export default Navbar2;
