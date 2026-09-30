"use client"

import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Check, SignalMedium, Star } from "lucide-react";

const ProfessionalGrowthSection = () => {
    return (
      <>
        <section className="relative w-full overflow-hidden bg-linear-to-br from-lime-100 via-lime-50/30 to-white">
          <div className="mx-auto my-15 w-11/12">
            <div className="relative flex flex-col items-center justify-center gap-5 lg:min-h-162.5 lg:flex-row lg:gap-8">
              <div className="w-full lg:w-1/2">
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#242528] ">
                  Your Path to Professional <br className="hidden sm:block" />
                  Growth Starts Here!
                </h1>

                <p className="mt-6 text-sm leading-7 text-[#4B4C53] sm:text-base">
                  Explore our curated selection of courses tailored to enhance
                  your capabilities and accelerate your career journey. Whether
                  you are looking to sharpen specific skills, gain industry
                  expertise, or embark on a new career path entirely, we have
                  the resources you need.
                </p>
                <div className="flex items-center py-15 gap-15">
                  <div>
                    <h1 className="text-blue-800 text-4xl font-bold">12K</h1>
                    <p className="text-xl text-[#4B4C53] ">Students</p>
                  </div>
                  <div>
                    <h1 className="text-blue-800 text-4xl font-bold">70+</h1>
                    <p className="text-xl text-[#4B4C53] ">Courses</p>
                  </div>
                  <div>
                    <h1 className="text-blue-800 text-4xl font-bold">16</h1>
                    <p className="text-xl text-[#4B4C53] ">Creators</p>
                  </div>
                </div>
              </div>

              <div className="relative flex w-full items-center justify-center lg:w-1/2 lg:justify-start">
                <div className="relative w-full max-w-sm lg:mr-24">
                  <Card className="relative z-10 w-full overflow-hidden rounded-2xl px-4 py-4">
                    <div className="relative">
                      <Image
                        src="/demo.png"
                        alt="Learn Figma course cover"
                        width={500}
                        height={300}
                        className="h-auto w-full rounded-xl object-cover"
                      />

                      <div className="absolute bottom-8 left-1/2 flex w-[90%] -translate-x-1/2 translate-y-1/2 items-center justify-center gap-1.5 sm:gap-2">
                        <Badge
                          className="whitespace-nowrap bg-[#F6F6F699] px-2 py-1 text-[10px] text-[#4F4F4F] backdrop-blur-sm sm:px-3 sm:text-xs"
                          variant="secondary"
                        >
                          17 Lessons
                        </Badge>

                        <Badge
                          className="whitespace-nowrap bg-[#F6F6F699] px-2 py-1 text-[10px] text-[#4F4F4F] backdrop-blur-sm sm:px-3 sm:text-xs"
                          variant="secondary"
                        >
                          2h 16m
                        </Badge>

                        <Badge
                          className="whitespace-nowrap bg-[#F6F6F699] px-2 py-1 text-[10px] text-[#4F4F4F] backdrop-blur-sm sm:px-3 sm:text-xs"
                          variant="secondary"
                        >
                          59 Comments
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="px-0 pt-8">
                      <div className="flex items-start justify-between gap-3">
                        <CardTitle className="line-clamp-2 text-xl font-bold sm:text-2xl">
                          Learn Figma from Basic
                        </CardTitle>

                        <div className="flex shrink-0 items-center gap-1">
                          <span className="text-sm text-[#4F4F4F] sm:text-lg">
                            4.5
                          </span>

                          <Star
                            size={17}
                            className="fill-[#CED0D3] text-[#CED0D3]"
                            strokeWidth={3}
                          />
                        </div>
                      </div>

                      <p className="text-sm text-[#4F4F4F]">
                        by{" "}
                        <span className="text-blue-700">purepearl studio</span>
                      </p>

                      <CardDescription className="mt-3">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <Badge
                            className="flex items-center gap-2 bg-[#F5F5F6] px-3 py-2 text-sm text-[#4B4C53] sm:px-4 sm:py-3 sm:text-lg"
                            variant="secondary"
                          >
                            <SignalMedium
                              size={24}
                              color="#4B4C53"
                              strokeWidth={3}
                            />

                            <span>Beginner</span>
                          </Badge>

                          <div className="flex items-center">
                            <div className="flex -space-x-2">
                              {[1, 2, 3, 4].map((item) => (
                                <Image
                                  key={item}
                                  src={`/person${item}.png`}
                                  alt=""
                                  width={32}
                                  height={32}
                                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                                />
                              ))}
                            </div>

                            <span className="ml-2 rounded-full bg-lime-400 px-2.5 py-1 text-sm font-medium text-black">
                              26+
                            </span>
                          </div>
                        </div>

                        <div className="mt-4 flex items-baseline gap-1">
                          <span className="text-2xl font-extrabold text-blue-600">
                            $25
                          </span>

                          <span className="text-sm text-[#4F4F4F]">
                            / lifetime
                          </span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <div className="pointer-events-none absolute -right-70 top-2/3 z-30  -translate-y-1/2 ">
                    <Image
                      src="/hero.png"
                      alt="Hero"
                      width={700}
                      height={700}
                      className="h-162.5 w-162.5 max-w-none object-contain"
                    />
                    <div className="bg-white py-3 pl-8 pr-16 rounded-xl absolute bottom-62 right-38 z-40 shadow">
                      <p className="text-sm font-medium text-[#222]">
                        Learning Progress
                      </p>
                      <strong className="mt-1 block text-[30px] leading-none text-[#222]">
                        55%
                      </strong>
                      <div className="mt-3 h-1.25 w-full rounded-full bg-[#eeeeee]">
                        <div className="h-full w-[55%] rounded-full bg_lime" />
                      </div>
                    </div>

                    <div
                      className="absolute right-33 bottom-60 z-50 w-30.5 h-60.75"
                      style={{
                        maskImage: "url('/heroFive.png')",
                        WebkitMaskImage: "url('/heroFive.png')",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                        backgroundColor: "#D4FB20",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full overflow-hidden bg-linear-to-tr from-lime-100 via-lime-50/30 to-white">
          <div className="mx-auto my-15 flex w-11/12 flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:gap-20">
            <div className="relative flex  w-full items-center justify-center lg:w-1/2 lg:justify-start">
              <div className="relative h-162.5 w-full max-w-155">
                <div className="absolute inset-0 z-20 flex items-end justify-center">
                  <Image
                    src="/heroin.png"
                    alt="Student"
                    width={700}
                    height={850}
                    priority
                    className=" h-162.5 w-140 max-w-none  object-contain object-bottom "
                  />
                </div>

                <div className="absolute left-0 top-10 z-10 h-43.75 w-71.25 rounded-[22px] bg-[#123BE5] px-6 py-6 text-white shadow-sm ">
                  <p className="text-[23px] font-medium leading-none">
                    Total Revenue
                  </p>

                  <p className="mt-1 text-[15px] text-white/90">July 1-28</p>

                  <h3 className="mt-4 text-[34px] font-bold leading-none">
                    $120.29
                  </h3>

                  <div className="mt-5 h-2.5 w-41.25 rounded-full bg-white/90">
                    <div className="h-full w-full rounded-full bg-[#D4FB20]" />
                  </div>
                </div>

                <div className="absolute  left-0  top-62.5  z-10  h-49.5  w-49.5  rounded-[22px]  bg-[#123BE5] px-6 py-6 text-white  shadow-sm ">
                  <p className="text-[23px] font-medium leading-none">
                    Year to Date
                  </p>

                  <p className="mt-1 text-[15px] text-white/90">2023</p>

                  <h3 className="mt-6 text-[32px] font-bold leading-none">
                    $1,200.38
                  </h3>

                  <span className="mt-5 inline-flex rounded-full bg-[#D4FB20] px-3 py-1.5 text-sm font-medium text-black">
                    +12$
                  </span>
                </div>

                <div
                  className="absolute right-0 md:right-33.75 top-23 z-30 rotate-52 h-71.25  w-46.25 "
                  style={{
                    maskImage: "url('/heroFive.png')",
                    WebkitMaskImage: "url('/heroFive.png')",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    backgroundColor: "#D4FB20",
                  }}
                />

                <div className=" absolute  bottom-18.75 -right-2.5 z-40 w-95 rounded-[22px] bg-white  px-6 py-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                  <p className="text-[22px] font-medium leading-none text-[#222]">
                    Happy Students
                  </p>

                  <div className="mt-2 flex items-center gap-1">
                    <span className="text-[17px] font-semibold text-[#333]">
                      4.5
                    </span>

                    <span className="text-sm text-[#777]">(240)</span>

                    <span className="text-[22px] text-[#D4FB20]">★</span>
                  </div>

                  <div className="flex justify-center items-center">
                    {[
                      { id: "avatar-1", image: 1 },
                      { id: "avatar-2", image: 2 },
                      { id: "avatar-3", image: 3 },
                      { id: "avatar-4", image: 4 },
                      { id: "avatar-5", image: 5 },
                      { id: "avatar-6", image: 1 },
                      { id: "avatar-7", image: 2 },
                    ].map((avatar) => (
                      <Image
                        key={avatar.id}
                        src={`/person${avatar.image}.png`}
                        alt=""
                        width={48}
                        height={48}
                        className=" h-12 w-12 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#242528] ">
                Create & Manage
                <br className="hidden sm:block" />
                Courses Easily.
              </h1>

              <p className="my-10 text-lg leading-7 text-[#4B4C53] sm:text-base">
                <span className="font-bold text-black text-xl">ByteSpace</span>
                supports individuals or entities in the creation, publication,
                <br /> and administration of educational courses.
              </p>
              <div className="flex items-center  gap-5">
                <Check
                  className="bg-blue-800 rounded-full"
                  color="#ffffff"
                  strokeWidth={1.5}
                />
                <span className="text-lg text-[#242528]">
                  Shear Your Expertise
                </span>
              </div>
              <div className="flex items-center mt-5  gap-5">
                <Check
                  className="bg-blue-800 rounded-full"
                  color="#ffffff"
                  strokeWidth={1.5}
                />
                <span className="text-lg text-[#242528]">
                  Monetize Your Passion
                </span>
              </div>
              <div className="flex items-center mt-5  gap-5">
                <Check
                  className="bg-blue-800 rounded-full"
                  color="#ffffff"
                  strokeWidth={1.5}
                />
                <span className="text-lg text-[#242528]">
                  Flexibility and Autonomy
                </span>
              </div>
              <div className="flex items-center mt-5  gap-5">
                <Check
                  className="bg-blue-800 rounded-full"
                  color="#ffffff"
                  strokeWidth={1.5}
                />
                <span className="text-lg text-[#242528]">
                  Build a Community
                </span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default ProfessionalGrowthSection;