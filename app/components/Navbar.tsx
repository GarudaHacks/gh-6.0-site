"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "./Container";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black bg-opacity-80 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <Container className="max-w-full px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/ghq.png"
              alt="Garuda Hacks logo"
              width={25}
              height={55}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-[#FF0068] transition"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-[#FF0068] transition"
            >
              About
            </Link>
            <Link
              href="#tracks"
              className="text-white hover:text-[#FF0068] transition"
            >
              Tracks
            </Link>
            <Link
              href="#judges"
              className="text-white hover:text-[#FF0068] transition"
            >
              Judges
            </Link>
            <Link
              href="#sponsors"
              className="text-white hover:text-[#FF0068] transition"
            >
              Sponsors
            </Link>
            <Link
              href="#faq"
              className="text-white hover:text-[#FF0068] transition"
            >
              FAQ
            </Link>
            <Link
              href="https://2024.garudahacks.com/"
              className="text-white hover:text-[#FF0068] transition"
            >
              Past Events
            </Link>
          </nav>

          {/* Apply Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-[#FF0068] text-white font-semibold rounded-md hover:bg-opacity-90 transition">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-95 fixed top-[72px] left-0 right-0 p-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-[#FF0068] transition"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-white hover:text-[#FF0068] transition"
              >
                About
              </Link>
              <Link
                href="#tracks"
                className="text-white hover:text-[#FF0068] transition"
              >
                Tracks
              </Link>
              <Link
                href="#judges"
                className="text-white hover:text-[#FF0068] transition"
              >
                Judges
              </Link>
              <Link
                href="#sponsors"
                className="text-white hover:text-[#FF0068] transition"
              >
                Sponsors
              </Link>
              <Link
                href="#faq"
                className="text-white hover:text-[#FF0068] transition"
              >
                FAQ
              </Link>
              <Link
                href="https://2024.garudahacks.com/"
                className="text-white hover:text-[#FF0068] transition"
              >
                Past Events
              </Link>
              <button className="px-6 py-2 bg-[#FF0068] text-white font-semibold rounded-md hover:bg-opacity-90 transition w-full">
                Apply Now
              </button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;
