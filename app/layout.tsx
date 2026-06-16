import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
subsets: ["latin"],
weight: ["300", "400", "500", "600", "700", "800"],
variable: "--font-poppins",
display: "swap",
});

export const metadata: Metadata = {
title: "MirthLuxe AI Studio — Luxury AI Systems for Modern Businesses",
description:
"We build AI-powered websites, automations, chatbots, voice agents, and lead systems that help small businesses look premium, respond faster, and grow smarter.",
keywords: [
"AI agency",
"AI automation",
"AI chatbot",
"voice agent",
"lead automation",
"booking automation",
"AI website design",
],
openGraph: {
title: "MirthLuxe AI Studio — Luxury AI Systems for Modern Businesses",
description:
"AI websites, chatbots, voice agents, and lead automation for wellness clinics, restaurants, tutorial centers, and service businesses.",
type: "website",
},
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return ( <html lang="en" className={poppins.variable}> <body className="font-sans antialiased">
{children}

```
    <Script
      src="https://buildmyagent.io/widget/6a312c99aaf6a2da575bcbea/widget-professional.js?widgetId=6a312c99aaf6a2da575bcbea"></script>
    />
  </body>
</html>
);
}
