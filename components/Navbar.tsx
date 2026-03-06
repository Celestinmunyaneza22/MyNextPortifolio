"use client";

import { useState } from "react";
import Link from "next/link";
import { FaUser, FaProjectDiagram, FaFileAlt, FaEnvelope } from "react-icons/fa";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold dark:text-white">
          Celestin
        </Link>

        {/* Desktop Menu */}
<div className="hidden md:flex space-x-6 items-center dark:text-white">

  <Link href="/about" className="flex items-center gap-2 hover:text-blue-500 transition">
    <FaUser /> About
  </Link>

  <Link href="/projects" className="flex items-center gap-2 hover:text-blue-500 transition">
    <FaProjectDiagram /> Projects
  </Link>

  <Link href="/resume" className="flex items-center gap-2 hover:text-blue-500 transition">
    <FaFileAlt /> Resume
  </Link>

  <Link href="/contact" className="flex items-center gap-2 hover:text-blue-500 transition">
    <FaEnvelope /> Contact
  </Link>

</div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 dark:text-white">
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}