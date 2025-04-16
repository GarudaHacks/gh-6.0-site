import React from "react";
import Image from "next/image";
import Container from "../components/Container";
import ApplyButton from "../components/ApplyButton";

function Hero() {
  return (
    <section id="hero">
      <Container>
        <div className="grid min-h-[80vh] sm:grid-rows-2 md:grid-rows-1 md:grid-cols-2 max-w-full items-center translate-y-[-5vh]">
          <div className="flex flex-col gap-y-4 items-start text-left max-w-[90%] md:pl-12">
            <div className="relative h-fit flex justify-start items-start">
              <div className="relative h-fit flex justify-start items-start">
                <Image
                  src="/assets/hero_text.svg"
                  alt="Garuda Hacks 6.0"
                  width={500}
                  height={300}
                  className="min-h-[16rem] -translate-x-6 scale-90"
                />
                <Image
                  src="/assets/hero_label.svg"
                  alt="6.0 label"
                  width={128}
                  height={64}
                  className="absolute bottom-2 left-[95%] translate-x-[-48%] w-[8rem]"
                />
              </div>
            </div>
            <div className="text-primary sm:text-xl md:text-3xl font-semibold">
              July 24 - 26{" "}
              <Image
                src="/assets/icon/star-four-alt.svg"
                alt="star"
                width={16}
                height={16}
                className="inline-block mx-2"
              />{" "}
              2025
            </div>
            <div className="text-xl font-medium">
              Universitas Multimedia Nusantara
            </div>
          </div>

          <div className="flex flex-col gap-6 md:pl-[8vw] mt-[6vh] items-start">
            <div className="text-3xl font-semibold max-w-[80%]">
              Be part of Indonesia&apos;s largest{" "}
              <span className="font-serif text-md italic">
                hackathon{" "}
                <Image
                  src="/assets/gear.png"
                  alt="gear"
                  width={28}
                  height={28}
                  className="inline-block"
                />
              </span>
            </div>
            <div className="flex sm:flex-col md:flex-row gap-3">
              <ApplyButton />
              <button className="px-6 py-3 font-semibold border border-white rounded-md text-white hover:cursor-disabled hover:bg-white hover:text-black transition">
                Guidebook
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
