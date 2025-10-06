"use client";

import { useContentTabs, type ContentTab } from "@/stores/useContentTabs";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

// className helper
function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const TABS: { id: ContentTab; label: string; bg: string; width: string }[] = [
  {
    id: "about",
    label: "ABOUT",
    bg: "bg-[url('/aboutTab.svg')] bg-no-repeat bg-center bg-contain",
    width: "w-[330.50px]",
  },
  {
    id: "projects",
    label: "PROJECTS",
    bg: "bg-[url('/projectsTab.svg')] bg-no-repeat bg-center bg-contain",
    width: "w-[330px]",
  },
  {
    id: "contact",
    label: "CONTACT",
    bg: "bg-[url('/contactTab.svg')] bg-no-repeat bg-center bg-contain",
    width: "w-[330.50px]",
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
    <section className="mt-5 mb-20">
      <div className="mx-auto max-w-[1322px] font-jakarta text-primary">
        {/* TABS */}
        <div
          className="flex h-[85.99px] pl-[3px] gap-0 p-0 -mb-[1px]"
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
                "grid place-items-center",
                t.width,
                t.bg,
                active === t.id && "font-bold"
              )}>
              <span className="block">{t.label}</span>
            </button>
          ))}

          {/* SPACER (kept!) */}
          <div className="w-[326.50px] bg-[url('/spaceTab.svg')] bg-no-repeat bg-center bg-contain">
            {/* Add a CTA button here later if you want */}
          </div>
        </div>

        {/* PANEL */}
        <div
          role="tabpanel"
          className={cx(
            "max-w-[1322px] h-[566px] bg-[url('/panel.svg')] bg-no-repeat bg-center bg-contain",
            active === "about" && "bg-primary/20",
            active === "projects" && "bg-secondary/20",
            active === "contact" && "bg-primary/10"
          )}>
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
    </section>
  );
}
