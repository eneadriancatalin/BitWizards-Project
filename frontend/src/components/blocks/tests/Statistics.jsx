import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";
import HeroIcon from "../../global/HeroIcon";
const Statistics = (props) => {
  return (
    <div>
      {(props.tag === "-1" || props.tag === "1") && (
        <div className={"flex space-x-3 h-full items-center"}>
          {/* //! PARTEA CU SCORUL MEDIU */}
          <div className="flex items-center space-x-2">
            {/* //! ICONITA CU RANK */}
            <HeroIcon
              icon="sparkles"
              outline={false}
              className="h-5 w-5 text-[#858788]"
            />
            <p>
              {props.avg ? (
                <>
                  <span className="font-medium text-lg text-[#111315]">
                    {props.avg}%
                  </span>
                  {" scor mediu"}
                </>
              ) : (
                "-"
              )}
            </p>
          </div>
          <div className="w-px bg-[#EEF0F2] h-4"></div>
          {/* //! PARTEA CU NUMARUL DE REZULTATE */}
          <div className="flex items-center space-x-2">
            <HeroIcon
              icon="user-group"
              outline={false}
              className="h-5 w-5 text-[#858788]"
            />
            <p>
              {props.rezultate ? (
                <>
                  <span className="font-medium text-lg text-[#111315]">
                    {props.rezultate}
                  </span>
                  {" rezultate"}
                </>
              ) : (
                "-"
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
