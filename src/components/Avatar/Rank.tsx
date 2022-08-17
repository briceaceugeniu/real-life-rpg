import React from "react";

interface PropsInterface {
  level: number;
  rank_name: string;
}

const Rank = (props: PropsInterface) => {
  const imgSrc = require(`./../../img/${props.level}.jpg`);
  return (
    <div className={`d-flex f-end`}>
      <span>
        <img
          className={`rank-img`}
          src={imgSrc}
          alt={`Rang: ${props.rank_name}`}
        />
      </span>
    </div>
  );
};

export default Rank;
