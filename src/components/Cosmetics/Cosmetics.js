import React, { useEffect, useState } from "react";
import { getTotal } from "../../utilities/reducer";
import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);
  const total = getTotal(cosmetics);
  return (
    <div>
      <h2>Total Price: {total}</h2>
      {cosmetics.map((cosmetic) => (
        <Cosmetic 
        key={cosmetic._id} 
        cosmetic={cosmetic}
        ></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
