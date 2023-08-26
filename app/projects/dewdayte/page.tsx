import Header from "@/components/Header"
import Footer from "@/components/Footer"
import styles from "./page.module.css"

export default function Funnymaker() {
  return (
    <>
      <Header />
      <main className={styles.funnymaker}>
        <h1>dewdayte</h1>
        <h2>A task management solution build with NextJS</h2>
        <a href="https://dewdayte.com" className={styles.trylink}>
          Try out dewdayte! &rarr;
        </a>
        <h3>Video Walkthrough</h3>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/bYnSMavlJ1E?si=ApPNu_7nkFN9SYd5"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={styles.responsiveIframe}
            frameBorder="0"
          ></iframe>
        </div>
        <h3>About</h3>
        <p>
          Dewdayte is a side project I started after finding myself wanting
          something more lightweight than traditional task management solutions
          like Asana and Jira. It uses an opinionated system of making you
          select the scope of when you plan to finish the task, giving you the
          options: “today”, “this week”, or “this month”.
        </p>
        <p>
          I built the UI with React as part of the NextJS application framework.
          Some of the key libraries in addition to Next include: Prisma, tRPC,
          and Tailwind CSS. If you’re interested, I have the code publicly
          available in{" "}
          <a href="https://github.com/iankranz/dewdayte">
            the dewdayte Github repository
          </a>
          .
        </p>
      </main>
      <Footer />
    </>
  )
}
