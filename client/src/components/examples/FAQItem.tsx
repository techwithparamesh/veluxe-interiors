import { Accordion } from "@/components/ui/accordion";
import FAQItem from '../FAQItem';

export default function FAQItemExample() {
  return (
    <div className="p-8 max-w-2xl">
      <Accordion type="single" collapsible>
        <FAQItem
          value="item-1"
          question="How long does a typical project take?"
          answer="Project timelines vary depending on scope and complexity. A modular kitchen typically takes 4-6 weeks, while complete home interiors can take 3-6 months from design to completion."
        />
        <FAQItem
          value="item-2"
          question="Do you offer free consultations?"
          answer="Yes, we offer a complimentary initial consultation to understand your requirements and provide preliminary design ideas."
        />
      </Accordion>
    </div>
  );
}
