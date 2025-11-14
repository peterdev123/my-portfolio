"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiHome, HiUser, HiViewColumns, HiEnvelope, HiOutlineSparkles, HiCommandLine } from "react-icons/hi2";

const SideBar = () => {
  const navItems = [
    { name: "Hero", href: "#hero", icon: <HiOutlineSparkles size={20} /> },
    { name: "Projects", href: "#projects", icon: <HiViewColumns size={20} /> },
    { name: "About", href: "#about", icon: <HiUser size={20} /> },
    { name: "Tech Stack", href: "#tech", icon: <HiCommandLine size={20} /> },
    { name: "Contact", href: "#contact", icon: <HiEnvelope size={20} /> },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex flex-row gap-4 bg-slate-800/80 px-4 py-2 rounded-full backdrop-blur-sm">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-700 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300">
              {item.icon}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SideBar;