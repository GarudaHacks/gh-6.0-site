'use client';
import Image from 'next/image';

const sponsors = [
  { name: 'Caffino', logo: '/assets/sponsors/caffino.png' },
  { name: 'Mandiri Capital Indonesia', logo: '/assets/sponsors/mandiri.png' },
  { name: 'Japfa Comfeed', logo: '/assets/sponsors/japfa.png' },
  { name: 'Dara Permata Sehati', logo: '/assets/sponsors/dpscrop.png' },
  { name: 'Mayora', logo: '/assets/sponsors/mayoracrop.png' },
  { name: 'Kamar Entrepreneur Indonesia', logo: '/assets/sponsors/keicrop.png' },
];

export default function Sponsors() {
  return (
    <section className="w-full py-20 bg-transparent flex flex-col items-center">
      <h2 className="text-4xl font-semibold text-white mb-10">Our Sponsors</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="w-[200px] h-[110px] bg-white/10 hover:bg-white transition duration-300 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center p-3 shadow-md"
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={sponsor.name === 'Kamar Entrepreneur Indonesia' ? 300 : 140}
              height={sponsor.name === 'Kamar Entrepreneur Indonesia' ? 150 : 70}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
