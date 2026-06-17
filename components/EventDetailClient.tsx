"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, Tag, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { EventItem } from "@/data/events";

interface EventDetailClientProps {
  event: EventItem;
}

export default function EventDetailClient({ event }: EventDetailClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Handle keyboard events (Esc to close, Left/Right to slide)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null && prev < event.galleryImages.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : event.galleryImages.length - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, event.galleryImages.length]);

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : event.galleryImages.length - 1));
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null && prev < event.galleryImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen flex flex-col justify-between pt-[76px] bg-slate-50">
      <Navbar />

      <main className="flex-grow py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-gray-500 hover:text-acm-royal transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="transform transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          {/* Event Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16"
          >
            {/* Meta text details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center space-x-1 px-3 py-1 bg-acm-royal/5 border border-acm-royal/10 text-acm-royal rounded-full text-xs font-bold uppercase tracking-wider">
                  <Tag size={12} />
                  <span>{event.category}</span>
                </span>
                <span className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-50 border border-gray-100 text-gray-500 rounded-full text-xs font-medium">
                  <Calendar size={12} />
                  <span>{event.date}</span>
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-acm-dark tracking-tight leading-tight">
                {event.title}
              </h1>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed border-l-4 border-acm-royal pl-4">
                {event.shortDesc}
              </p>

              <p className="text-gray-500 text-sm leading-relaxed">
                {event.longDesc}
              </p>
            </div>

            {/* Showcase Cover Image */}
            <div className="lg:col-span-5 relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src={event.coverImage}
                alt={event.title}
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Image Gallery Header */}
          <div className="space-y-2 mb-8">
            <h2 className="text-2xl font-bold text-acm-dark tracking-tight">Event Photo Gallery</h2>
            <p className="text-xs text-gray-500">
              Captures and archives of student projects, presentations, and activities. Click on any picture to launch fullscreen slides.
            </p>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.galleryImages.map((imgUrl, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setLightboxIndex(index)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <Image
                  src={imgUrl}
                  alt={`${event.title} archive item ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover overlay with Icon */}
                <div className="absolute inset-0 bg-acm-royal/20 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/95 rounded-full shadow-md text-acm-royal transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <ZoomIn size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-between p-6"
          >
            {/* Top Toolbar */}
            <div className="flex justify-between items-center text-white w-full max-w-7xl mx-auto">
              <span className="text-xs md:text-sm font-semibold font-mono">
                IMAGE {lightboxIndex + 1} OF {event.galleryImages.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>
            </div>

            {/* Central Slider Body */}
            <div className="flex-grow flex items-center justify-between max-w-7xl w-full mx-auto relative">
              {/* Left Arrow Button */}
              <button
                onClick={showPrev}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all hover:scale-105 active:scale-95 shadow-md flex items-center justify-center z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Main Image Slider Wrapper */}
              <div 
                className="relative flex-grow h-[60vh] md:h-[70vh] mx-4 w-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lightboxIndex}
                    initial={{ opacity: 0, x: 50, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="relative w-full h-full max-w-4xl"
                  >
                    <Image
                      src={event.galleryImages[lightboxIndex]}
                      alt={`${event.title} slide ${lightboxIndex + 1}`}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={showNext}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all hover:scale-105 active:scale-95 shadow-md flex items-center justify-center z-10"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Info bar */}
            <div className="text-center text-gray-400 text-xs md:text-sm py-4 max-w-7xl mx-auto w-full border-t border-white/10">
              <p className="font-semibold text-white truncate max-w-xl mx-auto">{event.title}</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Press ESC to exit &bull; Use Left/Right keys to navigate</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
