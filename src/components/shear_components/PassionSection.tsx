"use client"

import { useState } from "react";
import { Badge } from "../ui/badge";

const PassionSection = () => {
    const [activeCategory, setActiveCategory] = useState("Featured");
    const categories = [
      "Featured",
      "Music",
      "Drawing & Painting",
      "Marketing",
      "Animation",
      "Social Media",
      "UI/UX Design",
      "Creative Marketing",
      "Digital Illustration",
      "Film & Video",
      "Crafts",
      "Freelancer & Entrepreneurship",
      "Graphic Design",
      "Photography",
    ];
    const categoriesTwo = [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
      
    ];
    return (
      <section className="my-15">
        <div>
          <h1 className="text-center  font-bold text-5xl">
            Discover Your Passion, <br /> Build Your Skills
          </h1>
          <p className="text-center text-[#82868E] my-5">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different <br />
            fields, from technology to the arts, and make a difference in your
            career and life.
          </p>
        </div>
        <div className="flex items-center justify-center  flex-wrap gap-3 mx-auto w-10/12">
          {categories.map((category) => (
            <Badge
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer py-5 px-3 ${
                activeCategory === category
                  ? "bg-lime-400 font-semibold text-black"
                  : "bg-[#F5F5F6] text-[#4B4C53]"
              }`}
              variant="default"
            >
              <span className="text-lg">{category}</span>
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-center  flex-wrap gap-3 mx-auto w-10/12 mt-4">
          {categoriesTwo.map((category) => (
            <Badge
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer py-5 px-3 ${
                activeCategory === category
                  ? "bg-lime-400 font-semibold text-black"
                  : "bg-[#F5F5F6] text-[#4B4C53]"
              }`}
              variant="default"
            >
              <span className="text-lg">{category}</span>
            </Badge>
          ))}
          <button className="text-blue-600 font-semibold" type="button">+ More</button>
        </div>
      </section>
    );
};

export default PassionSection;