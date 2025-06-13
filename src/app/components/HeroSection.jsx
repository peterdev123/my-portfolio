"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaDownload, FaPlay } from "react-icons/fa";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Peter Sylvan Vecina";

  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 1000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(true), 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [text, isTyping]);

  return (
    <section className="min-h-screen flex flex-col justify-center py-0 relative overflow-hidden w-full bg-transparent" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-center px-4 relative z-10">
        {/* Left: Text Content */}
        <div className="col-span-7 place-self-center text-left">
          <h1 className="text-white mb-2 text-4xl sm:text-5xl lg:text-5xl font-extrabold">
            Mr. <span className="typing-cursor text-emerald-400">{text}</span>
          </h1>
          <div className="mb-2 mt-4">
            <span className="inline-block text-emerald-400 text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide bg-slate-800 px-4 py-1 rounded-full animate-fade-in">
              Full Stack Developer | AI Enthusiast | Problem Solver
            </span>
          </div>
          <p className="text-white text-base sm:text-lg lg:text-xl mb-6 max-w-2xl">
            A passionate and dedicated individual with strong interest in developing innovative solutions. I transform complex problems into elegant, efficient code.
          </p>
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
        {/* Right: Profile Image with Circle Border and Glow */}
        <div className="col-span-5 flex justify-center items-center w-full">
          <div className="relative flex items-center justify-center w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[350px] lg:h-[350px]">
            <div className="absolute inset-0 bg-emerald-400 rounded-full blur-2xl opacity-30 -z-10" />
            <Image
              src="/images/profilepic.jpg"
              alt="hero image"
              width={320}
              height={320}
              className="object-cover rounded-full border-2 border-emerald-400 w-full h-full relative z-10"
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
