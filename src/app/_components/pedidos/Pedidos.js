'use client';
import useQuiosco from "@/app/context/QuioscoProvider"
import ResumenProduct from "./ResumenProduct";

const Pedidos = () => {
    const {pedidos} = useQuiosco();

    return (
        <>
            {pedidos.length === 0 ? 
                (
                    <p className="text-center text-2xl">No hay elementos en tu pedido</p>
                ) 
                    : 
                pedidos.map( product => (
                    <ResumenProduct key={product.id} product={product} />
                ))
            }
        </>
    )
}

export default Pedidos
