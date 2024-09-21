import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "AlphaEdge Solutions",
  description: `AlphaEdge Solutions, integrating Id8edge's tools`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags or links can be added here */}
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
