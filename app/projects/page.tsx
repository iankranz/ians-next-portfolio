import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>My Projects</h1>
        <section id="feature-card">
          <a href="/projects/dewdayte">
            <Image
              alt="A phone with dewdayte pulled up"
              src="/dewdayte.png"
              width={600}
              height={600}
            />
          </a>
          <a href="/projects/dewdayte">
            <h2>dewdayte</h2>
          </a>
          <p>
            Built with React using Next.js, dewdayte is a web app for tracking
            your tasks. Not only is it an awesome example of a full-stack
            application, it&apos;s a great way to stay organized and get things
            done.
          </p>
        </section>
        <section id="feature-card">
          <Link href="https://startupnichefactor.com/">
            <Image
              alt="A screenshot of a website"
              src="/nichefactor.png"
              width={600}
              height={600}
            />
          </Link>
          <Link href="https://startupnichefactor.com/">
            <h2>Startup Niche Factor</h2>
          </Link>
          <p>
            A website for rating startups. The application is driven by a
            Postgres database and Django backend. The front-end was created with
            React.
          </p>
        </section>
        <section id="feature-card">
          <Link href="/projects/funnymaker">
            <Image
              alt="A hand-drawn graphic of a cartoon pig"
              src="/arns.jpg"
              width={600}
              height={600}
            />
          </Link>
          <Link href="/projects/funnymaker">
            <h2>The funnymaker</h2>
          </Link>
          <p>
            This web app takes your name as input and fetches a unique funny
            sentence for you. Front end app created with Vue.js and backend
            using Django and a PostgreSQL database.
          </p>
        </section>
        <section id="feature-card">
          <a href="https://sudoku.iankranz.com/" target="_blank">
            <Image
              alt="A filled Sudoku board"
              src="/sudoku.jpg"
              width={600}
              height={600}
            />
          </a>
          <a href="https://sudoku.iankranz.com/" target="_blank">
            <h2>Sudoku Checker</h2>
          </a>
          <p>
            A simple web page that allows the user to enter a sudoku solution
            and will check the validity of the solution. Build using plain HTML,
            CSS, and JavaScript.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
