import React from "react";
import HeroContent from "../HeroContent/HeroContent";
import HeroImage from "../HeroImage/HeroImage";
import StarBackground from "../StarBackground/StarBackground";

function Hero() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 py-24 max-[767]:py-12">
      {/* Background Stars */}
      <StarBackground starCount={9000} />
      <StarBackground />

      {/* Content (neeche on mobile, left side on desktop) */}
      <div className="w-full  md:w-1/2 px-4 md:px-10 lg:px-14 relative z-10">
        <HeroContent />
      </div>

      {/* Image (upar on mobile, right side on desktop) */}
      <div className="w-full md:w-1/2 flex justify-center relative z-10 mb-10 md:mb-0">
        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;
