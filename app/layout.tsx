import "./globals.css"

export const metadata = {
  title: "Ian Kranz",
  description:
    "Ian Kranz is a full stack Software Engineer based in Brooklyn, NY. He studied Electrical and Computer Engineering at Cornell Univestity. He now specializes in front-end web technologies.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
