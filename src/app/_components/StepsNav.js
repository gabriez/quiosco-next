import Link from "next/link"
import useQuiosco from "../context/QuioscoProvider"
import { useSearchParams } from "next/navigation"
const pasos = [
    {name: 'Menu', url: '/?name=Café&id=1&step=0'},
    {name: 'Resumen', url: '/resumen?step=1'},
    {name: 'Total', url: '/total?step=2'}
]

const StepsNav = () => {
  const params = useSearchParams();
  const step = Number(params.get('step'));
  return (
    <>
      <div className="flex justify-between mt-5">
        {pasos.map(item => (
          <Link className="text-2xl font-bold" key={item.name} href={item.url} >
              {item.name}
          </Link>
        ))
        }
      </div>
      <div className="bg-gray-100 mb-10">
        <div className={`rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white`}
          style={{width: `${step === 0 ? 2 : step * 50}%`}}
        >
        </div>
      </div>
    </>
  )
}

export default StepsNav
