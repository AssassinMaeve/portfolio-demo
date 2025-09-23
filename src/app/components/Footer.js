"use client";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      { threshold: 0.2 } // trigger when 20% of footer is visible
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`w-full bg-black text-white py-20 px-10 transition-all duration-1000 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Thanks for visiting ✨</h2>
        <p className="text-lg text-gray-300">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>

      <div>
        {/* LEFT SIDE */}
        <div className="max-w">
          <p className="text-5xl pt-5 pl-20 font-semibold pb-25">
             Lorem ipsum dolor sit amet, consectetur Sed
            <br></br>Sed do eiusmod tempor incididunt minim<br></br>
          </p>
           <button className="px-3 py-2   transition duration-300 bg-gray-100 text-1xl hover:bg-black hover:text-white">
            Get in Touch
        </button>
        </div>
      </div>

     

    </footer>
  );
}
