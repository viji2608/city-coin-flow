import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Tech from "@/components/landing/Tech";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <HowItWorks />
        <Tech />
        {/* Investment CTA section */}
        <section id="invest" className="container mx-auto py-16 md:py-24">
          <article className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Invest in a micro-unit near Chennai Metro</h2>
            <p className="mt-3 text-muted-foreground">
              Own a piece of tomorrow. Early access opens soon—join the list and be first to co-own metro-powered growth.
            </p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center" aria-label="Join waitlist">
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="h-11 px-4 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md h-11 px-6 font-medium bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(var(--brand-2))] text-primary-foreground shadow-[var(--shadow-elevated)] hover:from-[hsl(var(--brand-2))] hover:to-[hsl(var(--brand))] transition-colors"
              >
                Join waitlist
              </button>
            </form>
          </article>
        </section>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
