import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex column alignCenter justifyCenter height100">
      <img
        width={420}
        height={420}
        src="QSL-symbol.webp"
        alt="The QSL symbol"
      />
      <a
        target="_blank"
        rel="noopener noreferrer"
        class="link button"
        href="mailto:contact@qsl.art"
      >
        <h4 class="margin2">contact@qsl.art</h4>
      </a>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to QSL's Website",
  meta: [
    {
      name: "description",
      content: "QSL's website",
    },
  ],
};
