import Link from "next/link"
import Image from "next/image"
import styles from "@/components/Footer.module.css"
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://www.instagram.com/iankranz/" target="_blank">
        <Image
          alt="Instagram icon"
          className={styles.socialIcon}
          src="/instagram.png"
          width={32}
          height={32}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/iankranz/" target="_blank">
        <Image
          alt="LinkedIn icon"
          className={styles.socialIcon}
          src="/linkedin.png"
          width={32}
          height={32}
        />
      </Link>
      <Link href="https://github.com/iankranz" target="_blank">
        <Image
          alt="Github logo"
          className={styles.socialIcon}
          src="/github.svg"
          width={32}
          height={32}
        />
      </Link>
    </footer>
  )
}
