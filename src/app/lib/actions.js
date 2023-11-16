'use server'
import Joi from "joi"
import axios from "axios";
import { revalidatePath } from 'next/cache'
import { redirect } from "next/navigation";

const schema = Joi.object({
    nombre: Joi.string().min(3).max(30).required(),
    pedido: Joi.array().required(),
    total: Joi.number().required()
})


export async function createTodo(prevState, formData ) {
   
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
         const {data} = await axios.post(`http://localhost:3000/api/pedidos`, objectSend);
         revalidatePath('/')
        return {
            type: 201, 
            message: 'Se guardó su pedido'
        }
    } catch (error) {
        return {
            type: 408,
            message: 'Ha ocurrido un error al guardar los datos'
        }
    }
    

}