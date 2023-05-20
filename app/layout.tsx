import "./globals.css";

export const metadata = {
  title: "Ian Kranz",
  description:
    "A wonderful portfolio site created by Ian Kranz. Come learn about Ian and discover what he's been up to",
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
