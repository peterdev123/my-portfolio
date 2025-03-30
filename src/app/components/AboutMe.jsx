"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const AboutMe = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/profilepic.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 lg:py-24" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative w-[300px] h-[400px] mx-auto lg:w-[400px] lg:h-[500px]">
          <Image
            src={images[currentImage]}
            alt="About Me"
            className="rounded-2xl shadow-lg transition-opacity duration-500"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-[#ADB7BE] mb-8 text-justify">
            I am a passionate developer with strong programming fundamentals and
            problem-solving skills. I am proficient in Java, Python, C/C++, and
            JavaScript. Currently, I am exploring and expanding my knowledge in
            functional web development and artificial intelligence. I am
            equipped with strong analytical abilities and continuously learning
            new technologies. I am eager to embrace new challenges and discover
            innovative paths in the ever-evolving world of technology.
          </p>

          <div className="mb-8">
            <a
              href="/path-to-your-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 hover:scale-105 transition-transform duration-200 text-white"
            >
              View CV
            </a>
          </div>

          <div className="flex gap-6 justify-center lg:justify-start">
            <a
              href="https://github.com/peterdev123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-400 transition-colors cursor-pointer transform hover:scale-125 duration-200"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/vecina-peter-sylvan-l-560420257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-400 transition-colors cursor-pointer transform hover:scale-125 duration-200"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-400 transition-colors cursor-pointer transform hover:scale-125 duration-200"
            >
              <FaFacebook size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
