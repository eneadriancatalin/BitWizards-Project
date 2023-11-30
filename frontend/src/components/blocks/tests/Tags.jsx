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
        "capitalize tracking-tight  text-[#111315] font-semibold px-3 py-1 max-w-max rounded-md " +
        (props.nume === "0"
          ? "bg-[#D0C8F0]"
          : props.nume === "1"
            ? "bg-[#D7E5C1]"
            : props.nume === "-1"
              ? "bg-[#DEC7BB]"
              : "bg-[#C3DBE9]")
      }
    >
      {props.nume === "0"
        ? "configurare în curs"
        : props.nume === "1"
          ? "activ"
          : props.nume === "-1"
            ? "terminat"
            : props.nume}
    </div>
  );
};

export default Tags;
