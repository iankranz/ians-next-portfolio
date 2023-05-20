import Link from "next/link";
import Image from "next/image";
import styles from "@/components/Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://www.facebook.com/ian.kranz.18" target="_blank">
        <Image
          alt="Facebook icon"
          className={styles.socialIcon}
          src="/facebook.png"
          width={32}
          height={32}
        />
      </Link>
      <Link href="https://twitter.com/iankranz" target="_blank">
        <Image
          alt="Twitter icon"
          className={styles.socialIcon}
          src="/twitter.png"
          width={32}
          height={32}
        />
      </Link>
      <Link
        href="https://www.youtube.com/channel/UC6ayskxfC1S2N4sDa5lH2pg"
        target="_blank"
      >
        <Image
          alt="YouTube icon"
          className={styles.socialIcon}
          src="/youtube.png"
          width={32}
          height={32}
        />
      </Link>
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
  );
}
