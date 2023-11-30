import React from "react";

const Content = (props) => {
  return (
    <textarea
      class="appearance-none rounded w-full px-3 focus:border-green-500 overflow-y-auto h-auto resize-y border text-[#111315] py-2 text-lg focus:outline-none"
      id="numeTest"
      placeholder={props.placeholder}
    />
  );
};

export default Content;
