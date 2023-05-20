import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>About Ian</h1>
        <p>
          I&apos;m Ian, and I build stuff. By trade, I&apos;m a software
          engineer, but creating is a hobby to me as well as a career. I write
          code because software can have an incredible impact on people&apos;s
          lives, so I&apos;m constantly coding up new ideas that I think could
          provide value.
        </p>

        <p>
          You&apos;ll notice that I start lots of projects, and they&apos;re not
          all code related. A lot of my current projects are
          programming-adjacent. For example, I started a podcast called&nbsp;
          <a
            href="https://www.youtube.com/channel/UCxT9KWCmrCJYW_OHKATmp9A"
            target="_blank"
          >
            Greenpoint Dev
          </a>
          &nbsp;where I and co-host&nbsp;
          <a href="https://nikhildhawan.com/" target="_blank">
            Nikhil Dhawan
          </a>
          &nbsp;discuss a variety of topics in software engineering. I&apos;ve
          also been at work writing for&nbsp;
          <a href="https://lgtm.beehiiv.com/" target="_blank">
            a newsletter called LGTM
          </a>
          &nbsp;that delivers weekly tech news but not the boring kind.
        </p>

        <p>
          I love to share the things I create because I want my work to have a
          positive impact on others. What&apos;s the point of building something
          great that nobody uses? That&apos;s why I like to keep current online.
          Starting conversations and contributing to communities is a great way
          to get feedback on my projects and establish a platform where I can
          reach more people.
        </p>

        <p>
          Feedback and meaningful conversation are important to my process of
          creating things that people will enjoy. That&apos;s why I love
          chatting with people who share my interests, so don&apos;t be afraid
          to reach out if you&apos;d like to hear more about what I&apos;m
          working on.
        </p>

        <p>
          You can learn more about the site by looking through the code in&nbsp;
          <a
            href="https://github.com/iankranz/ians-next-portfolio"
            target="_blank"
          >
            my portfolio GitHub repository
          </a>
          . If you want to stay in touch, I write a&nbsp;
          <a href="https://iankranz.substack.com/" target="_blank">
            monthly newsletter
          </a>
          &nbsp;that gives updates on what I&apos;ve been up to. Subscribe for a
          quick and interesting read every month. Anyways, I hope you enjoy my
          site!
        </p>
      </main>
      <Footer />
    </>
  );
}
