import React from "react";

const Block = (props) => {
  return (
    <div className="p-6 rounded-lg space-y-5 bg-white">
      <p className="uppercase font-semibold text-sm">{props.titlu}</p>
      <div>{props.children}</div>
    </div>
  );
};

export default Block;
