import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, bySlug } from "@/features/projects/data/projects";
import ProjectNav from "@/features/projects/components/ProjectNav";
import CloseButton from "@/features/projects/components/CloseButton";
import ShareButton from "@/features/projects/components/ShareButton";

// ────────────────────────────────
// Prebuild all articles
// ────────────────────────────────
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

// ────────────────────────────────
// SEO metadata
// ────────────────────────────────
export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = bySlug(params.slug);
  if (!p) return {};
  const short = p.description.trim().split("\n")[0] ?? p.title;
  return {
    title: `${p.title} — Projects`,
    description: short,
  };
}

// ────────────────────────────────
// Article page
// ────────────────────────────────
export default function ProjectArticle({
  params,
}: {
  params: { slug: string };
}) {
  const project = bySlug(params.slug);
  if (!project) return notFound();

  const paragraphs = project.description
    .trim()
    .split(/\n\s*\n/)
    .map((p, i) => (
      <p key={i} className="mb-4">
        {p.trim()}
      </p>
    ));

  // Format key features (bold title part)
  function renderFeature(item: string) {
    const m = item.match(/^\*\*(.+?)\*\*\s*-\s*(.+)$/);
    if (!m) return <span>{item}</span>;
    return (
      <span>
        <strong>{m[1]}:</strong> {m[2]}
      </span>
    );
  }

  return (
    <section className="mt-[60px] md:mt-[275px] mb-20 font-montserrat">
      <div
        className="relative w-full max-w-[1322px] mx-auto overflow-hidden"
        style={{ height: 652 }}>
        <Image
          src="/PinkOverallPanel.svg"
          alt=""
          fill
          className="object-fill select-none pointer-events-none"
          priority
        />

        {/* Content area */}
        <div className="absolute inset-0 px-14 lg:px-[114px] py-18">
          <article className="h-full mx-auto max-w-[730px] overflow-y-auto overflow-x-hidden glass-scroll">
            {/* ─────────── Header ─────────── */}
            <header className="mb-6">
              <div className="flex flex-col text-wine">
                <div className="flex flex-row flex-wrap-reverse gap-4 sm:gap-0 justify-between items-center">
                  <ProjectNav
                    prev={
                      bySlug(
                        PROJECTS[
                          PROJECTS.findIndex((p) => p.slug === params.slug) - 1
                        ]?.slug ?? ""
                      ) ?? null
                    }
                    next={
                      bySlug(
                        PROJECTS[
                          PROJECTS.findIndex((p) => p.slug === params.slug) + 1
                        ]?.slug ?? ""
                      ) ?? null
                    }
                  />
                  <CloseButton />
                </div>
                <h1 className="text-[25px] font-bold pt-[25px]">
                  {project.title}
                </h1>

                <div>
                  <h2 className="text-[14px] font-bold pt-[20px] text-wine">
                    META:
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="bg-[url('/articleBlob.svg')] bg-no-repeat bg-center w-[130px] h-[40px] text-[14px] font-semibold flex items-center justify-center transition-transform duration-150 motion-safe:hover:scale-[1.06] will-change-transform">
                      {project.meta}
                    </span>
                    {project.links?.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[url('/articleBlob.svg')] bg-no-repeat bg-center w-[130px] h-[40px] text-[14px] font-semibold flex items-center justify-center transition-transform duration-150 motion-safe:hover:scale-[1.06] will-change-transform">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-[14px] font-bold pt-[20px] text-wine">
                    TECHNOLOGIES:
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    {project.tags?.map((t) => (
                      <span
                        key={t}
                        className="bg-[url('/articleBlob.svg')] bg-no-repeat bg-center w-[130px] h-[40px] text-[14px] font-semibold flex items-center justify-center transition-transform duration-150 motion-safe:hover:scale-[1.06] will-change-transform">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </header>

            {/* Description */}
            <div className="w-full h-[1px] bg-wine my-[20px]"></div>
            <section className="my-[20px]">{paragraphs}</section>

            {/* Key features */}
            {project.keyFeatures?.length ? (
              <section className="mb-8">
                <h2 className="text-[14px] font-bold pt-[20px] text-wine">
                  KEY FEATURES:
                </h2>
                <ul className="list-disc pl-5 space-y-3">
                  {project.keyFeatures.map((f, i) => (
                    <li key={i}>{renderFeature(f)}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {/* Others (like feedback) */}
            {project.others?.length ? (
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-3">Other</h2>
                <div className="space-y-4">
                  {project.others.map((o, i) => (
                    <p key={i}>{o}</p>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Screenshots */}
            {project.screenshots?.length ? (
              <section className="mb-[20px]">
                <div className="">
                  {project.screenshots.map((s, i) => (
                    <figure key={i} className="relative">
                      <Image
                        src={s.src}
                        alt={s.alt ?? ""}
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded-xl border border-white/10"
                      />
                      {s.caption && (
                        <figcaption className="mt-2 text-sm opacity-80">
                          {s.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </section>
            ) : null}

            <div className="flex flex-row flex-wrap justify-center gap-3">
              <ProjectNav
                prev={
                  bySlug(
                    PROJECTS[
                      PROJECTS.findIndex((p) => p.slug === params.slug) - 1
                    ]?.slug ?? ""
                  ) ?? null
                }
                next={
                  bySlug(
                    PROJECTS[
                      PROJECTS.findIndex((p) => p.slug === params.slug) + 1
                    ]?.slug ?? ""
                  ) ?? null
                }
              />
                <ShareButton />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
