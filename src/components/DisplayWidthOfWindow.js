import React from "react";
import "../components/DisplayWidthOfWindow.css";
import useWindowWidthSize from "../customHooks/useWindowWidthSize";

const DisplayWidthOfWindow = () => {
  const windowWidth = useWindowWidthSize(); //take window width value through custom Hook
  return (
    <div className="display-width">
      <h3>
        Width of your window is:&nbsp;
        {windowWidth}
        px
      </h3>
    </div>
  );
};

export default DisplayWidthOfWindow;
