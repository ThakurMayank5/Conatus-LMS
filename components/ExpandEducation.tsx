import React from "react";
import { TextAnimate } from "./magicui/text-animate";

function ExpandEducation() {
  return (
    <>
      <TextAnimate
        className="text-text-custom-1 text-2xl font-semibold"
        animation="blurInUp"
        by="character"
      >
        Expand education
      </TextAnimate>
      <br />
      <br />
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
    </>
  );
}

export default ExpandEducation;
