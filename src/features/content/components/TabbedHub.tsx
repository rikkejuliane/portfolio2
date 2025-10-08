"use client";

import Image from "next/image";
import { useContentTabs, type ContentTab } from "@/stores/useContentTabs";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const TABS: {
  id: ContentTab;
  label: string;
  bg: string;
  text?: string;
}[] = [
  {
    id: "about",
    label: "about",
    bg: "bg-[url('/aboutTab.svg')]",
    text: "text-wine",
  },
  {
    id: "projects",
    label: "projects",
    bg: "bg-[url('/projectsTab.svg')]",
    text: "text-wine",
  },
  {
    id: "contact",
    label: "contact",
    bg: "bg-[url('/contactTab.svg')]",
    text: "text-lightpink",
  },
];

export default function TabbedHub({
  renderPanel,
}: {
  renderPanel?: (tab: ContentTab) => React.ReactNode;
}) {
  const { active, setActive } = useContentTabs();

  return (
    <section className="mt-[275px] mb-20">
      <div className="flex flex-col mx-auto max-w-[1322px] font-montserrat">
        {/* TABS */}
        <div
          className="flex items-stretch h-[85.99px] sm:pl-[3.5px] gap-0 p-0 -mb-[1px] text-[16px] sm:text-[20px] md:text-[28px]"
          role="tablist"
          aria-label="Content tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              type="button"
              onClick={() => setActive(t.id)}
              className={cx(
                "h-full min-w-0 -ml-[1px] first:ml-0 grid place-items-center pt-3",
                "flex-[0_1_330px]",
                t.bg,
                "bg-no-repeat bg-center bg-[length:100%_100%]",
                t.text,
                active === t.id && "font-bold"
              )}>
              <span className="block truncate transition-transform duration-150 motion-safe:group-hover:scale-[1.06] will-change-transform">
                {t.label}
              </span>
            </button>
          ))}

          {/* SPACER  */}
          <div
            aria-hidden="true"
            className={cx(
              "-ml-[1px] h-full min-w-0",
              "flex-[0_1_328.5px]",
              "bg-no-repeat bg-center bg-[length:100%_100%]",
              active === "about" && "bg-[url('/spaceTab.svg')]",
              active === "projects" && "bg-[url('/spaceTabRose.svg')]",
              active === "contact" && "bg-[url('/spaceTabBrown.svg')]"
            )}
          />
        </div>

        {/* PANEL  */}
        <div
          role="tabpanel"
          className="relative w-full max-w-[1322px] flex-none overflow-hidden"
          style={{ height: 566 }}>
          <Image
            src={
              active === "projects"
                ? "/panelRose.svg"
                : active === "contact"
                ? "/panelBrown.svg"
                : "/panel.svg"
            }
            alt=""
            fill
            sizes="(max-width: 1322px) 100vw, 1322px"
            className="object-fill select-none pointer-events-none"
          />

          {/* Padding lives here */}
          <div className="absolute inset-0 px-10 md:px-14 lg:px-[114px] pt-6 pb-[40px]">
            <div className="h-full mx-auto max-w-[1100px] overflow-y-auto overflow-x-hidden">
              {renderPanel ? (
                renderPanel(active)
              ) : active === "about" ? (
                <AboutSection />
              ) : active === "projects" ? (
                <ProjectsSection />
              ) : (
                <ContactSection />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
