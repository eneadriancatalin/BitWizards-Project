import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";

const Statistics = (props) => {
  return (
    <div>
      {(props.tag === "-1" || props.tag === "1") && (
        <div className={"flex space-x-3 h-full items-center"}>
          {/* //! PARTEA CU SCORUL MEDIU */}
          <div className="flex items-center space-x-2">
            {/* //! ICONITA CU RANK */}
            <FontAwesomeIcon icon={faRankingStar} />
            <p>
              {props.avg ? (
                <>
                  <span className="font-medium">{props.avg}%</span>
                  {" scor mediu"}
                </>
              ) : (
                "-"
              )}
            </p>
          </div>
          <div className="w-0.5 bg-black h-4"></div>
          {/* //! PARTEA CU NUMARUL DE REZULTATE */}
          <p>
            {" "}
            {props.rezultate ? (
              <>
                <span className="font-medium">{props.rezultate}</span>
                {" rezultate"}
              </>
            ) : (
              "-"
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default Statistics;
