import React from "react";
import "./card.less";

const CardView = props => {
  console.log(props);
  return (
    <div className="card">
      <div className="card-block">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.summary}</p>
      </div>
    </div>
  );
};

export default CardView;
