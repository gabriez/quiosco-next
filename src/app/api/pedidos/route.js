import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    let orders
    
    try {
        orders = await prisma.orden.findMany({
            where: {
               estado: false
            }
        });

        return new Response(JSON.stringify(orders), {
            status: 200,
            statusText: 'Se procesó la solicitud exitosamente'
        })
    } catch (error) {
        console.error('¿Cuál es el error?', error)
        return new Response(error)
    }
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
