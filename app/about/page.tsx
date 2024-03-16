import Header from "@/components/Header"
import Footer from "@/components/Footer"
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.about}>
        <h1>About</h1>
        <p>
          My name is Ian Kranz, and I am a full-stack software engineer based in
          Brooklyn, NY. I studied Electrical and Computer Engineering at Cornell
          Univestity. Today, I work full-time as a software engineer with much
          of my work focusing on front-end development.
        </p>
        <h2>About my career:</h2>
        <ul>
          <li>
            I like to build websites and software applications, everything from
            simple blog sites to data intensive web services. I got into
            software development a few years ago and haven&apos;t looked back.
          </li>
          <li>
            Some of the main technologies I&apos;ve become familiar with and
            enjoy using in software development are JavaScript, ReactJS, NodeJS,
            Java, Spring Boot, PostgreSQL, and AWS.
          </li>
          <li>
            Collaboartion is an important part of my working process.
            Communication clearly, calling out issues early, and establishing
            productive norms are things I consider when taking on projects.
          </li>
          <li>
            I&apos;m naturally a hard worker. When I put my mind to something, I
            get it done. It&apos;s one of my biggest strengths.
          </li>
        </ul>

        <h2>About my interests:</h2>
        <ul>
          <li>
            I have a personal newsletter that I send out every month. In it, I
            write about some of the major things that I was up to that month
            like trips I went on or events I attended.
          </li>
          <li>
            I enjoy a nice challenge, so I find games to be quite fun. I like
            the process of strategizing when trying to win a card game, board
            game, or video game.
          </li>
          <li>
            Within the past year, I&apos;ve picked up tennis as a hobby.
            I&apos;ll play semi-often and sometimes take lessons. I also watch
            the major tournaments and usually go to the US Open every year.
          </li>
          <li>
            In general, I enjoy stuff that is educational. I like going to
            museums and historical sites. I also like to read up on topics that
            spark my interest. Recently, I&apos;ve been reading about film
            editing.
          </li>
        </ul>
      </main>
      <Footer />
    </>
  )
}
