"use client";
import { useState } from "react";
import "./style.css";

export default function Home() {
  const [index, setNumber] = useState(0);
  function minusNumber() {
    setNumber(index - 1);
  }

  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => setNumber(index + 1)} style={{ color: "black" }}>
        plus
      </button>
      <button onClick={minusNumber}>minus</button>
      <div style={{ color: "white" }}>= {index}</div>
    </div>
  );
}
