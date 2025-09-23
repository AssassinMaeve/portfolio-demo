"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    const interactiveEls = document.querySelectorAll("a, button");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovering(true));
      el.addEventListener("mouseleave", () => setHovering(false));
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", () => setHovering(true));
        el.removeEventListener("mouseleave", () => setHovering(false));
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 rounded-full pointer-events-none transition-all duration-200 ease-out z-[999999]`}
      style={{
        width: hovering ? "3rem" : "2rem",
        height: hovering ? "3rem" : "2rem",
        backgroundColor: "white",
        mixBlendMode: "difference",
        transform: `translate3d(${position.x - 24}px, ${position.y - 24}px, 0)`,
      }}
    />
  );
}
