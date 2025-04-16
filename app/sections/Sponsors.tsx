import Container from "../components/Container"
import Image from "next/image"

const sponsors = {
  platinum: ["/placeholder.svg?height=80&width=200", "/placeholder.svg?height=80&width=200"],
  gold: [
    "/placeholder.svg?height=60&width=150",
    "/placeholder.svg?height=60&width=150",
    "/placeholder.svg?height=60&width=150",
  ],
  silver: [
    "/placeholder.svg?height=50&width=120",
    "/placeholder.svg?height=50&width=120",
    "/placeholder.svg?height=50&width=120",
    "/placeholder.svg?height=50&width=120",
  ],
}

function Sponsors() {
  return (
    <section id="sponsors" className="w-full py-16">
      <Container>
        <h2 className="text-3xl font-bold text-white mb-12 text-center">SPONSORS</h2>

        {/* Platinum Sponsors */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-300 mb-6 text-center">Platinum</h3>
          <div className="flex justify-center items-center gap-12">
            {sponsors.platinum.map((logo, index) => (
              <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-center">
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`Platinum Sponsor ${index + 1}`}
                  width={200}
                  height={80}
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-300 mb-6 text-center">Gold</h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {sponsors.gold.map((logo, index) => (
              <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-center">
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`Gold Sponsor ${index + 1}`}
                  width={150}
                  height={60}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div>
          <h3 className="text-xl font-semibold text-gray-300 mb-6 text-center">Silver</h3>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {sponsors.silver.map((logo, index) => (
              <div key={index} className="bg-white rounded-lg p-3 flex items-center justify-center">
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`Silver Sponsor ${index + 1}`}
                  width={120}
                  height={50}
                  className="h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Sponsors

