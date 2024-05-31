import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { desc } from "drizzle-orm";
import Todo from "~/components/Todo";
import { db } from "~/drizzle/db";
import { todos } from "~/drizzle/schema";

export const useTodos = routeLoader$(async () => {
  const qtodos = await db.query.todos.findMany({ orderBy: desc(todos.id) });

  return qtodos;
});

export default component$(() => {
  const signal = useTodos();

  return (
    <>
      <h1 class="mb-4 text-3xl font-bold">Todo App</h1>
      <div class="mx-auto flex w-[50vw] flex-col gap-4">
        {signal.value.map(({ content, completed, id }) => {
          return (
            <Todo key={id} id={id} content={content} completed={completed} />
          );
        })}
      </div>
    </>
  );
});
