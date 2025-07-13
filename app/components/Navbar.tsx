"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "./Container";
import { LazyLoadImage } from "react-lazy-load-image-component";

const APPLICATIONS_OPEN = false; // Set to true when applications are open

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = window.innerHeight * 0.18;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all font-semibold duration-500 ${
        isScrolled ? "bg-transparent backdrop-blur-lg" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Container className="max-w-full px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <LazyLoadImage
              src="/images/logo/ghq.png"
              alt="Garuda Hacks logo"
              width={25}
              height={55}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 transition-all duration-200">
            <Link
              href="/"
              onClick={(e) => handleScrollToSection(e, "home")}
              className="text-white hover:text-[#FF0068] transition"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={(e) => handleScrollToSection(e, "about")}
              className="text-white hover:text-[#FF0068] transition"
            >
              About
            </Link>
            <Link
              href="#projects"
              onClick={(e) => handleScrollToSection(e, "projects")}
              className="text-white hover:text-[#FF0068] transition"
            >
              Projects
            </Link>
            <Link
              href="#tracks"
              onClick={(e) => handleScrollToSection(e, "tracks")}
              className="text-white hover:text-[#FF0068] transition"
            >
              Tracks
            </Link>
            {/* <Link
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
            </Link> */}
            {/* TODO: Add judges and sponsors once confirmed */}
            <Link
              href="#faq"
              onClick={(e) => handleScrollToSection(e, "faq")}
              className="text-white hover:text-[#FF0068] transition"
            >
              FAQ
            </Link>
            <Link
              href="https://2024.garudahacks.com/"
              className="text-white hover:text-[#FF0068] transition"
            >
              2024
            </Link>
          </nav>

          {/* Apply Button */}
          <div className="hidden md:block">
            <a
              href="https://portal.garudahacks.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={`px-6 py-2 rounded-full text-white font-semibold hover:bg-opacity-90 transition ${
                  APPLICATIONS_OPEN
                    ? "cursor-pointer bg-[#FF0068]"
                    : "cursor-not-allowed bg-[#FF0068] opacity-80"
                }`}
                disabled={!APPLICATIONS_OPEN}
              >
                {APPLICATIONS_OPEN ? "Apply Now" : "Coming Soon"}
              </button>
            </a>
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
          <div className="md:hidden bg-transparent backdrop-blur-lg bg-opacity-95 fixed top-[72px] left-0 right-0 p-4 px-8">
            <nav className="flex flex-col space-y-8 text-lg">
              <Link
                href="/"
                onClick={(e) => handleScrollToSection(e, "home")}
                className="text-white hover:text-[#FF0068] transition"
              >
                Home
              </Link>
              <Link
                href="#about"
                onClick={(e) => handleScrollToSection(e, "about")}
                className="text-white hover:text-[#FF0068] transition"
              >
                About
              </Link>
              <Link
                href="#tracks"
                onClick={(e) => handleScrollToSection(e, "tracks")}
                className="text-white hover:text-[#FF0068] transition"
              >
                Tracks
              </Link>
              {/* <Link
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
              </Link> */}
              <Link
                href="#faq"
                onClick={(e) => handleScrollToSection(e, "faq")}
                className="text-white hover:text-[#FF0068] transition"
              >
                FAQ
              </Link>
              <Link
                href="https://2024.garudahacks.com/"
                className="text-white hover:text-[#FF0068] transition"
              >
                2024
              </Link>
              <button className="px-6 py-2 bg-[#FF0068] text-white font-semibold rounded-md hover:bg-opacity-90 transition w-full">
                {APPLICATIONS_OPEN ? "Apply Now" : "Coming Soon"}
              </button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;
