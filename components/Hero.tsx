'use server'

import React from 'react'
import { TextAnimate } from './magicui/text-animate'
import SlidingCard from './SlidingCard'

function Hero() {
  return (
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
  )
}

export default Hero