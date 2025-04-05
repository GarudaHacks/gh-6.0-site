import React from 'react'
import Container from '../components/Container'

const description = "Garuda Hacks 6.0 challenges participants to build solutions that bring Indonesia’s ideals closer to its lived reality. Whether through sustainability, cultural preservation, or civic engagement, this hackathon is about transforming narratives into tangible impact."

// This section contains information regarding Garuda Hacks' core mission and values
// Particularly, what hackers can expect from GH 6.0, and pictures from previous years
function About() {
  return (
    <section id="about">
      <Container>
        <div className="text-center text-md font-semibold min-h-[75vh]">
          <div className="flex flex-col items-center justify-center">
            <span className="block text-6xl font-bold">identity</span>
            <div className="pt-2">through</div>
            <span className="block text-6xl font-bold">innovation</span>
          </div>
          <div className="flex flex-col items-center justify-center py-4 max-w-[75vh]">
            <p className="text-md font-semibold">{description}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About