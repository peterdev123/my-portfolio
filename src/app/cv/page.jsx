"use client";
import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaDownload } from "react-icons/fa";

const CVPage = () => {
  return (
    <main className="min-h-screen bg-[#121212] py-8 px-4">
      <Link 
        href="/"
        className="fixed top-8 left-8 text-white hover:text-emerald-400 transition-colors flex items-center gap-2 z-20"
      >
        <FaArrowLeft /> Back to Portfolio
      </Link>

      <div className="max-w-5xl mx-auto bg-[#1E293B]/50 rounded-xl overflow-hidden backdrop-blur-sm p-8 mt-20">
        <div className="relative w-full min-h-[800px] flex flex-col items-center justify-center">
          <object
            data="/documents/cv.pdf"
            type="application/pdf"
            width="100%"
            height="800px"
            className="rounded-lg"
          >
            <p>Your browser does not support PDFs. 
              <a href="/documents/cv.pdf" className="text-emerald-400 hover:text-emerald-300">Download the PDF</a>
            </p>
          </object>
          <a
            href="/documents/cv.pdf"
            download
            className="mt-6 px-6 py-3 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 hover:scale-105 transition-transform duration-200 text-white flex items-center gap-2"
          >
            <FaDownload /> Download CV
          </a>
        </div>
      </div>
    </main>
  );
};

export default CVPage;