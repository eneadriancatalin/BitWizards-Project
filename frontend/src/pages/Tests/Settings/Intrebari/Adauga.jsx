import React from "react";
import Subtitle from "../../../../components/global/blocks/Subtitle";
import Block from "../../../../components/global/Block";
import Content from "../../../../components/test/settings/Content";
const Adauga = (props) => {
  return (
    <div className="p-6 w-full h-full bg-[#F1F3F5]">
      <div className="mb-10">
        <Subtitle titlu="Adauga intrebare" />
      </div>
      <div className="space-y-8">
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
      </div>
    </div>
  );
};

export default Adauga;
