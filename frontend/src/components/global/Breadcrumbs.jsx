import React from "react";
import { useLocation } from "react-router-dom";

const Breadcrumbs = ({ loc }) => {
  return (
    <ul className="flex items-center space-x-1 text-neutral-500">
      {loc.map((item, index) => (
        <li className="capitalize" key={index}>
          {item} {index + 1 < loc.length ? "/" : ""}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
