import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { formPage, postPage, windowPage } from "../reducer/dataSlice";
import "../components/Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState();

  const handlePageChange = (page) => {
    if (activePage !== page) {
      //done for holding color on button to show current page is on that.
      switch (page) {
        case "posts":
          dispatch(postPage());
          break;
        case "form":
          dispatch(formPage());
          break;
        case "window":
          dispatch(windowPage());
          break;
        default:
          break;
      }
      setActivePage(page);
    }
  };

  return (
    <div className="header">
      <p className="title">Treeroot informatics Assignment</p>
      <div className="links">
        <button
          className={`navPage ${activePage === "posts" ? "active" : "navPage"}`} // apply dynamic css to show current page on nav bar
          onClick={() => handlePageChange("posts")}
        >
          Posts
        </button>
        <button
          className={`navPage ${activePage === "form" ? "active" : "navPage"}`}
          onClick={() => handlePageChange("form")}
        >
          Form
        </button>
        <button
          className={`navPage ${
            activePage === "window" ? "active" : "navPage"
          }`}
          onClick={() => handlePageChange("window")}
        >
          Window-width
        </button>
      </div>
    </div>
  );
};

export default Header;
