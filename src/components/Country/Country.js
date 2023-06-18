import React from "react";

const Country = (props) => {
  return (
    <div>
      <h4>Name: {props.name}</h4>
      <p>Population: {props.population}</p>
    </div>
  );
};

export default Country;
