"use client";

import React, { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventCard } from "@/components/EventCard";
import { eventsData } from "@/data/events";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Code2, Cpu, Trophy, Users2, ArrowRight } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasLoaded = sessionStorage.getItem("acm_loaded");
      if (hasLoaded) {
        setIsLoading(false);
      }
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem("acm_loaded", "true");
    setIsLoading(false);
  };

  return (
    <>
      {/* 4-Second Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {/* Main Website Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-grow flex flex-col justify-between pt-[76px] bg-slate-50"
          >
            {/* Header / Navbar */}
            <Navbar />

            {/* Main Content Sections */}
            <main>
              {/* 1. HERO / IMAGE SECTION */}
              <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden py-16 lg:py-24">
                {/* Background decorative vector elements */}
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-acm-light/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-10 right-0 w-96 h-96 bg-acm-royal/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                  {/* Left Column: Heading & Text */}
                  <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="inline-flex items-center space-x-2 px-3 py-1.5 bg-acm-royal/5 border border-acm-royal/10 text-acm-royal rounded-full text-xs font-bold tracking-wider uppercase"
                    >
                      <Code2 size={14} />
                      <span>Empowering Student Innovators</span>
                    </motion.div>

                    <div className="space-y-4">
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-acm-dark tracking-tight leading-[1.1]"
                      >
                        Code. Innovate.{" "}
                        <span className="bg-gradient-to-r from-acm-royal via-acm-sky to-acm-accent bg-clip-text text-transparent">
                          Excel Together.
                        </span>
                      </motion.h1>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
                      >
                        Welcome to ACM Student Chapter. We are a community of passionate programmers, designers, and tech enthusiasts building computational solutions for real-world issues.
                      </motion.p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                    >
                      <Link
                        href="/#events"
                        className="w-full sm:w-auto text-center px-8 py-4 bg-gradient-to-r from-acm-royal to-acm-sky text-white font-bold rounded-full shadow-lg shadow-acm-royal/20 hover:shadow-xl hover:shadow-acm-royal/30 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
                      >
                        <span>Explore Our Events</span>
                        <ArrowRight size={16} />
                      </Link>
                      <Link
                        href="/#about"
                        className="w-full sm:w-auto text-center px-8 py-4 bg-white text-gray-700 font-bold rounded-full border border-gray-200 hover:bg-gray-50 active:scale-[0.98] transition-all"
                      >
                        About Chapter
                      </Link>
                    </motion.div>

                    {/* Stats List */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-100 max-w-md mx-auto lg:mx-0"
                    >
                      <div>
                        <h4 className="text-2xl md:text-3xl font-extrabold text-acm-royal">300+</h4>
                        <p className="text-xs text-gray-500 font-medium">Members</p>
                      </div>
                      <div>
                        <h4 className="text-2xl md:text-3xl font-extrabold text-acm-royal">25+</h4>
                        <p className="text-xs text-gray-500 font-medium">Events Yearly</p>
                      </div>
                      <div>
                        <h4 className="text-2xl md:text-3xl font-extrabold text-acm-royal">15+</h4>
                        <p className="text-xs text-gray-500 font-medium">Hackathon Wins</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column: Premium Image Layout with overlays */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="lg:col-span-6 relative flex justify-center"
                  >
                    {/* Layered Image container */}
                    <div className="relative w-full max-w-md md:max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border-4 border-white">
                      <Image
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200"
                        alt="ACM Student Tech Workshop"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                      {/* Dark overlay grid for look */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    {/* Interactive Floating Badges */}
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="absolute -bottom-6 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center space-x-3 hidden sm:flex cursor-pointer"
                    >
                      <div className="p-3 bg-acm-royal/10 text-acm-royal rounded-xl">
                        <Trophy size={20} />
                      </div>
                      <div>
                        <h5 className="font-bold text-xs text-gray-800 uppercase tracking-wide">Next Generation</h5>
                        <p className="text-[10px] text-gray-500">Gold Tier Chapter Awards</p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="absolute -top-6 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center space-x-3 hidden sm:flex cursor-pointer"
                    >
                      <div className="p-3 bg-acm-accent/15 text-acm-sky rounded-xl">
                        <Users2 size={20} />
                      </div>
                      <div>
                        <h5 className="font-bold text-xs text-gray-800 uppercase tracking-wide">Mentorship</h5>
                        <p className="text-[10px] text-gray-500">1-on-1 Alumni Guidance</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </section>

              {/* 2. ABOUT US SECTION (Supplementary, matching premium standard) */}
              <section id="about" className="py-20 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                  <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                    <span className="text-xs font-bold text-acm-royal tracking-widest uppercase bg-acm-royal/5 px-3 py-1 rounded-full">
                      About Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-acm-dark tracking-tight">
                      Why Join ACM?
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      We offer a collaborative platform for students to learn state-of-the-art technologies, build real projects, participate in coding contests, and find professional growth opportunities.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        icon: <Code2 size={24} />,
                        title: "Hands-on Coding",
                        desc: "Regular coding hackathons, capture the flag challenges, and backend development events that build production-ready skills."
                      },
                      {
                        icon: <Cpu size={24} />,
                        title: "Advanced Technology",
                        desc: "Workshops focusing on artificial intelligence, fullstack development, cloud deployment, and system design pipelines."
                      },
                      {
                        icon: <Users2 size={24} />,
                        title: "Networking & Growth",
                        desc: "Connect with tech mentors, industry professionals, and talented peers to land internships and collaborative opportunities."
                      }
                    ].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        whileHover={{ y: -5 }}
                        className="p-8 bg-slate-50 border border-slate-100 hover:border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all group cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-xl bg-acm-royal/10 text-acm-royal flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-acm-royal group-hover:to-acm-sky group-hover:text-white transition-all">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-acm-royal transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 3. EVENTS GRID SECTION */}
              <section id="events" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                  {/* Heading */}
                  <div className="text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-6 mb-16">
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-acm-royal tracking-widest uppercase bg-acm-royal/5 px-3 py-1 rounded-full">
                        Chapters Archive
                      </span>
                      <h2 className="text-3xl md:text-4xl font-extrabold text-acm-dark tracking-tight">
                        Our Events
                      </h2>
                      <p className="text-gray-500 text-sm max-w-xl">
                        Click on any card to view its corresponding multi-image photo gallery, details, and schedules.
                      </p>
                    </div>

                    {/* Interactive Filter Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-bold">
                      {["All", "Hackathon", "Workshop", "Competition", "Seminar"].map((cat) => {
                        const isActive = selectedCategory === cat;
                        return (
                          <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2.5 rounded-full transition-all duration-300 active:scale-95 ${
                              isActive
                                ? "bg-gradient-to-r from-acm-royal to-acm-sky text-white shadow-md shadow-acm-royal/15"
                                : "bg-white border border-slate-200/60 text-gray-600 hover:bg-slate-50 hover:text-acm-royal"
                            }`}
                          >
                            {cat === "All" ? "All Events" : `${cat}s`}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Grid of Events with smooth dynamic layout transitions */}
                  <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                  >
                    <AnimatePresence mode="popLayout">
                      {eventsData
                        .filter((event) => selectedCategory === "All" || event.category === selectedCategory)
                        .map((event, index) => (
                          <EventCard key={event.id} event={event} index={index} />
                        ))}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </section>
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
