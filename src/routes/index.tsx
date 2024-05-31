import { component$ } from "@builder.io/qwik";
import {
  Form,
  routeAction$,
  routeLoader$,
  z,
  zod$,
} from "@builder.io/qwik-city";
import { desc } from "drizzle-orm";
import Todo from "~/components/Todo";
import { db } from "~/drizzle/db";
import { todos } from "~/drizzle/schema";

export const useTodos = routeLoader$(async () => {
  const qtodos = await db.query.todos.findMany({ orderBy: desc(todos.id) });

  return qtodos;
});

export const useAddTodo = routeAction$(
  async (data) => {
    await db.insert(todos).values({
      content: data.todo,
    });
  },
  zod$({
    todo: z.string(),
  }),
);

export default component$(() => {
  const todos = useTodos();
  const addUser = useAddTodo();

  return (
    <>
      <h1 class="mb-4 text-3xl font-bold">Todo App</h1>
      <Form class="my-8 flex justify-center gap-2" action={addUser}>
        <input
          class="rounded-2xl border border-gray-200 p-2"
          name="todo"
          placeholder="Todo"
        />
        <button
          class="rounded-2xl border border-gray-200 bg-sky-300 p-2"
          type="submit"
        >
          Add
        </button>
      </Form>
      <div class="mx-auto flex w-[50vw] flex-col gap-4">
        {todos.value.map(({ content, completed, id }) => {
          return (
            <Todo key={id} id={id} content={content} completed={completed} />
          );
        })}
      </div>
    </>
  );
});
