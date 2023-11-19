import React from "react";
import Blocks from "../components/blocks/tests/Blocks";

const Tests = () => {
  return (
    <div className="space-y-10">
      <h1 className="font-semibold text-4xl tracking-tight">Testele mele</h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 overflow-auto gap-7 bg-white h-min w-full">
        <Blocks
          nume="Test geografie"
          tag="0"
          data="2023-11-16"
          categorie="test"
          descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          avg="42.9"
          rezultate="20"
        ></Blocks>
        <Blocks
          nume="Test matematica geometrie"
          tag="-1"
          data="2023-11-16"
          categorie="mate"
          descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          avg="75.3"
          rezultate="2"
        ></Blocks>
        <Blocks
          nume="Test mate probabilitate"
          tag="1"
          data="2023-11-12"
          descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          avg="20.1"
          rezultate="12"
        ></Blocks>
        <Blocks
          nume="Test matematica analiza"
          tag="1"
          data="2023-11-10"
          categorie="mate"
          descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          avg="15.3"
          rezultate="21"
        ></Blocks>
        <Blocks
          nume="Test matematica algebra"
          tag="-1"
          data="2023-11-10"
          categorie="mate"
          descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ></Blocks>
        <Blocks
          nume="Test geometrie"
          tag="1"
          data="2023-11-02"
          categorie="ceva"
          avg="15.3"
          rezultate="21"
        ></Blocks>
      </div>
    </div>
  );
};

export default Tests;
