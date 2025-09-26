"use client";

import NavBar from "./components/NavBar";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  const email = "example@example.com";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <main className="bg-white">
      <NavBar />
      {/* Section 1: Hero */}
      {/* Responsive: Changed to flex-col for mobile, reverting to flex-row on large screens. */}
      {/* Responsive: Adjusted padding, margins, and text sizes for mobile and desktop. */}
      <section className="mt-10 lg:mt-20 lg:ml-50 flex flex-col lg:flex-row justify-between items-start px-6 lg:px-20">
        {/* LEFT SIDE */}
        <div>
          {/* Responsive: Smaller text on mobile, larger on desktop */}
          <h1 className="text-6xl lg:text-9xl font-bold">MY</h1>
          <h1 className="text-6xl lg:text-9xl font-bold">PORTFOLIO</h1>

          <div className="flex items-center gap-2 mt-8 lg:mt-30">
            {/* Responsive: Smaller text on mobile */}
            <h1 className="text-xl lg:text-2xl font-semibold">{email}</h1>
            <button
              onClick={copyToClipboard}
              className="p-1 hover:text-blue-500 transition"
              aria-label="Copy email"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        {/* Responsive: Added margin-top on mobile for spacing */}
        <div className="max-w mt-10 lg:mt-0">
           {/* Responsive: Smaller text on mobile, larger on desktop */}
          <p className="text-3xl lg:text-5xl lg:pt-90 font-semibold ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            <br></br>Sed do eiusmod tempor incididunt of <br></br>Ut enim ad
            minim veniam, quis nostrud<br></br> remote. Lorem Ipsum
          </p>
        </div>
      </section>

      {/* Section 2: Work */}
      <div className="max-w text-black border-b border-gray-200 pt-15"></div>
      {/* Responsive: Adjusted padding for mobile */}
      <div className="flex items-center justify-between px-6 lg:px-20 pt-10">
        <h6 className="text-4xl font-semibold" id="projects">
          work.
        </h6>
        <button className="px-3 py-2 transition duration-300 bg-gray-100 text-1xl hover:bg-black hover:text-white">
          Show More
        </button>
      </div>

      <div>
        {/* Responsive: Changed to grid layout for responsiveness. 1 column on mobile, 2 on desktop. */}
        <section className="mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 px-6 lg:px-20">
          {/* Project 1 */}
          {/* Responsive: Removed fixed width/height to allow grid to control sizing */}
          <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg group">
            <img
              className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
              src="/images/image-1.jpg"
              alt="Project 1"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition duration-500">
              <h3 className="text-white text-2xl font-semibold">Project 1</h3>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg group">
            <img
              className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
              src="/images/image-2.jpg"
              alt="Project 2"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition duration-500">
              <h3 className="text-white text-2xl font-semibold">Project 2</h3>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg group">
            <img
              className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
              src="/images/image-3.jpg"
              alt="Project 3"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition duration-500">
              <h3 className="text-white text-2xl font-semibold">Project 3</h3>
            </div>
          </div>

          {/* Project 4 */}
          <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg group">
            <img
              className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
              src="/images/image-4.jpg"
              alt="Project 4"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition duration-500">
              <h3 className="text-white text-2xl font-semibold">Project 4</h3>
            </div>
          </div>
        </section>

        {/* Section 3: About */}
        <div
          className="max-w text-black border-b border-gray-200 pt-15"
          id="about"
        ></div>
        {/* Responsive: Adjusted padding */}
        <div className="flex items-center justify-between px-6 lg:px-20 pt-10">
          <h6 className="text-4xl pt-15 pb-15 font-semibold">about.</h6>
          <button className="px-3 py-2 transition duration-300 bg-gray-100 text-1xl hover:bg-black hover:text-white">
            Show More
          </button>
        </div>

        <div>
          {/* LEFT SIDE */}
          <div className="max-w">
            {/* Responsive: Adjusted text size and padding for mobile */}
            <p className="text-3xl lg:text-5xl pt-5 px-6 lg:pl-20 font-semibold pb-10 lg:pb-25">
              Lorem ipsum dolor sit amet, consectetur
              <br></br>Sed do eiusmod tempor incididunt<br></br>Ut enim ad
              minim<br></br> remote. Lorem Ipsum enim
            </p>
          </div>
        </div>

        {/* Profile Picture Section */}
        {/* Responsive: Stacks vertically on mobile, removes large margin, centers content. */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:ml-180 mb-20 lg:mb-40 gap-10 px-6 lg:px-0">
          {/* Image */}
          {/* Responsive: Smaller image on mobile */}
          <div className="relative w-48 h-48 lg:w-130 lg:h-100 overflow-hidden shadow-lg group rounded-lg">
            <img
              className="w-full h-full object-cover object-center lg:object-right transform transition duration-500 group-hover:scale-110"
              src="/images/image-1.jpg"
              alt="Profile Picture"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition duration-500">
              <h3 className="text-white text-2xl font-semibold">
                Profile Picture
              </h3>
            </div>
          </div>

          {/* Text about yourself */}
          {/* Responsive: Text centered on mobile */}
          <div className="max-w text-center lg:text-left">
            <p className="text-base lg:text-1xl font-semibold leading-snug">
              Lorem ipsum dolor sit amet, consectetur
              <br />
              Sed do eiusmod tempor incididunt
              <br />
              Ut enim ad minim
              <br />
              remote. Lorem Ipsum enim
            </p>
          </div>
        </div>
        <Footer></Footer>
      </div>
      
      <Analytics></Analytics>
      <SpeedInsights></SpeedInsights>
    </main>
  );
}