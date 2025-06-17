"use client";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews: {
  id: number;
  name: string;
  review: string;
  highlight: string;
  pfp: string;
}[] = [
  {
    id: 1,
    pfp: "/pfp1.jpg",
    name: "Divan ninisa",
    review:
      "I recently completed the Al Mastery course on your platform and I must say, it exceeded my expectations in many ways. The content was ",
    highlight:
      "comprehensive, well-organized, and delivered in a clear and engaging manner.",
  },
  {
    id: 2,
    name: "Junstan gargein",
    pfp: "/pfp2.jpeg",
    review:
      "I wanted to share my feedback on the experience. Overall, I found the platform to be  ",
    highlight: "incredibly beneficial for my learning journey.",
  },
  {
    id: 3,
    name: "Shawn mabslim",
    pfp: "/pfp3.jpeg",
    review:
      "Firstly, the course content was outstanding. It covered a wide range of topics in Al, from machine learning algorithms to deep learning frameworks, in a comprehensive and accessible manner. ",
    highlight: "The instructors were knowledgeable and engaging.",
  },
];

function StudentReviews() {
  const [currentReview, setCurrentReview] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getRightPanelReviews = () => {
    const otherReviews = reviews.filter((_, index) => index !== currentReview);
    return otherReviews;
  };

  return (
    <div className="flex p-8 space-x-8 h-full w-full">
      <motion.div
        className="w-1/3 h-full space-y-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReview}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-row items-center space-x-4"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={reviews[currentReview].pfp}
                alt={reviews[currentReview].name}
                width={40}
                height={40}
                className="rounded-full aspect-square"
              />
            </motion.div>
            <span className="text-xl font-semibold">
              {reviews[currentReview].name}
            </span>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`review-${currentReview}`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            className="font-medium break-words text-sm"
          >
            {reviews[currentReview].review}
            <span className="font-semibold break-words text-amber-600">
              {reviews[currentReview].highlight}
            </span>
          </motion.p>
        </AnimatePresence>
      </motion.div>

      <div className="w-2/3 h-full overflow-hidden relative">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentReview}
            className="flex space-x-2 absolute inset-0"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {getRightPanelReviews().map((review, index) => {
              const originalIndex = reviews.findIndex(
                (r) => r.id === review.id
              );
              return (
                <motion.div
                  key={review.id}
                  className="flex flex-col h-full w-1/2 p-4 rounded-lg border-2 flex-shrink-0 cursor-pointer border-gray-300 bg-white hover:border-amber-300 hover:bg-amber-50"
                  onClick={() => setCurrentReview(originalIndex)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.1,
                  }}
                >
                  <div className="flex flex-row items-center space-x-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={review.pfp}
                        alt={review.name}
                        width={40}
                        height={40}
                        className="rounded-full aspect-square"
                      />
                    </motion.div>
                    <span className="text-xl font-semibold">{review.name}</span>
                  </div>

                  <p className="text-sm text-gray-600 break-words font-medium bg-amber-50 p-2 rounded-2xl ml-8">
                    {review.review}
                    {review.highlight}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default StudentReviews;
