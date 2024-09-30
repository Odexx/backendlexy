import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'], // Para ver las queries en la consola (opcional)
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;