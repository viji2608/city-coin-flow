import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Tech = () => (
  <section id="tech" className="container mx-auto py-16 md:py-24">
    <div className="mx-auto max-w-3xl text-center">
      <Badge variant="secondary">Technology</Badge>
      <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Credible rails, real data</h2>
      <p className="mt-3 text-muted-foreground">Built on Andromeda, powered by Pulsar analytics, with AI-driven demand mapping and transparent on-chain flows.</p>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {["Andromeda", "Pulsar", "AI Insights"].map((name) => (
        <Card key={name}>
          <CardContent className="py-6">
            <div className="text-lg font-medium bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(var(--brand-2))] bg-clip-text text-transparent text-center">
              {name}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default Tech;
