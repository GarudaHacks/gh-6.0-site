"use client";

import React from "react";
import Container from "../components/Container";
import ApplyButton from "../components/ApplyButton";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Hero() {
  return (
    <section id="hero">
      <Container>
        <div className="grid min-h-[80vh] sm:grid-rows-2 md:grid-rows-1 md:grid-cols-2 max-w-full items-center translate-y-[-5vh] md:pt-[15vh]">
          <div className="flex flex-col gap-y-2 md:gap-y-4 items-start text-left max-w-[90%] md:pl-12">
            <div className="relative h-fit flex justify-start items-start">
              <div className="relative h-fit flex justify-start items-start">
                <LazyLoadImage
                  src="/assets/hero_text.svg"
                  alt="Garuda Hacks 6.0"
                  width={500}
                  height={300}
                  className="min-h-[12rem] -translate-x-11 scale-75 md:scale-90 md:-translate-x-6"
                />
                <LazyLoadImage
                  src="/assets/hero_label.svg"
                  alt="6.0 label"
                  width={128}
                  height={64}
                  className="absolute bottom-6 left-[80%] translate-x-[-40%] w-[5rem] md:bottom-2 md:left-[95%] md:translate-x-[-48%] md:w-[8rem]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2"></div>
            <div className="text-primary sm:text-2xl md:text-3xl font-semibold">
              July 24 - 26{" "}
              <LazyLoadImage
                src="/assets/icon/star-four-alt.svg"
                alt="star"
                width={16}
                height={16}
                className="inline-block mx-2"
              />{" "}
              2025
            </div>
            <div className="text-md md:text-xl font-medium">
              Universitas Multimedia Nusantara
            </div>
          </div>

          <div className="flex flex-col gap-6 md:pl-[8vw] -translate-y-10 md:translate-y-0 md:mt-[6vh] items-start">
            <div className="text-2xl md:text-3xl font-semibold max-w-[80%]">
              Be part of Indonesia&apos;s largest{" "}
              <span className="font-serif inline-block text-md italic">
                hackath
                <LazyLoadImage
                src="/assets/gear.png"
                  alt="gear"
                  width={24}
                  height={24}
                  className="inline-block"
                />
                n
              </span>
            </div>
            <div className="flex sm:flex-col md:flex-row gap-3">
              <ApplyButton />
              <a 
                href="https://garudahq.notion.site/guidebook"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 font-semibold border border-white rounded-md text-white hover:opacity-80 transition"
              >
                Guidebook
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
