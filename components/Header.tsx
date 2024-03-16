import Image from "next/image"
import Link from "next/link"
import NavOption from "./NavOption"
import styles from "@/components/Header.module.css"
export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <Image
            alt="I icon"
            className={styles.logo}
            src="/ian-logo.png"
            width={300}
            height={300}
          />
        </Link>
        <div>
          <div className={styles.myName}>Ian Kranz</div>
          <div className={styles.swe}>Software Engineer</div>
        </div>
      </div>
      <nav className={styles.navOptionList}>
        <NavOption path="/">Home</NavOption>
        <NavOption path="/about">About</NavOption>
        <NavOption path="/projects">Projects</NavOption>
      </nav>
    </header>
  )
}
