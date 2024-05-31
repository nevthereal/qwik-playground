import { component$ } from "@builder.io/qwik";

interface Todo {
  completed: boolean;
  content: string;
}

export default component$<Todo>(({ content }) => {
  return (
    <div class="flex items-center justify-between rounded-2xl border border-slate-300 bg-slate-200 p-4">
      <p>{content}</p>
      <div class="flex gap-2">
        <button class="rounded-2xl bg-green-300 p-2 font-bold">Complete</button>
        <button class="rounded-2xl bg-red-300 p-2 font-bold">Delete</button>
      </div>
    </div>
  );
});
