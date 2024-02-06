import React from "react";
import Subtitle from "../../../../components/global/blocks/Subtitle";
import Block from "../../../../components/global/Block";
import Content from "../../../../components/test/settings/Content";
import Tags from "../../../../components/blocks/tests/Tags";
const Intrebari = (props) => {
  return (
    <div className="p-6 w-full overflow-y-auto h-full bg-[#F1F3F5]">
      <div className="mb-10">
        <Subtitle titlu="Intrebari" />
      </div>
      <div className="space-y-8">
        {props.object.settings.intrebari.map((i, x) => (
          <Block titlu={i.titlu} tag={i.tag}>
            <div className="space-y-6 w-2/3">
              <div className="grid grid-cols-4 gap-x-5 w-full">
                {i.raspunsuri.map((j, k) => (
                  <div
                    className={`uppercase text-[#1D1D1B] font-bold text-base w-full h-24 flex justify-center items-center rounded-md tracking-normal ring-1 ring-[#DEDFDF] ${
                      k + 1 === i.raspunsCorect
                        ? "bg-[#cff5d3] ring-[#6abd72]"
                        : "bg-[#F4F5F7] ring-[#DEDFDF]"
                    }`}
                  >
                    {j}
                  </div>
                ))}
              </div>
            </div>
          </Block>
        ))}
      </div>
    </div>
  );
};

export default Intrebari;

const Intrebare = (props) => {
  return (
    <Block titlu="Setarile intrebarii" important={true}>
      <div className="space-y-6 w-2/3">
        <div className="space-y-2">
          <p className="text-base text-[#606165]">Descrierea intrebarii</p>
          <Content nume="testare" />
        </div>
        <div className="space-y-2">
          <p className="text-base text-[#606165]">Eticheteaza testul</p>
          <div className="w-full flex items-center space-x-5">
            <select
              className="w-full focus:outline-none active:outline-none text-lg border-b hover:border-green-500 cursor-pointer pb-2"
              id="fruitSelect"
              name="fruit"
            >
              {props.object.taguri.map((tag) => (
                <option>{tag}</option>
              ))}
            </select>
            <div className="min-w-max px-4 ring-1 py-2 cursor-pointer text-lg rounded-md flex justify-center items-center ring-[#7DB87E]">
              + Adauga tag
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-base text-[#606165]">Tipul raspunsului</p>
          <div className="w-full flex items-center space-x-5">
            <select
              className="w-full focus:outline-none active:outline-none text-lg border-b hover:border-green-500 cursor-pointer pb-2"
              id="fruitSelect"
              name="fruit"
            >
              <option>Un singur raspuns</option>
              <option>Raspuns multiplu</option>
              <option>Descriptiv</option>
              <option>Adevarat sau Fals</option>
              <option>Cod</option>
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-base text-[#606165]">Tipul raspunsului</p>
          {Array.from({ length: 3 }, (_, i) => (
            <div className="w-full flex items-start space-x-5">
              <input
                type="checkbox"
                id="scales"
                name="scales"
                className="w-5 aspect-square"
              />
              <Content nume="testare" />
            </div>
          ))}
        </div>
      </div>
    </Block>
  );
};
