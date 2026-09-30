"use client"

const PotentialSection = () => {
    return (
      <section className="hero-section relative bg_blue w-full h-100 mb-20 hero-grid overflow-hidden">
        <div
          className="hidden md:block absolute left-0 -top-16 z-20 w-60.5 h-90.75"
          style={{
            maskImage: "url('/heroOne.png')",
            WebkitMaskImage: "url('/heroOne.png')",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            backgroundColor: "#CCFF00",
          }}
        ></div>
        <div
          className="hidden md:block absolute -right-18 top-24 z-20 w-60.5 h-90.75"
          style={{
            maskImage: "url('/heroFour.png')",
            WebkitMaskImage: "url('/heroFour.png')",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            backgroundColor: "#CCFF00",
          }}
        ></div>
        <div
          className="hidden md:block absolute right-18 bottom-0 z-20 w-30.5 h-60.75"
          style={{
            maskImage: "url('/heroFive.png')",
            WebkitMaskImage: "url('/heroFive.png')",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            backgroundColor: "white",
          }}
        ></div>
        <div
          className="hidden md:block absolute left-27 bottom-27 z-20 w-30.5 h-60.75"
          style={{
            maskImage: "url('/heroFive.png')",
            WebkitMaskImage: "url('/heroFive.png')",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            backgroundColor: "white",
          }}
        ></div>
        <div className="hero-grid absolute inset-0" />

        <div className=" hero-ring-two hero-ring-left " />

        <div className="hero-triangle" />

        <h1 className="text-5xl text-center font-bold pt-20 pb-8 text-white">
          Unlock Your Potential as a <br /> Creator with ByteSpace
        </h1>
        <p className="text-center text-white">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become <br /> a part of a
          community comprising over 10,000 local and international creators.
          Utilize our Course Editor, and showcase <br /> your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <div className="flex justify-center items-center pt-8">
          <button
            className="bg-[#D4FB20] rounded-full text-lg text-black py-4 px-5 "
            type="button"
          >
            Join as Creator
          </button>
        </div>
      </section>
    );
};

export default PotentialSection;