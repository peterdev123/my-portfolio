"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiHome, HiUser, HiViewColumns, HiEnvelope, HiOutlineSparkles, HiCommandLine } from "react-icons/hi2";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Hero", href: "#hero", icon: <HiOutlineSparkles size={20} /> },
    { name: "About", href: "#about", icon: <HiUser size={20} /> },
    { name: "Tech Stack", href: "#tech", icon: <HiCommandLine size={20} /> },
    { name: "Projects", href: "#projects", icon: <HiViewColumns size={20} /> },
    { name: "Contact", href: "#contact", icon: <HiEnvelope size={20} /> },
  ];

  return (
    <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col gap-6 bg-[#1E293B]/50 p-4 rounded-full backdrop-blur-sm">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group relative flex items-center"
          >
            <div className="absolute right-14 hidden group-hover:flex">
              <div className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm">
                {item.name}
              </div>
            </div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1E293B] text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-300">
              {item.icon}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SideBar;