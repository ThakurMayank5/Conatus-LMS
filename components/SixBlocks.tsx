"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SixBlocks() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.1,
  });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={
          isInView ? { x: "-10%", opacity: 1 } : { x: "100%", opacity: 0 }
        }
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
        className="mb-1"
      >
        <div className="flex flex-row space-x-4">
          <div className="h-30 w-56 bg-lime-300 rounded-2xl flex flex-col justify-center items-center">
            <p className="text-white font-semibold text-xl">Learn Google</p>
            <p className="text-white font-semibold text-xl">AI with Tina</p>
          </div>
          <div className="h-30 w-56 bg-gray-800 rounded-2xl  flex flex-col justify-center items-center">
      <p className="text-white font-semibold text-xl">Exploring the</p>
      <p className="text-white font-semibold text-xl">frontiers of</p>

      <p className="text-white font-semibold text-xl">Machine Learning</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mb-1"
        initial={{ x: "-100%", opacity: 0 }}
        animate={
            isInView ? { x: "0%", opacity: 1 } : { x: "-100%", opacity: 0 }
        }
        transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.1 }}
      >
        <div className="flex flex-row space-x-4">
          <div className="h-30 w-56 bg-gray-300 rounded-2xl  flex flex-col justify-center items-center">
        <p className="text-white font-semibold text-xl">Learn new AI</p>
        <p className="text-white font-semibold text-xl">future tools</p>

          </div>
          <div className="h-30 w-56 bg-orange-300 rounded-2xl  flex flex-col justify-center items-center">
        <p className="text-white font-semibold text-xl">Building Blocks</p>
        <p className="text-white font-semibold text-xl">for a Data-</p>
        <p className="text-white font-semibold text-xl">Driven Future</p>

          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={
            isInView ? { x: "-10%", opacity: 1 } : { x: "100%", opacity: 0 }
        }
        transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 }}
      >
        <div className="flex flex-row space-x-4">
          <div className="h-30 w-56 bg-green-500 rounded-2xl  flex flex-col justify-center items-center">

        <p className="text-white font-semibold text-xl">Increase your</p>
        <p className="text-white font-semibold text-xl">Code Skills</p>
          </div>
          <div className="h-30 w-56 bg-blue-400 rounded-2xl  flex flex-col justify-center items-center">

        <p className="text-white font-semibold text-xl">Understanding and</p>
        <p className="text-white font-semibold text-xl">learning complex</p>
        <p className="text-white font-semibold text-xl">Problems</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
