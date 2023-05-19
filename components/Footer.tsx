import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
export default function Footer() {
  return (
    <footer>
      <Link href="https://www.facebook.com/ian.kranz.18" target="_blank">
        <Image
          alt="Facebook icon"
          className="social-icon"
          src="/facebook.png"
          width={200}
          height={200}
        />
      </Link>
      <Link href="https://twitter.com/iankranz" target="_blank">
        <Image
          alt="Twitter icon"
          className="social-icon"
          src="/twitter.png"
          width={200}
          height={200}
        />
      </Link>
      <Link
        href="https://www.youtube.com/channel/UC6ayskxfC1S2N4sDa5lH2pg"
        target="_blank"
      >
        <Image
          alt="YouTube icon"
          className="social-icon"
          src="/youtube.png"
          width={200}
          height={200}
        />
      </Link>
      <Link href="https://www.instagram.com/iankranz/" target="_blank">
        <Image
          alt="Instagram icon"
          className="social-icon"
          src="/instagram.png"
          width={200}
          height={200}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/iankranz/" target="_blank">
        <Image
          alt="LinkedIn icon"
          className="social-icon"
          src="/linkedin.png"
          width={200}
          height={200}
        />
      </Link>
    </footer>
  );
}
