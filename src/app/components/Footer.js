// This directive marks the component as a "Client Component", which is necessary
// because it uses React hooks (useEffect, useRef, useState) that interact with the browser.
"use client";

// We import three hooks from React:
// - useEffect: To run side effects, like setting up an observer after the component renders.
// - useRef: To get a direct reference to a DOM element (our footer).
// - useState: To manage a piece of state (whether the footer is visible or not).
import { useEffect, useRef, useState } from "react";

// This is our Footer component.
export default function Footer() {
  // 1. Create a ref. 'footerRef' will act as a pointer to our <footer> DOM element.
  // It starts as null and React will set it to the element once it's rendered.
  const footerRef = useRef(null);

  // 2. Create a state variable. 'visible' will be true or false.
  // We'll use this to control the footer's animation classes. It starts as 'false'.
  const [visible, setVisible] = useState(false);

  // 3. Set up a side effect that runs once after the component mounts.
  // The empty array [] at the end tells React to only run this effect once.
  useEffect(() => {
    // ** THE FIX IS HERE **
    // We store the current value of the ref in a variable. This ensures that the cleanup
    // function has a stable reference to the same element, preventing potential issues.
    const footerElement = footerRef.current;

    // The IntersectionObserver is a browser API that efficiently watches for
    // when an element enters or leaves the screen (the "viewport").
    const observer = new IntersectionObserver(
      // This is the callback function that runs whenever the visibility changes.
      (entries) => {
        // 'entries' is an array of all elements being observed (we only have one).
        // 'entry.isIntersecting' is a boolean: true if the element is on screen, false if not.
        // We update our 'visible' state based on this value.
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      // These are the observer's options.
      // 'threshold: 0.2' means the callback will trigger when 20% of the footer is visible.
      { threshold: 0.2 }
    );

    // We tell the observer to start watching our footer element, using our stable variable.
    if (footerElement) {
      observer.observe(footerElement);
    }

    // This is the cleanup function. It runs when the component is unmounted.
    // It's important to stop observing to prevent memory leaks.
    return () => {
      // We use the same stable variable to unobserve the element.
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []); // The empty array ensures this effect only runs on mount and unmount.

  // The JSX that gets rendered to the screen.
  return (
    <footer
      // We attach our ref to the footer element here.
      ref={footerRef}
      // These classes control the fade-in animation.
      // We use a template literal to dynamically add classes based on the 'visible' state.
      className={`w-full bg-black text-white py-20 px-6 md:px-10 transition-all duration-1000 ease-out ${
        // This is a ternary operator (a shorthand if/else statement).
        // IF 'visible' is true, it adds classes to make it opaque and in its final position.
        // ELSE, it adds classes to make it transparent and shifted down by 20 units.
        // The 'transition-all' class handles the smooth animation between these two states.
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div>
        {/* LEFT SIDE CONTENT */}
        <div className="max-w md:pl-20">
          <p className="text-3xl md:text-5xl pt-5 font-semibold pb-5 leading-snug">
            Lorem ipsum dolor sit amet, consectetur Sed
            <br /> Sed do eiusmod tempor incididunt minim
          </p>

          {/* "Get in Touch" Button and "Available Now" Status */}
          <div className="flex items-center gap-5 flex-wrap">
            <button className="px-6 py-2 text-black transition duration-300 bg-gray-100 text-lg md:text-xl hover:bg-black hover:text-white">
              Get in Touch
            </button>

            {/* A decorative dot with a pulsing halo effect */}
            <div className="relative w-3 h-3">
              {/* The growing & fading halo (the animation is defined in your CSS) */}
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-100 animate-slow-ping"></span>
              {/* The static dot in the center */}
              <span className="relative block w-3 h-3 bg-white rounded-full"></span>
            </div>
            <span className="text-white font-semibold">Available Now</span>
          </div>
        </div>
      </div>

      {/* Bottom Section with Contact Info, Credit, and Copyright */}
      <div className="w-full mx-auto flex flex-col md:flex-row px-0 md:px-20 items-center justify-between text-base gap-6 md:gap-0 mt-10">
        {/* Left: Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-medium">+91 88888 88888</span>
          <span className="font-medium">example@example.com</span>
        </div>

        {/* Center: Developer Credit */}
        <div className="text-center font-medium">
          Designed & Developed <br /> by Maeve Fernandes
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right font-medium">
          OPEN SOURCE, <br /> ASSASSINMAEVE ©2025
        </div>
      </div>
    </footer>
  );
}