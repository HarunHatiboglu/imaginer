import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/Harhat18" target="_blank">
        <BsGithub />
      </Link>
      <Link href="https://www.linkedin.com/in/harun-hatib/" target="_blank">
        <BsLinkedin />
      </Link>
      <p>
        Made by <b>Harun Hatiboglu</b>
        <br />
        and, built with <b>Next.js</b>
      </p>
    </footer>
  );
}

export { Footer };
