import type { Config } from "drizzle-kit";

export default {
  dbCredentials: {
    url: "./local.db",
  },
  driver: "turso",
  schema: "./src/drizzle/schema.ts",
  out: "./migrations",
} satisfies Config;
