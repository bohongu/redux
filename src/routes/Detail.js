import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const toDos = useSelector((state) => state);
  const id = useParams().id;
  const toDoText = toDos.find((toDo) => toDo.id === parseInt(id));
  return (
    <div>
      <h1>{toDoText?.text}</h1>
      <h2>{toDoText?.id}</h2>
    </div>
  );
}

export default Detail;
