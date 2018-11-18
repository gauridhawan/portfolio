import React from "react";
import _ from "lodash";
import { projects } from "./constants/conf";
import CardView from "../card/index";

const CardGroup = () => {
  const CardList = _.map(projects, (obj, index) => {
    return (
      <CardView
        imgSrc={obj.imgSrc}
        title={obj.title}
        summary={obj.summary}
        key={index}
      />
    );
  });
  return <div className="card-columns">{CardList}</div>;
};
export default CardGroup;
