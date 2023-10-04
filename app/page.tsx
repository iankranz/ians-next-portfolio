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
          <a href="/resume.pdf">View r&eacute;sum&eacute;</a>
        </div>
        <p>
          With 2 years of professional software development experience and 4
          total years of professional experience, I am now seeking a new
          Software Engineer role.
        </p>
        <p>
          Since pivoting into the tech industry, I have grown at an accelerated
          rate, quickly becoming a full stack engineer and a domain expert in
          front-end development, earning the respect of my senior colleagues.
        </p>
        <p>
          From working closely with product managers, designers, and engineers I
          have learned both how to write great code and how to thrive in a
          product-focused business environment.
        </p>
        <p>
          If you are looking to hire a young and talented engineer who is eager
          to provide value, reach out to me at{" "}
          <a href="mailto:ian@iankranz.com">ian@iankranz.com</a>
        </p>
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
