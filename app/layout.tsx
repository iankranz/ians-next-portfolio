import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "IanKranz.com",
  description: "A portfolio site for Ian Kranz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
