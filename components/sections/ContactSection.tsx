"use client";

import React, { useState } from "react";
import "./ContactCard.css";

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const email = "1906tanveer@gmail.com";
  const github = "https://github.com/Tanveer1907";
  const linkedin = "https://www.linkedin.com/in/1907-tanveer-singh/";
  const leetcode = "https://leetcode.com/u/Tanveer_1907";
  const handleCopy = (text: string, fieldName: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2500);
    }
  };

  const handleOpenLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="connect" className="w-full py-16 pl-24 sm:pl-28 md:pl-36 lg:pl-40 xl:pl-44 pr-6 sm:pr-10 md:pr-16 xl:pr-24 flex flex-col items-center justify-center bg-transparent scroll-mt-6">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Enlarged Interactive Card Component */}
        <div className="lg:col-span-5 xl:col-span-5 flex justify-center items-center w-full">
          <div className="contact-card-wrapper">
            <div className="card">
              <button
                className="mail"
                onClick={() => handleCopy(email, "email")}
                title={copiedField === "email" ? "Email Copied!" : "Copy Email"}
                aria-label="Copy Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </button>

              <div className="profile-pic">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                  alt="Tanveer Singh"
                />
              </div>

              <div className="bottom">
                <div className="content">
                  <span className="name">Tanveer Singh</span>
                  <span className="about-me">
                    Software Developer & CS Student building scalable systems & intuitive digital experiences.
                  </span>
                </div>
                <div className="bottom-bottom">
                  <div className="social-links-container">
                    <a href={`mailto:${email}`} title="Send Email" aria-label="Email">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </a>
                  </div>
                  <button
                    className="button"
                    onClick={() => handleCopy(email, "email")}
                  >
                    {copiedField === "email" ? "COPIED ✓" : "CONTACT"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: 4 Neo-Brutalist 3D Input Boxes */}
        <div className="lg:col-span-7 xl:col-span-7 flex justify-center lg:justify-end w-full">
          <div className="inputs-stack-container">
            {/* Input 1: EMAIL */}
            <div className="input__container" data-label="EMAIL">
              <div className="shadow__input" />
              <input
                type="text"
                readOnly
                value={email}
                className="input__search cursor-pointer"
                onClick={() => handleCopy(email, "email")}
                title="Click to copy email"
              />
              <button
                className="input__button__shadow"
                onClick={() => handleCopy(email, "email")}
                title={copiedField === "email" ? "Copied!" : "Copy Email"}
                aria-label="Copy Email"
              >
                {copiedField === "email" ? (
                  <span className="font-mono text-xs font-bold">✓</span>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Input 2: GITHUB */}
            <div className="input__container" data-label="GITHUB">
              <div className="shadow__input" />
              <input
                type="text"
                readOnly
                value="github.com/Tanveer1907"
                className="input__search cursor-pointer"
                onClick={() => handleOpenLink(github)}
                title="Click to open GitHub"
              />
              <button
                className="input__button__shadow"
                onClick={() => handleOpenLink(github)}
                title="Open GitHub Profile"
                aria-label="Open GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                </svg>
              </button>
            </div>

            {/* Input 3: LINKEDIN */}
            <div className="input__container" data-label="LINKEDIN">
              <div className="shadow__input" />
              <input
                type="text"
                readOnly
                value="linkedin.com/in/tanveersingh"
                className="input__search cursor-pointer"
                onClick={() => handleOpenLink(linkedin)}
                title="Click to open LinkedIn"
              />
              <button
                className="input__button__shadow"
                onClick={() => handleOpenLink(linkedin)}
                title="Open LinkedIn Profile"
                aria-label="Open LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                </svg>
              </button>
            </div>

            {/* Input 4: LEETCODE */}
            <div className="input__container" data-label="LEETCODE">
              <div className="shadow__input" />
              <input
                type="text"
                readOnly
                value="leetcode.com/u/Tanveer1907"
                className="input__search cursor-pointer"
                onClick={() => handleOpenLink(leetcode)}
                title="Click to open LeetCode"
              />
              <button
                className="input__button__shadow"
                onClick={() => handleOpenLink(leetcode)}
                title="Open LeetCode Profile"
                aria-label="Open LeetCode"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
