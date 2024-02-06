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
        <div className="grid grid-cols-4 gap-x-16">
          <Block
            tag={
              <div
                className={
                  "uppercase text-[#1D1D1B] font-bold text-sm px-3 py-1 max-w-max rounded-md tracking-normal bg-[#F4F5F7] ring-1 ring-[#DEDFDF]"
                }
              >
                Numar de teste
              </div>
            }
            numar={data.tests.filter((element) => element.user === nume).length}
          />
          <Block
            tag={
              <div
                className={
                  "uppercase text-[#1D1D1B] font-bold text-sm px-3 py-1 max-w-max rounded-md tracking-normal bg-[#9794F7]"
                }
              >
                Teste in configurare
              </div>
            }
            numar={
              data.tests.filter(
                (element) => element.user === nume && element.status === 0
              ).length
            }
          />
          <Block
            tag={
              <div
                className={
                  "uppercase text-[#1D1D1B] font-bold text-sm px-3 py-1 max-w-max rounded-md tracking-normal bg-[#A1E0DE]"
                }
              >
                Teste active
              </div>
            }
            numar={
              data.tests.filter(
                (element) => element.user === nume && element.status === 1
              ).length
            }
          />
          <Block
            tag={
              <div
                className={
                  "uppercase text-[#1D1D1B] font-bold text-sm px-3 py-1 max-w-max rounded-md tracking-normal bg-[#F7CE78]"
                }
              >
                Teste terminate
              </div>
            }
            numar={
              data.tests.filter(
                (element) => element.user === nume && element.status === -1
              ).length
            }
          />
        </div>
        >>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default Home;
