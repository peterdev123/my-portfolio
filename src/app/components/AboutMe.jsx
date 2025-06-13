"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const AboutMe = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 relative z-10">
        <div className="relative aspect-[3/4] w-full max-w-[300px] lg:max-w-[450px] mx-auto">
          <div className="absolute inset-0 bg-slate-800 rounded-2xl blur-3xl opacity-50 animate-pulse" />
          <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20">
            <Image
              src={images[currentImage]}
              alt="About Me"
              className="rounded-2xl transition-all duration-700 ease-in-out transform hover:scale-105"
              fill
              sizes="(max-width: 768px) 300px, 450px"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImage === index
                    ? "bg-emerald-500 w-4"
                    : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center lg:text-left space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 mb-6">
              About Me
            </h2>
            <p className="text-[#ADB7BE] text-lg leading-relaxed duration-500 hover:text-white">
              I am a passionate developer with strong programming fundamentals and
              problem-solving skills. I am proficient in Java, Python, C/C++, and
              JavaScript. Currently, I am exploring and expanding my knowledge in
              functional web development and artificial intelligence. I am
              equipped with strong analytical abilities and continuously learning
              new technologies. I am eager to embrace new challenges and discover
              innovative paths in the ever-evolving world of technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/cv"
              className="px-8 py-4 rounded-full bg-emerald-500 hover:scale-105 transition-all duration-300 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
            >
              View CV
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full border-2 border-emerald-700 hover:border-emerald-500 hover:scale-105 transition-all duration-300 text-white font-semibold"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 justify-center lg:justify-start">
            <a
              href="https://github.com/peterdev123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-400 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/vecina-peter-sylvan-l-560420257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-400 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://www.facebook.com/petersylvan.vecina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-400 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
            >
              <FaFacebook size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
