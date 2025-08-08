import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    document.body.style.cursor = "none"; // Hide default
    window.addEventListener("mousemove", move);
    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fixed pointer-events-none"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: "transform 0.06s linear",
        zIndex: 9999,
      }}
    >
      {/* Main arrow body */}
      <path
        d="M2 2 L18 12 L12 14 L14 20 L10 20 L8 14 L2 12 Z"
        fill="#1e90ff"
        stroke="#ffffff"
        strokeWidth="1.5"
        style={{
          filter: "drop-shadow(0 0 4px rgba(30,144,255,0.6))",
        }}
      />
    </svg>
  );
}
