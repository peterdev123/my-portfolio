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
    <section className="py-16 lg:py-24 relative overflow-hidden" id="hero">
      <div className="absolute inset-0" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="col-span-7 place-self-center text-center lg:text-left">
          <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold flex flex-col gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">
              Hello! I'm
            </span>
            <span className="typing-cursor">{text}</span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 text-justify transform transition-all duration-500 hover:text-white">
            A passionate and dedicated individual with strong interest in
            developing innovative solutions.
          </p>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] transform transition-all duration-500 hover:scale-105">
            <Image
              src="/images/profilepic.jpg"
              alt="hero image"
              className="rounded-full border-4 border-emerald-500/30 shadow-lg shadow-emerald-500/30 object-cover animate-pulse-subtle"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
