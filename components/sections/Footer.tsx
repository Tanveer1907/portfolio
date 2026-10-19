"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between items-center pl-24 sm:pl-28 md:pl-36 lg:pl-40 xl:pl-44 pr-6 md:pr-16 py-16 bg-transparent">
      <p className="font-label-caps text-[#949087] mb-6 md:mb-0 tracking-widest text-xs">
        © {new Date().getFullYear()} TANVEER SINGH. ALL RIGHTS RESERVED.
      </p>
      <p className="font-label-caps text-[#949087] tracking-widest text-xs">
        BUILT WITH NEXT.JS &amp; TAILWIND CSS
      </p>
    </footer>
  );
}
