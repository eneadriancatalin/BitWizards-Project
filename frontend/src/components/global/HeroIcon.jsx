import React from "react";
import { useState, useEffect } from "react";
const HeroIcon = ({
  icon,
  outline = false,
  mini = false,
  version = "2.0.12",
  className = " text-slate-600",
  ...props
}) => {
  const [svg, setSvg] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    const url = `https://cdn.jsdelivr.net/npm/heroicons@${version}/${
      version.startsWith("2") && (mini ? "20/" : "24/")
    }${outline ? "outline" : "solid"}/${icon}.svg`;
    fetch(url)
      .then((res) => res.text())
      .then(setSvg)
      .catch(setIsErrored)
      .then(() => setIsLoaded(true));
  }, [icon, mini, outline, version]);
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
      {...props}
    />
  );
};

export default HeroIcon;
