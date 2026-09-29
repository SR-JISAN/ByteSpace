"use client"

import Image from "next/image";
import { Card,  CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

import { SignalMedium, Star } from "lucide-react";

const Product = () => {
    return (
      <div className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-93.3333% mx-auto">
        <Card className="relative mx-auto w-full max-w-sm overflow-hidden px-4 py-4 rounded-2xl">
          <div className="relative">
            <Image
              src="/demo.png"
              alt="Event cover"
              width={500}
              height={300}
              className="h-auto w-full object-cover rounded-xl"
            />

            <div className="absolute bottom-8 left-1/2 flex w-10/12 -translate-x-1/2 translate-y-1/2 justify-between gap-2">
              <Badge
                className="bg-[#F6F6F699] px-3 py-1 text-sm text-[#4F4F4F]"
                variant="secondary"
              >
                17 Lessons
              </Badge>

              <Badge
                className="bg-[#F6F6F699] px-2 py-1 text-sm text-[#4F4F4F]"
                variant="secondary"
              >
                2 hours 16 mins
              </Badge>

              <Badge
                className="bg-[#F6F6F699] px-3 py-1 text-sm text-[#4F4F4F]"
                variant="secondary"
              >
                59 Comments
              </Badge>
            </div>
          </div>

          <CardHeader className="pt-2">
            <div className="flex justify-between items-center">
              <CardTitle className="font-bold text-2xl">
                Learn Figma from Basic
              </CardTitle>
              <span className="flex gap-1 items-center">
                <h1 className="text-[#4F4F4F] text-lg">4.5</h1>
                <Star size={17} color="#CED0D3" strokeWidth={3} />
              </span>
            </div>
            <p className="text-[#4F4F4F]">
              by <span className="text-blue-700">purepearl studio</span>
            </p>
            <CardDescription className="mt-3 ">
              <div className="flex gap-2 items-center">
                <Badge
                  className="bg-[#F5F5F6] px-4 py-3 text-lg text-[#4B4C53] flex justify-center  items-center"
                  variant="secondary"
                >
                  <span className="pb-2">
                    <SignalMedium
                      className=""
                      size={30}
                      color="#4B4C53"
                      strokeWidth={3}
                    />
                  </span>
                  <span> Beginner</span>
                </Badge>
                <div className="flex justify-start items-center">
                  <div className="mt-1 flex items-end -space-x-2 pb-2">
                    {[1, 2, 3, 4].map((item) => (
                      <Image
                        key={item}
                        src={`/person${item}.png`}
                        alt=""
                        width={30}
                        height={30}
                        className="h-8 w-8 rounded-full  border border-white object-cover"
                      />
                    ))}
                  </div>
                  <span className="rounded-full bg_lime p-2 text-sm text-black">
                    26+
                  </span>
                </div>
              </div>

              <div className="flex items-end">
                <h1 className="font-extrabold text-2xl text-blue-600">$25</h1>
                <span className="text-[#4F4F4F]">/lifetime</span>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="relative mx-auto w-full max-w-sm overflow-hidden px-4 py-4 rounded-2xl">
          <div className="relative">
            <Image
              src="/demo.png"
              alt="Event cover"
              width={500}
              height={300}
              className="h-auto w-full object-cover rounded-xl"
            />

            <div className="absolute bottom-8 left-1/2 flex w-10/12 -translate-x-1/2 translate-y-1/2 justify-between gap-2">
              <Badge
                className="bg-[#F6F6F699] px-3 py-1 text-sm text-[#4F4F4F]"
                variant="secondary"
              >
                17 Lessons
              </Badge>

              <Badge
                className="bg-[#F6F6F699] px-2 py-1 text-sm text-[#4F4F4F]"
                variant="secondary"
              >
                2 hours 16 mins
              </Badge>

              <Badge
                className="bg-[#F6F6F699] px-3 py-1 text-sm text-[#4F4F4F]"
                variant="secondary"
              >
                59 Comments
              </Badge>
            </div>
          </div>

          <CardHeader className="pt-2">
            <div className="flex justify-between items-center">
              <CardTitle className="font-bold text-2xl">
                Build Digital Asset
              </CardTitle>
              <span className="flex gap-1 items-center">
                <h1 className="text-[#4F4F4F] text-lg">4.5</h1>
                <Star size={17} color="#CED0D3" strokeWidth={3} />
              </span>
            </div>
            <p className="text-[#4F4F4F]">
              by <span className="text-blue-700">purepearl studio</span>
            </p>
            <CardDescription className="mt-3 ">
              <div className="flex gap-2 items-center">
                <Badge
                  className="bg-[#F5F5F6] px-4 py-3 text-lg text-[#4B4C53] flex justify-center  items-center"
                  variant="secondary"
                >
                  <span className="pb-2">
                    <SignalMedium
                      className=""
                      size={30}
                      color="#4B4C53"
                      strokeWidth={3}
                    />
                  </span>
                  <span> Beginner</span>
                </Badge>
                <div className="flex justify-start items-center">
                  <div className="mt-1 flex items-end -space-x-2 pb-2">
                    {[1, 2, 3, 4].map((item) => (
                      <Image
                        key={item}
                        src={`/person${item}.png`}
                        alt=""
                        width={30}
                        height={30}
                        className="h-8 w-8 rounded-full  border border-white object-cover"
                      />
                    ))}
                  </div>
                  <span className="rounded-full bg_lime p-2 text-sm text-black">
                    26+
                  </span>
                </div>
              </div>

              <div className="flex items-end">
                <h1 className="font-extrabold text-2xl text-blue-600">$25</h1>
                <span className="text-[#4F4F4F]">/lifetime</span>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="relative mx-auto w-full max-w-sm overflow-hidden px-4 py-4 rounded-2xl">
          <div className="relative">
            <Image
              src="/demo.png"
              alt="Event cover"
              width={500}
              height={300}
              className="h-auto w-full object-cover rounded-xl"
            />

            <div className="absolute bottom-8 left-1/2 flex w-10/12 -translate-x-1/2 translate-y-1/2 justify-between gap-2">
              <Badge
                className="bg-[#F6F6F699] px-3 py-1 text-sm text-[#4F4F4F]"
                variant="secondary"
              >
                17 Lessons
              </Badge>

              <Badge
                className="bg-[#F6F6F699] px-2 py-1 text-sm text-[#4F4F4F]"
                variant="secondary"
              >
                2 hours 16 mins
              </Badge>

              <Badge
                className="bg-[#F6F6F699] px-3 py-1 text-sm text-[#4F4F4F]"
                variant="secondary"
              >
                59 Comments
              </Badge>
            </div>
          </div>

          <CardHeader className="pt-2">
            <div className="flex justify-between items-center">
              <CardTitle className="font-bold text-2xl">
                the Power of Big Data
              </CardTitle>
              <span className="flex gap-1 items-center">
                <h1 className="text-[#4F4F4F] text-lg">4.5</h1>
                <Star size={17} color="#CED0D3" strokeWidth={3} />
              </span>
            </div>
            <p className="text-[#4F4F4F]">
              by <span className="text-blue-700">purepearl studio</span>
            </p>
            <CardDescription className="mt-3 ">
              <div className="flex gap-2 items-center">
                <Badge
                  className="bg-[#F5F5F6] px-4 py-3 text-lg text-[#4B4C53] flex justify-center  items-center"
                  variant="secondary"
                >
                  <span className="pb-2">
                    <SignalMedium
                      className=""
                      size={30}
                      color="#4B4C53"
                      strokeWidth={3}
                    />
                  </span>
                  <span> Beginner</span>
                </Badge>
                <div className="flex justify-start items-center">
                  <div className="mt-1 flex items-end -space-x-2 pb-2">
                    {[1, 2, 3, 4].map((item) => (
                      <Image
                        key={item}
                        src={`/person${item}.png`}
                        alt=""
                        width={30}
                        height={30}
                        className="h-8 w-8 rounded-full  border border-white object-cover"
                      />
                    ))}
                  </div>
                  <span className="rounded-full bg_lime p-2 text-sm text-black">
                    26+
                  </span>
                </div>
              </div>

              <div className="flex items-end">
                <h1 className="font-extrabold text-2xl text-blue-600">$25</h1>
                <span className="text-[#4F4F4F]">/lifetime</span>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="relative mx-auto w-full max-w-sm overflow-hidden px-4 py-4 rounded-2xl">
          <div className="relative">
            <Image
              src="/demo.png"
              alt="Event cover"
              width={500}
              height={300}
              className="h-auto w-full object-cover rounded-xl"
            />

            <div className="absolute bottom-8 left-1/2 flex w-10/12 -translate-x-1/2 translate-y-1/2 justify-between gap-2">
              <Badge
                className="bg-[#F6F6F699] px-3 py-1 text-sm text-[#4F4F4F]"
                variant="secondary"
              >
                17 Lessons
              </Badge>

              <Badge
                className="bg-[#F6F6F699] px-2 py-1 text-sm text-[#4F4F4F]"
                variant="secondary"
              >
                2 hours 16 mins
              </Badge>

              <Badge
                className="bg-[#F6F6F699] px-3 py-1 text-sm text-[#4F4F4F]"
                variant="secondary"
              >
                59 Comments
              </Badge>
            </div>
          </div>

          <CardHeader className="pt-2">
            <div className="flex justify-between items-center gap-2">
              <CardTitle className="font-bold w-80% truncate  text-2xl">
                Balancing Productivity an...
              </CardTitle>
              <span className="flex gap-1 items-center">
                <h1 className="text-[#4F4F4F] text-lg">4.5</h1>
                <Star size={17} color="#CED0D3" strokeWidth={3} />
              </span>
            </div>
            <p className="text-[#4F4F4F]">
              by <span className="text-blue-700">purepearl studio</span>
            </p>
            <CardDescription className="mt-3 ">
              <div className="flex gap-2 items-center">
                <Badge
                  className="bg-[#F5F5F6] px-4 py-3 text-lg text-[#4B4C53] flex justify-center  items-center"
                  variant="secondary"
                >
                  <span className="pb-2">
                    <SignalMedium
                      className=""
                      size={30}
                      color="#4B4C53"
                      strokeWidth={3}
                    />
                  </span>
                  <span> Beginner</span>
                </Badge>
                <div className="flex justify-start items-center">
                  <div className="mt-1 flex items-end -space-x-2 pb-2">
                    {[1, 2, 3, 4].map((item) => (
                      <Image
                        key={item}
                        src={`/person${item}.png`}
                        alt=""
                        width={30}
                        height={30}
                        className="h-8 w-8 rounded-full  border border-white object-cover"
                      />
                    ))}
                  </div>
                  <span className="rounded-full bg_lime p-2 text-sm text-black">
                    26+
                  </span>
                </div>
              </div>

              <div className="flex items-end">
                <h1 className="font-extrabold text-2xl text-blue-600">$25</h1>
                <span className="text-[#4F4F4F]">/lifetime</span>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="relative mx-auto w-full max-w-sm overflow-hidden px-4 py-4 rounded-2xl">
          <div className="relative">
            <Image
              src="/demo.png"
              alt="Event cover"
              width={500}
              height={300}
              className="h-auto w-full object-cover rounded-xl"
            />

            <div className="absolute bottom-8 left-1/2 flex w-10/12 -translate-x-1/2 translate-y-1/2 justify-between gap-2">
              <Badge
                className="bg-[#F6F6F699] px-3 py-1 text-sm text-[#4F4F4F]"
                variant="secondary"
              >
                17 Lessons
              </Badge>

              <Badge
                className="bg-[#F6F6F699] px-2 py-1 text-sm text-[#4F4F4F]"
                variant="secondary"
              >
                2 hours 16 mins
              </Badge>

              <Badge
                className="bg-[#F6F6F699] px-3 py-1 text-sm text-[#4F4F4F]"
                variant="secondary"
              >
                59 Comments
              </Badge>
            </div>
          </div>

          <CardHeader className="pt-2">
            <div className="flex justify-between items-center gap-2">
              <CardTitle className="font-bold text-2xl  w-80% truncate">
                Mastering Money Manage..
              </CardTitle>
              <span className="flex gap-1 items-center">
                <h1 className="text-[#4F4F4F] text-lg">4.5</h1>
                <Star size={17} color="#CED0D3" strokeWidth={3} />
              </span>
            </div>
            <p className="text-[#4F4F4F]">
              by <span className="text-blue-700">purepearl studio</span>
            </p>
            <CardDescription className="mt-3 ">
              <div className="flex gap-2 items-center">
                <Badge
                  className="bg-[#F5F5F6] px-4 py-3 text-lg text-[#4B4C53] flex justify-center  items-center"
                  variant="secondary"
                >
                  <span className="pb-2">
                    <SignalMedium
                      className=""
                      size={30}
                      color="#4B4C53"
                      strokeWidth={3}
                    />
                  </span>
                  <span> Beginner</span>
                </Badge>
                <div className="flex justify-start items-center">
                  <div className="mt-1 flex items-end -space-x-2 pb-2">
                    {[1, 2, 3, 4].map((item) => (
                      <Image
                        key={item}
                        src={`/person${item}.png`}
                        alt=""
                        width={30}
                        height={30}
                        className="h-8 w-8 rounded-full  border border-white object-cover"
                      />
                    ))}
                  </div>
                  <span className="rounded-full bg_lime p-2 text-sm text-black">
                    26+
                  </span>
                </div>
              </div>

              <div className="flex items-end">
                <h1 className="font-extrabold text-2xl text-blue-600">$25</h1>
                <span className="text-[#4F4F4F]">/lifetime</span>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="relative mx-auto w-full max-w-sm overflow-hidden px-4 py-4 rounded-2xl">
          <div className="relative">
            <Image
              src="/demo.png"
              alt="Event cover"
              width={500}
              height={300}
              className="h-auto w-full object-cover rounded-xl"
            />

            <div className="absolute bottom-8 left-1/2 flex w-10/12 -translate-x-1/2 translate-y-1/2 justify-between gap-2">
              <Badge
                className="bg-[#F6F6F699] px-3 py-1 text-sm text-[#4F4F4F]"
                variant="secondary"
              >
                17 Lessons
              </Badge>

              <Badge
                className="bg-[#F6F6F699] px-2 py-1 text-sm text-[#4F4F4F]"
                variant="secondary"
              >
                2 hours 16 mins
              </Badge>

              <Badge
                className="bg-[#F6F6F699] px-3 py-1 text-sm text-[#4F4F4F]"
                variant="secondary"
              >
                59 Comments
              </Badge>
            </div>
          </div>

          <CardHeader className="pt-2">
            <div className="flex justify-between items-center gap-2">
              <CardTitle className="font-bold text-2xl  w-80% truncate">
                From Idea to Startup Succ..
              </CardTitle>
              <span className="flex gap-1 items-center">
                <h1 className="text-[#4F4F4F] text-lg">4.5</h1>
                <Star size={17} color="#CED0D3" strokeWidth={3} />
              </span>
            </div>
            <p className="text-[#4F4F4F]">
              by <span className="text-blue-700">purepearl studio</span>
            </p>
            <CardDescription className="mt-3 ">
              <div className="flex gap-2 items-center">
                <Badge
                  className="bg-[#F5F5F6] px-4 py-3 text-lg text-[#4B4C53] flex justify-center  items-center"
                  variant="secondary"
                >
                  <span className="pb-2">
                    <SignalMedium
                      className=""
                      size={30}
                      color="#4B4C53"
                      strokeWidth={3}
                    />
                  </span>
                  <span> Beginner</span>
                </Badge>
                <div className="flex justify-start items-center">
                  <div className="mt-1 flex items-end -space-x-2 pb-2">
                    {[1, 2, 3, 4].map((item) => (
                      <Image
                        key={item}
                        src={`/person${item}.png`}
                        alt=""
                        width={30}
                        height={30}
                        className="h-8 w-8 rounded-full  border border-white object-cover"
                      />
                    ))}
                  </div>
                  <span className="rounded-full bg_lime p-2 text-sm text-black">
                    26+
                  </span>
                </div>
              </div>

              <div className="flex items-end">
                <h1 className="font-extrabold text-2xl text-blue-600">$25</h1>
                <span className="text-[#4F4F4F]">/lifetime</span>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
};

export default Product;