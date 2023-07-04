import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>QSL</h1>
    </>
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
