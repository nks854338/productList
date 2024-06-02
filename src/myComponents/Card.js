import React from "react";

export const Card = ({ todo }) => {
  return (
    <div className="box">
      <div className="card">
        <img src={todo.img} />
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
      </div>
    </div>
  );
};
