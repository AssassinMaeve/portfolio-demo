"use client";

import NavBar from "./components/NavBar";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

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
    <main>
      <NavBar />
      <section className="mt-20 ml-50 flex justify-between items-start px-20">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-9xl font-bold">MY</h1>
          <h1 className="text-9xl font-bold">PORTFOLIO</h1>

          <div className="flex items-center gap-2 mt-30">
            <h1 className="text-2xl font-semibold">{email}</h1>
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
        <div className="max-w">
          <p className="text-5xl pt-90 font-semibold ">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit
            <br></br>Sed do eiusmod tempor incididunt of <br></br>Ut enim ad minim veniam, quis nostrud<br></br> remote. Lorem Ipsum
          </p>
        </div>

        
      </section>

      <div className="max-w text-black border-b border-gray-200 pt-15"></div>
      <div className="flex items-center justify-between px-20 pt-10">
        <h6 className="text-4xl font-semibold">work.</h6>
        <button className="px-3 py-2  transition duration-300 bg-gray-100 text-1xl hover:bg-black hover:text-white">
            Show More
        </button>
      </div>

      <div>
        <section className="mt-20 flex gap-10 px-20">
            
            {/* Project 1 */}
            <div className="relative w-250 h-250 overflow-hidden rounded-lg shadow-lg group">
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
            <div className="relative w-250 h-250 overflow-hidden rounded-lg shadow-lg group">
                <img
                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                src="/images/image-2.jpg"
                alt="Project 2"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition duration-500">
                <h3 className="text-white text-2xl font-semibold">Project 2</h3>
                </div>
            </div>


            </section>

            <section className="mt-25 flex gap-10 px-20">
            {/* Project 3 */}
            <div className="relative w-250 h-250 overflow-hidden rounded-lg shadow-lg group">
                <img
                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                src="/images/image-3.jpg"
                alt="Project 3"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition duration-500">
                <h3 className="text-white text-2xl font-semibold">Project 2</h3>
                </div>
            </div>

            {/* Project 4 */}
            <div className="relative w-250 h-250 overflow-hidden rounded-lg shadow-lg group">
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

        <div className="max-w text-black border-b border-gray-200 pt-15"></div>
      <div className="flex items-center justify-between px-20 pt-10">
        <h6 className="text-4xl font-semibold">about.</h6>
        <button className="px-3 py-2  transition duration-300 bg-gray-100 text-1xl hover:bg-black hover:text-white">
            Show More
        </button>
      </div>


      </div>
    </main>
  );
}
