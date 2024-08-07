import React from "react";

export default function PriorityButton({text, setPriority, color}) {
  return (
    <>
      <button onClick={(e) => {
          setPriority(() => text);
        }} className={`border-4 rounded-xl focus:border-white border-black px-3 bg-${color}-800 font-bold hover:bg-${color}-700 py-1`}>{text}</button>
    </>
  );
}
