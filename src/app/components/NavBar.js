"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger & close icons

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-20 py-4 bg-white text-black border-b border-gray-200">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        My Portfolio
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 font-semibold">
        <Link
          href="/"
          className="px-3 py-2 rounded-lg transition duration-300 hover:bg-black hover:text-white"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="px-3 py-2 rounded-lg transition duration-300 hover:bg-black hover:text-white"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="px-3 py-2 rounded-lg transition duration-300 hover:bg-black hover:text-white"
        >
          Projects
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-200 flex flex-col items-center gap-6 py-6 font-semibold md:hidden z-50">
          <Link
            href="/"
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
