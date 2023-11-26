// utils.js
import * as HIcons from "@heroicons/react/outline";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const lightenColor = (color, opacity) => {
  const hex = color.replace(/^#/, "");
  return `rgba(${parseInt(hex.substring(0, 2), 16)}, ${parseInt(
    hex.substring(2, 4),
    16
  )}, ${parseInt(hex.substring(4, 6), 16)}, ${opacity})`;
};

export const timeConvert = (timestamp) => {
  let a = new Date(timestamp * 1000);
  return (
    (a.getDay() < 10 ? "0" + a.getDay() : a.getDay()) +
    " " +
    monthNames[a.getMonth()].slice(0, 3) +
    ", " +
    (a.getHours() < 10 ? "0" + a.getHours() : a.getHours()) +
    ":" +
    (a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes())
  );
};

export const removeDiacritics = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const DynamicHeroIcon = (props) => {
  const { ...icons } = HIcons;
  const TheIcon = icons[props.icon];

  return (
    <>
      <TheIcon className="h-6 w-6 text-white" aria-hidden="true" />
    </>
  );
};
export default DynamicHeroIcon;
