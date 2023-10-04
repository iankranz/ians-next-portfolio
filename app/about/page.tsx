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
          Ian Kranz is a full stack Software Engineer based in Brooklyn, NY. He
          studied Electrical and Computer Engineering at Cornell Univestity. He
          now specializes in front-end web technologies.
        </p>

        <h2>About my career:</h2>
        <ul>
          <li>
            I like to build websites, everything from blogs to sites with fancy
            3D rendering. Getting into software development was a great decision
            for me.
          </li>
          <li>
            The main reason I like developing for the web is because software
            can do a lot of cool stuff like make your life easier, entertain
            you, and connect you with new people.
          </li>
          <li>
            I like to take on new projects, especially when they involve
            collaboration. Working with others is great for learning new things.
          </li>
          <li>
            I&apos;m naturally a hard worker. When I put my mind to something, I
            get it done. It&apos;s one of my biggest strengths.
          </li>
          <li>
            As a generalist on most projects, I get to work with all parts of
            the web: client-side code in the browser, servers, databases. I
            really enjoy learning about all these different areas and seeing web
            applications as a whole.
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
            game, or video game. A couple of games I like are: Finding Friends
            (Zhao Pengyou, a Chinese card game), Risk, Dungeons and Dragons, and
            League of Legends.
          </li>
          <li>
            Within the past year, I&apos;ve picked up tennis as a hobby.
            I&apos;ll play semi-often and sometimes take lessons. I also watch
            the major tournaments and usually go to the US Open every year.
          </li>
          <li>
            In general, I enjoy stuff that is educational. I like going to
            museums and historical sites. I also like to read up on topics that
            seem interesting and useful. Recently, I&apos;ve been reading about
            business and statistics.
          </li>
          <li>
            I&apos;m also starting to get into content creation. I&apos;ve been
            working on videos and uploading them to my YouTube channel.
          </li>
        </ul>
      </main>
      <Footer />
    </>
  )
}
