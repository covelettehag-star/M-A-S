import type { Metadata } from "next";
import LegalLayout, { type LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | MirthLuxe AI Studio",
  description:
    "How MirthLuxe AI Studio collects, uses, and protects your information across our AI automation services.",
};

const sections: LegalSection[] = [
  {
    heading: "Introduction",
    paragraphs: [
      "MirthLuxe AI Studio (“we,” “us,” or “our”) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit [Website URL], contact us, or use our AI automation services.",
      "By using our website or services, you agree to the practices described in this policy. If you do not agree, please discontinue use of our website and services.",
    ],
  },
  {
    heading: "Information We Collect",
    paragraphs: [
      "We collect information that you provide directly to us, as well as information gathered automatically when you interact with our website and services.",
    ],
    bullets: [
      "Contact details such as your name, email address, phone number, and business name.",
      "Business information you share with us to scope a project, such as your industry, goals, and existing tools.",
      "Communications, including messages, enquiries, and files you send to us.",
      "Payment information, which is processed securely by third-party payment providers and not stored by us.",
      "Technical data such as IP address, browser type, device information, and pages visited.",
    ],
  },
  {
    heading: "How We Use Your Information",
    paragraphs: ["We use the information we collect to:"],
    bullets: [
      "Provide, operate, and deliver our AI automation services.",
      "Respond to your enquiries and provide customer support.",
      "Process payments and manage our business relationship with you.",
      "Improve our website, services, and customer experience.",
      "Send relevant updates or marketing communications where you have consented.",
      "Comply with legal obligations and protect our rights.",
    ],
  },
  {
    heading: "AI Data Handling",
    paragraphs: [
      "Our services involve building and configuring AI-powered systems such as chatbots, voice agents, and automations. Delivering these services may require processing data through third-party AI providers and related infrastructure.",
      "We do not use your confidential business data to train publicly available AI models without your consent. Where AI tools process data on your behalf, we take reasonable steps to ensure those providers maintain appropriate confidentiality and security standards. You remain responsible for the lawfulness of the data you provide for use within your AI systems.",
    ],
  },
  {
    heading: "Cookies and Analytics",
    paragraphs: [
      "We may use cookies and similar technologies to operate our website, remember your preferences, and understand how visitors use our site. We may also use analytics services to collect aggregated usage statistics.",
      "You can control or disable cookies through your browser settings. Disabling certain cookies may affect the functionality of our website.",
    ],
  },
  {
    heading: "Third-Party Services",
    paragraphs: [
      "We rely on trusted third-party providers to deliver our services. These may include website hosting, analytics, payment processing, AI and automation platforms, customer relationship management, and scheduling tools.",
      "These providers process information under their own privacy policies. We encourage you to review the privacy practices of any third-party service connected to your project.",
    ],
  },
  {
    heading: "Data Sharing",
    paragraphs: [
      "We do not sell your personal information. We may share information only in the following circumstances:",
    ],
    bullets: [
      "With service providers who help us operate our business and deliver our services.",
      "When required by law, regulation, legal process, or governmental request.",
      "To protect the rights, property, or safety of MirthLuxe AI Studio, our clients, or others.",
      "In connection with a business transfer, such as a merger, acquisition, or sale of assets.",
    ],
  },
  {
    heading: "International Data Transfers",
    paragraphs: [
      "Your information may be processed and stored in countries other than your own, including by our third-party providers. Where information is transferred internationally, we take reasonable steps to ensure it is handled in accordance with applicable data protection laws and this Privacy Policy.",
    ],
  },
  {
    heading: "Data Retention",
    paragraphs: [
      "We retain personal information for as long as necessary to provide our services, fulfil the purposes described in this policy, comply with our legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we take reasonable steps to delete or anonymise it.",
    ],
  },
  {
    heading: "Data Security",
    paragraphs: [
      "We implement reasonable technical and organisational measures designed to protect your information against unauthorised access, loss, misuse, or alteration. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Your Privacy Rights",
    paragraphs: [
      "Depending on your location, you may have certain rights regarding your personal information, including:",
    ],
    bullets: [
      "The right to access the personal information we hold about you.",
      "The right to request correction of inaccurate or incomplete information.",
      "The right to request deletion of your personal information.",
      "The right to object to or restrict certain processing.",
      "The right to data portability where applicable.",
    ],
  },
  {
    heading: "Children’s Privacy",
    paragraphs: [
      "Our website and services are not directed to children, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can take appropriate action.",
    ],
  },
  {
    heading: "Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make changes, we will revise the “Last Updated” date at the top of this page. We encourage you to review this policy periodically.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      "If you have questions about this Privacy Policy or how we handle your information, please contact us:",
    ],
    bullets: [
      "MirthLuxe AI Studio",
      "Address: [Business Address]",
      "Email: [Contact Email]",
      "Website: [Website URL]",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="[Last Updated Date]"
      sections={sections}
    />
  );
}
