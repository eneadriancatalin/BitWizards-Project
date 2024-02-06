import React from "react";
import Subtitle from "./blocks/Subtitle";
import Tags from "../blocks/tests/Tags";
const Block = (props) => {
  return (
    <div className="p-6 rounded-2xl space-y-5 bg-white ring-[#F1F3F5] shadow-[0_4px_16px_0px_rgba(29, 29, 27, .08)]">
      <div className="flex space-x-5">
        {" "}
        <Subtitle titlu={`${props.titlu}`} imp={props.important} />
        {props.tag && <Tags nume={props.tag} />}
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Block;
