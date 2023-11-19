import React from "react";

const Tags = (props) => {
  return (
    <div
      className={
        "uppercase text-sm tracking-tight font-semibold px-3 py-1 max-w-max rounded-md " +
        (props.nume === "0"
          ? "bg-indigo-200 text-indigo-600"
          : props.nume === "1"
            ? "bg-emerald-200 text-emerald-600"
            : " bg-neutral-200/50 text-neutral-500")
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
