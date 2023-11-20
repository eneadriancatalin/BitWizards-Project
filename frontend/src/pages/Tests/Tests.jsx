import React from "react";
import Blocks from "../../components/blocks/tests/Blocks";
import data from "../../data.json";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/global/Breadcrumbs";
import { useLocation } from "react-router-dom";
import Title from "../../components/global/blocks/Title";

function timeConvert(timestamp) {
  let a = new Date(timestamp * 1000);
  return a.getFullYear() + "-" + a.getMonth() + "-" + a.getDay();
}

const Tests = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Breadcrumbs loc={["a", "b", "c"]} />
      <div className="space-y-10">
        <Title titlu="Testele mele" />
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-7 h-full w-full">
          {data.tests.map((test) => (
            <Link to={test.id} exact>
              <Blocks
                nume={test.nume}
                tag={test.tag ? test.tag : "0"}
                data={timeConvert(test.data)}
                categorie={test.categorie}
                descriere={test.descriere}
                avg={test.avg}
                rezultate={test.rezultate}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tests;
