import React from "react";
import { TextAnimate } from "./magicui/text-animate";
import StudentReviews from "./StudentReviews";

function StudentSatisfactions() {
  return (
    <div className="w-full h-120 text-text-custom-brown-1 bg-bg-custom-brown-1 rounded-2xl shadow-lg p-8">
      <TextAnimate
        className="text-lg font-semibold"
        animation="slideUp"
        by="line"
      >
        Students satisfactions
      </TextAnimate>
      <TextAnimate
        className="text-6xl font-semibold"
        animation="slideUp"
        by="line"
      >
        Discover what
      </TextAnimate>
      <TextAnimate
        className="text-6xl font-semibold"
        animation="slideUp"
        by="line"
      >
        our students feel
      </TextAnimate>
      <div className="flex flex-col items-center justify-center h-76">
        <StudentReviews />
      </div>
    </div>
  );
}

export default StudentSatisfactions;
