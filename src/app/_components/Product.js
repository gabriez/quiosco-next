"use client";
import useQuiosco from "../context/QuioscoProvider";
import Image from "next/image"
import { formatMoney } from "../lib/helper";
const Product = ({product}) => {
    const {handleProductModal} = useQuiosco();
    const {nombre, precio, imagen} = product;
  return (
    <div className="border p-3 flex flex-col justify-between">
      <div> 
        <Image 
          src={`/assets/img/${imagen}.jpg`}
          width={400}
          height={500}
          alt={`imagen de ${nombre}`}
          className="block m-auto"
        />
        <h3 className="text-2xl font-bold px-5 pt-5">
            {nombre}
        </h3>
      </div>
      <div className="px-5 pb-5 w-full ">
          <p className="mt-5 font-black text-4xl text-amber-500">
              {formatMoney(precio)}
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold" 
          onClick={
              () => {
                handleProductModal(product);
              }
          }>
              Agregar
          </button>
      </div>
    </div>
  )
}

export default Product
