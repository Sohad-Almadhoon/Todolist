import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

export default function App() {
  const [data, setData] = useState("");
  const [Item, Add] = useState([]);
  function UpdateData(event) {
    setData(event.target.value);
  }
  function AddItems() {
    Add((prev) => {
      return data !== "" ?[...prev, data]:[...prev];
    });
    setData("");
  }
  function deleteItem(id) {
    Add((prev) => {
      return prev.filter((el, index) => index !== id);
    }); 
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea update={UpdateData} value={data} addItems={AddItems} />
      <div>
        <ul>
          {Item.map((e, index) => (
            <ToDoItem key={index} onChecked={deleteItem} text={e} id={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
