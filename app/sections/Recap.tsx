"use client";

import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from "../components/Container";

function Recap() {
  const thumbnails = [
    "/placeholder.svg?height=100&width=150",
    "/placeholder.svg?height=100&width=150",
    "/placeholder.svg?height=100&width=150",
    "/placeholder.svg?height=100&width=150",
  ];

  return (
    <section id="recap" className="w-full py-16">
      <Container>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Garuda Hacks 5.0 Recap
        </h2>

        <div className="flex flex-col gap-6">
          {/* Main Video */}
          <div className="w-full rounded-lg overflow-hidden border border-white">
            <LazyLoadImage
              src="/placeholder.svg?height=500&width=1000"
              alt="Garuda Hacks 5.0 Recap"
              width={1000}
              height={500}
              className="w-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {thumbnails.map((thumbnail, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden border border-white cursor-pointer hover:border-[#FF0068] transition"
              >
                <LazyLoadImage
                  src={thumbnail || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  width={150}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Recap;
