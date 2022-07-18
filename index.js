import { PrismaClient } from "@prisma/client";
import { env } from "node-blox-sdk";

env.init();

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});

// async function main() {}

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

export default { prisma };
