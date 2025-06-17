'use server'

import React from 'react'
import { AuroraText } from './magicui/aurora-text'
import { TextAnimate } from './magicui/text-animate'
import SlidingCard from './SlidingCard'

function SuccessStory() {
  return (
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
  )
}

export default SuccessStory