import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
const poppins = Poppins({
subsets: ["latin"],
variable: "--font-poppins",
weight: ["300", "400", "500", "600", "700", "800"],
});
export const metadata: Metadata = {
title: "MirthLuxe AI Studio",
description:
"Premium AI websites, chatbots, booking automation, and lead capture systems for modern businesses.",
};
export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return ( <html lang="en" className={poppins.variable}> <body className="font-sans antialiased">
{children}
    <Script
      src="https://buildmyagent.io/widget/6a312c99aaf6a2da575bcbea/widget-professional.js?widgetId=6a312c99aaf6a2da575bcbea"
      strategy="afterInteractive"
    />
  </body>
</html>
);
}
