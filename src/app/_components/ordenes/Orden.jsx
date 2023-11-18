import Image from "next/image";
import { formatMoney } from "@/app/lib/helper";
import axios from "axios";
import { toast } from "react-toastify";

const Orden = ({order}) => {
    const {id, nombre, fecha, total, pedido} = order;

    const completeOrder = async () => {
        try {
            await axios.patch(`/api/pedidos/${id}`)
            toast.success('Se actualizó el estado de la orden exitosamente')
        } catch (error) {
            toast.error('Ha ocurrido un error al finalizar la orden');
            console.error(error)
        }
    }
  return (
    <div className="p-10 mb-2 space-y-5 border">
        <h3 className="text-2xl font-black"> Orden: {id} </h3>
        <p className="text-2xl font-black">
            Cliente: {nombre}
        </p>
        <div>
            {pedido.map(platillo => (
                <div key={platillo.id} className="py-3 flex border-b last-of-type:border-0 items-center">
                    <div className="w-32">
                        <Image
                            src={`/assets/img/${platillo.imagen}.jpg`}
                            width={400}
                            height={500}
                            alt={`Imagen Platino ${platillo.nombre}`}
                        />
                    </div>
                    <div className="p-5 space-y-2">
                        <h4 className="text-xl font-bold text-amber-500">{platillo.nombre}</h4>
                        <p className="text-lg font-bold">Cantidad: {platillo.quantity}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="md:flex md:items-center md:justify-between my-10">
                <p className="mt-5 font-black text-4xl text-amber-500">
                    Total a pagar: {formatMoney(total)}
                </p>
                <button className="bg-indigo-600 font-bold rounded hover:bg-indigo-800 text-white mt-5 md:mt-0
                py-3 px-10 uppercase"
                type="button"
                onClick={completeOrder}>
                    Completar orden
                </button>
        </div>
    </div>
  )
}

export default Orden
