import { component$ } from "@builder.io/qwik";
import Todo from "~/components/Todo";

export default component$(() => {
  return (
    <>
      <h1 class="mb-4 text-3xl font-bold">Todo App</h1>
      <div class="mx-auto flex w-[50vw] flex-col gap-4">
        <Todo content="Do the dishes" completed={false} />
        <Todo content="Do the dishes" completed={false} />
        <Todo content="Do the dishes" completed={false} />
      </div>
    </>
  );
});
