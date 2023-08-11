import Header from "@/components/Header"
import Footer from "@/components/Footer"
import styles from "./page.module.css"

export default function Funnymaker() {
  return (
    <>
      <Header />
      <main className={styles.funnymaker}>
        <h1>The funnymaker</h1>
        <h2>A full-stack web application for generating funny sentences</h2>
        <a href="https://piggyarns.com/funnymaker" className={styles.trylink}>
          Try out the funnymaker! &rarr;
        </a>
        <h3>Introduction</h3>
        <p>
          The funnymaker is one of the first full-stack web applications I
          built. I was doing some tutorials to learn more about full-stack web
          development and the{" "}
          <a href="https://www.djangoproject.com/">Django web framework</a>, and
          I decided I wanted to get some experience working on my own project
          rather than relying on tutorials alone for education. I came up with
          the premise after reading about the game{" "}
          <a href="https://en.wikipedia.org/wiki/Cards_Against_Humanity">
            Cards Against Humanity
          </a>
          .
        </p>
        <p>
          Similar to the game, the funnymaker has a set of prompts, sentences
          that are missing a noun component, and a set of fillers, noun-like
          phrases that can fill the blank in the prompt. The application
          pseudo-randomly selects a prompt and a filler and combines them to
          yield a finished sentence or saying. The idea is that with the right
          prompts you can sometimes arrive at an entertaining outlandish or
          non-sequitur type saying.
        </p>
        <p>
          As an additional feature, I came up with a way of rating the funny
          sayings. It’s a simple thumbs up or thumbs down rating system that is
          recorded in the database. The idea is that I can see which funny
          sayings people actually like and which they don’t and use that
          feedback to curate the lists of prompts and fillers.
        </p>
        <h3>Implementation</h3>
        <h4>Data</h4>
        <p>
          Starting with the data, the application stores its data in a Postgres
          database. The database is hosted on{" "}
          <a href="https://railway.app/">Railway</a> because the service was
          recommended by{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Deployment">
            a Django MDN article
          </a>{" "}
          I read and I found their interface pretty intuitive to use for my
          purposes. Unfortunately, Railway deprecated their free tier, but the
          service is still pretty affordable.
        </p>
        <p>
          In Django, the database schema is easily defined using Django’s
          built-in Object Relational Mapping (ORM) to define models for the
          application. I set up a table for the prompts called “Setups”,
          essentially just a string value, and the fillers that go into the
          prompts called “FunnyThings”
        </p>
        <p>
          To support the feedback feature, I also created a table called
          “Feedbacks” in which each record represents a unit of feedback. A
          feedback record holds standard fields like the date/time that the
          feedback was submitted as well as the rating (positive or negative)
          and foreign keys corresponding to the Setup and the FunnyThing used to
          create the saying that was displayed to the user.
        </p>
        <p>
          I had to populate the database with things that could possibly create
          a funny saying, so I did some Google searching for things like “viral
          funny tweets”, “best one-liner jokes”, “best anti-jokes”, etc. and
          pulled out some nouns and sentence templates with some modifications
          and used them as the starting set of Setups and FunnyThings for the
          database. Adding and removing from the database is easy as well
          because Django provides an out of the box admin interface with
          built-in authentication, so I can easily log in and make changes to
          any of the records in the database if needed.
        </p>
        <h4>Server-side Django API</h4>
        <p>
          As mentioned above, the database models were defined in the Django
          application. Because Django uses a classic Model View Controller
          architecture, it is easy to build endpoints that fetch relevant data,
          all using Python.
        </p>
        <p>
          The funnymaker API has three routes: one for serving a random
          FunnyThing, one for serving a random Setup, and one for creating a
          Feedback record in response to a user thumbs up / thumbs down rating.
        </p>
        <p>
          Initially, the application was to ask people for their name before
          returning a funny saying. The idea behind this was to have a weak
          concept of a session so that the app could avoid serving the same
          FunnyThing multiple times in a row. This was later eliminated because
          the name entry step was causing too much friction in the user
          experience. However, the API was built to use the name as well as the
          current time to calculate a seed number which would be used as an
          index to the database. Both the funny thing and setup endpoints take
          GET requests with a body containing the name that the user enters
          before performing the mock-random calculation.
        </p>
        <p>
          The calculation simply sums the character values of each character in
          the string formed by appending the user’s inputted name with the
          current timestamp string and does a modulus with the number of
          FunnyThings or Setups in the database. Then it uses the result to look
          up a FunnyThing or Setup and returns that to the client. Both the
          funny thing and setup endpoints function this way. The only difference
          is they start with a different initial value on the index.
        </p>
        <p>
          The feedback endpoint accepts a POST request containing the name
          entered by the user, the id of the setup used, the id of the funny
          thing used, the final text shown to the user as a string, and the type
          of the feedback, positive or negative. This endpoint simply creates a
          feedback record and saves it to the database before returning the
          success to the client.
        </p>
        <h4>Client-side Vue Application</h4>
        <p>
          The client-side application is a Single Page Application built with
          the <a href="https://vuejs.org/">Vue.js</a> framework. It’s a mobile
          first web application with a fast and responsive UI. I used Vue for
          this project because it was the framework I had worked with the most
          and I really liked their reactivity model that lets you hook into your
          HTML with ease as well as the ergonomics of working with Single File
          Components (SFCs).
        </p>
        <p>
          In order to develop the User Interface quickly, I made use of{" "}
          <a href="https://tailwindcss.com/">Tailwind CSS</a>, a popular
          utility-class library that can significantly speed the styling
          process. It also works quite well with Vue components.
        </p>
        <p>
          To improve my development experience, I also opted to use{" "}
          <a href="https://www.typescriptlang.org/">TypeScript</a>. In my
          experience, TypeScript shines in application development when working
          with external APIs. Being able to type your data and code with
          confidence that the TS compiler will catch minor slip-ups is a huge
          benefit when you’re trying to make progress and not spend time
          debugging.
        </p>
        <p>
          The application has three routes: a home page, an about page, and the
          funnymaker application. The first two routes are mostly static, just
          serving as a landing page and a funny introduction to the app
          respectively. When you click into the application, you’re greeted by a
          sarcastic pig called Arns. I decided to create a mascot who would tell
          you the randomly generated funny saying in order to give the app a
          little bit of personality.
        </p>
        <p>
          In the previous state of the app, a form would prompt you to enter
          your name. To reduce friction that step was removed and instead you
          see Arns and a button to get started.
        </p>
        <p>
          When you click the start button, the application makes two GET
          requests to the Django API, one to get a random prompt and one to get
          a random filler. One improvement here is that there really only needs
          to be one request. We could refactor the API to have only one endpoint
          that just returns both randomly generated parts in one response.
        </p>
        <p>
          Once the Vue app receives the data from the backend, it looks for the
          “*” character in the prompt, as this is the indicator for where to
          fill in the blank with the filler. The client inserts the funny thing
          in place of the * and displays it to the screen in a chat bubble so
          that it looks like Arns is saying it.
        </p>
        <p>
          Below Arns telling you the funny result, there are a couple of options
          for the user. First is the feedback panel where the user can click a
          thumbs up button or a thumbs down button. Either action will trigger a
          POST request to the API to record the feedback. The app shows a
          loading state and once a successful response is received it displays a
          message to indicate that the feedback was recorded successfully.
        </p>
        <p>
          The next option is a share menu. Some feedback that I got after I
          shared the project was that users wanted a way to copy and share the
          funny things that Arns the pig said. I added this button that opens
          the native share menu for your device, the idea being that this will
          be most often used and quite familiar to mobile users.
        </p>
        <p>
          The last two CTAs are for proceeding in the app. The primary CTA will
          make another two API requests and generate a new funny thing for Arns
          to say. The other is for navigation, and it will take you back to the
          starting page for the app.
        </p>
        <h3>Conclusion</h3>
        <p>
          It was a great learning experience being able to develop and deploy a
          full-stack web application. Though this project is mostly a toy
          example built for fun, a lot of businesses use similar architectures,
          and with this architecture you could integrate new features with ease.
        </p>
        <p>
          Something cool I was able to work up as an additional feature is an
          Arns Discord bot. Similar to the site, you can get Arns to say funny
          things. Except, instead of visiting the piggyarns site, you can just
          type “/funny” into a discord channel and Arns will send you a message
          back with the funny thing. This bot consumes the same API as the Vue
          app, so it takes advantage of the same set of Setups and Funny Things.
        </p>
        <p>
          I have not yet put together a report for the results of the feedback
          data. More to come on this in a future update to this article. I look
          forward to sharing more soon!
        </p>
      </main>
      <Footer />
    </>
  )
}
