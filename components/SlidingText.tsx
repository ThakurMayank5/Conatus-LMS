"use client";

import { motion } from "framer-motion";

export default function SlidingText({ text }: { text: string }) {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full text-white">
      <motion.div
        className="inline-flex"
        animate={{ x: [0, "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          },
        }}
      >
        <span className="px-4 text-lg">{text}</span>
        <span className="px-4 text-lg">{text}</span>
      </motion.div>
    </div>
  );
}
