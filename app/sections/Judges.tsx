import React from 'react';
import Container from '../components/Container';
import Image from 'next/image';

const judges = [
  {
    name: "Judge Name",
    title: "Company Position",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Judge Name",
    title: "Company Position",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Judge Name",
    title: "Company Position",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Judge Name",
    title: "Company Position",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Judge Name",
    title: "Company Position",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Judge Name",
    title: "Company Position",
    image: "/placeholder.svg?height=200&width=200"
  }
];

function Judges() {
  return (
    <section id="judges" className="w-full py-16">
      <Container>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">MEET THE JUDGES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {judges.map((judge, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg border border-white bg-gradient-to-b from-[rgba(177,177,177,0.20)] to-[rgba(127,127,127,0.60)] backdrop-blur-sm p-6"
            >
              <div className="flex flex-col items-center text-center">
                <Image 
                  src={judge.image || "/placeholder.svg"} 
                  alt={judge.name} 
                  width={120} 
                  height={120} 
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-white">{judge.name}</h3>
                <p className="text-gray-300 text-sm mt-1">{judge.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#FF0068]"></span>
            <span className="w-2 h-2 rounded-full bg-white opacity-50"></span>
            <span className="w-2 h-2 rounded-full bg-white opacity-50"></span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Judges;
