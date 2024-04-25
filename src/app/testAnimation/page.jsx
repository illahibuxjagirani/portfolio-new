"use client";
import { delay, motion } from "framer-motion";
import React from "react";

function TestPage() {
  const variants = {
    variant1: { 
      x: 100, 
      y: 100, 
      opacity: 0.7,
      transition: {
        duration: 3,
        delay: 1
      } 
    },
    variant2: { 
      x: 100, 
      y: -100, 
      rotation: 90 
    },
  };
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        className="w-64 h-64 bg-red-400 rounded"
        // initial={{ x: -100 }}
        variants={variants}
        // animate={{ x: 100, y: 100, opacity: 0.7}}
        animate="variant1"
        // transition={{ delay: 1, duration: 2 }}
      ></motion.div>
    </div>
  );
}

export default TestPage;
