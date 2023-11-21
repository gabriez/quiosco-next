import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PATCH (req, {params}) {
    const id = params.pedido;
    let data 
    try {
        data = await prisma.orden.update({
            where: {
                id: parseInt(id)
            },
            data: { 
                estado: true
            }
        })

        return new Response({
            status: 200,
            statusText: 'Se actualizó el estado exitosamente'
        }) 
    } catch (error) {
        return new Response(
            {
                status: 400,
                statusText: error
            }
        )
    }
}