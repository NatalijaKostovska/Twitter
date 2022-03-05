import React from "react";
import { Navbar } from "./components/Navbar";

export const Home = () => {
  return (
    <div className="row">
      <Navbar />
      <main className="col-6" style={{ background: "blue", height: "100vh" }}></main>
      <aside className="col-3" style={{ background: "yellow", height: "100vh" }}></aside>
    </div>
  );
};

