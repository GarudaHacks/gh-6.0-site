import React from 'react'
import Image from 'next/image'
import ApplyButton from './ApplyButton'

function Navbar() {
  return (
    <nav className="px-8 py-6 fixed flex flex-row w-screen justify-between">
        <ul className="flex flex-row space-x-6 items-center">
            <a href="#hero">
                <Image 
                    src="/images/logo/ghq.png"
                    alt="Garuda Hacks logo"
                    width={25}
                    height={55}
                />
            </a>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#stories">Stories</a>
            </li>
            <li>
                <a href="#sponsors">Sponsors</a>
            </li>
            <li>
                <a href="#faq">FAQ</a>
            </li>
        </ul>
        <ApplyButton />
    </nav>
  )
}

export default Navbar