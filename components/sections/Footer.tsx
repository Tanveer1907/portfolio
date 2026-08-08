"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-24 py-16 bg-[#0A0A09]">
      <p className="font-label-caps text-[#949087] mb-6 md:mb-0 tracking-widest text-xs">
        © {new Date().getFullYear()} TANVEER SINGH. ALL RIGHTS RESERVED.
      </p>
      <p className="font-label-caps text-[#949087] tracking-widest text-xs">
        BUILT WITH NEXT.JS &amp; TAILWIND CSS
      </p>
    </footer>
  );
}
