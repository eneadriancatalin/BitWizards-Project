import React from "react";
import Title from "../components/global/blocks/Title";
import Breadcrumbs from "../components/global/Breadcrumbs";
const Home = () => {
  return (
    <div className="px-10 py-6 bg-[#F1F3F5] h-full">
      {/* //! CALEA CATRE PAGINA */}
      <Breadcrumbs loc={["a", "b", "c"]} />
      <div className="space-y-10">
        {/* //! TITLUL PAGINII */}
        <Title titlu="Acasa" />
      </div>
    </div>
  );
};

export default Home;
