// utils.js

export const lightenColor = (color, opacity) => {
  const hex = color.replace(/^#/, "");
  return `rgba(${parseInt(hex.substring(0, 2), 16)}, ${parseInt(
    hex.substring(2, 4),
    16
  )}, ${parseInt(hex.substring(4, 6), 16)}, ${opacity})`;
};

export const timeConvert = (timestamp) => {
  let a = new Date(timestamp * 1000);
  return a.getFullYear() + "-" + a.getMonth() + "-" + a.getDay();
};

// Add more functions as needed
