import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { AcademicCapIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <header className="w-[15%] h-screen flex flex-none border-r-[1px] border-[#2e2e2e] text-[#D4D4D4] flex-col space-y-10 py-10 px-6 bg-[#1A1A1A]">
      <div className="">
        <Logo className="w-[8rem]" />
      </div>
      <div className="space-y-12">
        <Category nume="Menu">
          <Subcategory nume="Discover" />
          <Subcategory nume="Tranding" />
          <Subcategory nume="Category" />
        </Category>
        <Category nume="Menu">
          <FontAwesomeIcon icon={faCoffee} />
          <Subcategory nume="Recent" />
          <Subcategory nume="Playlist" />
          <Subcategory nume="Likes" />
          <Subcategory nume="Downloads" />
        </Category>
      </div>
    </header>
  );
};

const Category = (props) => {
  return (
    <div className="space-y-8">
      <p className="uppercase text-sm tracking-tight text-[#888888]">
        {props.nume}
      </p>
      {props.children && (
        <ul className="space-y-[1.6rem] font-medium ">{props.children}</ul>
      )}
      <div className="w-full h-0.5 bg-[#2e2e2e]"></div>
    </div>
  );
};

const Subcategory = (props) => {
  return (
    <li className="flex space-x-3">
      <ListBulletIcon className="w-6 aspect-square" />
      <p>{props.nume}</p>
    </li>
  );
};

export default Sidebar;
