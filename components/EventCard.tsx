"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";
import { EventItem } from "@/data/events";

interface EventCardProps {
  event: EventItem;
  index: number;
}

export const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200/80 shadow-sm hover:shadow-xl hover:shadow-acm-royal/5 transition-all duration-300 flex flex-col h-full"
    >
      {/* Event Cover Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Sky Blue Category Tag */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-acm-royal text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-sm">
          {event.category}
        </div>
      </div>

      {/* Card Info */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div className="space-y-3">
          {/* Date */}
          <div className="flex items-center text-xs text-gray-500 font-medium space-x-1.5">
            <Calendar size={13} className="text-acm-light" />
            <span>{event.date}</span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-lg text-acm-dark group-hover:text-acm-royal transition-colors leading-snug line-clamp-1">
            {event.title}
          </h3>

          {/* Short Description */}
          <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
            {event.shortDesc}
          </p>
        </div>

        {/* Read More / Action Button */}
        <div className="pt-6 border-t border-gray-50 mt-6">
          <Link
            href={`/events/${event.id}`}
            className="inline-flex items-center space-x-1.5 text-xs font-bold tracking-wider text-acm-royal uppercase group/btn hover:text-acm-sky transition-colors"
          >
            <span>View Gallery &amp; Details</span>
            <ArrowUpRight
              size={14}
              className="transform transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
