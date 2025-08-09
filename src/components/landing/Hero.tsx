import React from "react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/metronest-hero.jpg";

const Hero: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <header aria-label="MetroNest hero" className="relative">
      <nav className="container mx-auto flex items-center justify-between py-6">
        <a href="#" className="font-semibold text-lg tracking-tight bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(var(--brand-2))] bg-clip-text text-transparent" aria-label="MetroNest home">
          MetroNest
        </a>
        <div className="flex items-center gap-3">
          <Button variant="ghost" asChild>
            <a href="#how-it-works">How it works</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#faq">FAQ</a>
          </Button>
          <Button variant="hero" size="lg" asChild>
            <a href="#invest">Invest now</a>
          </Button>
        </div>
      </nav>

      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        className="relative overflow-hidden"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 md:opacity-100 transition-opacity"
          style={{
            background:
              "radial-gradient(480px 480px at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--brand) / 0.25), transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center py-12 md:py-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              MetroNest: Where Cities and Citizens Co-Own the Future
            </h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-prose">
              Imagine a city where every metro stop unlocks opportunity—tokenized micro-units, transparent rent flows, and AI that maps the pulse of urban life.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#invest" aria-label="Invest in Chennai micro-units">
                  Invest in Chennai
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#how-it-works">Learn how it works</a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Built on Andromeda · Powered by Pulsar · Guided by data
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-border shadow-sm">
            <img
              src={heroImg}
              alt="Futuristic Chennai metro station with subtle data overlays representing tokenized real estate and AI insights"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
