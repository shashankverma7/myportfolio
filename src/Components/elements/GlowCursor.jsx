import React, { useEffect, useState } from "react";

export default function GlowCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-8 h-8 bg-pink-500/40 rounded-full pointer-events-none blur-xl"
      style={{
        transform: `translate(${pos.x - 16}px, ${pos.y - 16}px)`,
        transition: "transform 0.05s linear",
      }}
    />
  );
}
