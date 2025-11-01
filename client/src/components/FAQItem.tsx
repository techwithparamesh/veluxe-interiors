import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

export default function FAQItem({ question, answer, value }: FAQItemProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-left font-semibold" data-testid={`button-faq-${value}`}>
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground" data-testid={`text-faq-answer-${value}`}>
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}
