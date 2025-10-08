"use client";

import { useEffect, useRef, useState } from "react";

type FunFactsProps = {
  items?: string[];
  intervalMs?: number;
  className?: string;
};

const DEFAULT_FACTS = [
  "I ugly-cried with relief after my first HTML/CSS hand-in.",
  "Confession: I once named every commit first commit for a whole year.",
  "In our class, women were the majority - and it was awesome. #shecodes",
  "No, my first ‘portfolio’ wasn’t sponsored by Urban Decay All Nighter from 10 years ago… it just looked like it.",
  "I love the design process as much as the coding — creativity fuels my dev flow.",
  "Most of this portfolio is hand-drawn by me on iPad – only some text/images aren’t.",
];

export default function FunFacts({
  items = DEFAULT_FACTS,
  intervalMs = 15000,
  className = "",
}: FunFactsProps) {
  const [idx, setIdx] = useState(0);
  const [anim, setAnim] = useState<"in" | "out">("in");
  const pausedRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  const next = () => {
    setAnim("out");
    window.setTimeout(() => {
      setIdx((i) => (i + 1) % items.length);
      setAnim("in");
    }, 160);
  };

  useEffect(() => {
    const tick = () => !pausedRef.current && next();
    timerRef.current = window.setInterval(
      tick,
      intervalMs
    ) as unknown as number;
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalMs, items.length]);

  return (
    <section
      className={`w-full pt-[60px] md:pt-[130px] md:py-16 grid place-items-center font-montserrat text-chocolate ${className}`}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      aria-label="Fun facts">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          <h3 className="text-[25px] md:text-[26px] font-extrabold tracking-wide text-[#3B2E28]">
            FUNFACTS :
          </h3>
        </div>

        {/* Fact text */}
        <div
          role="status"
          aria-live="polite"
          className={[
            "text-center max-w-[900px] px-6 md:px-0 font-medium text-chocolate",
            "transition-all duration-150 ease-out",
            anim === "in"
              ? "opacity-100 scale-[1.0] translate-y-0"
              : "opacity-0 scale-[0.98] -translate-y-1",
          ].join(" ")}
          key={idx} // helps React reset transition state per fact
        >
          {items[idx]}
        </div>

        {/* Dots */}
        <div className="mt-2 flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Show fun fact ${i + 1}`}
              onClick={() => setIdx(i)}
              className={[
                "h-2.5 w-2.5 rounded-full transition-all",
                i === idx
                  ? "bg-chocolate"
                  : "bg-chocolate/30 hover:bg-chocolate/60",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
