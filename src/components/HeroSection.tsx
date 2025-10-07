import Image from "next/image";

export default function HeroSection() {
  const tags = [
    "UX/UI enthusiast",
    "Creative soul",
    "Detail-Oriented",
    "Dog lover",
    "Book worm",
  ];

  return (
    <section className="flex justify-center mt-12 px-2 sm:px-10">
      <div className="flex flex-col">
        <div className="flex flex-col-reverse lg:flex-row  lg:items-end">
          <Image
            src="/nameRikkejulianehero.svg"
            alt="Rikke juliane written in my handwriting"
            width={611}
            height={125}
          />
          <Image
            src="/drawingRikkejuliane.png"
            alt="Drawing of Rikke Juliane made by Rikke Juliane"
            width={402}
            height={460}
            className="ml-6 lg:-ml-12"
          />
        </div>
        <h1 className="font-montserrat text-wine text-[30px] sm:text-[40px] md:text-[50px] lg:text-[65px] font-bold leading-tight">
          FRONTEND DEVELOPER
        </h1>
        <ul className="flex flex-wrap items-center text-sm md:text-base font-bold text-wine">
          {tags.map((t, i) => (
            <li key={t} className="flex items-center flex-wrap">
              <span>{t}</span>
              {i !== tags.length - 1 && (
                <span
                  className="mx-[10px] md:mx-[20px] h-[12px] md:h-[21px] w-px bg-wine"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
