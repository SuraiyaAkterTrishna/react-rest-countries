import React from "react";
import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
  /* const cosmetics = [
        {id: 1, name: 'Alta', price: 100},
        {id: 2, name: 'Churi', price: 200},
        {id: 3, name: 'Nailpolis', price: 300},
        {id: 4, name: 'Lipstick', price: 400},
        {id: 5, name: 'Ring', price: 500},
    ]; */
  const cosmetics = [
    {
      _id: "6490392ea9406573b3409e4e",
      price: 27,
      name: "Hodges Alexander",
    },
    {
      _id: "6490392ecd78ae8d7bbb08bd",
      price: 26,
      name: "Geraldine Bauer",
    },
    {
      _id: "6490392e7bf1e9f380b52a2b",
      price: 146,
      name: "Shannon Newman",
    },
    {
      _id: "6490392e2a65f942db51f978",
      price: 188,
      name: "Lacey Cox",
    },
    {
      _id: "6490392e7f33806b08a82f3b",
      price: 263,
      name: "Graves Landry",
    },
    {
      _id: "6490392ed05604d4838dd617",
      price: 32,
      name: "Bartlett Hayes",
    },
    {
      _id: "6490392e3ebe599ccc993d32",
      price: 222,
      name: "Caitlin Wong",
    },
  ];
  return (
    <div>
      {cosmetics.map((cosmetic) => (
        <Cosmetic cosmetic={cosmetic}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
