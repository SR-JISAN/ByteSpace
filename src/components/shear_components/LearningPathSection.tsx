"use client"

import { BuildingComplex, Camera, CodeXml, Laptop, Megaphone, PencilRuler } from "lucide-react";



const LearningPathSection = () => {
    const categories = [
      {
        name: "Design",
        icon: PencilRuler,
      },
      {
        name: "Development",
        icon: CodeXml,
      },
      {
        name: "IT & Software",
        icon: Laptop,
      },
      {
        name: "Business",
        icon: BuildingComplex,
      },
      {
        name: "Marketing",
        icon: Megaphone,
      },
      {
        name: "Photography",
        icon: Camera,
      },
    ];
    return (
      <section className="mb-20 w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-2xl font-bold text-[#040819] sm:text-3xl lg:text-4xl">
            Explore Diverse Learning Paths at Bytespace
          </h1>

          <p className="pt-5 text-sm leading-6 text-[#82868E] sm:text-base">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there's something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-20 lg:grid-cols-6 lg:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.name}
                className="flex aspect-square items-center justify-center rounded-3xl border-2 border-[#E5E5E5] p-4 transition-all duration-300 hover:border-[#D4FB20] hover:shadow-md"
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4FB20] sm:h-16 sm:w-16">
                    <Icon className="h-6 w-6 text-[#242528] sm:h-7 sm:w-7" />
                  </div>

                  <h2 className="text-center text-base font-medium text-[#242528] sm:text-lg lg:text-xl">
                    {category.name}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
};

export default LearningPathSection;