import Image from "next/image"
import Link from "next/link"
import NavOption from "./NavOption"
import styles from "@/components/Header.module.css"
export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          alt="I icon"
          className={styles.logo}
          src="/ian-logo.png"
          width={300}
          height={300}
        />
      </Link>
      <span className={styles.myName}>Ian Kranz</span>
      <span>Software Engineer</span>
      <nav className={styles.navOptionList}>
        <NavOption path="/">Home</NavOption>
        <NavOption path="/about">About</NavOption>
        <NavOption path="/projects">Projects</NavOption>
        <NavOption path="/resume.pdf" target="_blank">
          R&eacute;sum&eacute;
        </NavOption>
      </nav>
    </header>
  )
}
