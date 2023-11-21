'use server'
import Joi from "joi"
import axios from "axios";
import { revalidatePath } from 'next/cache'
import {headers} from 'next/headers'

const schema = Joi.object({
    nombre: Joi.string().min(3).max(30).required(),
    pedido: Joi.array().required(),
    total: Joi.number().required()
})


export async function createTodo(prevState, formData ) {
   
    const headersList = headers();

    const { error, value } = await schema.validate({ nombre: formData.get('nombre'), pedido: JSON.parse(formData.get('pedido')), total: formData.get('total') });
    if (error) {
        return {
            type: 400,
            message: 'El nombre no puede estar vacío'
        }
    }
    try {
        let objectSend = {
            ...value, fecha: Date.now().toString()
        }
        await axios.post(`${headersList.get('x-forwarded-proto')}://${headersList.get('host')}/api/pedidos`, objectSend);
         revalidatePath('/')
        return {
            type: 201, 
            message: 'Se guardó su pedido'
        }
    } catch (error) {
        console.error(error);
        return {
            type: 408,
            message: error
        }
    }
    

}