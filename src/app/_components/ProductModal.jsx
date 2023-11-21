import useQuiosco from "../context/QuioscoProvider"
import Image from "next/image"
import { formatMoney } from "../lib/helper"
import { useEffect, useState } from "react"

const ProductModal = () => {
    const {product, handleProductModal, handleCreatePedido, pedidos} = useQuiosco()
    const {nombre, precio, imagen} = product;
    const [quantity, setQuantity] = useState(1);
    const [edition, setEdition] = useState(false);

    useEffect(() => {
        if (pedidos.some(pedido => pedido.id === product.id)){
            setQuantity(pedidos.find(pedido => pedido.id === product.id).quantity)
            setEdition(true);
        }
    }, [product, pedidos])
  return (
    <div className="md:flex gap-10">
        <div className="flex md:hidden justify-end">
                <button onClick={handleProductModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        <div className="md:w-1/3">
            <Image 
            className="m-auto block"
                width={300}
                height={400}
                alt={`imagen producto ${nombre}`}
                src={`/assets/img/${imagen}.jpg`}
            />
        </div>
        <div className="md:w-2/3">
            <div className="hidden md:flex justify-end">
                <button onClick={handleProductModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <h1 className="text-3xl font-bold mt-5">
                {nombre}
            </h1>
            <p className="mt-5 font-black text-5xl text-amber-500">
                {formatMoney(precio)}
            </p>
            <div className="flex justify-between md:block"> 
                <div className="flex gap-4 mt-5">
                    <button
                        type="button"
                        onClick={() => {
                            if (quantity <= 1) return; 
                            setQuantity(prevState => prevState - 1);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <p className="text-3xl">
                        {quantity}
                    </p>
                    <button
                        type="button"
                        onClick={() => {
                            if (quantity >= 5) return; 
                            setQuantity(prevState => prevState + 1);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
                <button 
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 rounded text-white uppercase font-bold"
                    onClick={()=> {
                        handleCreatePedido({...product, quantity})
                    }}
                >
                    { edition ? "Guardar el nuevo pedido" : "Agregar el pedido"}
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductModal
