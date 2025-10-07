"use client";

import { useContentTabs, type ContentTab } from "@/stores/useContentTabs";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

// className helper
function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const TABS: {
  id: ContentTab;
  label: string;
  bg: string;
  width: string;
  text?: string;
}[] = [
  {
    id: "about",
    label: "about",
    bg: "bg-[url('/aboutTab.svg')] bg-no-repeat bg-center bg-contain",
    width: "max-w-[330.50px]",
    text: "text-wine",
  },
  {
    id: "projects",
    label: "projects",
    bg: "bg-[url('/projectsTab.svg')] bg-no-repeat bg-center bg-contain",
    width: "max-w-[330px]",
    text: "text-wine",
  },
  {
    id: "contact",
    label: "contact",
    bg: "bg-[url('/contactTab.svg')] bg-no-repeat bg-center bg-contain",
    width: "max-w-[330.50px]",
    text: "text-lightpink",
  },
];

/**
 * TabbedHub — minimal public tabs/folder panel with a right-side spacer.
 * No keyboard logic; just click tabs to switch content.
 */
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
          className="flex h-[85.99px] pl-[3px] gap-0 p-0 -mb-[1px] text-[28px]"
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
                "w-full flex justify-center items-center pt-3 -ml-[1px] first:ml-0", 
                t.width,
                t.bg,
                t.text,
                active === t.id && "font-bold"
              )}>
              <span
                className={cx(
                  "block leading-none", 
                  "transition-transform duration-150", 
                  "motion-safe:group-hover:scale-[1.06]",
                  "will-change-transform",
                  active === t.id && "scale-[1.03]"
                )}>
                {t.label}
              </span>
            </button>
          ))}

          {/* SPACER */}
          <div
            className={cx(
              "flex-auto bg-[url('/spaceTab.svg')] bg-no-repeat bg-center bg-contain -ml-[1px]", // ← overlap
              active === "about" && "bg-[url('/spaceTab.svg')]",
              active === "projects" && "bg-[url('/spaceTabRose.svg')]",
              active === "contact" && "bg-[url('/spaceTabBrown.svg')]"
            )}
            aria-hidden="true"
          />
        </div>

        {/* PANEL */}
        <div
          role="tabpanel"
          className={cx(
            "max-w-[1322px] h-[566px] bg-[url('/panel.svg')] bg-no-repeat bg-center bg-contain",
            active === "about" && "bg-[url('/panel.svg')]",
            active === "projects" && "bg-[url('/panelRose.svg')]",
            active === "contact" && "bg-[url('/panelBrown.svg')]"
          )}>
          {renderPanel ? (
            renderPanel(active)
          // ) : active === "about" ? (
          //   <AboutSection />
          ) : active === "projects" ? (
            <ProjectsSection />
          ) : (
            <ContactSection />
          )}
        </div>
      </div>
    </section>
  );
}
