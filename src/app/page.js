"use client";
import Image from "next/image";

export default function Home() {
  let counter = 0;
  const handleClick = () => {
    counter++;
    console.log(counter);
  };
  return (
    <div>
      <button id="button" onClick={handleClick}>
        click
      </button>
      {counter}
    </div>
  );
}
