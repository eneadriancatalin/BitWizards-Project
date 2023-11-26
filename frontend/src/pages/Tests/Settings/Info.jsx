import React from "react";
import Subtitle from "../../../components/global/blocks/Subtitle";
import Block from "../../../components/global/Block";
import HeroIcon from "../../../components/global/HeroIcon";
import ConfSum from "../../../components/blocks/tests/ConfSum";
const Info = (props) => {
  const minute = Math.floor(props.object?.settings?.timp?.timp / 60);
  let secunde =
    props.object?.settings?.timp?.timp -
    Math.floor(props.object?.settings?.timp?.timp / 60) * 60;
  if (secunde < 10) {
    secunde = "0" + secunde;
  }

  return (
    <div className="p-6 w-full h-full bg-[#F1F3F5]">
      <div className="mb-10">
        <Subtitle titlu="Informatii test" />
      </div>
      <div className="space-y-8">
        <Block titlu="Numar raspunsuri">
          <div className="flex items-center space-x-5">
            <HeroIcon
              className="h-8 aspect-square text-[#B4B5B9]"
              icon="user-group"
              outline={true}
            />
            <p className="text-[#111315] text-2xl">
              {props.object.rezultate ? props.object.rezultate : "fara "}{" "}
              rezultate
            </p>
          </div>
        </Block>
        <Block titlu="Rezumat configuratie">
          <div className="space-y-4">
            <ConfSum
              textSucces={`Numele testului este "${props.object?.nume}"`}
              textFail={`Adauga nume testului`}
              tip={"nume"}
              object={props.object?.nume}
            />
            <ConfSum
              textSucces={`Testul are ${props.object.settings?.intrebari?.length} intrebari`}
              textFail={`Adauga intrebari testului`}
              tip={"intrebari"}
              object={props.object.settings?.intrebari}
            />
            <ConfSum
              textSucces={`Intrebarile sunt generate aleatoriu`}
              textFail={`Intrebarile sunt generate in ordine`}
              tip={"generari"}
              object={props.object.settings?.generari.tip}
            />
            <ConfSum
              textSucces={`Testul apartine categoriei ${props.object?.settings?.setari?.categorie}`}
              textFail={`Adauga o categorie testului`}
              tip={"categorie"}
              object={props.object?.settings?.setari?.categorie}
            />
            <ConfSum
              textSucces={`Modul anti-copiere a fost activat`}
              textFail={`Modul anti-copiere nu a fost activat`}
              tip={"copiere"}
              object={props.object?.settings?.acces?.tipAntiCopiere}
            />
            <ConfSum
              textSucces={`Timpul pentru tot testul este de ${minute}:${secunde}`}
              textFail={`Timpul pentru fiecare intrebare este de ${minute}:${secunde}`}
              tip={"timp"}
              object={props.object?.settings?.timp?.tip}
            />
          </div>
        </Block>
      </div>
    </div>
  );
};

export default Info;
