import React from 'react'
import Container from '../components/Container'

const themeDescription = `Indonesia is a nation rich in diversity, yet we often struggle to align our actions with the narratives we claim to embody. Are we truly the "Paru paru dunia", or have our environmental actions told a different story? Do we live up to the ideal of being "a friendly and polite society", even in online spaces? Through this hackathon, we aim to empower youth to reimagine Indonesia’s narrative, bridging the gap between ideals and actions with technology and innovation.`

// This section contains information regarding Garuda Hacks' core mission and values
// Particularly, what hackers can expect from GH 6.0, and pictures from previous years
function About() {
  return (
    <section id="about">
      <Container children={
        <div className="text-center text-md font-semibold">
          <span className="block text-6xl font-bold">identity</span>
          <div className="pt-2">through</div>
          <span className="block text-6xl font-bold">innovation</span>
        </div>
      }
      />
    </section>
  )
}

export default About