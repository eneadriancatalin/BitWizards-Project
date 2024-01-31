import React from "react";
import Title from "../../../components/global/blocks/Title";
import HeroIcon from "../../../components/global/HeroIcon";
import Block from "../../../components/global/Block";
import data from "../../../data.json";
const Setari = (props) => {
  const user = (id) => {
    let userFind = data.users.find((user) => user.id === id);
    return userFind;
  };
  return (
    <div className="p-6 w-full h-full dots">
      <div className="mb-10">
        <Title titlu="Setari" />
      </div>
      <div className="space-y-8">
        <Block titlu="Setari initiale" important={true}>
          <div className="space-y-6 w-2/3">
            <div className="space-y-2">
              <p className="text-base text-[#606165]">Numele testului</p>
              <input
                class="appearance-none border-b w-full text-[#111315] pb-2 text-lg focus:outline-none"
                id="numeTest"
                type="text"
                value={props.object.nume ? props.object.nume : ""}
                placeholder={
                  props.object.nume ? props.object.nume : "Fara nume"
                }
              ></input>
            </div>
            <div className="space-y-2">
              <p className="text-base text-[#606165]">Numele testului</p>
              <textarea
                class="appearance-none rounded w-full px-3 focus:border-green-500 overflow-y-auto h-auto resize-y border text-[#111315] py-2 text-lg focus:outline-none"
                id="numeTest"
                value={props.object.descriere ? props.object.descriere : ""}
                placeholder={
                  props.object.descriere
                    ? props.object.descriere
                    : "Fara descriere"
                }
              />
            </div>
            <div className="space-y-2">
              <p className="text-base text-[#606165]">Eticheteaza testul</p>
              <div className="w-full flex items-center space-x-5">
                <select
                  className="w-full focus:outline-none active:outline-none text-lg border-b hover:border-green-500 cursor-pointer pb-2"
                  id="fruitSelect"
                  name="fruit"
                >
                  {user(props.object.user)?.taguri.map((tag) => (
                    <option>{tag}</option>
                  ))}
                </select>
                <div className="min-w-max px-4 ring-1 py-2 cursor-pointer text-lg rounded-md flex justify-center items-center ring-[#7DB87E]">
                  + Adauga tag
                </div>
              </div>
            </div>
          </div>
        </Block>
      </div>
    </div>
  );
};

export default Setari;
