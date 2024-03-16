import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.objectiveStatement}>Welcome!</h1>
        <p>
          Thank you for visiting my site, a place where you can learn more about
          me, both personally and professionally. You can get a good idea of
          where I am at in my career by looking at my r&eacute;sum&eacute;.
        </p>
        <div className={styles.resumeBlock}>
          <a href="/ian-kranz-resume.pdf">View my r&eacute;sum&eacute;</a>
        </div>
        <p>
          If you&apos;re looking to get a more hollistic view, the About and
          Projects sections provide some info about things I do outside of work.
          Just looking to browse? Below is a list of some of my recent endevours
          that I update semi-regularly.
        </p>
        <p>
          I hope you find what you&apos;re looking for! Please feel free to
          reach out with any questions via the contact info on my
          r&eacute;sum&eacute;.
        </p>
        <h1 className={styles.recentActivity}>Recent activity</h1>
        <section id="feature-card">
          <Link href="https://linkedin.com/in/iankranz">
            <Image
              alt="A picture of a man in a collared shirt"
              src="/ian.png"
              width={600}
              height={600}
            />
          </Link>
          <Link href="https://linkedin.com/in/iankranz">
            <h2>New career update</h2>
          </Link>
          <p>
            I just recently started in a new software engineering role. You can
            see more on my LinkedIn page!
          </p>
        </section>
        <section id="feature-card">
          <Link href="/projects/funnymaker">
            <Image
              alt="Arns the pig saying you had me at toe fungus"
              src="/nichefactor.png"
              width={600}
              height={600}
            />
          </Link>
          <Link href="/projects/funnymaker">
            <h2>More Projects Added</h2>
          </Link>
          <p>
            You can now see more of the software projects that I&apos;ve built
            by heading over to the projects section.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
