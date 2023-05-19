import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          alt="I icon"
          className="logo"
          src="/ian-logo.png"
          width={300}
          height={300}
        />
      </Link>
      <span className="my-name">Ian Kranz</span>
      <span>Software Engineer</span>
      <nav className="nav-option-list">
        <Link href="/" className="nav-option">
          Home
        </Link>
        <Link href="/about" className="nav-option">
          About
        </Link>
        <Link href="/projects" className="nav-option">
          Projects
        </Link>
        <Link
          href="https://iankranz.substack.com/"
          target="_blank"
          className="nav-option"
        >
          Newsletter
        </Link>
        <Link href="/resume.pdf" target="_blank" className="nav-option">
          R&eacute;sum&eacute;
        </Link>
      </nav>
    </header>
  );
}
