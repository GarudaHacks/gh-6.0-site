import Container from "./Container"
import Link from "next/link"
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa"

function Footer() {
  return (
    <footer className="w-full py-8 bg-gradient-to-r from-[#001745] to-[#FF0068]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-4">Garuda Hacks 6.0</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-gray-300">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <FaLinkedin size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <FaFacebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
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
                <li className="text-gray-300">Universitas Multimedia Nusantara</li>
                <li className="text-gray-300">Tangerang, Indonesia</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-600">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Garuda Hacks. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 text-sm hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 text-sm hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

