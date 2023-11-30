import React from "react";
import HeroIcon from "../../global/HeroIcon";
const ConfSum = (props) => {
  let content;

  if (props.tip === "nume") {
    if (props.object) {
      content = props.textSucces;
    } else {
      content = props.textFail;
    }
  } else if (props.tip === "intrebari") {
    if (props.object) {
      content = props.textSucces;
    } else {
      content = props.textFail;
    }
  } else if (props.tip === "generari") {
    if (props.object === 1) {
      content = props.textSucces;
    } else if (props.object === -1) {
      content = props.textFail;
    }
  } else if (props.tip === "categorie") {
    if (props.object) {
      content = props.textSucces;
    } else {
      content = props.textFail;
    }
  } else if (props.tip === "copiere") {
    if (props.object === 1) {
      content = props.textSucces;
    } else if (props.object === -1) {
      content = props.textFail;
    }
  } else if (props.tip === "timp") {
    if (props.object === 1) {
      content = props.textSucces;
    } else if (props.object === -1) {
      content = props.textFail;
    }
  }

  return (
    <div className="flex items-center space-x-5">
      <div
        className={
          "h-10 w-10 ring-1 rounded-md flex justify-center items-center " +
          (props.object ? "ring-[#7DB87E]" : "ring-[#E55353]")
        }
      >
        <HeroIcon
          className={
            "h-5 aspect-square " +
            (props.object ? "text-[#7DB87E]" : "text-[#E55353]")
          }
          icon={props.object ? "check" : "x-mark"}
        />
      </div>
      <p className="text-lg">{content}</p>
    </div>
  );
};

export default ConfSum;
