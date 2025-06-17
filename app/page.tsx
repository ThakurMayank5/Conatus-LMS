import CommentAndActivity from "@/components/CommentAndActivity";
import ExpandEducation from "@/components/ExpandEducation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Offerings from "@/components/Offerings";
import StudentSatisfactions from "@/components/StudentSatisfactions";
import Subscribe from "@/components/Subscribe";

import SuccessStory from "@/components/SuccessStory";

export default function Home() {
  return (
    <div className="px-12">
      <Hero />
      <br />
      <SuccessStory />
      <br />
      <Offerings />
      <br />

      <ExpandEducation />

      <br />
      <br />

      <CommentAndActivity />

      <br />
      <br />

      <StudentSatisfactions />

      <br />
      <br />

      <Subscribe />

      <br />
      <Footer />
    </div>
  );
}
