import React from "react";
import Link from "next/link";
import { AcmLogo } from "./AcmLogo";
import { Github, Linkedin, Mail, Globe, Code } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center space-x-3">
            <AcmLogo size={45} className="bg-white rounded-full p-0.5" />
            <div>
              <h3 className="font-bold text-lg text-white tracking-tight">ACM</h3>
              <p className="text-xs text-slate-400 font-mono tracking-widest uppercase">Student Chapter</p>
            </div>
          </div>
          <p className="text-sm text-slate-400 max-w-sm">
            Empowering students to innovate, collaborate, and push the boundaries of computer science. Together we code the future.
          </p>
          {/* Social Links */}
          <div className="flex items-center space-x-4 pt-2">
            <a href="#" className="p-2 bg-slate-900 hover:bg-acm-royal hover:text-white rounded-lg transition-colors" aria-label="Github">
              <Github size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-900 hover:bg-acm-royal hover:text-white rounded-lg transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-900 hover:bg-acm-royal hover:text-white rounded-lg transition-colors" aria-label="Website">
              <Globe size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-900 hover:bg-acm-royal hover:text-white rounded-lg transition-colors" aria-label="Mail">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-bold text-white text-sm tracking-wider uppercase mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/" className="hover:text-acm-light hover:underline transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/#events" className="hover:text-acm-light hover:underline transition-colors">Our Events</Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-acm-light hover:underline transition-colors">About Chapter</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-acm-light hover:underline transition-colors">Contact US</Link>
            </li>
          </ul>
        </div>

        {/* Resources Column */}
        <div>
          <h4 className="font-bold text-white text-sm tracking-wider uppercase mb-4">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="https://www.acm.org/" target="_blank" rel="noopener noreferrer" className="hover:text-acm-light hover:underline transition-colors">
                ACM Global Website
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-acm-light hover:underline transition-colors">Member Benefits</a>
            </li>
            <li>
              <a href="#" className="hover:text-acm-light hover:underline transition-colors">Code of Ethics</a>
            </li>
            <li>
              <a href="#" className="hover:text-acm-light hover:underline transition-colors">Technical Journals</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Developer Credit Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
        <div>
          &copy; {currentYear} ACM Student Chapter. All rights reserved.
        </div>
        
        {/* Developer Credit Requested */}
        <div className="flex items-center space-x-1.5 px-4 py-2 bg-slate-900/60 rounded-full border border-slate-800/40 text-slate-400">
          <Code size={13} className="text-acm-light" />
          <span>Designed &amp; Developed by</span>
          <span className="font-semibold text-white tracking-wide hover:text-acm-accent transition-colors font-sans">
            Sachin Rawat
          </span>
        </div>
      </div>
    </footer>
  );
};
