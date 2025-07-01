import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const connect = async () => {
  try {
    await prisma.$connect();
    console.log('✅ Postgres (Prisma) connected');
  } catch (err) {
    console.error('❌ Postgres connection failed', err);
    process.exit(1);
  }
};
