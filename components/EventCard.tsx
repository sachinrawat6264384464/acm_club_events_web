"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowUpRight, Clock } from "lucide-react";
import { EventItem } from "@/data/events";

interface EventCardProps {
  event: EventItem;
  index: number;
}

export const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -12, scale: 1.03 }}
      className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:border-acm-royal/20 shadow-sm hover:shadow-2xl hover:shadow-acm-royal/15 transition-all duration-500 flex flex-col h-full"
    >
      {/* Event Cover Image Container (Widescreen 16:10 aspect ratio) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50">
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform cubic-bezier(0.16, 1, 0.3, 1) duration-700 group-hover:scale-105"
        />
        {/* Sky Blue Category Tag */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-acm-royal text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md border border-slate-100/50">
          {event.category}
        </div>
      </div>

      {/* Card Info */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div className="space-y-2.5">
          {/* Date & Time */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-gray-500 font-semibold">
            <div className="flex items-center space-x-1.5">
              <Calendar size={13} className="text-acm-light" />
              <span>{event.date}</span>
            </div>
            {event.time && (
              <div className="flex items-center space-x-1.5 border-l border-slate-200 pl-3">
                <Clock size={13} className="text-acm-light" />
                <span>{event.time}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="font-extrabold text-lg text-acm-dark group-hover:text-acm-royal transition-colors leading-snug line-clamp-1">
            {event.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
            {event.shortDesc}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-slate-50 mt-4">
          <Link
            href={`/events/${event.id}`}
            className="inline-flex items-center space-x-1.5 text-xs font-bold tracking-wider text-acm-royal uppercase group/btn hover:text-acm-sky transition-colors"
          >
            <span>View Gallery &amp; Details</span>
            <ArrowUpRight
              size={14}
              className="transform transition-transform duration-300 group-hover/btn:translate-x-0.8 group-hover/btn:-translate-y-0.8"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
