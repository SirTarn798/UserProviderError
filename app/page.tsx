"use client"

import { useUser } from "./component/UserProvider";
import { useEffect } from "react";

export default function Home() {

  const {id} = useUser();
  useEffect(() => {
    console.log(id);
  }, [id])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome</h1>
    </main>
  );
}
