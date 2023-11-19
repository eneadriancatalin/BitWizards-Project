import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faBell } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="border-[#ECECEC] flex items-center space-x-7 py-6 mb-6 justify-end px-6">
      <FontAwesomeIcon icon={faMessage} className="text-[#90949b] h-5" />
      <FontAwesomeIcon icon={faBell} className="text-[#90949b] h-5" />
      <div className="flex items-center space-x-2">
        <img
          src="https://avatars.githubusercontent.com/u/71841822?v=4"
          alt=""
          className="rounded-full h-7 aspect-square"
        />
        <p className="font-semibold tracking-tight">Ene Adrian</p>
        <FontAwesomeIcon icon={faAngleDown} className="text-[#90949b] h-3" />
      </div>
    </div>
  );
};

export default Navbar;
