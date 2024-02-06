import React from "react";
import Blocks from "../../components/blocks/tests/Blocks";
import data from "../../data.json";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/global/Breadcrumbs";
import { useLocation } from "react-router-dom";
import Title from "../../components/global/blocks/Title";
import { timeConvert } from "../../utils";

const Tests = () => {
  const location = useLocation();
  const nume = localStorage.getItem("nume");
  return (
    <div className="px-10 py-6 bg-[#F1F3F5] h-full dots">
      {/* //! CALEA CATRE PAGINA */}
      <Breadcrumbs loc={["a", "b", "c"]} />
      <div className="space-y-10">
        {/* //! TITLUL PAGINII */}
        <Title titlu="Testele mele" />
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-7 h-full w-full">
          {/* //! GENERAREA BLOCKURILOR CU TESTE */}
          {data.tests
            .filter((element) => element.user === nume)
            .map((test) => (
              <Link to={`${test.id}/informatii`} exact>
                <Blocks
                  nume={test.nume}
                  status={test.status ? test.status : "0"}
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
    </div>
  );
};

export default Tests;
