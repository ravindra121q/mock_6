import axios from "axios";
import React, { useState } from "react";

export const Sidebar = () => {
  const [name, setName] = useState("");
  const addBoard = () => {
    axios
      .post("http://localhost:8080/addBoard", { name })
      .then((res) => console.log("res"));
  };
  return (
    <div>
      <h4>Logo</h4>
      <div>
        <h6>All Boards</h6>
        <div>
          <h6>Board 1</h6>
        </div>
        <div style={{ width: "80%", margin: "auto" }}>
          <h5>Add New Board</h5>
          <input
            style={{ width: "6rem" }}
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={addBoard}>Add</button>
        </div>
      </div>
    </div>
  );
};
