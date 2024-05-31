import { component$, useSignal } from "@builder.io/qwik";

export interface TodoInterface {
  completed: boolean;
  content: string;
}

export default component$<TodoInterface>(({ content, completed }) => {
  const compStore = useSignal(completed);

  return (
    <div class="flex items-center justify-between rounded-2xl border border-slate-300 bg-slate-200 p-4">
      <p>{content}</p>
      <div class="flex gap-2">
        <button
          onClick$={() => (compStore.value = !compStore.value)}
          class="rounded-2xl bg-green-300 p-2 font-bold"
        >
          {!compStore.value ? "Complete" : "Uncomplete"}
        </button>
        <button class="rounded-2xl bg-red-300 p-2 font-bold">Delete</button>
      </div>
    </div>
  );
});
