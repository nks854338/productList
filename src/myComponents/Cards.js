import React from "react";
import { Card } from "./Card";

export const Cards = (props) => {
  return (
    <div className="container">
      {props.todos.length === 0 ? "No item is present" :
        props.todos.map((todo) => {
          return <Card todo={todo} key={todo.sno}/>
        })
      }
    </div>
  );
};
