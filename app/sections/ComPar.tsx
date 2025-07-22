'use client';
import Image from 'next/image';

const compar = [
  { name: 'APTIKNAS', logo: '/assets/compar/aptiknas.png' },
  { name: 'Generation Girl', logo: '/assets/compar/geng.png' },
  { name: 'Indonesia Heritage Society', logo: '/assets/compar/ihs.png' },
  { name: 'Kamar Entrepreneur Indonesia', logo: '/assets/compar/kei.png' },
  { name: 'Bahari', logo: '/assets/compar/bahari.png' },
  { name: 'One North', logo: '/assets/compar/onenorth.png' },
];

// 🔧 Manage specific logo sizes by name
const getImageSize = (name: string) => {
  switch (name) {
    case 'Kamar Entrepreneur Indonesia':
      return { width: 220, height: 110 };
    default:
      return { width: 160, height: 80 };
  }
};

export default function ComPar() {
  return (
    <section className="w-full py-20 bg-transparent flex flex-col items-center">
      <h2 className="text-4xl font-semibold text-white mb-10">Community Partners</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {compar.map((partner, index) => {
          const { width, height } = getImageSize(partner.name);

          let scaleClass = '';
          if (partner.name === 'APTIKNAS') scaleClass = 'scale-110';
          else if (partner.name === 'Indonesia Heritage Society') scaleClass = 'scale-125';

          return (
            <div
              key={index}
              className="w-[200px] h-[110px] bg-white/10 hover:bg-white transition duration-300 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center p-3 shadow-md overflow-hidden"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={width}
                height={height}
                className={`object-contain max-w-full max-h-full transition-transform ${scaleClass}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
