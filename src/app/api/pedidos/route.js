import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const orders = await prisma.orden.findMany({
        where: {
           estado: false
        }
    });


    return new Response(JSON.stringify(orders), {
        status: 200,
        statusText: 'Se procesó la solicitud exitosamente'
    })
}

export async function POST(req) {
    const {nombre, pedido, total, fecha} = await req.json();
    const newOrder = await prisma.orden.create({
        data: {
            nombre,
            pedido,
            total, 
            fecha
        }
    })

    return new Response('El producto fue creado con éxito');
}
