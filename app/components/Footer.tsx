"use client"

import Container from "./Container"
import Link from "next/link"
import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaMediumM } from "react-icons/fa"

function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  return (
    <footer className="w-full py-8 bg-gradient-to-r from-[#001745] to-[#FF0068]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-4xl md:text-2xl font-bold text-white mb-4">Garuda Hacks 6.0</h3>
            <div className="flex mt-4 md:mt-0 justify-between px-10 md:px-0 md:justify-start gap-4">
              <Link href="https://www.instagram.com/garudahacks" className="text-white hover:text-neutral-300">
                <FaInstagram size={isMobile ? 40 : 30} />
              </Link>
              <Link href="https://www.linkedin.com/company/garudahacks/?originalSubdomain=id" className="text-white hover:text-neutral-300">
                <FaLinkedin size={isMobile ? 40 : 30} />
              </Link>
              <Link href="https://www.facebook.com/GarudaHacks/" className="text-white hover:text-neutral-300">
                <FaFacebook size={isMobile ? 40 : 30} />
              </Link>
              <Link href="https://medium.com/garuda-hq-archives" className="text-white hover:text-neutral-300">
                <FaMediumM size={isMobile ? 40 : 30} />
              </Link>
            </div>
          </div>

          <div className="md:flex flex-col md:flex-row gap-8 hidden">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-300 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#tracks" className="text-gray-300 hover:text-white">
                    Tracks
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-300 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-300">info@garudahacks.com</li>
                <li className="text-gray-300">Tangerang, Indonesia</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-gray-400 flex justify-center items-center pt-6 border-t border-gray-600">
          &copy; {new Date().getFullYear()} Garuda Hacks. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}

export default Footer

