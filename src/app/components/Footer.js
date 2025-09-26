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
      className={`w-full bg-black text-white py-20 px-6 md:px-10 transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div>
        {/* LEFT SIDE */}
        <div className="max-w md:pl-20">
          <p className="text-3xl md:text-5xl pt-5 font-semibold pb-5 leading-snug">
            Lorem ipsum dolor sit amet, consectetur Sed
            <br /> Sed do eiusmod tempor incididunt minim
          </p>

          <div className="flex items-center gap-5 flex-wrap">
            <button className="px-6 py-2 text-black transition duration-300 bg-gray-100 text-lg md:text-xl hover:bg-black hover:text-white">
              Get in Touch
            </button>

            {/* Dot wrapper */}
            <div className="relative w-3 h-3">
              {/* Growing & fading halo */}
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-100 animate-slow-ping"></span>
              {/* Static dot */}
              <span className="relative block w-3 h-3 bg-white rounded-full"></span>
            </div>
            <span className="text-white font-semibold">Available Now</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
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