"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { IconPlus } from "./icons";

const faqs = [
  {
    q: "What kind of businesses do you help?",
    a: "We work with service-based and local businesses — wellness clinics, restaurants, tutorial centers, salons, and small teams that want to look premium and respond faster without hiring more staff.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "Not at all. We handle the setup, training, and launch, then explain everything in plain language. You focus on your customers; we handle the technology.",
  },
  {
    q: "Can you build only a website?",
    a: "Absolutely. Many clients start with a premium AI-ready website and add automation later. You're never locked into more than you need today.",
  },
  {
    q: "Can you add AI automation later?",
    a: "Yes. Our systems are modular by design. Start with one piece — say, a website or chatbot — and layer in voice agents, booking, or reactivation whenever you're ready.",
  },
  {
    q: "How long does a basic AI website take?",
    a: "A focused AI website typically takes a couple of weeks from kickoff to launch, depending on content and scope. We'll give you a clear timeline after your free audit.",
  },
  {
    q: "Do you offer free previews?",
    a: "Yes. After your free AI audit, we can prepare a concept preview so you can see the look and feel before committing to a full build.",
  },
];

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
  id,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div
      className={`glass overflow-hidden rounded-2xl transition-all duration-300 ${
        isOpen ? "border-champagne-400/35" : ""
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        id={`${id}-button`}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
      >
        <span className="text-base font-medium text-cream-50 sm:text-lg">
          {q}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-champagne-400/40 text-champagne-200 transition-transform duration-300 ${
            isOpen ? "rotate-45 bg-champagne-500/15" : ""
          }`}
        >
          <IconPlus className="h-4 w-4" />
        </span>
      </button>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-cream-300/80 sm:px-6">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          highlight="answered"
          subtitle="Everything you need to know before your free AI audit."
        />

        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 70}>
              <FAQItem
                id={`faq-${i}`}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
