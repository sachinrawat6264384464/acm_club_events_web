"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AcmLogo } from "./AcmLogo";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Fill progress bar over 4 seconds (4000ms)
    const intervalTime = 40; // update progress every 40ms
    const totalDuration = 4000;
    const increment = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    // Fade out and notify parent at 4000ms
    const completionTimer = setTimeout(() => {
      setIsVisible(false);
      // Give fade-out animation 500ms to complete before notifying parent
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, totalDuration);

    return () => {
      clearInterval(timer);
      clearTimeout(completionTimer);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.05, 1], 
              opacity: 1 
            }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut",
              times: [0, 0.7, 1]
            }}
            className="mb-8"
          >
            <AcmLogo size={140} className="filter drop-shadow-lg" />
          </motion.div>

          {/* Label */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg font-semibold tracking-widest text-acm-royal uppercase mb-6"
          >
            AITR ACM Student Chapter
          </motion.h2>

          {/* Modern Progress Bar Container */}
          <div className="w-64 h-1.5 bg-gray-100 rounded-full overflow-hidden relative shadow-inner">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
              className="h-full bg-gradient-to-r from-acm-royal via-acm-light to-acm-accent rounded-full"
            />
          </div>

          {/* Loading details */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1 }}
            className="text-xs text-gray-500 mt-3 font-mono"
          >
            Initializing experience... {Math.round(progress)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
