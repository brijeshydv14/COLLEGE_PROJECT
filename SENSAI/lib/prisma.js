/*let db;

if (!globalThis.prisma) {
  // Lazy-load PrismaClient at runtime
  const { PrismaClient } = await import("@prisma/client");
  db = new PrismaClient();

  if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = db;
  }
} else {
  db = globalThis.prisma;
}

export { db };
*/
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

export const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["error", "warn"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

export default db;
