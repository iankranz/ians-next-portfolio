import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>Featured activity</h1>
        <section id="feature-card">
          <Link href="https://iankranz.substack.com/" target="_blank">
            <Image
              alt="A portrait of Ian holding a toddler"
              src="/cover.jpg"
              width={600}
              height={600}
            />
          </Link>
          <Link
            href="https://iankranz.substack.com/p/fun-for-the-whole-family"
            target="_blank"
          >
            <h2>Ian&apos;s Newsletter April Edition is live!</h2>
          </Link>
          <p>
            Head over to my substack where I ship my monthly newsletter.
            It&apos;s full of fun pictures and tid bits of what I&apos;ve been
            up to.
          </p>
        </section>
        <section id="feature-card">
          <Link href="https://www.youtube.com/@greenpoint_dev" target="_blank">
            <Image
              alt="Arns the pig saying you had me at toe fungus"
              src="/pig.jpg"
              width={600}
              height={600}
            />
          </Link>
          <Link href="https://piggyarns.com/funnymaker" target="_blank">
            <h2>This pig will tell you jokes</h2>
          </Link>
          <p>
            This little web application I made generated inappropriate jokes.
            Think Cards Against Humanity but with a pig.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
