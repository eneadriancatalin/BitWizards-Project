import React from "react";
import { useLocation, useParams } from "react-router-dom";
import data from "../../data.json";
import Breadcrumbs from "../../components/global/Breadcrumbs";
import Title from "../../components/global/blocks/Title";
import Tags from "../../components/blocks/tests/Tags";
import Statistics from "../../components/blocks/tests/Statistics";

function timeConvert(timestamp) {
  let a = new Date(timestamp * 1000);
  return a.getFullYear() + "-" + a.getMonth() + "-" + a.getDay();
}

const Test = () => {
  let myArray = [];
  const { id } = useParams();
  const location = useLocation();
  {
    /* //! ARRAYUL CU CALEA CATRE PAGINA */
  }
  const a = location.pathname.split("/").filter(Boolean);
  const testObject = data.tests.find((test) => test.id === id);
  myArray.push(
    a[0],
    testObject.categorie ? testObject.categorie : "Necatalogat"
  );

  return (
    <div>
      {/* //! CALEA CATRE PAGINA */}
      <Breadcrumbs loc={myArray} />
      {/* //! TITLUL PAGINII */}
      <Title titlu={testObject.nume} />
      {/* //! DIVUL CU INFORMATII DESPRE TEST */}
      <div className="space-y-3 mt-7">
        {/* //! STATUSUL TESTULUI */}
        <Infos nume="Status" tag={testObject.tag}>
          <Tags nume={testObject.tag} />
        </Infos>
        {/* //! CAND A FOST CREAT */}
        <Infos nume="Creat la">
          <p>{timeConvert(testObject.data)}</p>
        </Infos>
        {/* //! TAGURIILE TESTULUI */}
        <Infos
          nume={testObject.categorie?.length < 2 ? "Categorie" : "Categorii"}
        >
          <div className="flex items-center space-x-2">
            {testObject.categorie ? (
              testObject.categorie.map((tag) => <Tags nume={tag} />)
            ) : (
              <Tags nume="necatalogat" />
            )}
          </div>
        </Infos>
        {/* //! STATISTICILE */}
        <Infos nume="Statistici" tag={testObject.tag}>
          <Statistics
            tag={testObject.tag}
            avg={testObject.avg}
            rezultate={testObject.rezultate}
          />
        </Infos>
      </div>
      <div className="rounded-lg mt-7 grid grid-cols-6 bg-neutral-100 w-full py-2">
        <Setari active="true" setare="Setari" />
        <Setari active="false" setare="Intrebari" />
        <Setari active="false" setare="Generari" />
        <Setari active="false" setare="Acces" />
        <Setari active="false" setare="Pagina finala" />
        <Setari active="false" setare="Setari timp" />
      </div>
    </div>
  );
};

export default Test;

{
  /* //! COMPONENTA CU INFORMATII */
}
const Infos = (props) => {
  return (
    <ul className="flex items-center">
      <li className="text-neutral-500 tracking-tight min-w-[9rem]">
        <p>{props.nume}</p>
      </li>
      <li>{props.children}</li>
    </ul>
  );
};

{
  /* //! COMPONENTA CU SETARI */
}
const Setari = (props) => {
  return (
    <div className="w-full justify-center flex items-center">
      <div
        className={
          "w-1/2 cursor-pointer flex justify-center " +
          (props.active === "true" ? "border-b-2 border-neutral-300" : "")
        }
      >
        <p
          className={
            "tracking-tight " +
            (props.active === "true"
              ? "text-neutral-600 font-semibold"
              : "text-neutral-500")
          }
        >
          {props.setare}
        </p>
      </div>
    </div>
  );
};
