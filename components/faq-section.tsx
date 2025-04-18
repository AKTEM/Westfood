"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes Westfood products different from others?",
    answer: "Westfood products are crafted with premium ingredients and undergo rigorous quality control. Our commitment to innovation and sustainability sets us apart in the food manufacturing industry.",
  },
  {
    question: "Are your products available internationally?",
    answer: "Yes, Westfood products are available in multiple countries through our extensive distribution network. Contact our sales team for specific availability in your region.",
  },
  {
    question: "Do you offer bulk purchasing options?",
    answer: "Yes, we offer bulk purchasing options for businesses. Our team can provide customized solutions based on your requirements and volume needs.",
  },
  {
    question: "What quality certifications do you have?",
    answer: "Westfood maintains the highest industry standards with certifications including ISO 9001, HACCP, and various international food safety certifications.",
  },
  {
    question: "How do you ensure product freshness?",
    answer: "We implement strict quality control measures throughout our production and distribution process, including temperature-controlled storage and transportation.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our products and services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}