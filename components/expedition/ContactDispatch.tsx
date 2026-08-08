"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Radio, CheckCircle2, Github, Linkedin, Mail } from "lucide-react";

export default function ContactDispatch() {
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
    <section id="dispatch" className="relative py-28 bg-[#001619]/80 backdrop-blur-sm overflow-hidden border-t border-[#50E8F4]/20">
      {/* Topographic Grid Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#50E8F4_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#50E8F4]/30 bg-[#00252A]/80 text-[#50E8F4] font-geist text-xs tracking-[0.25em] uppercase shadow-[0_0_15px_rgba(80,232,244,0.2)]">
            <Radio className="w-3.5 h-3.5 text-[#50E8F4] animate-pulse" />
            <span>TRANSMISSION DISPATCH // SECTOR 05</span>
          </div>

          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-[#C7F8FE] tracking-tight">
            Dispatch Basecamp Contact
          </h2>

          <p className="font-inter text-base md:text-lg text-[#78A3A8] font-light leading-relaxed">
            Transmit your inquiry, collaboration proposals, or software commission briefs directly to Captain Tanveer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Dispatch Transmission Form */}
          <div className="lg:col-span-7 bg-[#00252A] border border-[#50E8F4]/40 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(80,232,244,0.15)]">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#50E8F4]/20 border border-[#50E8F4] text-[#50E8F4] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(80,232,244,0.5)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-playfair text-3xl font-bold text-[#C7F8FE]">
                  Transmission Received
                </h3>
                <p className="font-inter text-sm text-[#82B2B8]">
                  Your dispatch message has been encrypted and routed to Captain Tanveer. Expect a response shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block font-geist text-xs font-semibold text-[#50E8F4] tracking-widest uppercase">
                    EXPLORER CALLSIGN / NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name..."
                    className="w-full bg-[#001619] border border-[#50E8F4]/30 focus:border-[#50E8F4] focus:shadow-[0_0_15px_rgba(80,232,244,0.3)] rounded-xl px-4 py-3 text-sm text-[#C7F8FE] placeholder-[#78A3A8]/50 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block font-geist text-xs font-semibold text-[#50E8F4] tracking-widest uppercase">
                    SATELLITE FREQUENCY / EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address..."
                    className="w-full bg-[#001619] border border-[#50E8F4]/30 focus:border-[#50E8F4] focus:shadow-[0_0_15px_rgba(80,232,244,0.3)] rounded-xl px-4 py-3 text-sm text-[#C7F8FE] placeholder-[#78A3A8]/50 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block font-geist text-xs font-semibold text-[#50E8F4] tracking-widest uppercase">
                    EXPEDITION BRIEF / MESSAGE
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your transmission details..."
                    className="w-full bg-[#001619] border border-[#50E8F4]/30 focus:border-[#50E8F4] focus:shadow-[0_0_15px_rgba(80,232,244,0.3)] rounded-xl px-4 py-3 text-sm text-[#C7F8FE] placeholder-[#78A3A8]/50 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#50E8F4] hover:bg-[#C7F8FE] text-[#001619] font-geist text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(80,232,244,0.4)]"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT DISPATCH</span>
                </button>
              </form>
            )}
          </div>

          {/* Social Frequencies & Direct Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#00252A]/80 border border-[#50E8F4]/20 rounded-3xl p-8 space-y-6">
              <h3 className="font-geist text-xs font-bold text-[#50E8F4] uppercase tracking-[0.25em]">
                GLOBAL SATELLITE CHANNELS
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:contact@tanveersingh.dev"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#001619] border border-[#50E8F4]/30 hover:border-[#50E8F4] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00252A] flex items-center justify-center text-[#50E8F4] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-geist text-[10px] text-[#78A3A8] uppercase tracking-wider">
                      DIRECT EMAIL
                    </span>
                    <span className="font-geist text-sm text-[#C7F8FE] font-semibold">
                      tanveer.singh@expedition.dev
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#001619] border border-[#50E8F4]/30 hover:border-[#50E8F4] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00252A] flex items-center justify-center text-[#50E8F4] group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-geist text-[10px] text-[#78A3A8] uppercase tracking-wider">
                      GITHUB REPOSITORIES
                    </span>
                    <span className="font-geist text-sm text-[#C7F8FE] font-semibold">
                      github.com/Tanveer1907
                    </span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#001619] border border-[#50E8F4]/30 hover:border-[#50E8F4] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00252A] flex items-center justify-center text-[#50E8F4] group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-geist text-[10px] text-[#78A3A8] uppercase tracking-wider">
                      LINKEDIN NETWORK
                    </span>
                    <span className="font-geist text-sm text-[#C7F8FE] font-semibold">
                      linkedin.com/in/tanveer-singh
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
