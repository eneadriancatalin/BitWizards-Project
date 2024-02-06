import React from "react";

const Subtitle = (props) => {
  return (
    <div>
      <h2 className="text-[#1d1d1b] text-2xl font-semibold">
        {props.titlu}{" "}
        {props.imp ? <span className="text-[#E55353]">*</span> : ""}
      </h2>
    </div>
  );
};

export default Subtitle;
