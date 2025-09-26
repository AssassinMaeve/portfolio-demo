// This directive tells Next.js that this is a "Client Component".
// We need this because we are using React hooks (useState) and browser-specific
// features (like navigator.clipboard) that require interactivity in the browser.
"use client";

// Import components that make up our page layout.
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Import icons from the lucide-react library.
import { Copy, Check } from "lucide-react";

// Import the 'useState' hook from React to manage state within our component.
import { useState } from "react";

// Import Analytics and Speed Insights components from Vercel's helper libraries.
// These will automatically track website traffic and performance when deployed to Vercel.
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

// This is the main component for our homepage.
export default function Home() {
  // A simple constant to hold the email address.
  const email = "example@example.com";

  // We create a state variable 'copied' to track if the email has been copied.
  // It starts as 'false'. We'll use this to switch between the 'Copy' and 'Check' icons.
  const [copied, setCopied] = useState(false);

  // This is an asynchronous function to handle the copy-to-clipboard logic.
  const copyToClipboard = async () => {
    try {
      // The 'navigator.clipboard.writeText' is a modern browser API to write text to the clipboard.
      // We 'await' it because it returns a Promise.
      await navigator.clipboard.writeText(email);

      // If successful, we update the state to 'true' to show the checkmark icon.
      setCopied(true);

      // To provide good user feedback, we set a timer to switch the icon back
      // to the 'Copy' icon after 2 seconds (2000 milliseconds).
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // If there's an error (e.g., browser doesn't support the API), we log it to the console.
      console.error("Failed to copy email: ", err);
    }
  };

  // The JSX that defines the structure and content of the page.
  return (
    <main className="bg-white">
      <NavBar />
      
      {/* Section 1: Hero */}
      <section className="mt-10 lg:mt-20 lg:ml-50 flex flex-col lg:flex-row justify-between items-start px-6 lg:px-20">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-6xl lg:text-9xl font-bold">MY</h1>
          <h1 className="text-6xl lg:text-9xl font-bold">PORTFOLIO</h1>

          <div className="flex items-center gap-2 mt-8 lg:mt-30">
            <h1 className="text-xl lg:text-2xl font-semibold">{email}</h1>
            {/* This button triggers our copy function when clicked. */}
            <button
              onClick={copyToClipboard}
              className="p-1 hover:text-blue-500 transition"
              aria-label="Copy email"
            >
              {/* A ternary operator to conditionally render the correct icon. */}
              {/* IF 'copied' is true, show 'Check'. ELSE, show 'Copy'. */}
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="mt-10 lg:mt-0">
          <p className="text-3xl lg:text-5xl lg:pt-90 font-semibold ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            <br></br>Sed do eiusmod tempor incididunt of <br></br>Ut enim ad
            minim veniam, quis nostrud<br></br> remote. Lorem Ipsum
          </p>
        </div>
      </section>

      {/* Section 2: Work */}
      <div className="text-black border-b border-gray-200 pt-15"></div>
      <div className="flex items-center justify-between px-6 lg:px-20 pt-10">
        <h6 className="text-4xl font-semibold" id="projects">
          work.
        </h6>
        <button className="px-3 py-2 transition duration-300 bg-gray-100 text-1xl hover:bg-black hover:text-white">
          Show More
        </button>
      </div>

      <div>
        {/* Grid of project cards */}
        <section className="mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 px-6 lg:px-20">
          {/* Project 1 */}
          <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg group">
            <Image
              className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
              src="/images/image-1.jpg"
              alt="Project 1"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition duration-500">
              <h3 className="text-white text-2xl font-semibold">Project 1</h3>
            </div>
          </div>
          {/* ... other projects ... */}
          <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg group">
            <Image
              className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
              src="/images/image-2.jpg"
              alt="Project 2"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition duration-500">
              <h3 className="text-white text-2xl font-semibold">Project 2</h3>
            </div>
          </div>
          <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg group">
            <Image
              className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
              src="/images/image-3.jpg"
              alt="Project 3"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition duration-500">
              <h3 className="text-white text-2xl font-semibold">Project 3</h3>
            </div>
          </div>
          <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg group">
            <Image
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
          className="text-black border-b border-gray-200 pt-15"
          id="about"
        ></div>
        <div className="flex items-center justify-between px-6 lg:px-20 pt-10">
          <h6 className="text-4xl pt-15 pb-15 font-semibold">about.</h6>
          <button className="px-3 py-2 transition duration-300 bg-gray-100 text-1xl hover:bg-black hover:text-white">
            Show More
          </button>
        </div>

        <div>
          <div className="max-w">
            <p className="text-3xl lg:text-5xl pt-5 px-6 lg:pl-20 font-semibold pb-10 lg:pb-25">
              Lorem ipsum dolor sit amet, consectetur
              <br></br>Sed do eiusmod tempor incididunt<br></br>Ut enim ad
              minim<br></br> remote. Lorem Ipsum enim
            </p>
          </div>
        </div>

        {/* Profile Picture Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:ml-180 mb-20 lg:mb-40 gap-10 px-6 lg:px-0">
          {/* Image */}
          <div className="relative w-48 h-48 lg:w-130 lg:h-100 overflow-hidden shadow-lg group rounded-lg">
            <Image
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
          <div className="text-center lg:text-left">
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
        <Footer />
      </div>
      
      {/* These components enable Vercel's monitoring tools. They don't render anything visible. */}
      <Analytics />
      <SpeedInsights />
    </main>
  );
}