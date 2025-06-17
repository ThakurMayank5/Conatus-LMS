import React from "react";
import { NumberTicker } from "./magicui/number-ticker";
import { TextAnimate } from "./magicui/text-animate";
import { Star } from "lucide-react";

function Offerings() {
  return (
    <div className="flex flex-row bg-gray-100 rounded-lg shadow-lg p-8 h-200 space-x-4">
      <div className="w-1/3 h-full flex flex-col space-y-4">
        <div className="w-full h-1/2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex flex-col items-center justify-center space-y-2">
          <div>
            <NumberTicker
              value={74}
              className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white"
            />
            <span className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white">
              %
            </span>
          </div>
          <p className="text-center font-semibold text-white text-xl">
            Fewer admire hours
          </p>
        </div>
        <div className="w-full h-1/2 rounded-lg bg-gradient-to-br from-purple-400 via-purple-600 to-purple-700 flex flex-col items-center justify-center space-y-2">
          <div className="flex flex-row space-x-2">
            <TextAnimate
              className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white"
              animation="blurIn"
              as="h1"
            >
              4.8
            </TextAnimate>
            <Star className="text-white mt-auto mb-2" size={48} />
          </div>
          <p className="whitespace-pre-wrap text-2xl font-medium tracking-tighter text-white">
            Student satisfaction
          </p>
        </div>
      </div>
      <div className="w-2/3 h-full flex flex-col space-y-4">
        <div className="h-1/3 w-full flex flex-row space-x-4">
          <div className="w-1/3 h-full bg-[url('/unreal5.jpeg')] bg-no-repeat bg-cover bg-center rounded-lg flex flex-col items-center justify-end pb-4">
            <p className="text-white text-lg font-semibold border border-white bg-black/40 px-3 py-1 rounded-full">
              Unreal Engine 5 Course
            </p>
          </div>
          <div className="w-2/3 h-full bg-[url('/tfp.webp')] bg-no-repeat bg-cover bg-center rounded-lg flex flex-col items-center justify-end pb-4">
            <p className="text-white text-lg font-semibold border border-white bg-black/40 px-3 py-1 rounded-full">
              Training for Parents
            </p>
          </div>
        </div>

        <div className="h-2/3 w-full flex space-x-4">
          <div className="w-1/2 h-full bg-[url('/schedule.avif')] bg-no-repeat bg-cover bg-center rounded-lg flex flex-col items-center justify-end pb-4">
            <div className="bg-black/40 backdrop-blur-md p-4 space-y-2 rounded-3xl border border-white/20">
              <p className="text-white text-4xl font-stretch-50% tracking-wide px-3 py-1 rounded-full">
                Own Schedule
              </p>
              <p className="text-white text-lg font-serif">
                Set your own schedule for classes
              </p>
            </div>
            <br />
          </div>
          <div className="w-1/2 h-full">
            <div className="h-1/2 w-full pb-2">
              <div className="h-full w-full bg-[url('/paint.jpg')] bg-center rounded-lg flex flex-col items-center justify-end pb-4">
                <p className="text-white text-lg font-semibold border border-white bg-black/40 px-3 py-1 rounded-full">
                  Learn how to paint as a professional
                </p>
              </div>
            </div>
            <div className="h-1/2 w-full pt-2">
              <div className="h-full w-full rounded-lg bg-gradient-to-tl from-blue-400 via-blue-300 to-blue-400 flex flex-col items-center justify-center space-y-2">
                <div>
                  <NumberTicker
                    value={90}
                    startValue={30}
                    className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white"
                  />
                  <span className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white">
                    %
                  </span>
                </div>
                <p className="text-center font-semibold text-white text-xl">
                  Course completion rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offerings;
