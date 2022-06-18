// import { useState } from "react";
export default function ToDoItem(props) {
    return (
      <div className="list-item">
            <li>{props.text}</li>
            <button onClick={() => props.onChecked(props.id)}><span>❌</span></button>
      </div>
    );
}

//   const [flag, setflag] = useState(0);
//   function line() {
//     setflag(1);
//   }
//  style={{ textDecoration: flag && "line-through" }}>
