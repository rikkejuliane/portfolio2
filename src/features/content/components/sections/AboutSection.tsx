"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="h-full w-full font-montserrat px-14 lg:px-[114px]">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,696px)_auto] items-start gap-8 lg:gap-[100px] min-w-0">
        {/* LEFT: text */}
        <div className="flex flex-col min-w-0 lg:max-w-[696px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-[6px] min-w-0">
            <h2 className="text-[25px] font-bold text-wine">Hi! I’m</h2>
            <Image
              src="/rikkejulianeName.svg"
              alt="My name in my handwriting"
              width={311}
              height={64}
              className="h-auto max-w-full"
            />
          </div>

          <p className="mt-5 text-base font-bold break-words">
            I’m passionate about digital creativity and thrive on turning ideas
            into reality through front-end development and thoughtful design.
          </p>
          <p className="mt-5 text-base break-words">
            My journey into web development began with blogging as a hobby,
            where I tweaked templates using HTML and CSS. In high school, I
            explored design through <strong>Media & Communication</strong> and
            gained experience with Photoshop and InDesign. Later, I earned a{" "}
            <strong>bachelor’s degree</strong> in
            <strong>Marketing</strong> at{" "}
            <strong>BI Norwegian Business School</strong>, but after facing
            personal challenges, I rediscovered my true passion: coding and
            creating online.
          </p>
          <p className="mt-5 text-base break-words">
            Today, I focus on front-end development and UX/UI design, a perfect
            blend of creativity and technology, after completing a{" "}
            <strong>two-year degree</strong> at{" "}
            <strong>Noroff University.</strong>
          </p>
          <p className="mt-5 text-base break-words">
            When I’m not coding, you’ll find me spending time with my dog Fie,
            playing tennis, watching TV series, or getting lost in a good book.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col md:flex-row lg:flex-col justify-center lg:justify-normal items-center lg:items-end gap-4 shrink-0 mb-6 lg:mb-0">
          <Image
            src="/tennis.png"
            alt="Illustration of a tennis racket"
            width={300}
            height={344}
          />
          <Image
            src="/fie.png"
            alt="Illustration of my black maltipoo Fie"
            width={211}
            height={147}
            className="-mt-20 md:-mt-0 lg:-mt-20"
          />
        </div>
      </div>
    </div>
  );
}
