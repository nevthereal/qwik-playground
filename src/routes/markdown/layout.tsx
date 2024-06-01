import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div class="prose text-left">
        <a href="/">Back to Home</a>
        <Slot />
      </div>
    </>
  );
});
