import useQuiosco from "@/app/context/QuioscoProvider";
import { useRouter, useSearchParams } from 'next/navigation';
import Image from "next/image";
const Category = ({category}) => {
    const {nombre, icono, id} = category;
    const searchParams = useSearchParams();
    const router = useRouter();
  return (
    <div onClick={() => 
        {
            router.push(`/?name=${nombre}&id=${id}`)
        }} 
    className={`${Number(searchParams.get('id')) === id ? "bg-amber-400" : "" } flex items-center gap-4 border last-of-type:border-b-0 w-full p-5 hover:cursor-pointer hover:bg-amber-400`}
    >
      <Image 
        height={70}
        width={70}
        src={`/assets/img/icono_${icono}.svg`}
        alt={`Icono de ${icono}`}
        className="mr-5"
    />

    <span
        type="button"
        className="text-2xl font-bold "

    >
        {nombre}
    </span>
    </div>
  )
}

export default Category
