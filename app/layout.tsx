import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajat Mishra — Full Stack Web Developer",
  description:
    "Portfolio of Rajat Mishra, a Full Stack Web Developer building responsive websites, web applications and e-commerce experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
