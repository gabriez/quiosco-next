import Image from "next/image"
import { formatMoney } from "../lib/helper";
const Product = ({product}) => {
    const {nombre, precio, imagen} = product;
  return (
    <div className="border p-3">
      <Image 
        src={`/assets/img/${imagen}.jpg`}
        width={400}
        height={500}
        alt={`imagen de ${nombre}`}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">
            {nombre}
        </h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
            {formatMoney(precio)}
        </p>
      </div>
    </div>
  )
}

export default Product
