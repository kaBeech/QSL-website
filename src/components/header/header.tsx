import { component$ } from "@builder.io/qwik";
import ImgQslLogo from "~/media/QSL_logo.webp?jsx";

import styles from "./header.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <ImgQslLogo />
          </a>
        </div>
        <Link href="contact">Contact</Link>
      </div>
    </header>
  );
});
