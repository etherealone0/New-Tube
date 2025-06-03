import { drizzle } from "drizzle-orm/neon-http";

export const dp = drizzle(process.env.DATABASE_URL!);