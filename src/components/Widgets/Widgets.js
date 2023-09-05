import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Biden strikes again", "Top news - 9099 readers")}
      {newsArticle("Coronavirus : UK updates", "Top news - 1000 readers")}
      {newsArticle("Tesla hits new hights", "Top news - 300 readers")}
      {newsArticle("Is redux to good?", "Top news - 100 readers")}
      {newsArticle("Trump back to office?", "Top news - 10099 readers")}
    </div>
  );
}

export default Widgets;
