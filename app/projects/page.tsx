import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>My Projects</h1>
        <section id="feature-card">
          <a href="https://piggyarns.com/funnymaker" target="_blank">
            <Image
              alt="A hand-drawn graphic of a cartoon pig"
              src="/arns.jpg"
              width={600}
              height={600}
            />
          </a>
          <a href="https://piggyarns.com/funnymaker" target="_blank">
            <h2>Joke Generator</h2>
          </a>
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
