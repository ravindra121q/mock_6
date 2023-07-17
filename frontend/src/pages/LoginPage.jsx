import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const obj = { email, password };

    try {
      const response = await axios.post("https://reqres.in/api/login", obj);
      if (response.status === 200) {
        console.log("working");
        const key = true;
        localStorage.setItem("user", JSON.stringify(key));
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
