import type { Config } from "drizzle-kit";

export default {
  dbCredentials: {
    url: "file:local.db",
  },
  driver: "turso",
  schema: "./src/drizzle/schema.ts",
  out: "./migrations",
  dialect: "sqlite",
} satisfies Config;
