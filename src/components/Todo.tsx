import { component$ } from "@builder.io/qwik";

export interface TodoInterface {
  completed: boolean;
  content: string;
  id: number;
}

export default component$<TodoInterface>(({ content, completed, id }) => {
  return (
    <div class="flex items-center justify-between rounded-2xl border border-slate-300 bg-slate-200 p-4">
      <p>{content}</p>
      <div class="flex gap-2">
        <button
          onClick$={() => console.log(completed)}
          class="rounded-2xl bg-green-300 p-2 font-bold"
        >
          {!completed ? "Complete" : "Uncomplete"}
        </button>
        <button class="rounded-2xl bg-red-300 p-2 font-bold">Delete</button>
      </div>
    </div>
  );
});
