import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { LayoutClient } from "@/app/LayoutClient";
import "@/app/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
