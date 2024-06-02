import "./App.css";
import Header from "./myComponents/Header";
import { Cards } from "./myComponents/Cards";
import React, { useState, useEffect } from "react";

function App() {

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Flower",
      desc: "This is a flower",
      img: "1.jpg",
    },
    {
      sno: 2,
      title: "Lotus",
      desc: "Sacred, aquatic plant; symbolic purity and enlightenment.",
      img: "2.jpg",
    },
    {
      sno: 3,
      title: "Rose",
      desc: "Classic, fragrant; symbol of love.",
      img: "3.jpg",
    },
    {
      sno: 4,
      title: "Sunflower",
      desc: "Tall, cheerful; large, sunny blooms.",
      img:"4.jpg",
    },
    {
      sno: 5,
      title: "Jasmine",
      desc: "Sweet, fragrant; night-blooming flowers.",
      img:"5.jpg",
    },
    {
      sno: 6,
      title: "Rose",
      desc: "Elegant, fragrant; timeless symbol of affection.",
      img:"6.jpg",
    },
    {
      sno: 7,
      title: "Geranium",
      desc: "Bright, clustered blooms; hardy plant.",
      img:"7.jpg",
    },
    {
      sno: 8,
      title: "Daisy",
      desc: "Simple, white petals; sunny center.",
      img:"8.jpg",
    },
    {
      sno: 9,
      title: "Peony",
      desc: "Lush, multi-petaled; richly fragrant.",
      img:"9.jpg",
    },
    {
      sno: 12,
      title: "calla lily",
      desc: "Elegant, trumpet-shaped flower; vibrant, smooth petals.",
      img:"12.jpg",
    },
    {
      sno: 13,
      title: "Tulip",
      desc: "Bright, cup-shaped; springtime favorite.",
      img:"13.jpg",
    },
    {
      sno: 14,
      title: "Cherry Blossom",
      desc: "Delicate, pink flowers; fleeting beauty.",
      img:"14.jpg",
    },
  ]);

  return (
    <>
      <Header title="My Todo App" searchBar={true} />
      <Cards todos={todos} />
    </>
  );
}

export default App;
