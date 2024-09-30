import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Reutiliza la instancia de Prisma

export async function GET() {
  try {
    // Obtener todos los usuarios de la base de datos
    const users = await prisma.users.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}