"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code, Terminal, Layers } from "lucide-react";
import { AcmLogo } from "./AcmLogo";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll shadow/background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/#events" },
    { name: "About", href: "/#about" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center space-x-3 group">
          <AcmLogo size={40} className="transition-transform duration-500 group-hover:rotate-[360deg]" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-acm-dark tracking-tight leading-none group-hover:text-acm-royal transition-colors">
              AITR ACM
            </span>
            <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">
              Student Chapter
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-gray-600 hover:text-acm-royal transition-colors py-2"
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-acm-royal to-acm-sky rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          
          <Link
            href="/#events"
            className="px-5 py-2.5 bg-gradient-to-r from-acm-royal to-acm-sky text-white text-xs font-semibold rounded-full hover:shadow-lg hover:shadow-acm-royal/20 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            Explore Events
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-acm-royal focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-gray-700 hover:text-acm-royal py-2 border-b border-gray-50 flex justify-between items-center"
                >
                  {link.name}
                  <Layers size={16} className="text-gray-400" />
                </Link>
              ))}
              <Link
                href="/#events"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 bg-gradient-to-r from-acm-royal to-acm-sky text-white font-semibold rounded-xl hover:shadow-md transition-all block"
              >
                Explore Events
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
