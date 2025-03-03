import React from "react";
import NavBar from "../components/NavBar";
import "../styles/tailwind.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1 className="text-center text-3xl font-bold mt-5">Welcome to the Quotes Website</h1>
    </div>
  );
}

