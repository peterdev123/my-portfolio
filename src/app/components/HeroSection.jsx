"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Peter Sylvan Vecina";

  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
      } else {
        setTimeout(() => setIsTyping(false), 1000);
      }
    } else {
      if (text.length > 0) {
        setTimeout(() => {
          setText(fullText.slice(0, text.length - 1));
        }, 50);
      } else {
        setTimeout(() => setIsTyping(true), 500);
      }
    }
  }, [text, isTyping]);

  return (
    <section className="min-h-screen flex flex-col justify-center py-0 relative overflow-hidden w-full bg-transparent" id="hero">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 animate-pulse" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-4 relative z-10">
        <div className="col-span-7 place-self-center text-center lg:text-left">
          <div className="space-y-6">
            <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold flex flex-col gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-teal-600 animate-gradient">
                Hello! I'm
              </span>
              <span className="typing-cursor bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">{text}</span>
            </h1>
            <div className="mb-2">
              <span className="inline-block text-emerald-400 text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide bg-emerald-500/10 px-4 py-1 rounded-full animate-fade-in">
                Full Stack Developer | AI Enthusiast | Problem Solver
              </span>
            </div>
            <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 text-justify transform transition-all duration-500 hover:text-white max-w-2xl">
              A passionate and dedicated individual with strong interest in
              developing innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 hover:scale-105 transition-all duration-300 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
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
        <div className="col-span-5 flex justify-center lg:justify-start w-full">
          <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[350px] lg:h-[350px] transform transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-3xl opacity-20 animate-pulse" />
            <Image
              src="/images/profilepic.jpg"
              alt="hero image"
              className="rounded-full border-4 border-emerald-500/30 shadow-lg shadow-emerald-500/30 object-cover animate-float"
              fill
              sizes="(max-width: 768px) 220px, (max-width: 1200px) 260px, 350px"
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
