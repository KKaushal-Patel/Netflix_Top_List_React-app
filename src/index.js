import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import data from "./SeriesData";
import "./index.css";

ReactDOM.render(
  <>
    <h2>List Of Top Netflix Series</h2>
    {data.map((cVal) => {
      return (
        <Card
          aname={cVal.aname}
          imgSrc={cVal.imgSrc}
          title={cVal.title}
          link={cVal.link}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
