import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => (
  <section id="faq" className="container mx-auto py-16 md:py-24">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">FAQs</h2>
      <p className="mt-2 text-muted-foreground">Answers to common questions about tokenized, transit-powered real estate.</p>
    </div>

    <div className="mx-auto mt-8 max-w-2xl">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What am I actually buying?</AccordionTrigger>
          <AccordionContent>
            Tokens represent fractional economic rights to income from specific metro-adjacent micro-units. Full disclosures are provided per asset.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How are rents distributed?</AccordionTrigger>
          <AccordionContent>
            Rental income is recorded on-chain and distributed pro-rata to token holders on a periodic schedule with transparent reporting.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Why start with Chennai?</AccordionTrigger>
          <AccordionContent>
            Chennai Metro’s growing corridors and footfall provide a compelling first market. The model scales to any city with high-frequency transit.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
);

export default FAQ;
