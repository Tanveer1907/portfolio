"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-[#F1EDE3]/12 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Social Links */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[11px] font-geist font-medium tracking-widest text-[#A6A197]">
              <span className="text-[#C86B4A]">05 // CONTACT</span>
              <span className="opacity-60">[ LOG REF 05 ]</span>
            </div>
            <h2 className="font-playfair text-4xl sm:text-5xl font-medium text-[#F1EDE3] tracking-tight">
              Let&apos;s build something.
            </h2>
            <p className="font-inter text-base text-[#A6A197] font-light leading-relaxed">
              Have a project in mind, an opportunity to discuss, or just want to get in touch? Send a message directly.
            </p>
          </div>

          {/* Authentic Social Links */}
          <div className="space-y-3 pt-2">
            <a
              href="https://github.com/Tanveer1907"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-[#181815] border border-[#F1EDE3]/12 hover:border-[#F1EDE3]/18 transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-[#1D1C18] text-[#F1EDE3] group-hover:scale-105 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-geist text-xs text-[#A6A197] uppercase tracking-wider">
                  GitHub Profile
                </span>
                <span className="font-geist text-sm text-[#F1EDE3] font-medium">
                  github.com/Tanveer1907
                </span>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-[#181815] border border-[#F1EDE3]/12 hover:border-[#F1EDE3]/18 transition-colors group"
            >
              <div className="p-2.5 rounded-lg bg-[#1D1C18] text-[#F1EDE3] group-hover:scale-105 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-geist text-xs text-[#A6A197] uppercase tracking-wider">
                  LinkedIn Network
                </span>
                <span className="font-geist text-sm text-[#F1EDE3] font-medium">
                  linkedin.com/in/tanveer-singh
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-[#181815] border border-[#F1EDE3]/12 rounded-2xl p-8 sm:p-10 shadow-lg">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#C86B4A]/10 text-[#C86B4A] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-playfair text-3xl font-medium text-[#F1EDE3]">
                Message Sent
              </h3>
              <p className="font-inter text-sm text-[#A6A197]">
                Thank you for reaching out. I will review your message and reply as soon as possible.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block font-geist text-xs font-semibold text-[#F1EDE3] uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name..."
                  className="w-full bg-[#11110F] border border-[#F1EDE3]/12 focus:border-[#C86B4A] rounded-xl px-4 py-3 text-sm text-[#F1EDE3] placeholder-[#A6A197]/50 outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-geist text-xs font-semibold text-[#F1EDE3] uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email address..."
                  className="w-full bg-[#11110F] border border-[#F1EDE3]/12 focus:border-[#C86B4A] rounded-xl px-4 py-3 text-sm text-[#F1EDE3] placeholder-[#A6A197]/50 outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-geist text-xs font-semibold text-[#F1EDE3] uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message details..."
                  className="w-full bg-[#11110F] border border-[#F1EDE3]/12 focus:border-[#C86B4A] rounded-xl px-4 py-3 text-sm text-[#F1EDE3] placeholder-[#A6A197]/50 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#C86B4A] hover:bg-[#D99A7D] text-[#11110F] font-geist text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
