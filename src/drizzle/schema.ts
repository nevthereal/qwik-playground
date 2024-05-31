import { sqliteTable, int, text } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todos", {
  id: int("id").primaryKey(),
  completed: int("completed", { mode: "boolean" }).default(false),
  content: text("content").notNull(),
});
