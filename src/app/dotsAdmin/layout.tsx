import React from "react";
import "./admin.css";
import Script from "next/script";
import Container from "@/components/Container";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>

        <Container>
          {children}
        </Container>

        <Script
          src="https://code.jquery.com/jquery-3.7.1.js"
          strategy="beforeInteractive"
        />
        {/* Bootstrap */}
        <Script
          src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
          strategy="beforeInteractive"
        />
        {/* Summernote */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-bs4.min.js"
          strategy="beforeInteractive"
        />
        <Script src='https://kit.fontawesome.com/b025689c8c.js' strategy="beforeInteractive"></Script>
      </body>

    </html>
  );
}
