"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="flex items-center justify-center h-full px-[114px] pb-[40px] font-montserrat">
      <div className="flex flex-row justify-between gap-[100px]">
        <div className="flex flex-col max-w-[696px]">
          <div className="flex flew-row items-end gap-[6px]">
            <h2 className="text-[25px] font-bold text-wine">Hi! I’m</h2>
            <Image
              src="/rikkejulianeName.svg"
              alt="My name in my handwriting"
              width={311}
              height={64}
            />
          </div>
          <p className="mt-5  text-base font-bold">
            I’m passionate about digital creativity and thrive on turning ideas
            into reality through front-end development and thoughtful design.
          </p>
          <p className="mt-5  text-base">
            My journey into web development began with blogging as a hobby,
            where I tweaked templates using HTML and CSS. In high school, I
            explored design through Media & Communication and gained experience
            with Photoshop and InDesign. Later, I earned a bachelor’s degree in
            Marketing at BI Norwegian Business School, but after facing personal
            challenges, I rediscovered my true passion: coding and creating
            online.
          </p>
          <p className="mt-5  text-base">
            Today, I focus on front-end development and UX/UI design, a perfect
            blend of creativity and technology, after completing a two-year
            degree at Noroff University.
          </p>
          <p className="mt-5  text-base">
            When I’m not coding, you’ll find me spending time with my dog Fie,
            playing tennis, watching TV series, or getting lost in a good book.
          </p>
        </div>

        <div className="flex flex-col">
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
            className="-mt-10 ml-20"
          />
        </div>
      </div>
    </div>
  );
}
