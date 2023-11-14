import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {

    const {searchParams} = new URL(request.url)
  
    const id = Number(searchParams.get('id'));

    const dataProducts = await prisma.producto.findMany({
        where: {
            categoriaId: id
        }
    });

    return new Response (JSON.stringify(dataProducts));
}