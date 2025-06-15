import { AuroraText } from "@/components/magicui/aurora-text";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TextAnimate } from "@/components/magicui/text-animate";
import SixBlocks from "@/components/SixBlocks";
import SlidingCard from "@/components/SlidingCard";
import SlidingText from "@/components/SlidingText";
import { MessageCircle, Reply, Star, ThumbsUp } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-12">
      <div className="flex flex-col items-center justify-center bg-[url('/bg-5.avif')] bg-cover bg-center h-160 rounded-lg shadow-lg p-8">
        <div className="mr-auto">
          <SlidingCard>
            <h4 className="w-60 py-1 px-2 rounded-full border-2 border-white text-white text-center text-lg font-semibold backdrop-blur-md">
              Learning in one Platform
            </h4>
          </SlidingCard>
        </div>
        <div className="h-1/3 text-start text-4xl font-bold text-white ml-auto pt-12">
          <SlidingCard>
            <div className="max-w-md mx-auto p-6 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg">
              <div className="space-y-4">
                <h2 className="text-white text-lg font-semibold leading-tight pl-4">
                  Create and deliver on-the-job training
                </h2>

                <p className="text-gray-100 text-sm pl-4">
                  that builds skills quickly. Mobile.
                  <br />
                  Multilingual, Media-rich, Made for
                  <br />
                  your frontline.
                </p>
                <div className="flex space-x-4 mt-4">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-full transition-colors duration-200 text-lg hover:cursor-pointer">
                    Schedule your class
                  </button>
                  <button className="text-white border border-white font-medium px-6 py-2 rounded-full transition-colors duration-200 text-lg hover:cursor-pointer">
                    more
                  </button>
                </div>
              </div>
            </div>
          </SlidingCard>
        </div>
        <div className="mt-auto text-7xl font-bold text-white w-full">
          <div className="flex flex-col">
            <div className="flex space-x-2">
              <TextAnimate animation="blurInUp" by="character" once>
                Where
              </TextAnimate>
              <TextAnimate
                className="text-amber-300"
                animation="blurInUp"
                by="character"
              >
                education
              </TextAnimate>
            </div>
            <div className="flex space-x-2">
              <TextAnimate animation="blurInUp" by="character" once>
                blooms
              </TextAnimate>
              <TextAnimate
                className="text-amber-300"
                animation="blurInUp"
                by="character"
              >
                alive
              </TextAnimate>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <h4>
          <AuroraText className="text-2xl font-semibold">
            Our successes story
          </AuroraText>
        </h4>
        <div className="flex flex-row">
          <div className="w-2/3 flex flex-col space-y-2">
            <TextAnimate
              className="text-black font-bold text-6xl"
              animation="slideUp"
              by="word"
            >
              Centralize your
            </TextAnimate>
            <TextAnimate
              className="text-black/20 font-bold text-6xl"
              animation="blurInUp"
              by="character"
            >
              learning in one hub
            </TextAnimate>
          </div>
          <div className="w-1/3">
            <SlidingCard>
              Empower educators with Ecudum revolutionizing on-the-job learning
              while streamlining instructor workload.{" "}
              <span className="text-black/20">
                Ecudum stands out as the sole platform featuring a mobile app
                tailored for educators.
              </span>
            </SlidingCard>
          </div>
        </div>
      </div>
      <br />
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
            <div className="w-1/2 h-full space-y-4">
              <div className="h-1/2 w-full bg-[url('/paint.jpg')] bg-center rounded-lg flex flex-col items-center justify-end pb-4">
                <p className="text-white text-lg font-semibold border border-white bg-black/40 px-3 py-1 rounded-full">
                  Learn how to paint as a professional
                </p>
              </div>
              <div className="h-1/2 w-full rounded-lg bg-gradient-to-tl from-blue-400 via-blue-300 to-blue-400 flex flex-col items-center justify-center space-y-2">
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
      <br />

      <div>
        <TextAnimate
          className="text-text-custom-1 text-2xl font-semibold"
          animation="blurInUp"
          by="character"
        >
          Expand education
        </TextAnimate>
      </div>
      <br />
      <br />
      <div>
        <TextAnimate
          className="text-gray-800 text-6xl font-bold"
          animation="slideUp"
          by="word"
        >
          Expand beyond
        </TextAnimate>
        <TextAnimate
          className="text-text-custom-2 text-6xl font-bold mt-2"
          animation="slideUp"
          by="word"
        >
          introductory education.
        </TextAnimate>
      </div>

      <br />
      <br />

      <div className="h-180 bg-bg-custom-1 rounded-2xl shadow-lg p-8 flex space-x-8">
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
              <span className="text-black/50 font-semibold mr-1">
                Professor
              </span>
              <span className="text-black/90 font-bold">Mr deven</span>
            </div>
            <div className="bg-gray-50 rounded-2xl p-2 mt-1 ml-8">
              <p className="text-xs">
                {'"'}Overall, the course was well-structured and provided a
                solid foundation in 3D production. The instructor was
                knowledgeable and engaging, making the learning experience
                enjoyable. I would recommend this course to anyone looking to
                get started in 3D production.{'"'}
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
          <div className="pt-8 px-8">
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
              education, anytime, and where and Tailor your education to fit
              your lifestyle and pace.
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
            <p className="text-lg font-semibold text-white/80">
              Middle semester
            </p>
            <br />
            <p className="text-6xl font-bold">2025</p>
            <p className="text-lg font-semibold text-white/80">Next semester</p>
            <button className="mr-auto border-lime-100 border rounded-2xl px-4 py-1 mt-6 hover:cursor-pointer">
              Upcoming
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
