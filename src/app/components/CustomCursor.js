// This directive tells Next.js that this component should be treated as a "Client Component".
// This is necessary because it uses browser-specific features and React hooks for interactivity.
"use client";
// We import the 'useEffect' and 'useState' hooks from React.
// - useState: Lets us create and manage state variables that will trigger re-renders when they change.
// - useEffect: Lets us perform "side effects", like adding and removing event listeners.
import { useEffect, useState } from "react";

// This is our main CustomCursor component.
export default function CustomCursor() {
  // 1. STATE MANAGEMENT
  // We create a state variable 'position' to store the mouse's X and Y coordinates.
  // It's initialized to { x: 0, y: 0 }.
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // We create a boolean state 'hovering' to track if the cursor is over an interactive element.
  // It's initialized to 'false'.
  const [hovering, setHovering] = useState(false);

  // 2. SIDE EFFECTS (EVENT LISTENERS)
  // This useEffect hook runs only once when the component is first mounted to the page,
  // because its dependency array `[]` at the end is empty.
  useEffect(() => {
    // This function updates the 'position' state whenever the mouse moves.
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // These are named handler functions. We define them here so we can use the same
    // function reference when adding AND removing the event listeners.
    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    // Add a 'mousemove' listener to the whole window to track the cursor's position.
    window.addEventListener("mousemove", mouseMove);

    // Find all links ('a') and buttons on the page.
    const interactiveEls = document.querySelectorAll("a, button");
    // Loop over each interactive element and add listeners for when the mouse enters or leaves.
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // This is the cleanup function. It runs when the component is unmounted.
    // It's crucial for preventing memory leaks by removing the event listeners we added.
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []); // The empty array ensures this setup and cleanup runs only once.

  // 3. RENDERING THE CURSOR
  // The JSX returned here is the visual element for our custom cursor.
  return (
    <div
      // These are Tailwind CSS classes for styling.
      // - fixed, top-0, left-0: Positions the element relative to the viewport.
      // - rounded-full: Makes it a circle.
      // - pointer-events-none: CRITICAL! Allows clicks to "pass through" the cursor to elements underneath.
      // - transition-all...: Smoothly animates any changes to the cursor's style (like size).
      // - z-[999999]: A very high z-index to make sure the cursor is on top of everything.
      className={`fixed top-0 left-0 rounded-full pointer-events-none transition-all duration-200 ease-out z-[999999]`}
      // We use inline styles for properties that change dynamically.
      style={{
        // This is a ternary operator. If 'hovering' is true, the size is 3rem, otherwise it's 2rem.
        width: hovering ? "3rem" : "2rem",
        height: hovering ? "3rem" : "2rem",
        // The cursor is white and uses 'mix-blend-mode' to invert the colors of content behind it.
        backgroundColor: "white",
        mixBlendMode: "difference",
        // This 'transform' moves the div to the mouse's position. We subtract half the cursor's
        // width/height (e.g., 24px is roughly half of 3rem) to center the circle on the pointer.
        transform: `translate3d(${position.x - 24}px, ${
          position.y - 24
        }px, 0)`,
      }}
    />
  );
}