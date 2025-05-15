import type { Metadata } from "next";
import "@/app/(pages)/globals.css";
import "@/assets/common.scss"
import Script from "next/script";

export const metadata: Metadata = {
  title: "KCL VALVE",
  description: "Oil and Gas Valve Manufacturer",
  keywords: ["oil and gas", "Kcl valve", "forged ball valve", "forged gate valve", "forged globe valve", "forged check valve", "forged plug valve", "forged strainer", "forged Y strainer", "forged filter", "forged valve", "valve manufacturer"],
  authors: [{ name: "KCL VALVE", url: "https://valvekcl.com" }],
  openGraph: {
    title: "KCL VALVE",
    description: "Oil and Gas Valve Manufacturer",
    url: "https://valvekcl.com",
    siteName: "KCL VALVE",
    images: [
      {
        url: "https://valvekcl.com/og-image.jpg", // 대표 이미지
        width: 1200,
        height: 630,
        alt: "Oil and Gas Valve Manufacturer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KCL VALVE",
    description: "Oil and Gas Valve Manufacturer",
    images: ["https://valvekcl.com/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

       <head>
          {/* Google tag (gtag.js) */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-1530V8CS69"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-1530V8CS69');
              `}
          </Script>
        </head>

      <body>
        {children}
      </body>
    </html>
  );
}
