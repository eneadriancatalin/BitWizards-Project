import React from "react";

const Tags = (props) => {
  {
    /* //! DETERMINAREA TAGULUI */
  }
  {
    /*//! -1 - TESTUL ESTE INCHIS */
  }
  {
    /* //! 0 - TESTUL ESTE INCA IN CONFIGURARE */
  }
  {
    /*//! 1 - TESTUL ESTE ACTIV */
  }
  {
    /*//! ALTCEVA - NUMELE CUSTOM AM TAGULUI */
  }

  return (
    <div
      className={
        "uppercase text-[#1D1D1B] font-bold text-sm px-3 py-1 max-w-max rounded-md tracking-normal " +
        (props.nume.toString() === "0"
          ? "bg-[#9794F7]"
          : props.nume.toString() === "1"
            ? "bg-[#A1E0DE]"
            : props.nume.toString() === "-1"
              ? "bg-[#F7CE78]"
              : "bg-[#F4F5F7] ring-1 ring-[#DEDFDF]")
      }
    >
      {props.nume.toString() === "0"
        ? "configurare în curs"
        : props.nume.toString() === "1"
          ? "activ"
          : props.nume.toString() === "-1"
            ? "terminat"
            : props.nume.toString()}
    </div>
  );
};

export default Tags;
