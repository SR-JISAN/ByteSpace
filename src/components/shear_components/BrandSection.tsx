"use client"

import { Loader } from "lucide-react";


const BrandSection = () => {
    return (
      <section className="p-7 md:p-20 bg-[#F5F5F6]">
        <div className="md:flex justify-between gap-4 md:gap-2 items-center">
          <div className="flex items-center gap-2">
            <div
              className=" w-5 h-5"
              style={{
                maskImage: "url('/brand1.png')",
                WebkitMaskImage: "url('/brand1.png')",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                backgroundColor: "#82868E",
              }}
            ></div>
            <h1 className="text-[#82868E] text-xl font-bold">Logoipsum</h1>
          </div>
          <div className="flex items-center gap-2">
            <Loader color="#82868E" strokeWidth={3} />
            <h1 className="text-[#82868E] text-xl font-bold">Logoipsum</h1>
          </div>
          <div className="flex items-center gap-2">
            <div
              className=" w-5 h-5"
              style={{
                maskImage: "url('/brand3.png')",
                WebkitMaskImage: "url('/brand3.png')",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                backgroundColor: "#82868E",
              }}
            ></div>
            <h1 className="text-[#82868E] text-xl font-bold">Logoipsum</h1>
          </div>
          <div className="flex items-center gap-2">
            <div
              className=" w-5 h-5"
              style={{
                maskImage: "url('/brand4.png')",
                WebkitMaskImage: "url('/brand4.png')",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                backgroundColor: "#82868E",
              }}
            ></div>
            <h1 className="text-[#82868E] text-xl font-bold">Logoipsum</h1>
          </div>
          <div className="flex items-center gap-2">
            <div
              className=" w-5 h-5"
              style={{
                maskImage: "url('/brand5.png')",
                WebkitMaskImage: "url('/brand5.png')",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                backgroundColor: "#82868E",
              }}
            ></div>
            <h1 className="text-[#82868E] text-xl font-bold">Logoipsum</h1>
          </div>
        </div>
      </section>
    );
};

export default BrandSection;