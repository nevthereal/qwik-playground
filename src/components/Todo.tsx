import { component$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { eq } from "drizzle-orm";
import { db } from "~/drizzle/db";
import { todos } from "~/drizzle/schema";

export interface TodoInterface {
  completed: boolean;
  content: string;
  id: number;
}

export const updateTodo = server$(async function (id: number, state: boolean) {
  await db
    .update(todos)
    .set({
      completed: !state,
    })
    .where(eq(todos.id, id));
});

export const deleteTodo = server$(async function (id: number) {
  await db.delete(todos).where(eq(todos.id, id));
});

export default component$<TodoInterface>(({ content, completed, id }) => {
  return (
    <div class="flex items-center justify-between rounded-2xl border border-slate-300 bg-slate-200 p-4">
      <p>{content}</p>
      <div class="flex gap-2">
        <button
          onClick$={() => updateTodo(id, completed)}
          class="rounded-2xl bg-green-300 p-2 font-bold"
        >
          {!completed ? "Complete" : "Uncomplete"}
        </button>
        <button
          onClick$={() => deleteTodo(id)}
          class="rounded-2xl bg-red-300 p-2 font-bold"
        >
          Delete
        </button>
      </div>
    </div>
  );
});
