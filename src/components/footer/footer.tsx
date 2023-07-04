import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer>
      <div class="container">
        <a
          href="https://www.kabeech.com/"
          target="_blank"
          class={styles.anchor}
        >
          <span>Made with ♡ by kaBeech</span>
        </a>
      </div>
    </footer>
  );
});
