import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>Featured activity</h1>
        <section id="feature-card">
          <Link href="https://dewdayte.com" target="_blank">
            <Image
              alt="A phone with the dewdayte app pulled up"
              src="/dewdayte.png"
              width={600}
              height={600}
            />
          </Link>
          <Link href="https://dewdayte.com" target="_blank">
            <h2>New project is live!</h2>
          </Link>
          <p>
            I build a web application for tracking tasks. It&apos;s called
            dewdayte, and it might just help you become more productive. Try it
            out!
          </p>
        </section>
        <section id="feature-card">
          <Link href="/projects/funnymaker">
            <Image
              alt="Arns the pig saying you had me at toe fungus"
              src="/pig-proj.jpg"
              width={600}
              height={600}
            />
          </Link>
          <Link href="/projects/funnymaker">
            <h2>Read about this past project</h2>
          </Link>
          <p>
            I recently wrote synopsis of a project I did a year ago. It dives
            into the technical implementation of my joke app: the funnymaker
            funny
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
