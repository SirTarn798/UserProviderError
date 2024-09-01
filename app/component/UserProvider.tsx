"use client";

import { useContext, createContext, useState } from "react";
import React from "react";

type User = {
  id: string;
  email: string;
  setId: (id: string) => void;
  setEmail: (email: string) => void;
};

const defaultUser = {
  id:"x",
  email:"x",
  setId: () => {},
  setEmail: () => {}
}

const UserContext = createContext<User>(defaultUser);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [id, setId] = useState<string>("init");
  const [email, setEmail] = useState<string>("init");
  return (
    <UserContext.Provider value={{ id, email, setId, setEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
