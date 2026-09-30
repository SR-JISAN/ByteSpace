import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image:
      "/person1.png",
    text: `"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`,
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image:
      "/person2.png",
    text: `"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`,
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image:
      "/person4.png",
    text: `"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."`,
  },
];

export default function ReviewSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-[8.1%] xl:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] bottom-[-28%] h-130 w-130 rounded-full bg-[#dbe4ff] opacity-80 blur-[100px]" />
        <div className="absolute right-[-8%] top-[-25%] h-140 w-140 rounded-full bg-[#efff9c] opacity-90 blur-[100px]" />
        <div className="absolute left-[38%] top-[8%] h-70 w-70 rounded-full bg-[#f5ffcc] opacity-50 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-27.5">
          <div className="max-w-137.5">
            <h2 className="text-[38px] font-bold leading-[1.08] tracking-[-1.7px] text-black sm:text-[44px] md:text-[48px] lg:text-[46px] xl:text-[48px]">
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          <div className="max-w-142.5">
            <p className="text-[16px] font-normal leading-[1.8] text-[#5f5f5f] sm:text-[17px]">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-17.5 lg:grid-cols-3 lg:items-start">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[23px] bg-white px-6 py-6 shadow-[0_10px_35px_rgba(0,0,0,0.025)] sm:px-7 sm:py-6"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-[20px] font-bold tracking-[-0.5px] text-[#111111]">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-[17px] font-normal text-[#1455ff]">
                  {testimonial.role}
                </p>
              </div>

              <p className="mt-7 text-[17px] font-normal leading-[1.7] text-[#656565]">
                {testimonial.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
