import { useRef, useLayoutEffect, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface FlowStep {
  step: string;
  title: string;
  desc: string;
  image: string;
  image2?: string;
}

export interface ProjectFlowTheme {
  // Container & Text styling
  sectionBgClass?: string;
  titleTextClass?: string;
  descTextClass?: string;

  // Circle Active / Inactive states (must be valid CSS color strings for GSAP interpolation)
  accentColor: string;
  activeCircleBg: string;
  inactiveCircleBg: string;
  circleShadowColor: string;

  // Progress line tailwind classes
  progressGradientClass: string;
}

interface ProjectFlowProps {
  steps: FlowStep[];
  titleNode: ReactNode;
  subtitleNode: ReactNode;
  theme: ProjectFlowTheme;
}

export function ProjectFlow({ steps, titleNode, subtitleNode, theme }: ProjectFlowProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const stepContainerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const image2Refs = useRef<(HTMLImageElement | null)[]>([]);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const sidebarSlotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const centroRef = useRef<HTMLDivElement>(null);

  // GSAP: pin right panel + step activation + image transitions
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    const SIDEBAR_ROTATION = -6;
    const SIDEBAR_STACK_Y = 120; // Positive for downward stack, tight overlap
    const SIDEBAR_Y_OFFSET = -120; // Shift stack UP to center it vertically

    function getSidebarBaseOffset() {
      const centro = centroRef.current;
      const anchor = sidebarSlotRefs.current[0];
      if (!centro || !anchor) return { x: 200, y: 0 };
      const centroRect = centro.getBoundingClientRect();
      const anchorRect = anchor.getBoundingClientRect();
      return {
        x: anchorRect.left - centroRect.left + (anchorRect.width - centroRect.width) / 2,
        y: anchorRect.top - centroRect.top + (anchorRect.height - centroRect.height) / 2,
      };
    }

    function activateStep(index: number) {
      // -- Circles --
      const circleEls = circleRefs.current.filter(Boolean) as HTMLDivElement[];
      circleEls.forEach((circle, ci) => {
        if (ci <= index) {
          gsap.to(circle, {
            borderColor: theme.accentColor,
            color: theme.accentColor,
            backgroundColor: theme.activeCircleBg,
            duration: 0.3,
            overwrite: "auto",
          });
        } else {
          gsap.to(circle, {
            borderColor: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.4)",
            backgroundColor: theme.inactiveCircleBg,
            duration: 0.3,
            overwrite: "auto",
          });
        }
      });

      // -- Text opacity --
      const textEls = textRefs.current.filter(Boolean) as HTMLDivElement[];
      textEls.forEach((t, ti) => {
        gsap.to(t, {
          opacity: ti === index ? 1 : 0.3,
          duration: 0.3,
          overwrite: "auto",
        });
      });

      // -- Centro/Sidebar image transitions (Desktop Only) --
      if (window.innerWidth >= 768) {
        const sidebarScale = 0.7; // Larger scale for sidebar images (partially cut off)
        const sidebarBase = getSidebarBaseOffset();
        const imageEls = imageWrapperRefs.current.filter(Boolean) as HTMLDivElement[];

        imageEls.forEach((img, ii) => {
          const img2 = image2Refs.current[ii];

          if (ii === index) {
            // ACTIVE: show at centro, highest z-index
            gsap.to(img, {
              opacity: 1, x: 0, y: 0, scale: 1, rotation: 0, zIndex: 10,
              duration: 0.5, ease: "power2.out", overwrite: "auto",
            });
            // Show secondary image if exists (after main settles)
            if (img2) {
              gsap.to(img2, {
                opacity: 1, rotation: -13, x: -100, y: -50,
                duration: 0.4, delay: 0.3, ease: "power2.out", overwrite: "auto",
              });
            }
          } else if (ii < index) {
            // PAST: move to sidebar stacked position
            if (img2) {
              gsap.to(img2, {
                opacity: 0, rotation: 0, x: 0, y: 0,
                duration: 0.2, ease: "power2.in", overwrite: "auto",
              });
            }
            gsap.to(img, {
              opacity: 1, // Keep visible in stack like mockup
              x: sidebarBase.x + 70, // Push to right to cut off
              y: sidebarBase.y + ii * SIDEBAR_STACK_Y + SIDEBAR_Y_OFFSET,
              scale: sidebarScale, rotation: SIDEBAR_ROTATION, zIndex: 4 + ii,
              duration: 0.5, ease: "power2.out", overwrite: "auto",
            });
          } else {
            // UPCOMING: hidden behind centro
            if (img2) {
              gsap.set(img2, { opacity: 0, rotation: 0, x: 0, y: 0 });
            }
            gsap.to(img, {
              opacity: 0, x: 0, y: 0, scale: 0.9, rotation: 0, zIndex: 5,
              duration: 0.4, ease: "power2.out", overwrite: "auto",
            });
          }
        });
      }
    }

    mm.add("all", () => {
      // Smooth progress line: scrubbed animation tied to scroll
      const timelineEl = timelineRef.current;
      const progressFill = progressFillRef.current;
      if (timelineEl && progressFill) {
        gsap.set(progressFill, { height: 0, opacity: 1 });
        gsap.to(progressFill, {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: timelineEl,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });

        // Recalculate triggers when images load to prevent sync issues
        const images = timelineEl.querySelectorAll('img');
        images.forEach((img) => {
          if (!img.complete) {
            img.addEventListener('load', () => ScrollTrigger.refresh());
          }
        });
      }

      // Use ScrollTrigger per step container to detect active step
      const containers = stepContainerRefs.current.filter(Boolean) as HTMLDivElement[];
      containers.forEach((container, i) => {
        ScrollTrigger.create({
          trigger: container,
          start: "top center",
          end: "bottom center",
          onEnter: () => activateStep(i),
          onEnterBack: () => activateStep(i),
        });
      });
    });

    mm.add("(min-width: 768px)", () => {
      const section = sectionRef.current;
      const rightPanel = rightPanelRef.current;
      if (!section || !rightPanel) return;

      const imageEls = imageWrapperRefs.current.filter(Boolean) as HTMLDivElement[];

      // Pin the right panel so images stay visible while scrolling
      const content = contentRef.current;
      if (!content) return;

      ScrollTrigger.create({
        trigger: content,
        start: "top top",
        end: "bottom bottom",
        pin: rightPanel,
        pinSpacing: false,
      });

      // Initial state: Flow-1 visible at centro, rest hidden
      imageEls.forEach((img, ii) => {
        gsap.set(img, {
          opacity: ii === 0 ? 1 : 0,
          scale: ii === 0 ? 1 : 0.9,
          x: 0,
          y: 0,
          zIndex: ii === 0 ? 10 : 1,
        });
      });

      const img2Els = image2Refs.current.filter(Boolean) as HTMLImageElement[];
      gsap.set(img2Els, { opacity: 0, rotation: 0, x: 0, y: 0 });
    });

    return () => mm.revert();
  }, [theme]);

  return (
    <section ref={sectionRef} className={`relative ${theme.sectionBgClass || ''}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="pt-24 md:pt-32 pb-16 md:pb-24">
          <h2 className="text-5xl md:text-7xl font-serif italic mb-6">
            {titleNode}
          </h2>
          <div className="font-mono text-sm tracking-widest">
            {subtitleNode}
          </div>
        </div>

        <div ref={contentRef} className="flex flex-col md:flex-row relative pb-90">

          {/* Left Column: Timeline with sticky steps */}
          <div className="w-full md:w-[45%] relative">
            <div ref={timelineRef} className="relative pb-20">

              {steps.map((item, i) => (
                <div
                  key={item.title}
                  ref={(el) => { stepContainerRefs.current[i] = el; }}
                  className="relative"
                  style={{
                    // Each container is tall enough to give the sticky step
                    // time to stay pinned before the next step pushes it away.
                    // Last step doesn't need extra height.
                    minHeight: i < steps.length - 1 ? '70vh' : 'auto',
                  }}
                >
                  {/* Sticky step content: pins below nav until next step pushes it */}
                  <div className="sticky top-[72px] flex gap-6 md:gap-8 pb-8" style={{ zIndex: 5 }}>
                    {/* Step circle */}
                    <div
                      ref={(el) => { circleRefs.current[i] = el; }}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center text-sm font-mono shrink-0 transition-colors"
                      style={{
                        position: 'relative',
                        zIndex: 10,
                        borderColor: i === 0 ? theme.accentColor : 'rgba(255,255,255,0.1)',
                        color: i === 0 ? theme.accentColor : 'rgba(255,255,255,0.4)',
                        backgroundColor: i === 0 ? theme.activeCircleBg : theme.inactiveCircleBg,
                        boxShadow: `0 0 0 8px ${theme.circleShadowColor}`,
                      }}
                    >
                      {item.step}
                    </div>

                    {/* Step text (title + description) */}
                    <div
                      ref={(el) => { textRefs.current[i] = el; }}
                      className="pt-1.5"
                      style={{ opacity: i === 0 ? 1 : 0.3 }}
                    >
                      <h3 className={`text-xl md:text-2xl font-serif mb-2 ${theme.titleTextClass || ''}`}>
                        {item.title}
                      </h3>
                      <p className={`text-base leading-relaxed max-w-sm ${theme.descTextClass || ''}`}>
                        {item.desc}
                      </p>

                      {/* Mobile-only: show image inline */}
                      <div className="block md:hidden mt-6">
                        <img
                          src={item.image}
                          alt={`Paso ${item.step}`}
                          loading="lazy"
                          decoding="async"
                          className="w-full max-w-xs rounded-xl border border-white/10 shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Progress line: background track (z-index 1, behind sticky steps) */}
              <div
                style={{ zIndex: 1 }}
                className="absolute left-[calc(1.25rem-1px)] md:left-[calc(1.5rem-1px)] top-0 bottom-0 w-[2px] bg-white/10"
                aria-hidden="true"
              >
                {/* Animated fill (GSAP-driven, synced to activateStep) */}
                <div
                  ref={progressFillRef}
                  style={{ height: 0, opacity: 0 }}
                  className={`absolute inset-x-0 top-0 w-[2px] rounded-full ${theme.progressGradientClass}`}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Phone Screenshots (pinned by GSAP) */}
          <div
            ref={rightPanelRef}
            className="hidden md:block w-full md:w-[55%]"
            style={{ height: '100vh' }}
          >
            <div className="w-full h-screen flex items-center relative">
              {/* Centro zone: large active image */}
              <div
                ref={centroRef}
                className="relative grid place-items-center flex-1"
                style={{ maxWidth: '22rem', margin: '0 auto' }}
              >
                {steps.map((item, i) => (
                  <div
                    key={item.title}
                    ref={(el) => { imageWrapperRefs.current[i] = el; }}
                    className="flow-image"
                    style={{
                      gridArea: '1 / 1',
                      width: '100%',
                      position: 'relative',
                    }}
                  >
                    {/* Secondary image behind, animated by GSAP */}
                    {item.image2 && (
                      <img
                        ref={(el) => { image2Refs.current[i] = el; }}
                        src={item.image2}
                        alt={`Paso ${item.step} detalle`}
                        loading="lazy"
                        decoding="async"
                        className="absolute w-full object-contain rounded-2xl"
                        style={{
                          maxHeight: '75vh',
                          filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))',
                          opacity: 0,
                          zIndex: 0,
                          top: 0,
                          left: 0,
                        }}
                      />
                    )}
                    {/* Primary image */}
                    <img
                      src={item.image}
                      alt={`Paso ${item.step}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-contain rounded-2xl"
                      style={{
                        maxHeight: '75vh',
                        filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Sidebar zone: single anchor for stacked card positions */}
              <div className="flex items-center justify-end pr-0" style={{ width: '10rem', flexShrink: 0, overflow: 'visible' }}>
                <div
                  ref={(el) => { sidebarSlotRefs.current[0] = el; }}
                  style={{
                    width: '1px', // Just an anchor point
                    height: '1px',
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
