import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>Recent activity</h1>
        <h2 className={styles.objectiveStatement}>
          Full-stack software engineer with 2 YOE seeking new role
        </h2>
        <div className={styles.resumeBlock}>
          <a href="/ian-kranz-resume.pdf">View r&eacute;sum&eacute;</a>
        </div>
        <p>
          After nearly two years of working for a startup, I&apos;ve developed a
          knack for working cross-functionally with product and design teams to
          hit deadlines and meet business goals.
        </p>
        <p>
          I enjoy developing myself as a professional engineer, and that&apos;s
          why I&apos;ve picked up experience across the stack, doing detailed
          work with Vue, React, Next.js, Express, and PostgreSQL.
        </p>
        <p>
          I&apos;m now seeking a new engineering role, and I&apos;m eager to
          bring my skills to a new team and make an impact. To discuss
          opportunities, reach out to me at{" "}
          <a href="mailto:ian@iankranz.com">ian@iankranz.com</a>
        </p>
        <p></p>
        <h1>Recent projects</h1>
        <section id="feature-card">
          <Link href="/projects/dewdayte">
            <Image
              alt="A phone with the dewdayte app pulled up"
              src="/dewdayte.png"
              width={600}
              height={600}
            />
          </Link>
          <Link href="/projects/dewdayte">
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
