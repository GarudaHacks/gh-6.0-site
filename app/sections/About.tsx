import React from 'react'
import Container from '../components/Container'

// This section contains information regarding Garuda Hacks' core mission and values
// Particularly, what hackers can expect from GH 6.0, and pictures from previous years
function About() {
  return (
    <section id="about">
      <Container>
        <div className="text-center text-md font-semibold">
          <span className="block text-6xl font-bold">identity</span>
          <div className="pt-2">through</div>
          <span className="block text-6xl font-bold">innovation</span>
        </div>
      </Container>
    </section>
  )
}

export default About