// This directive tells Next.js that this is a "Client Component".
// Client Components can use interactive features like state and event listeners (e.g., useState, onClick).
"use client";

// Import the Link component from Next.js for client-side navigation.
// This is better than a regular <a> tag because it doesn't trigger a full page refresh.
import Link from "next/link";

// Import the 'useState' hook from React. This lets us add a "state" variable to our component.
// State is data that can change over time and cause the component to re-render.
import { useState } from "react";

// Import pre-made icon components for the hamburger menu and the close 'X' button.
import { Menu, X } from "lucide-react";

// This is the main function defining our NavBar component.
export default function NavBar() {
  // Here we initialize our state.
  // 'isOpen' is the state variable that will track if the mobile menu is open or closed.
  // 'setIsOpen' is the function we'll use to update its value.
  // We start with 'false' because the menu should be closed by default.
  const [isOpen, setIsOpen] = useState(false);

  // The 'return' statement contains the JSX (HTML-like code) that will be rendered.
  return (
    <nav className="flex items-center justify-between px-6 md:px-20 py-4 bg-white text-black border-b border-gray-200">
      {/* Logo Section */}
      {/* This Link component will navigate the user back to the homepage. */}
      <a href="/" className="text-2xl font-bold">
        My Portfolio
      </a>

      {/* Desktop Menu */}
      {/* This div is hidden by default ("hidden") and only becomes a flex container ("md:flex") on medium-sized screens and larger. */}
      {/* This is how we make the menu responsive: it only shows up on desktops. */}
      <div className="hidden md:flex gap-10 font-semibold">
        <a
          href="/"
          className="px-3 py-2 rounded-lg transition duration-300 hover:bg-black hover:text-white"
        >
          Home
        </a>
        <a
          href="#about"
          className="px-3 py-2 rounded-lg transition duration-300 hover:bg-black hover:text-white"
        >
          About
        </a>
        <a
          href="#projects"
          className="px-3 py-2 rounded-lg transition duration-300 hover:bg-black hover:text-white"
        >
          Projects
        </a>
      </div>

      {/* Mobile Menu Button (Hamburger Icon) */}
      {/* This button is only visible on small screens ("md:hidden" hides it on medium screens and up). */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        // When the button is clicked, we update the 'isOpen' state to be the opposite of its current value.
        // This toggles the menu open and closed.
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* This is a ternary operator, a shorthand for an if/else statement. */}
        {/* IF 'isOpen' is true, show the 'X' icon. ELSE, show the 'Menu' icon. */}
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {/* This is a conditional render. The '&&' means "if 'isOpen' is true, then render the div". */}
      {/* If 'isOpen' is false, this entire block of code will not be rendered. */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-200 flex flex-col items-center gap-6 py-6 font-semibold md:hidden z-50">
          <Link
            href="/"
            // When a link in the mobile menu is clicked, we also close the menu.
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-lg transition duration-300 hover:bg-black hover:text-white"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-lg transition duration-300 hover:bg-black hover:text-white"
          >
            About
          </Link>
          <Link
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-lg transition duration-300 hover:bg-black hover:text-white"
          >
            Projects
          </Link>
        </div>
      )}
    </nav>
  );
}