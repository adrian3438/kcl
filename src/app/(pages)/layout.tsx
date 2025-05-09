import type { Metadata } from "next";
import "@/app/(pages)/globals.css";
import "@/assets/common.scss"

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
      <body>
        {children}
      </body>
    </html>
  );
}
