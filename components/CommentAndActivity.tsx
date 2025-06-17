import React from "react";
import { TextAnimate } from "./magicui/text-animate";
import Image from "next/image";
import { MessageCircle, Reply, ThumbsUp } from "lucide-react";
import SixBlocks from "./SixBlocks";

function CommentAndActivity() {
  return (
    <div className="h-184 bg-bg-custom-1 rounded-2xl shadow-lg p-8 flex space-x-8">
      <div className="h-full w-1/3 bg-white/90 rounded-2xl p-8 flex flex-col items-start">
        <TextAnimate
          className="text-text-custom-1 text-xl font-semibold"
          animation="blurInUp"
          by="character"
        >
          Comment and activity
        </TextAnimate>
        <TextAnimate
          className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-gray-900 mt-4"
          animation="blurIn"
          as="h1"
        >
          Give and recieve
        </TextAnimate>
        <TextAnimate
          className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-gray-900"
          animation="blurIn"
          as="h1"
        >
          actionable feedback
        </TextAnimate>
        <TextAnimate
          className="text-gray-700 text-lg font-semibold mt-4"
          animation="blurInUp"
          by="character"
        >
          Draw innovations and leave comments
        </TextAnimate>

        {/* <div className="bg-[url('/3dproduction.jpg')] h-60 w-full bg-center rounded-2xl mt-2 flex flex-col items-start justify-end pb-4">
            <p className="text-white text-lg font-semibold border border-white bg-black/40 px-3 py-1 rounded-full ml-6">
              3D Production
            </p>
          </div> */}
        <div className="mt-4 w-full">
          <div className="absolute flex flex-col items-start pb-4 justify-end">
            <p className="text-white text-lg font-semibold border border-white bg-black/40 px-3 py-1 rounded-full ml-4 mt-4">
              3D Production
            </p>
          </div>
          <Image
            src="/3dproduction.jpg"
            alt="3D Production"
            width={500}
            height={300}
            className="rounded-2xl w-full h-60 object-cover"
          />
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex flex-row">
            <Image
              src="https://avatar.iran.liara.run/public/16"
              alt="Comment Icon"
              width={24}
              height={24}
              className="inline-block mr-2"
            />
            <span className="text-black/50 font-semibold mr-1">Professor</span>
            <span className="text-black/90 font-bold">Mr deven</span>
          </div>
          <div className="bg-gray-50 rounded-2xl p-2 mt-1 ml-8">
            <p className="text-xs">
              {'"'}Overall, the course was well-structured and provided a solid
              foundation in 3D production. The instructor was knowledgeable and
              engaging, making the learning experience enjoyable. I would
              recommend this course to anyone looking to get started in 3D
              production.{'"'}
            </p>
          </div>
          <div className="ml-8 px-2 flex space-x-4">
            <div className="text-xs bg-gray-50 w-fit p-1 rounded flex flex-row items-center">
              <Reply size={12} className="mr-1" />
              reply
            </div>
            <div className="text-xs bg-gray-50 w-fit p-1 rounded flex flex-row items-center space-x-10">
              <MessageCircle size={12} className="mr-1" /> feedback
            </div>
            <div className="text-xs bg-gray-50 w-fit p-1 rounded flex flex-row items-center space-x-10">
              <ThumbsUp size={12} className="mr-1" />
              vote
            </div>
          </div>
          <div className="ml-8 bg-gray-100 text-xs py-1 px-3 mt-1 rounded-2xl">
            <Image
              src="https://avatar.iran.liara.run/public/16"
              alt="Comment Icon"
              width={12}
              height={12}
              className="inline-block mr-4"
            />
            Thanks for your valuable feedback
          </div>
        </div>
      </div>
      <div className="h-full w-1/3 bg-white/90 rounded-2xl flex flex-col items-start overflow-hidden">
        <div className="pt-8 px-8 mb-2">
          <TextAnimate
            className="text-text-custom-1 text-xl font-semibold"
            animation="blurInUp"
            by="character"
          >
            Comment and activity
          </TextAnimate>
          <TextAnimate
            className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-gray-900 mt-4"
            animation="blurIn"
            as="h1"
          >
            Schedule and learn
          </TextAnimate>
          <TextAnimate
            className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-gray-900"
            animation="blurIn"
            as="h1"
          >
            on your own time
          </TextAnimate>
          <TextAnimate
            className="text-gray-700 text-lg font-semibold mt-4 break-words"
            animation="blurInUp"
            by="word"
          >
            Flexible learning for your busy schedule. Take control of your
            education, anytime, and where and Tailor your education to fit your
            lifestyle and pace.
          </TextAnimate>
        </div>
        <SixBlocks />
      </div>
      <div className="h-full w-1/3 p-8 flex flex-col items-start">
        <p className="text-lime-700 text-xl font-semibold break-words">
          Ecudum knows what and how each employee is learning-surfacing the
          right content
          <span className="text-lime-500">
            {" "}
            at the right time to ensure the knowledge sticks fast and the
            curiosity keeps growing.
          </span>
        </p>
        <br />
        <button className="text-lime-800 rounded-2xl border border-lime-900 px-4 py-1 hover:cursor-pointer">
          Learn more
        </button>
        <br />
        <div className="w-full h-100 bg-bg-custom-2 text-white rounded-2xl py-4 px-12 flex flex-col justify-center">
          <p className="text-6xl font-bold">2024-25</p>
          <p className="text-lg font-semibold text-white/80">Middle semester</p>
          <br />
          <p className="text-6xl font-bold">2025</p>
          <p className="text-lg font-semibold text-white/80">Next semester</p>
          <button className="mr-auto border-lime-100 border rounded-2xl px-4 py-1 mt-6 hover:cursor-pointer">
            Upcoming
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentAndActivity;
