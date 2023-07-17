import React, { useEffect, useState } from "react";
import { Sidebar } from "../Components/sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const HomePage = () => {
  const navigate = useNavigate();
  const [board, setBoard] = useState([]);
  
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "8rem", border: "0.1em solid black" }}>
        <Sidebar />
      </div>
      <div style={{ border: "0.1em solid red" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "3rem",
            alignContent: "flex-start",
            border: "0.1em solid green",
          }}
        >
          <div style={{ paddingRight: "39rem" }}>
            <h1>Board Name</h1>
          </div>
          <div>
            <button>Add New Task</button>
          </div>
        </div>
        <div>List</div>
      </div>
    </div>
  );
};
