"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <div className="h-full w-full font-montserrat px-[10px]">
      <div className="flex flex-col">
        <h2 className="text-wine text-[25px] font-bold sm:pl-10">Featured:</h2>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          {/* Holidaze */}
          <div className="bg-[url('/postit.png')] bg-no-repeat bg-contain w-[379px] h-[412px] flex flex-col justify-center items-center">
            <div>
              <Image
                src="/holidaze.jpg"
                alt="Screenshot of Holidaze project"
                width={311}
                height={165}
                className="pt-6"
              />
              <h3 className="text-[18px] font-black text-black py-[10px]">
                Holidaze - PE2
              </h3>
              <p className="w-[314px] text-base">
                Holidaze is a responsive booking app for travelers and venue
                managers, built with Next.js, TypeScript, and Tailwind.
              </p>
              <Link
                href="placeholder/holidaze"
                className="font-bold text-[15px] text-center flex justify-center pt-3 transition-transform duration-150 motion-safe:hover:scale-[1.06] will-change-transform cursor-pointer">
                {"<ViewProject />"}
              </Link>
            </div>
          </div>

          {/* Biddy */}
          <div className="bg-[url('/postit.png')] bg-no-repeat bg-contain w-[379px] h-[412px] flex flex-col justify-center items-center">
            <div>
              <Image
                src="/biddy.jpg"
                alt="Screenshot of Biddy project"
                width={311}
                height={165}
                className="pt-6"
              />
              <h3 className="text-[18px] font-black text-black py-[10px]">
                Biddy - SP2
              </h3>
              <p className="w-[314px] text-base">
                A modern auction site where users can create listings, place
                bids, and track auctions, starting with 1000 credits.
              </p>
              <Link
                href="placeholder/biddy"
                className="font-bold text-[15px] text-center flex justify-center pt-3 transition-transform duration-150 motion-safe:hover:scale-[1.06] will-change-transform cursor-pointer">
                {"<ViewProject />"}
              </Link>
            </div>
          </div>

          {/* Roots */}
          <div className="bg-[url('/postit.png')] bg-no-repeat bg-contain w-[379px] h-[412px] flex flex-col justify-center items-center">
            <div>
              <Image
                src="/roots.jpg"
                alt="Screenshot of Roots project"
                width={311}
                height={165}
                className="pt-6"
              />
              <h3 className="text-[18px] font-black text-black py-[10px]">
                ROOTS FastFood Posedarje
              </h3>
              <p className="w-[314px] text-base">
                A modern, responsive restaurant website built with Next.js,
                TypeScript, and Tailwind CSS.
              </p>
              <Link
                href="placeholder/roots"
                className="font-bold text-[15px] text-center flex justify-center pt-3 transition-transform duration-150 motion-safe:hover:scale-[1.06] will-change-transform cursor-pointer">
                {"<ViewProject />"}
              </Link>
            </div>
          </div>
        </div>
        <h2 className="text-wine text-[25px] font-bold sm:pl-10 pt-1">
          Archive:
        </h2>
        <div className="flex flex-wrap gap-[80px] pt-4 sm:pl-10 pb-8">
          {/* Everlyst */}
          <Link href="placeholder-everlyst">
            <Image
              src="/folderEverlyst.png"
              alt="Folder for everlyst project"
              width={200}
              height={160}
            />
          </Link>

          {/* Everlyst */}
          <Link href="placeholder-postly">
            <Image
              src="/folderPostly.png"
              alt="Folder for postly project"
              width={200}
              height={160}
            />
          </Link>

          {/* New years resulotions */}
          <Link href="placeholder-nye">
            <Image
              src="/folderNye.png"
              alt="Folder for New years resolutions project"
              width={200}
              height={160}
            />
          </Link>

          {/* My first portfolio */}
          <Link href="placeholder-firstPortfolio">
            <Image
              src="/folderFirstPort.png"
              alt="Folder for my first portfolio project"
              width={200}
              height={160}
            />
          </Link>

          {/* The mediterranean dream*/}
          <Link href="placeholder-tmd">
            <Image
              src="/folderTmd.png"
              alt="Folder for The mediterranean dream project"
              width={200}
              height={160}
            />
          </Link>

          {/* The Community science museum */}
          <Link href="placeholder-CSM">
            <Image
              src="/folderCSM.png"
              alt="Folder for The community science museum project"
              width={200}
              height={160}
            />
          </Link>

          {/* Rainydays*/}
          <Link href="placeholder-rainydays">
            <Image
              src="/folderRainydays.png"
              alt="Folder for rainydays project"
              width={200}
              height={160}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
