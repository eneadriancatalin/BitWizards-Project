import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <header className="w-[10%] h-screen flex flex-none border-r-[1px] border-[#3d3d3d] text-white flex-col space-y-12 py-8 px-5 bg-[#171717]">
      <div className="">
        <Logo className="w-3/4" />
      </div>
      <div className="space-y-7">
        <div className="flex space-x-3">
          <AcademicCapIcon className="w-6  h-6" />
          <Category nume="Acasa"></Category>
        </div>
        <div className="flex space-x-3">
          <AcademicCapIcon className="w-6  h-6" />
          <Category nume="Teste"></Category>
        </div>
        <div className="flex space-x-3">
          <AcademicCapIcon className="w-6  h-6" />
          <Category nume="Elevi"></Category>
        </div>
      </div>
    </header>
  );
};

const Category = (props) => {
  return (
    <div className="space-y-2 flex justify-center items-center flex-col">
      <p className="">{props.nume}</p>
      {props.children && (
        <ul className="space-y-1 list-disc list-inside">{props.children}</ul>
      )}
    </div>
  );
};

const Subcategory = (props) => {
  return <li>{props.nume}</li>;
};

export default Navbar;
