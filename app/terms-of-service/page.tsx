import type { Metadata } from "next";
import LegalLayout, { type LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service | MirthLuxe AI Studio",
  description:
    "The terms and conditions governing your use of MirthLuxe AI Studio's website and AI automation services.",
};

const sections: LegalSection[] = [
  {
    heading: "Introduction",
    paragraphs: [
      "These Terms of Service (“Terms”) govern your access to and use of the website [Website URL] and the services provided by MirthLuxe AI Studio (“we,” “us,” or “our”). By accessing our website or engaging our services, you agree to be bound by these Terms.",
      "If you are entering into these Terms on behalf of a business or organisation, you represent that you have the authority to bind that entity to these Terms.",
    ],
  },
  {
    heading: "Eligibility",
    paragraphs: [
      "You must be at least 18 years old and capable of forming a legally binding agreement to use our services. By using our services, you confirm that you meet these requirements and that all information you provide is accurate and current.",
    ],
  },
  {
    heading: "Services Provided",
    paragraphs: [
      "MirthLuxe AI Studio provides AI automation services, which may include AI-powered websites, chatbots, voice agents, lead automation, booking and appointment systems, reputation automation, and related business workflow automation.",
      "The specific scope, deliverables, timeline, and fees for any engagement will be set out in a separate proposal, quote, or agreement. In the event of a conflict, the terms of that specific agreement will take precedence over these Terms.",
    ],
  },
  {
    heading: "User Responsibilities",
    paragraphs: ["When using our website and services, you agree to:"],
    bullets: [
      "Provide accurate, complete, and up-to-date information.",
      "Use our website and services only for lawful purposes.",
      "Maintain the confidentiality of any account credentials or access we provide.",
      "Ensure you have the necessary rights to any content or data you provide to us.",
      "Refrain from interfering with or disrupting the security or operation of our services.",
    ],
  },
  {
    heading: "AI Usage and Output Disclaimer",
    paragraphs: [
      "Our services may incorporate artificial intelligence technologies. AI-generated outputs can be inaccurate, incomplete, or unexpected, and should not be treated as professional, legal, medical, or financial advice.",
      "You are responsible for reviewing, testing, and approving AI outputs before relying on them or making them available to your customers. MirthLuxe AI Studio does not guarantee specific results, performance, or business outcomes from the use of AI systems we build.",
    ],
  },
  {
    heading: "Client Content and Intellectual Property",
    paragraphs: [
      "You retain ownership of the content, data, and materials you provide to us (“Client Content”). You grant us a limited, non-exclusive licence to use Client Content solely for the purpose of delivering and supporting the services you have engaged us to provide.",
      "You are responsible for ensuring that your Client Content does not infringe the rights of any third party and complies with applicable laws.",
    ],
  },
  {
    heading: "MirthLuxe AI Studio Intellectual Property",
    paragraphs: [
      "All tools, frameworks, code, designs, templates, processes, and know-how that we develop or use to provide our services remain the intellectual property of MirthLuxe AI Studio, unless otherwise agreed in writing.",
      "Upon full payment, you receive a licence to use the final deliverables for your business as described in your project agreement. Our pre-existing and reusable components remain our property.",
    ],
  },
  {
    heading: "Payments and Refunds",
    paragraphs: [
      "Fees, payment schedules, and milestones are set out in your project agreement or invoice. Unless otherwise stated, invoices are due on the terms specified, and late payments may result in suspension of work or services.",
      "Because our services involve custom work and time investment, fees are generally non-refundable except where required by law or expressly stated in your agreement. Any refund requests will be considered in good faith on a case-by-case basis.",
    ],
  },
  {
    heading: "Third-Party Tools and Integrations",
    paragraphs: [
      "Our services may rely on or integrate with third-party tools, platforms, and APIs. Your use of those third-party services is subject to their own terms and pricing. We are not responsible for the availability, performance, or policies of third-party providers, and changes by those providers may affect your systems.",
    ],
  },
  {
    heading: "Service Changes",
    paragraphs: [
      "We may modify, enhance, or discontinue features of our services from time to time. Where a change materially affects an active engagement, we will make reasonable efforts to communicate with you in advance.",
    ],
  },
  {
    heading: "Suspension and Termination",
    paragraphs: [
      "We may suspend or terminate access to our services if you breach these Terms, fail to make payment, or use our services in a manner that is unlawful or harmful. Either party may terminate an engagement in accordance with the terms of the applicable project agreement.",
      "Upon termination, any outstanding fees for work completed remain payable, and provisions of these Terms that by their nature should survive will continue to apply.",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, MirthLuxe AI Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, data, or goodwill arising from your use of our website or services.",
      "Our total aggregate liability for any claim arising out of or relating to our services shall not exceed the amount you paid to us for the specific services giving rise to the claim.",
    ],
  },
  {
    heading: "Indemnification",
    paragraphs: [
      "You agree to indemnify and hold harmless MirthLuxe AI Studio and its representatives from any claims, damages, losses, liabilities, and expenses arising out of your use of our services, your Client Content, or your breach of these Terms.",
    ],
  },
  {
    heading: "Governing Law",
    paragraphs: [
      "These Terms are governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles.",
    ],
  },
  {
    heading: "Dispute Resolution",
    paragraphs: [
      "In the event of a dispute, the parties agree to first attempt to resolve the matter in good faith through direct discussion. If the dispute cannot be resolved informally, it shall be resolved through the courts or dispute resolution process applicable in [Jurisdiction].",
    ],
  },
  {
    heading: "Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. When we do, we will revise the “Last Updated” date at the top of this page. Your continued use of our website or services after changes take effect constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      "If you have any questions about these Terms, please contact us:",
    ],
    bullets: [
      "MirthLuxe AI Studio",
      "Address: [Business Address]",
      "Email: [Contact Email]",
      "Website: [Website URL]",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="[Last Updated Date]"
      sections={sections}
    />
  );
}
