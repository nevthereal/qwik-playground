import { component$ } from "@builder.io/qwik";
import Todo, { type TodoInterface } from "~/components/Todo";

const todos: TodoInterface[] = [
  {
    completed: false,
    content: "Do the dishes",
  },
  {
    completed: false,
    content: "Learn Qwik",
  },
  {
    completed: true,
    content: "Make some noise",
  },
];

export default component$(() => {
  return (
    <>
      <h1 class="mb-4 text-3xl font-bold">Todo App</h1>
      <div class="mx-auto flex w-[50vw] flex-col gap-4">
        {todos.map(({ content, completed }) => {
          return <Todo key={content} content={content} completed={completed} />;
        })}
      </div>
    </>
  );
});
