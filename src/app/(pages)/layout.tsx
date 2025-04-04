import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/(pages)/globals.css";
import "@/assets/common.scss"

const pretendard = localFont({
  src: "../fonts/Pretendard-Regular.woff",
  variable: "--font-pretendard-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "KCL Valve",
  description: "Korea valve manufacturer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable}`}>
        {children}
      </body>
    </html>
  );
}
