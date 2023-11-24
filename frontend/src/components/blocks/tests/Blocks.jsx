import React from "react";
import Tags from "./Tags";
import { useRef, useEffect } from "react";
import {
  faEllipsis,
  faTrash,
  faClone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Statistics from "./Statistics";
import { Link } from "react-router-dom";

const Blocks = (props) => {
  const detailsRef = useRef(null);

  {
    /* //! VERIFICA CAND DAI CLICK IN AFARA BUTONULUI DE OPTIUNI SI IL INCHIDE */
  }
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
        <div className="flex justify-between items-center relative">
          {/* //! PARTEA DE DETALII CU STATUS SI CAND A FOST CREAT */}
          <div className="flex items-center space-x-5">
            <Tags nume={props.tag} />
            <p className="text-sm font-medium text-neutral-400 tracking-tight">
              CREAT LA {props.data}
            </p>
          </div>
          {/* //! BUTONUL DE OPTIUNI PENTRU COPIERE/STERGERE */}
          <details
            ref={detailsRef}
            className="list-none absolute top-0 right-0"
          >
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
        {/* //! NUMELE TESTULUI */}
        <p className="font-semibold text-2xl">{props.nume}</p>
        {/* //! DESCRIEREA TESTULUI */}
        <p className="line-clamp-2 text-neutral-500">
          {props.descriere ? props.descriere : "(fara descriere)"}
        </p>
      </div>
      {/* //! STATISTICILE SI TAGURI */}
      <div
        className={
          "flex items-center " +
          (props.tag === "-1" || props.tag === "1"
            ? "justify-between"
            : "justify-end")
        }
      >
        {/* //! COMPONENTA PENTRU STATISTICI */}
        <Statistics
          tag={props.tag}
          avg={props.avg}
          rezultate={props.rezultate}
        />
        <div className="flex items-center space-x-2">
          {props.categorie ? (
            <Tags nume={props.categorie} />
          ) : (
            <Tags nume="necatalogat" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Blocks;
