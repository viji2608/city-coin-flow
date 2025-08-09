import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    title: "Tokenize",
    desc: "Real estate near metro stations is fractionalized into compliant tokens representing micro-ownership.",
  },
  {
    title: "Invest",
    desc: "Buy tokens from as little as a micro-unit. No gated capital—just open, liquid access.",
  },
  {
    title: "Earn",
    desc: "Rental flows are recorded on-chain and distributed to co-owners with full transparency.",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="container mx-auto py-16 md:py-24">
    <div className="mx-auto max-w-3xl text-center">
      <Badge variant="secondary">How it works</Badge>
      <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">From footfall to financial freedom</h2>
      <p className="mt-3 text-muted-foreground">Three simple steps to co-own urban growth around metro corridors.</p>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {steps.map((s) => (
        <Card key={s.title} className="backdrop-blur supports-[backdrop-filter]:bg-background/80">
          <CardHeader>
            <CardTitle className="text-xl">{s.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default HowItWorks;
