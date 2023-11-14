import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const dataCategories = await prisma.categoria.findMany();
    return new Response (JSON.stringify(dataCategories));
}