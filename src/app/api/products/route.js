import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {

    const {searchParams} = new URL(request.url)
  
    const id = Number(searchParams.get('id'));
    let dataProducts
    try {
        dataProducts = await prisma.producto.findMany({
            where: {
                categoriaId: id
            }
        });

        return Response.json(dataProducts);
    } catch (error) {
        console.error('¿Cuál es el error?', error)
        return new Response('Error')
    }
}