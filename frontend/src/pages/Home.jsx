import React from "react";
import Title from "../components/global/blocks/Title";
import Breadcrumbs from "../components/global/Breadcrumbs";
import Tags from "../components/blocks/tests/Tags";
import data from "../data.json";
const Home = () => {
  const nume = localStorage.getItem("nume");
  return (
    <div className="px-10 py-6 bg-[#F1F3F5] dots h-full">
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
      </div>
    </div>
  );
};

export default Home;

const Block = (props) => {
  return (
    <div className="p-8 bg-white ring-2 ring-[#F1F3F5] shadow-[0_4px_16px_0px_rgba(29, 29, 27, .08)] min-h-max flex space-y-5 flex-col justify-between rounded-2xl cursor-pointer">
      <div className="space-y-5">
        <div className="flex justify-between items-center relative">
          <div className="flex items-center space-x-5">{props.tag}</div>
        </div>
        <div className="space-y-3">
          {/* //! NUMELE TESTULUI */}
          <p className="text-[#1d1d1b] text-5xl font-semibold">{props.numar}</p>
        </div>
      </div>
    </div>
  );
};
