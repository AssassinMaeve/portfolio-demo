"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Define handlers so we can reference them for removal
    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    window.addEventListener("mousemove", mouseMove);

    const interactiveEls = document.querySelectorAll("a, button");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      // Now we can correctly remove the listeners
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
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
