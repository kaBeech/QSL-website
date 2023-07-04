import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex column alignCenter justifyCenter height100">
      <img
        width={328}
        height={328}
        src="QSL-symbol.webp"
        alt="The QSL symbol"
      />
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
