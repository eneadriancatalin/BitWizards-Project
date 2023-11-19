import React from "react";
import Tags from "./Tags";
import { useRef, useEffect } from "react";
import {
  faRankingStar,
  faEllipsis,
  faTrash,
  faClone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blocks = (props) => {
  const detailsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        detailsRef.current.removeAttribute("open");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-6 bg-[#F8F8F8] min-h-max flex space-y-5 flex-col justify-between rounded-lg cursor-pointer">
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-5">
            <Tags nume={props.tag} />
            <p className="text-sm font-medium text-neutral-400 tracking-tight">
              CREAT LA {props.data}
            </p>
          </div>

          <details ref={detailsRef} className="list-none relative">
            <summary className="list-none">
              <FontAwesomeIcon
                icon={faEllipsis}
                className="p-2 rounded-lg hover:bg-neutral-200 duration-300 bg-neutral-200/50"
              />
            </summary>
            <ul className="p-2 absolute right-0 space-y-3 ring-[1px] py-4 pl-6 pr-10 ring-neutral-300 bg-white w-max z-[100] rounded-lg">
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faClone} className="text-lg" />
                <a>Copiază</a>
              </li>
              <li className="flex items-center space-x-2 text-red-500">
                <FontAwesomeIcon icon={faTrash} className="text-lg" />
                <a>Șterge</a>
              </li>
            </ul>
          </details>
        </div>
        <p className="font-semibold text-2xl">{props.nume}</p>
        <p className="line-clamp-2 text-neutral-500">
          {props.descriere ? props.descriere : "(fara descriere)"}
        </p>
      </div>
      <div
        className={
          "flex items-center " +
          (props.tag === "-1" || props.tag === "1"
            ? "justify-between"
            : "justify-end")
        }
      >
        {(props.tag === "-1" || props.tag === "1") && (
          <div className={"flex space-x-3 h-full items-center"}>
            <div className="flex items-center space-x-2">
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
        <Tags nume={props.categorie ? props.categorie : "necatalogat"} />
      </div>
    </div>
  );
};

export default Blocks;
