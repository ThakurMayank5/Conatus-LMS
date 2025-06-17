import React from "react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { TextAnimate } from "./magicui/text-animate";

function Subscribe() {
  return (
    <>
      <TextAnimate
        className="text-lg font-bold text-black/20"
        animation="slideUp"
        by="line"
      >
        Subscribe and never miss
      </TextAnimate>
      <br />
      <div className="flex flex-row">
        <div>
          <TextAnimate
            className="text-6xl font-semibold"
            animation="blurInUp"
            by="word"
          >
            Stay tuned for our
          </TextAnimate>
          <TextAnimate
            className="text-6xl font-bold text-black/20"
            animation="blurInUp"
            by="word"
          >
            upcoming full launch
          </TextAnimate>
        </div>
        <div className="py-2 px-4 bg-black/10 h-fit w-fit rounded-full border-black border ml-auto mt-auto mr-12">
          Version 1.09
        </div>
      </div>
      <br />
      <br />
      <div className=" flex flex-row h-120">
        <div className="w-5/8 h-full flex items-center justify-center">
          <p className="font-semibold text-lg text-black/80 break-words pl-12 pr-24">
            Our full launch is just around the corner, bringing a wealth of new
            courses and features to enhance your learning journey. Stay tuned to
            explore our expanded offerings and{" "}
            <span className="text-black/20">
              don{"'"}t forget to request your desired courses to shape our
              future curriculum according to your interests and needs!
            </span>
          </p>
        </div>
        <div className="w-3/8 h-full flex items-center justify-center flex-col space-y-4 px-16">
          <input
            type="email"
            placeholder="Email address"
            className="bg-gray-50 w-full py-4 px-6 rounded-2xl border border-black/20 text-md font-semibold"
          />
          <input
            type="text"
            placeholder="What kind of course do you want to launch next?"
            className="bg-gray-50 w-full py-4 px-6 rounded-2xl border border-black/20 text-md font-semibold"
          />
          <div className="flex flex-row items-center space-x-2">
            <Checkbox />
            <p>I have read and agree to terms and privacy</p>
          </div>
          <Button className="rounded-full bg-amber-300 text-black/90 text-lg font-medium w-full py-6 hover:bg-amber-400 transition-colors duration-200 hover:cursor-pointer">
            Request and subscribe
          </Button>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
