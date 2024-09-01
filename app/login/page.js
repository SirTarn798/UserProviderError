"use client"

import { useState, useEffect } from "react";
import { useUser } from "../component/UserProvider";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { id, setId } = useUser();

  useEffect(() => {
    console.log(id); // This will log the updated id whenever it changes
  }, [id]);

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (response.status === 201) {
        setId("xdd");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={login} className="flex flex-col gap-20 text-black">
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="password at least 8 characters"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          type="submit"
          className="text-white"
          disabled={password.length < 8}
        >
          Login
        </button>
      </form>
    </div>
  );
}
